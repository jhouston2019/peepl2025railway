const express = require("express");
const admin = require("firebase-admin");

const app = express();
const port = process.env.PORT || 3000;

// Initialize Firebase Admin SDK using base64-encoded config
const base64Config = process.env.FIREBASE_CONFIG_B64;
if (!base64Config) {
    console.error("FIREBASE_CONFIG_B64 not set");
    process.exit(1);
}

const serviceAccount = JSON.parse(Buffer.from(base64Config, "base64").toString("utf8"));
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "crowd-checker-7bd94.appspot.com"
});

app.get("/", (req, res) => {
    res.send("Peepl backend is running.");
});

app.listen(port, () => {
    console.log(\`Server listening on port \${port}\`);
});
