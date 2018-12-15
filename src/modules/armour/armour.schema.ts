import * as mongoose from 'mongoose';

export const ArmourSchema = new mongoose.Schema({
  armourType: String,
  enc: Number,
  locationsCovered: String,
  AP: Number,
});