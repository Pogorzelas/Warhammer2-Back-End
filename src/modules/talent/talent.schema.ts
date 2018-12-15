import * as mongoose from 'mongoose';

export const TalentSchema = new mongoose.Schema({
  name: String,
  description: String,
  id: [],
});