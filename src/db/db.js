const mysql = require('mysql');
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const connection = mysql.createConnection(config);

module.exports = {
  createTable() {
    const createTable = `
    CREATE TABLE IF NOT EXISTS people(
      id int not null auto_increment,
      name varchar(255),
      primary key(id)
    );`

    connection.query(createTable)
  },

  fillTable() {
    const fillTable = 'INSERT INTO people(name) VALUES ?';
    const values = [
      ['Lucas'],
      ['Samek'],
      ['John'],
      ['Peter'],
      ['Amy'],
      ['Hannah'],
      ['Michael'],
      ['Sandy'],
      ['Betty'],
      ['Richard'],
      ['Susan'],
      ['Vicky'],
      ['Ben'],
      ['William'],
      ['Chuck'],
      ['Viola']
    ];

    connection.query(fillTable, [values]);
  },

  getAll() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT name FROM people', (err, result) => {
        if (err)
          reject(err);
        else
          resolve(result);
      });
    });
  },

  end() {
    connection.end()
  }
}