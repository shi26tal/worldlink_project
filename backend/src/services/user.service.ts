
import { userRepository } from "../repository/user.repository.js";
import type { registerType } from "../types/userType.js";


export const getAllUsersService = async () => {
  const user = await userRepository.getUsers();

  return user;
};

export const updateUserService = async (
  id: number,
  updateData: {
    name?: string;
    userName?: string;
    email?: string;
  },
) => {
  const user = await userRepository.updateUsers(id, updateData);

  return user;
};

export const deleteUserService = async (id: number) => {
  const user = await userRepository.deleteUsers(id);

  return user;
};

export const createAuthUserService = async (data: registerType) => {
  const existingUser = await userRepository.findByUserName(data.userName);

  if (existingUser) {
    throw new Error("this user already exist");
  }

  const user = await userRepository.createAuthUser({
    name: data.name,
    email: data.email,
    userName: data.userName,
    password: data.password,
    createdBy: data.createdBy,
  });

  return user;
};

export const updateAuthUserService = async (
  id: number,
  updateData: {
    name?: string;
    userName?: string;
    email?: string;
    updatedBy?: string;
  },
) => {
  const user = await userRepository.updateAuthUser(id, updateData);

  return user;
};
