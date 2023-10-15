const express = require('express');
const upload = require('express-fileupload');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(upload());

app.post('/upload', (req, res) => {
  if(req.files) {
    console.log(req.files);
    const file = req.files.file;
    const filename = file.name;
    console.log(filename);

    file.mv('./uploads/' + filename, (err) => {
      if(err) res.send(err);
      else res.send('File uploaded!');
    });
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

app.listen(8080, () => {
  console.log('Server started!');
});
