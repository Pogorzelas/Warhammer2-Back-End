import * as mongoose from 'mongoose';

export const SkillSchema = new mongoose.Schema({
  name: String,
  skillType: String,
  relatedTalents: String,
});