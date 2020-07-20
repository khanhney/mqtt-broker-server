var mosca       = require('mosca')
let express     = require('express');
let app         = express();
let bodyParser  = require('body-parser');
let mongoose    = require('mongoose');
let cors        = require('cors');
let path        = require('path');
let mqtt        = require('mqtt');
/**
 * INTERNAL MODULE
 */
let INSTACE_MODEL = require('./models/Instance');
let UserRouter    = require('./routers/user');
let InstaceRouter = require('./routers/instaces');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors({}))
const { moscaSetting,
    NODE_RED_SEND_SERVER, SERVER_SEND_BROWSER, WS,
    USER_CLICK_KEY, SERVER_SEND_EVENT_USER_START_BTN, 
    SERVER_SEND_EVENT_USER_END_BTN, NODERED_SEND_RESULT_SERVER, SERVER_SEND_RESULT_BROWSER,
    NODERED_SEND_EVENT_USER_END_BTN, NODERED_SEND_EVENT_USER_START_BTN,
    SERVER_SEND_KEY_NODERED,
    CLIENT_SEND_ORDER_SUBMITED, SERVER_SEND_MASTER_CLIENT_CONFIRM_ORDER,
    MASTER_CLIENT_SEND_MQTT_BROKER, BROKER_SEND_INFO_ORDER_CLIENT_DASHBOARD
} = require('./constants/setting');
const server          = new mosca.Server(moscaSetting);
const mqttClient      = mqtt.connect(WS, {  keepalive: 0 });

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
server.on('published', async (packet, client) => {
  if (!packet.topic.includes('$SYS')) {
        // console.log('Published', packet.topic, packet.payload.toString('utf8'));
        let TOPIC       = packet.topic;
        let dataTemp    = packet.payload.toString();

        /**
         * TOPIC 'NODE_RED_SEND_SERVER'
         */
        if (TOPIC == NODE_RED_SEND_SERVER) {
            mqttClient.publish(SERVER_SEND_BROWSER, dataTemp, 
            { qos: 2, retain: true })
        }

        /**
         * TOPIC `USER_CLICK_KEY` RECEIVE FROM BROWSER
         */
        if (TOPIC == USER_CLICK_KEY) {
            console.log(`HELLO WOLRD`);
            mqttClient.publish(SERVER_SEND_KEY_NODERED, dataTemp, 
            { qos: 2, retain: true })
        }

        /**
         * TOPIC 'NODERED_SEND_EVENT_USER_START_BTN'
         * BROWSER || bắt đầu nút loading ở trang web
         */
        if (TOPIC == NODERED_SEND_EVENT_USER_START_BTN) {
            mqttClient.publish(SERVER_SEND_EVENT_USER_START_BTN, SERVER_SEND_EVENT_USER_START_BTN, 
            { qos: 2, retain: true });
        }

        /**
         * TOPIC 'NODERED_SEND_EVENT_USER_END_BTN'
         * BROWSER || kết thúc nút loading ở trang web
         */
        if (TOPIC == NODERED_SEND_EVENT_USER_END_BTN) {
            mqttClient.publish(SERVER_SEND_EVENT_USER_END_BTN, SERVER_SEND_EVENT_USER_END_BTN,
            { qos: 2, retain: true });
        }

        /**
         * TOPIC 'NODERED_SEND_RESULT_SERVER' 
         */
        if (TOPIC == NODERED_SEND_RESULT_SERVER) {
            mqttClient.publish(SERVER_SEND_RESULT_BROWSER, dataTemp, 
            { qos: 2, retain: true });
        }

        // ====================ANVAT247.COM.VN======================= //
        /**
         * TOPIC `CLIENT_SEND_ORDER_SUBMITED`
         */
        if (TOPIC === CLIENT_SEND_ORDER_SUBMITED) {
            if (dataTemp && dataTemp!='') {
                let order = JSON.parse(dataTemp);
                let { orderID } = order;
                // SEND ORDER_ID
                mqttClient.publish(SERVER_SEND_MASTER_CLIENT_CONFIRM_ORDER, JSON.stringify({ orderID }), {
                    qos: 2, dup: false, retain: true
                }, function(err, message){
                    console.log({ err, message });
                });
            }
        }
        /**
         * TOPIC `MASTER_CLIENT_SEND_MQTT_BROKER`
         */
        if (TOPIC === MASTER_CLIENT_SEND_MQTT_BROKER) {
            if (dataTemp && dataTemp!='') {
                let order = JSON.parse(dataTemp);
                // TODO WITH ORDER GET INFO
                // let infoOrder = await ORDER_MODEL.getInfo(orderID);
                mqttClient.publish(BROKER_SEND_INFO_ORDER_CLIENT_DASHBOARD, JSON.stringify({ order }), {
                    qos: 2, dup: false, retain: true
                }, function(err, message){
                    console.log({ err, message });
                });
            }
        }
    }
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
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.use('/user', UserRouter);
app.use('/instaces', InstaceRouter);

app.get('/khanhney', (req, res) => res.json({ message: 'test_success' }));


app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
})

function setup() {
    console.log('Mosca server is up and running')
    // server.authenticate       = authenticate;
}
const port = process.env.PORT || 8080;
const uri = 'mongodb://localhost/mqtt_fiona_v2'
// const uri = 'mongodb://fiona_v2@fiona_v2:localhost/mqtt_fiona_v2'
mongoose.connect(uri, { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
    app.listen(port, '0.0.0.0', ()=> console.log(`Server started at port ${port}`));
})
