let express = require('express')
let app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
  });

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server, {
    cors: {
      origin: "http://localhost:4200",
      methods: ["GET", "POST"]
    }
  });

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('user connected');
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});