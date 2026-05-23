const crypto = require("crypto");

const ALGO = "aes-256-gcm";

// Use APP_KEY in production (recommended naming)
const KEY = Buffer.from(process.env.APP_KEY, "base64");

// 🔥 Safety check (IMPORTANT)
if (!KEY || KEY.length !== 32) {
  throw new Error("❌ Invalid APP_KEY: must be 32 bytes base64 key");
}

function encrypt(text) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGO, KEY, iv);

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  const authTag = cipher.getAuthTag();

  return `${iv.toString("hex")}:${authTag.toString("hex")}:${encrypted}`;
}

function decrypt(data) {
  const [ivHex, authTagHex, encrypted] = data.split(":");

  const iv = Buffer.from(ivHex, "hex");
  const authTag = Buffer.from(authTagHex, "hex");

  const decipher = crypto.createDecipheriv(ALGO, KEY, iv);
  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}

module.exports = { encrypt, decrypt };