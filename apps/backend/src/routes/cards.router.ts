import express from 'express';
const cardRouter = express.Router();
import { LocationCard } from './../models/LocationCard';

cardRouter.get('/cards', async (req, res) => {
    const allCards = await LocationCard.find({}).select({ "_id":0, "__v": 0, }).limit(10);
    res.json(allCards);
 })





export default cardRouter;