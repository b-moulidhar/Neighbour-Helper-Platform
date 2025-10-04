import { getConnection } from "../config/db.js";
import { getUserModel, IUser } from "../models/User.js";

export const createUser = async (data: Partial<IUser>) => {
  const conn = await getConnection("User"); // User DB
  const User = getUserModel(conn);
  return await User.create(data);
};

export const getUsers = async () => {
  const conn = await getConnection("User");
  const User = getUserModel(conn);
  return User;
};
