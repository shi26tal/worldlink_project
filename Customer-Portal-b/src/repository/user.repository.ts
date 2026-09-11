import { Model } from "sequelize";
import { User } from "../models/index.js";
import { registerType } from "../types/userType.js";


export const userRepository = {
  findByUserName: async (userName: string) => {
    return await User.findOne({ where: { userName } });
  },

  createUser : async (userData : registerType) => {
    return await User.create(userData)
  }
};
