import CryptoJS from "crypto-js";

export const encode = (data) => {
  const key = CryptoJS.SHA256("secretKey").toString();
  return CryptoJS.AES.encrypt(data, key).toString();
};

export const decode = (hash) => {
    try {
        const key = CryptoJS.SHA256("secretKey").toString();
        const bytes = CryptoJS.AES.decrypt(hash, key);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (err) {
        console.error(err);
    }
};
