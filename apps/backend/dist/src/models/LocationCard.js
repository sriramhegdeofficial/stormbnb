"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCard = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const locationCardSchema = new Schema({
    cityName: {
        type: String,
        required: true,
        maxlength: 255,
    },
    price: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    distance: {
        type: String,
        required: true,
    },
    images: {
        type: [
            { imageUrl: {
                    type: String,
                    required: true
                } }
        ],
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }
});
exports.LocationCard = mongoose_1.default.model('LocationCard', locationCardSchema);
