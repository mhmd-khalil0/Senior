  // server.js (Node.js + Express)

const express = require('express');
const mysql = require('mysql');
const cors= require('cors');
const app = express();

app.use(cors());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'matchfinder',
});
 
app.post('./Login'), (req,res) => {
  const sql = "SELECT * From login WHERE email=? AND password =? ";
  const values = [
    req.body.email,
    req.body.password
  ]
  db.query(sql,[values],(err,data)=>{
    if
  })
}




// // Connect to the database
// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected to MySQL database');
// });

// // Define API endpoint to fetch data from MySQL database
// app.get('/api/data', (req, res) => {
//   const query = 'SELECT * FROM your_table';
//   db.query(query, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.json(result);
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
