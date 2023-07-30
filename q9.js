const db = require('mysql');
var con = db.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'demo_db',
});
con.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');

  SelectAllElements = () => {
    return new Promise((resolve, reject) => {
      con.query('SELECT * FROM employee ', (error, elements) => {
        if (error) {
          return reject(error);
        }
        console.log(elements, 'hello');
        return resolve(elements);
      });
    });
  };
  const result = SelectAllElements();
});
