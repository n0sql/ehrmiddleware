import dotenv from "dotenv";
import express from "express";
import routingController from "./routes";


dotenv.config();

const app = express();

const port = process.env.PORT || 6000;

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
routingController(app);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// LocationHandler.getLocation("ebeea857-43e9-4435-b6d5-12782a0b4c19").then((location) => {
// console.log(location);
// }).catch((error) => {
// console.log(error);
// });

// sessionManager.endSession().then((response) => {
// console.log("logged out");
// }).catch((error) => {
// console.log(error);
// });