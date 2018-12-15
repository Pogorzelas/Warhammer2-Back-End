import * as mongoose from 'mongoose';

export const TrappingSchema = new mongoose.Schema({
  name: String,
  enc: Number,
  description: String,
});