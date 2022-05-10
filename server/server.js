import express from "express"
import * as path from "path";
import dotenv from "dotenv"
import { MongoClient } from "mongodb";
import {FAQApi} from "./api/FAQApi.js";
import {BookingApi} from "./api/BookingApi.js";

dotenv.config();
const app = express()
const mongoClient = new MongoClient(process.env.MONGODB_URL);

mongoClient.connect().then(async () => {
    console.log("Connected to mongodb (FAQ)");
    app.use("/api/faqs", FAQApi(mongoClient.db(process.env.MONGODB_DATABASE)));
});

mongoClient.connect().then(async () => {
    console.log("Connected to mongodb (Booking)");
    app.use("/api/bookings", BookingApi(mongoClient.db(process.env.MONGODB_DATABASE)));
});

app.get("/", (req, res) => {
    res.send("Hello Meliora Backend")
})

app.use(express.static("../client/dist/"));
app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
        res.sendFile(path.resolve("../client/dist/index.html"));
    } else {
        next();
    }
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Started on http://localhost:${server.address().port}`);
    console.log(`Link at Heroku: https://melioraimpact.herokuapp.com`);
});
