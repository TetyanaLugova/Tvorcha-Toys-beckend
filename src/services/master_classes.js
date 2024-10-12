import { MasterClassesCollection } from '../db/models/master_classes.js';

export const getAllMasterClasses = async () => {
  const masterClasses = await MasterClassesCollection.find();
  return masterClasses;
};

export const getMasterClassById = async (masterClassId) => {
  const masterClass = await MasterClassesCollection.findById(masterClassId);
  return masterClass;
};
