var mosca = require('mosca')

const settingWithRedis = {
    type: 'redis',
    redis: require('redis'),
    db: 12,
    port: 6379,
    return_buffers: true, // to handle binary payloads
    host: "localhost"
};

exports.moscaSetting = {
    port: 1883,
    backend: settingWithRedis,
    persistence: {
      factory: mosca.persistence.Redis
    },
    logger: {},
    http: {
        port: 1887,
        static: __dirname + "/public",
        bundle: true
    },
};
exports.WS = 'ws://localhost:1887';

exports.NODE_RED_SEND_SERVER                = `NODE_RED_SEND_SERVER`;
exports.SERVER_SEND_BROWSER                 = `SERVER_SEND_BROWSER`;
exports.USER_CLICK_KEY                      = `USER_CLICK_KEY`;
exports.SERVER_SEND_KEY_NODERED             = `SERVER_SEND_KEY_NODERED`;
exports.NODERED_SEND_EVENT_USER_START_BTN   = `NODERED_SEND_EVENT_USER_START_BTN`;
exports.SERVER_SEND_EVENT_USER_START_BTN    = `SERVER_SEND_EVENT_USER_START_BTN`;
exports.NODERED_SEND_EVENT_USER_END_BTN     = `NODERED_SEND_EVENT_USER_END_BTN`;
exports.SERVER_SEND_EVENT_USER_END_BTN      = `SERVER_SEND_EVENT_USER_END_BTN`;
exports.NODERED_SEND_RESULT_SERVER          = `NODERED_SEND_RESULT_SERVER`;
exports.SERVER_SEND_RESULT_BROWSER          = `SERVER_SEND_RESULT_BROWSER`;


/**
 * ANVAT247.COM.VN
 */
exports.CLIENT_SEND_ORDER_SUBMITED              = `CLIENT_SEND_ORDER_SUBMITED`;
exports.SERVER_SEND_MASTER_CLIENT_CONFIRM_ORDER = `SERVER_SEND_MASTER_CLIENT_CONFIRM_ORDER`;
