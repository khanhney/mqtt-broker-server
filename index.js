var mosca       = require('mosca')
let express     = require('express');
let app         = express();
let bodyParser  = require('body-parser');
let mongoose    = require('mongoose');
let cors        = require('cors');
let path        = require('path');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors({}))
/**
 * INTERNAL MODULE
 */
let INSTACE_MODEL = require('./models/Instance');
let UserRouter    = require('./routers/user');
let InstaceRouter = require('./routers/instaces');

const { moscaSetting } = require('./constants/setting');

var server = new mosca.Server(moscaSetting);
server.on('ready', setup);

/**
 * BEGIN AUTHEN - AUTHOR
 */
// Accepts the connection if the username and password are valid
var authenticate = async (client, username, password, callback) => {
  let authorized = await INSTACE_MODEL.findOne({ user: username, pwd: password, status: 1 });
  if (authorized) client.user = username;
  callback(null, authorized);
}
/**
 * END AUTHEN - AUTHOR
 */

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.topic, packet.payload.toString('utf8'));
});

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);		
});
/**
 * USE MIDELWARE
 */
// app config
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use('/user', UserRouter);
app.use('/instaces', InstaceRouter);

app.get('/khanhney', (req, res) => res.json({ message: 'test_success' }));

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
})

function setup() {
    console.log('Mosca server is up and running')
    server.authenticate       = authenticate;
}
const port = process.env.PORT || 3000;
// const uri = 'mongodb://khanhney123:123@ds149934.mlab.com:49934/cnpm'
const uri = 'mongodb://localhost/mqtt_models'
mongoose.connect(uri, { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
    app.listen(port, ()=> console.log('Server started at port 3000'));
})
