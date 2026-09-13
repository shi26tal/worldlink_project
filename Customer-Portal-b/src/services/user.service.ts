import bcrypt from "bcrypt";
import { userRepository } from "../repository/user.repository.js";
import { generateToken } from "../utils/generateToken.js";
import type { registerType, UserAttributes } from "../types/userType.js";

type LoginData = {
  userName: string;
  password: string;
};

export const loginUser = async ({ userName, password }: LoginData) => {
  const user = await userRepository.findByUserName(userName);

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(user.id, user.userName);

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      userName: user.userName,
    },
  };
};

export const registerUser = async (data: registerType) => {
  const { email, userName, password, name } = data;

  const existingUser = await userRepository.findByUserName(userName);

  if (existingUser) {
    throw new Error("this user already exist");
  }

  const user = await userRepository.createUser({
    name,
    email,
    userName,
    password,
  });

  return user;
};

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
  const { email, userName, password, name, createdBy } = data;

  const existingUser = await userRepository.findByUserName(userName);

  if (existingUser) {
    throw new Error("this user already exist");
  }

  const user = await userRepository.createAuthUser({
    name,
    email,
    userName,
    password,
    createdBy,
  });

  return user
};

export const updateAuthUserService = async (
  id: number,
  updateData: {
    name?: string;
    userName?: string;
    email?: string;
    updatedBy?:string
  }
) => {
  const user = await userRepository.updateAuthUser(id, updateData);

  return user;
};
