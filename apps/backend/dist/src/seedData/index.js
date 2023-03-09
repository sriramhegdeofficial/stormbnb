"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedData = void 0;
const LocationCard_1 = require("../models/LocationCard");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const env = process.env.NODE_ENV || 'development';
const Card_1 = require("../faker/Card");
const seedData = () => __awaiter(void 0, void 0, void 0, function* () {
    if (env === 'development') {
        const checkCard = yield LocationCard_1.LocationCard.findOne({});
        if (!checkCard) {
            try {
                yield LocationCard_1.LocationCard.deleteMany({});
                for (let i = 0; i < 50; i++) {
                    let curentCard = (0, Card_1.card)();
                    const doc = yield LocationCard_1.LocationCard.create(curentCard);
                }
                console.log("Mock data is seeded from seed script.");
            }
            catch (err) {
                console.error(err);
            }
        }
        console.log("Mock data is there no need to seed.");
    }
});
exports.seedData = seedData;
