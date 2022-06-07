export default {
  port: 1337,
  host: "localhost",
  //dbUri: "mongodb://localhost:27017/rest-api-tutorial",
  dbUri:
    "mongodb+srv://Meowmerry:meowmerry03@cluster0.xpaapsp.mongodb.net/?retryWrites=true&w=majority",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1year",
  publicKey: `-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDVLkfzMwnB7/0PK0B8VaQ+y2eB
  B66nE6NdqxvbeuW1ZpF2EFkXa3zjB7GFJ42Aq8MjnHtrR18amJRFomogyUcn57Dd
  0bbWJg23iSD1iR+99wArSpkQEawWP+ZiBXaB96CXYh0JqK0t1t754fhN4V44w/uB
  pI8wv1SUNBAieqfjvQIDAQAB
  -----END PUBLIC KEY-----`,

  privateKey: `-----BEGIN PRIVATE KEY-----
  MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBANUuR/MzCcHv/Q8r
  QHxVpD7LZ4EHrqcTo12rG9t65bVmkXYQWRdrfOMHsYUnjYCrwyOce2tHXxqYlEWi
  aiDJRyfnsN3RttYmDbeJIPWJH733ACtKmRARrBY/5mIFdoH3oJdiHQmorS3W3vnh
  +E3hXjjD+4GkjzC/VJQ0ECJ6p+O9AgMBAAECgYEAzaTbm2s8mmzbfOqIRmiHDFxC
  +GFkxZ9YFF+fe9XOCXNsFqwmhUUXMBqX0I8bHWiT0aJ+HDq5L3rIbXQDVKVVkRJi
  uzRnsc/7zNH6xnFb2snA/p2SYFNNIKY7nUYaYkjhWJe4BAk7Mvldxg8zN5Ftv284
  Ft6DZRljNAATLaAV/rECQQDrQxEeDSSPGATB4IOPfmZ0R+6vhkPDfIHzjF3Cjoxx
  +vvhwPhfGTvT1Kl/fteNLPFn9utzqRf7diRsKXIzFPs7AkEA5/jty+5YdOgCH0lJ
  i7zcUqWLHtGxaTJ+udQt8k8ms0rtqqHlQgAozi9kZpVb8NDquPoMxyMESdYfK1cf
  xPF9ZwJAeHU6inyIP4w4w1xFgG9j3h4GpHDGuY1CrIUubLO4TZQI7Cp2AZtV+rxk
  nRdBHtPoNydCn1HxKZvwQkFma6lOiQJBAJmgr4QOjsCl4rnrpGyKIHQPtKotf8xG
  p8zUK7W9G8lEB1CpNZbXWi7rDhguNJyxD7J/z7SWiUGJME1Yvu6EbGMCQQCEWG36
  I85WdE8PTNv8qp6PQAqO0Q36/hNBdIv2N5TtTFZ2J3At25L7Is8FMNMeDys+Zo2z
  z4GkpLpmIIBSahMj
  -----END PRIVATE KEY-----`,
  accessTokenPrivateKey: ``,
  accessTokenPublicKey: ``,
  refreshTokenPrivateKey: ``,
  refreshTokenPublicKey: ``,
};
