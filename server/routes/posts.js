import express from 'express';
import { getPosts} from '../controllers/posts.js';
const Router = express.Router();

Router.get("/", (req, res) => getPosts(req, res))

export default Router;