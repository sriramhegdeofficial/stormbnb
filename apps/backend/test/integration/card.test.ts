import mongoose from "mongoose";
import request from 'supertest';
import app from './../../index';
import * as dotenv from 'dotenv';


dotenv.config();

beforeEach(async () => {
    if(process.env.MONGODB_DEV) {
        await mongoose.connect(process.env.MONGODB_DEV);
    }
    
  });
  
  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close();
  });

  describe("GET /api/cards", () => {
    it("should return all cards(limit 10)", async () => {
      const res = await request(app).get("/api/cards");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(10);
      
      
    });
  });


