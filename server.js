var pg = require('pg');
const http = require('http');

var conString = "postgres://postgres:cisco@localhost/Tecnoupsa";

//this initializes a connection pool
//it will keep idle connections open for a (configurable) 30 seconds
//and set a limit of 10 (also configurable)



http = require('http');
fs = require('fs');
server = http.createServer( function(req, res) {

    console.dir(req.param);

    if (req.method == 'POST') {
        console.log("POST");
        var body = '';
        req.on('data', function (data) {
            body += data;
           // console.log("Partial body: " + body);
        });
        req.on('end', function () {
            //console.log("Body: " + body);
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');

           /*{
 nombre: 'Walter',
 apellido: 'Sanchez',
 ci: 4869237,
 lugar_de_nacimiento: 'Santa Cruz',
 direccion: 'Av. Alemana #4420',
 sexo: 'Masculino',
 celular: 74895923,
 correo: 'sanchezito@hotmail.com',
 anho_graduado: 2000,
 carrera: 'Ingenieria de Sistemas',
 id_universidad: 1 }*/

          

            pg.connect(conString, function(err, client, done) {
              if(err) {
                return console.error('error fetching client from pool', err);
              }
              body = JSON.parse(body);
              console.log("body"+ body);
             

              console.log( "------------------>>>>>>>>>"+body.nombre);
              client.query('INSERT INTO "Emprendedor"( nombre, apellido, ci, lugar_de_nacimiento, direccion, sexo, celular, correo, anho_graduado, carrera, id_universidad) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
                  [body.nombre, body.apellido, body.ci, body.lugar_de_nacimiento, 
                        body.direccion, body.sexo, body.celular, body.correo, body.anho_graduado, body.carrera, body.id_universidad 
                        ]);/*, function(err, result) {
                          console.log("success")
                //call `done()` to release the client back to the pool
                done();

                if(err) {
                  return console.error('error running query', err);
                }
                console.log(result.rows[0]);
                //output: 1
              });*/
            });
    }
    else
    {
        console.log("GET");
        //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
        var html = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }

});

port = 9090;
host = 'localhost';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);

/*
pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('SELECT *  FROM "Emprendedor";', function(err, result) {
    //call `done()` to release the client back to the pool
    done();

    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    //output: 1
  });
});

*/