import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });


connectDB()
    .then(() => {
        const server = app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
        server.on("error", (error) => {
            console.log("ERROR:", error);
            process.exit(1);
        });
    })
    .catch((err) => {
        console.log("MONGODB CONNECTION FAILED !!! :", err);
        process.exit(1);
    });