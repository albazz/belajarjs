//const itu alokasi variabel di javascript
const express = require('express')
const app = express()
const port = 3000

//script definisiin route dari root url (/). jadi kalo ada GET request respond nya di res.send ......
/*
app.get('/', (req, res) => {
  res.send('Halo Dunia!')
})
*/

// buat Middleware utk parsing/nerima JSON bodies
app.use(express.json()); /*  */
// buat Middleware utk parse/nerima URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files jadi dia bakal cari file index.html di folder public by default
app.use(express.static('public'));

// Route for addition
app.post('/add', (req, res) => {
  const { a, b } = req.body;
  if (isNaN(a) || isNaN(b)) {
    return res.json({ error: 'Invalid input' });
  }
  const result = parseFloat(a) + parseFloat(b);
  res.json({ result });
});

// Route for subtraction
app.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  if (isNaN(a) || isNaN(b)) {
    return res.json({ error: 'Invalid input' });
  }
  const result = parseFloat(a) - parseFloat(b);
  res.json({ result });
});

// Route for multiplication
app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  if (isNaN(a) || isNaN(b)) {
    return res.json({ error: 'Invalid input' });
  }
  const result = parseFloat(a) * parseFloat(b);
  res.json({ result });
});

// Route for division
app.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (isNaN(a) || isNaN(b)) {
    return res.json({ error: 'Invalid input' });
  }
  if (parseFloat(b) === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed' });
  }
  const result = parseFloat(a) / parseFloat(b);
  res.json({ result });
});

//ini buat define pas jalan aplikasinya jalan di port berapa terus nampilin pesen di console

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});