import mongoose, { Schema, Document } from 'mongoose';

export interface ISale extends Document {
  SaleID: number;
  ProductID: number;
  Quantity: number;
  Date: Date;
  TotalAmount: number;
}

const SaleSchema: Schema = new Schema({
  SaleID: { type: Number, required: true, unique: true },
  ProductID: { type: Number, required: true },
  Quantity: { type: Number, required: true },
  Date: { type: Date, required: true },
  TotalAmount: { type: Number, required: true },
});

export default mongoose.model<ISale>('Sale', SaleSchema);