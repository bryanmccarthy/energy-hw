const express = require('express');
const upload = require('express-fileupload');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const app = express();

app.use(cors());
app.use(upload());

app.post('/upload', (req, res) => {
  if(req.files) {
    if(req.files.file.mimetype !== 'application/pdf') {
      return res.status(400).json({ error: 'File must be a PDF' });
    }

    const file = req.files.file;
    const filename = file.name;
    const filepath = path.join('./uploads/', filename);

    file.mv(filepath, async (err) => {
      if(err) {
        res.send(err);
      } else {
        const uploadedPdf = await PDFDocument.load(fs.readFileSync(filepath));

        const coverPageDoc = await PDFDocument.create();
        const coverPage = coverPageDoc.addPage();
        coverPage.drawText('Cover Page!', {
          x: 0,
          y: 0,
          size: 60,
        });

        const mergedPdf = await PDFDocument.create();
        const [coverPageCopy] = await mergedPdf.copyPages(coverPageDoc, [0]);
        mergedPdf.addPage(coverPageCopy);

        const uploadedPdfCopyPages = await mergedPdf.copyPages(uploadedPdf, uploadedPdf.getPageIndices());
        uploadedPdfCopyPages.forEach((page) => mergedPdf.addPage(page));

        fs.writeFileSync(filepath, await mergedPdf.save());
      }
    })
  }
});

app.get('/pdfs', (req, res) => {
  fs.readdir('./uploads/', (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read directory' });
    }

    const fileList = files.filter((file) => {
      const filePath = path.join('./uploads/', file);
      return fs.statSync(filePath).isFile();
    });

    res.json({ files: fileList });
  });
});

app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join('./uploads/', filename);
  res.download(filepath);
});

app.listen(8080, () => {
  console.log('Server started!');
});
