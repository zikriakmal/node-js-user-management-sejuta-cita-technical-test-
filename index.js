const express = require('express');
const mongoose = require('mongoose');

const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config');

const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');

const app = express();

const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose
    .connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("successfully connected to db"))
    .catch((e) =>
    {
        console.log(e);
        setTimeout(connectWithRetry, 5000);
    });

const port = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) =>
{
    res.send("Api root");
})
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);


app.listen(port, () => console.log(`Listening on port ${port}`))