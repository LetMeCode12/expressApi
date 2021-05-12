const CryptoJS = require("crypto-js");

let encryptPassword;

const encode = (data) => {
  const key = CryptoJS.SHA256(data).toString();
  encryptPassword = CryptoJS.AES.encrypt(data, key).toString();
  return encryptPassword;
  //todo zapis do bazy encrypt password
  // console.log("hash", encryptPassword)
};

const decode = (password, hash) => {
  const key = CryptoJS.SHA256(password).toString();
  const bytes = CryptoJS.AES.decrypt(hash, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};

const compare = (username, password) => {
  //console.log("login:", username, password);
  //hash powinno byc odczytane z bazy dla danego usera
  const hash = encryptPassword; //todo wyszukanie usera i znalezienie hasła hashowanego
  return decode(password, hash) === password;
};

module.exports = {
  encode,
  decode,
  compare,
};
