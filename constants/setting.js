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
    }
  };