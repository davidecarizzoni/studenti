const cors = require('cors');
const express = require('express');
const mysql = require('mysql');

var get = require('./get');

const app = express();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.listen(process.env.ANGULAR_APP_SERVER_PORT, () => {
  console.log(`App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`);
});

app.get('/getTable',get.getTable);

app.get('/getStudenti', (req, res) => {

  pool.query("select * from Studente", (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});

app.get('/getCorsi', (req, res) => {

  pool.query("select * from Corso", (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});

app.get('/getCorsiStudente', (req, res) => {
  
  let param = req.query.param;
  pool.query("SELECT Corso.Name " +
             "FROM Student,Classe,Corso "+  
             "WHERE Student.id = Classe.Id_student AND Classe.Id_Corso = Corso.id "+
             "AND Student.id =" + param, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});

app.post('/delete', (req, res) => {

  let table = req.query.table;
  pool.query("DELETE FROM "+table+" WHERE id="+req.body.id, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});

app.post('/insertStudent', (req, res) => {
  let nome = req.query.nome;
  let cognome = req.query.cognome; 

  pool.query("INSERT INTO STUDENTE VALUES (NULL, '" + nome + "','"+ cognome+"') ", (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });

});

app.post('/insert', (req, res) => {

  let table = req.query.table;

  let campi="";

  for(var key in req.body) {
    if(req.body.hasOwnProperty(key)){
      campi+=key+",";
    }
  }

  campi=campi.slice(0, -1);

  let valori ="";

  for(var key in req.body) {
    if(req.body.hasOwnProperty(key)){
      valori+="'"+req.body[key]+"',";
    }
  }

  valori= valori.slice(0, -1);
 
  pool.query("INSERT INTO "+table+" VALUES ("+valori+")", (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});



