const express = require('express');
const app = express();
const db = require('./db/db');
const port = 3000;

db.createTable();
db.fillTable();

app.get('/', async (req, res) => {
  const names = await db.getAll();
  let list = ['<ul>']

  names.forEach(obj => list.push(`<li>${obj.name}</li>`));
  list.push('</ul>')

  res.send(`<h1>Full Cycle</h1>${list.join('')}`)
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})