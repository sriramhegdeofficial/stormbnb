import mongoose from 'mongoose';
const { Schema } = mongoose;

const locationCardSchema = new Schema({
  cityName:  {
    type: String,
    required: true,
    maxlength: 255,
  }, // String is shorthand for {type: String}
  price: {
    type: String,
    required: true,
    
  },
  country: {
    type: String,
    required: true,
  },
  distance:   {
    type: String,
    required: true,
  },
  images: {
    type: [
        { imageUrl: {
            type: String,
            required: true
   } }],
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  }
});

export const LocationCard = mongoose.model('LocationCard', locationCardSchema);