const express = require('express');
const upload = require('express-fileupload');
const cors = require('cors');
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
  res.send('Hello World!');
});

app.listen(8080, () => {
  console.log('Server started!');
});
