import * as mongoose from 'mongoose';

export const WeaponSchema = new mongoose.Schema({
  name: String,
  enc: String,
  group: String,
  damage: String,
  range: String,
  reload: String,
  qualities: String,
});