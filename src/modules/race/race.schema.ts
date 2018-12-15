import * as mongoose from 'mongoose';

export const RaceSchema = new mongoose.Schema({
  race: String,
  mainProfile: [],
  secondaryProfile: [],
  startingWounds: [],
  startingFatePoints: [],
  skills: [],
  talents: [],
  height: [],
  weight: [],
  hairColour: [],
  eyeColour: [],
  numberOfSiblings: [],
  age: [],
  femaleName: [],
  maleName: [],
});