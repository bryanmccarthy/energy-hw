const express = require('express');
const upload = require('express-fileupload');

const app = express();
app.use(upload());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
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

app.listen(3000, () => {
  console.log('Server started!');
});
