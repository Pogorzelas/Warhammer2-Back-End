import * as mongoose from 'mongoose';

export const CareerSchema = new mongoose.Schema({
  id: String,
  careerName: String,
  mainProfile: [],
  secondaryProfile: [],
  skills: [],
  talents: [],
  trappings: [],
});