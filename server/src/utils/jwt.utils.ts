import config from "config";
import jwt from "jsonwebtoken";
const fs = require("fs");
const path = require("path");

const PUBLIC_KEY = fs.readFileSync(
  path.join(__dirname + "/../../config", "publickey.key"),
  "utf8"
);
const PRIVATE_KEY = fs.readFileSync(
  path.join(__dirname + "/../../config", "privatekey.key"),
  "utf8"
);

export const signJwt = (
  object: Object,
  options?: jwt.SignOptions | undefined
) => {
  const signingKey = PRIVATE_KEY;
  return jwt.sign(object, signingKey, {
    ...(options && options),
    algorithm: "RS256",
  });
};

export const verifyJwt = (token: string) => {
  try {
    const decoded = jwt.verify(token, PUBLIC_KEY);
    //console.log('decoded==>', decoded)
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    return {
      valid: false,
      expired: e.message === "jwt expired",
    };
  }
};
