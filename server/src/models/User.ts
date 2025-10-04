import { Schema, Connection, Document, Model } from "mongoose";


export interface IUser extends Document {
  name: string;
  email: string;
  phone: number;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true, maxLength:10, minLength:10},
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const getUserModel = (conn: Connection): Model<IUser> => conn.model<IUser>("User", userSchema);