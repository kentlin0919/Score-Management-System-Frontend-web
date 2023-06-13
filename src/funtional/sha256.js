// sha.js
import { sha256 } from 'js-sha256';

export function encryptPassword(password) {
  const passwordHash = sha256(password);
  return passwordHash;
}
