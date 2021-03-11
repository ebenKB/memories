import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
app.use(cors());
dotenv.config();
app.get('/', (req, res) => res.send("Server is running..."))
app.use('/posts', postRoutes);


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
const PORT = process.env.PORT || 8080

// connect to the database here
mongoose.connect(process.env.db, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log("The app is running on port: ", PORT)))
.catch((err) => console.log("An error occurred", err));

mongoose.set('useFindAndModify', false);
