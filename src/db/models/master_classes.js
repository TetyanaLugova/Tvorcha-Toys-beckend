import { model, Schema } from 'mongoose';
const masterClassesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    difficultyLevel: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    materials: [
      {
        type: Schema.Types.Mixed,
        required: true,
      },
    ],
    img: {
      type: String,
      required: true,
    },
    mk: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const MasterClassesCollection = model(
  'master_classes',
  masterClassesSchema,
);
