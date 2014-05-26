/**
 * Created by ETiV on 2014/5/26.
 */

var io = require('socket.io-client');

var EVENT = {
  eIdentify: 'REFIN_IDENTIFY'
};

var KEYS = {
  kMode: 'MODE',
  kSocketMode: 'kSocketMode'
};

var CONST = {
  AGENT: 'AGENT',
  CLIENT: 'CLIENT'
};

var socket = io.connect('http://localhost:12380', {
  'reconnection delay': 1000,
  'max reconnection attempts': Infinity,
  'reconnection limit': 2
});

socket.on('connect', function () {
  console.log('socket.io connected ...');
  var payload = {};
  payload[ KEYS.kMode ] = CONST.CLIENT;
  socket.emit(EVENT.eIdentify, payload);

});