import express from 'express';
import * as dotenv from 'dotenv'
import { startDB } from './src/mongoose';
import { seedData } from './src/seedData';
import cardRouter from './src/routes/cards.router';


dotenv.config();
const env = process.env.NODE_ENV || 'development';
const app = express();



//Express JSON Parser;
app.use(express.json());

app.use('/api', cardRouter);




const startServerInDev = async () => {
    if(process.env.NODE_ENV === 'development') {
       await  app.listen(5000, () => {
            startDB(env);
            seedData();
            console.log("Server Started");
        })
    }
}

startServerInDev();



export default app;