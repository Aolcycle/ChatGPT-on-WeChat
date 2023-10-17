import UTF8 from 'crypto-js/enc-utf8.js';
import Base64 from 'crypto-js/enc-base64.js';

export function encryptByBase64(cipherText: string) {
  return UTF8.parse(cipherText).toString(Base64);
}
