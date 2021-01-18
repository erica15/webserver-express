

const http = require('http');

//creamos el servidor
http.createServer( (req, res) =>{

    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Sora',
        edad: 30,
        url: req.url
    }
    
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(3000);

console.log('Escuchando el puerto 3000');