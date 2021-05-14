const fs = require('fs');
const jose = require('node-jose');
const keyStore = jose.JWK.createKeyStore();

const formatKeys = 'pem';
const textEncode = 'utf8';

const generatePemKeys = async(id, accessCode) => {
  try {
    const props = {
      kid: id,
      alg: 'RSA-OAEP-256',
      use: 'enc',
      accessCode
    };
    const key = await keyStore.generate('RSA', 2048, props);
    const publicKey = key.toPEM();
    const privateKey = key.toPEM(true);
    fs.writeFile('./assets/pemPublic.txt', publicKey, ()=>{});
    fs.writeFile('./assets/pemPrivate.txt', privateKey, ()=>{});
    return 'Guardado en assets/';
  }
  catch (error) {
    return { error: true, message: error };
  }
};

const encrypt = async(key, payload) => {
  try {
    const publicKey = await jose.JWK.asKey(key, formatKeys);
    const dataToEncrypt = JSON.stringify(payload);
    const encryptOptions = {
      compact: true,
      fields: {
        alg: key.alg,
        typ: 'jwe'
      }
    };
    const token = await jose.JWE.createEncrypt(encryptOptions, publicKey).update(dataToEncrypt, textEncode).final();
    return token;
  }
  catch (error) {
    return error;
  }
};

const decrypt = async(key, token) => {
  try {
    const privateKey = await jose.JWK.asKey(key, formatKeys);
    const decryptedToken = await jose.JWE.createDecrypt(privateKey).decrypt(token);
    const json = JSON.stringify(decryptedToken.plaintext);
    const bufferOriginal = Buffer.from(JSON.parse(json).data);
    return JSON.parse(bufferOriginal.toString(textEncode));
  }
  catch (error) {
    return error;
  }
};

exports.generatePemKeys = generatePemKeys;
exports.encrypt = encrypt;
exports.decrypt = decrypt;
