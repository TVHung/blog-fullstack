import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose  from 'mongoose';
import authRoute from './routers/auth.js';

const app = express();
const PORT = process.env.PORT || 5000;

const URI = 'mongodb+srv://blog:blog@realmcluster.5e20d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());

app.use('/posts', posts);
app.use('/user', authRoute);

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to database!");
        app.listen(PORT, () => {
            console.log("Running to server");
        });
    })
    .catch((err) => {
        console.log('err', err);
    });