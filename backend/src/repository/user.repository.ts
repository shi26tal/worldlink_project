import { Model } from "sequelize";
import { User } from "../models/user.model.js";
import { registerType } from "../types/userType.js";

// creating object containing all function
export const userRepository = {
  // property   : value is an async arrow function
  findByUserName: async (userName: string) => {
    return await User.findOne({ where: { userName } });
  },

  createUser: async (userData: registerType) => {
    return await User.create(userData);
  },

  getUsers: async () => {
    return await User.findAll();
  },

  // update ko lagi id and data chaixa

  updateUsers: async (
    id: number,
    updateData: {
      name?: string;
      userName?: string;
      email?: string;
    },
  ) => {
    //    console.log("REPOSITORY ID:", id);
    // console.log("REPOSITORY DATA:", updateData);

    // find the user by primary key
    const user = await User.findByPk(id);

    //  console.log("FOUND USER:", user);

    if (!user) {
      throw new Error("no user found");
    }
    // update the data
    await user.update(updateData);

    // console.log("UPDATED USER:", user);

    return user;
  },
  deleteUsers: async (id: number) => {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error("User not found");
    }

    await user.destroy();

    return user;
  },

  // authenticated user create another users

  // seperate banairakhna pardaina

  createAuthUser: async (userData: registerType) => {
    return await User.create(userData);
  },

  updateAuthUser: async (
    id: number,
    updateData: { name?: string; userName?: string; email?: string , updatedBy?:string}
  ) => {

    const user = await User.findByPk(id)

    if(!user){
      throw new Error("user not found")
    }

    await user.update(updateData)

    return user
  },


};
