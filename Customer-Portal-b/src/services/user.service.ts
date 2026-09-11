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



export const registerUser = async (data : registerType) => {
  const { email, userName, password, name } = data;

  const existingUser = await userRepository.findByUserName(userName);

  if (existingUser) {
    throw new Error("this user already exist");
  }


  const user = await userRepository.createUser({
    name,
    email,
    userName,
    password
  });

  return user
};
