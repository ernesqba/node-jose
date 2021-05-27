const { generatePemKeys } = require('./jweServices');
exports.generarPems = async (req, res)=>{
  const response = await generatePemKeys('admin', 'admin');
  res.send(response);
};