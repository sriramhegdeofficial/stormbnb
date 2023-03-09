import mongoose from "mongoose";
import { LocationCard } from "../models/LocationCard";
import * as dotenv from 'dotenv'

dotenv.config();
const env = process.env.NODE_ENV || 'development';

import { card } from "../faker/Card";



export const seedData = async () => {
    
    if(env === 'development') {
        const checkCard = await LocationCard.findOne({});
        if(!checkCard) {
        try {


            await LocationCard.deleteMany({});
        
            for (let i = 0; i < 50; i++) {
              let curentCard = card();
              const doc = await LocationCard.create(curentCard);
            }
            console.log("Mock data is seeded from seed script.");
          } catch (err) {
            console.error(err);
          }
        }
        console.log("Mock data is there no need to seed.");
          
    }
    
  };