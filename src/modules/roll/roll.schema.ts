import * as mongoose from 'mongoose';

export const RollSchema = new mongoose.Schema({
  roll: String,
  table: [],
});