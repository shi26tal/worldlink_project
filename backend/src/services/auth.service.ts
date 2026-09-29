import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { userRepository } from "../repository/user.repository.js";
import { generateAccessToken } from "../utils/generateToken.js";
import { registerType } from "../types/userType.js";

type LoginData = {
  username: string;
  password: string;
};

export const loginUser = async ({ username, password }: LoginData) => {
  
  const user = await userRepository.findByUserName(username);

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateAccessToken(user.id, user.username);

  // const refreshToken = generateRefreshToken(user.id,user.userName)

  return {
    token,
    user: {
      id: user.id,
      customer_name: user.customer_name,
      email: user.email,
      username: user.username,
    },
  };
};



export const registerUser = async (data: registerType) => {

  const existingUser = await userRepository.findByUserName(data.username);

  if (existingUser) {
    throw new Error("this user already exist");
  }

  const user = await userRepository.createUser(data);

  return user;
};




export const refreshTokenService = async (token: string) => {
  const decoded = jwt.decode(token) as {
    id: number;
    userName: string;
  };

  if (!decoded) {
    throw new Error("Invalid token");
  }

  const user = await userRepository.findByUserName(decoded.userName);

  if (!user) {
    throw new Error("User not found from token");
  }

  const newAccessToken = generateAccessToken(user.id, user.username);

  return newAccessToken;
};