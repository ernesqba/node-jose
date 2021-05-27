const fs = require('fs');
const { encrypt, decrypt } = require('./jweServices');
exports.postEncrypt = async (req, res)=>{
  const { payload } = req.body;
  fs.readFile('./assets/pemPublic.txt', 'utf8', async (err, data)=>{
    const pemPublic = data;
    const result = await encrypt(pemPublic, payload);
    res.send(result);
  });
};

exports.getDecrypt = (req, res)=>{
  const { payload } = req.body;
  fs.readFile('./assets/pemPrivate.txt', 'utf8', async (err, data)=>{
    const pemPublic = data;
    const result = await decrypt(pemPublic, payload);
    res.send(result);
  });
};