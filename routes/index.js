const routes = require('express').Router();
const { generarPems } = require('../services/pems');
const { postEncrypt, getDecrypt } = require('../services/operation');

routes.post('/pems',generarPems);
routes.post('/encrypt',postEncrypt);
routes.get('/decrypt',getDecrypt);

module.exports = routes;