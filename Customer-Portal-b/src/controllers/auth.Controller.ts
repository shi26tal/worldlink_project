import { Request, Response } from "express";
import { userRepository } from "../repository/user.repository.js";
import { loginUser, registerUser } from "../services/user.service.js";

export const register = async (req: Request, res: Response) => {
  try {
    const { userName, name, email, password } = req.body;

    const existingUser = await userRepository.findByUserName(userName);
    if (existingUser) {
      throw new Error("this user already exist");
    }

    await registerUser({ name, userName, email, password });

    res.status(200).json({ message: "user created" });
  } catch (error) {
    res.status(404).json({ message: "user not created" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    // user enters email and password in the login form, we will get those values from req.body
    const { userName, password } = req.body;

    // check if email and password are provided, if not return 400 bad request
    if (!password || !userName) {
      return res
        .status(422)
        .json({ message: "Please provide userName and password" });
    }

    const result = await loginUser({ userName, password });

    res.status(200).json({ result });
  } catch (error ) {
    if(error instanceof Error){
       return res
      .status(500)
      .json({ message: "Server error", error: error.message });

    }
   
  }
};

// export const profile = async (req, res) => {
//   try {
//     // get user
//     const user = await User.findByPk(req.user.id);

//     res.status(200).json({
//       user,
//     });
//   } catch (error) {
//     return res.status(400).json({
//         message:"cant get profile"
//     })
//   }
// };

// export const addUsersPlan = async (req,res)=> {
//     try {

//         const user = await User.findByPk(req.user.id)

//         if(!user){
//             return res.status(400).json({message: "user not found"})
//         }

//         const addPlan = await user.createPlan(req.body)

//         res.status(200).json({
//             addPlan
//         })

//     } catch (error) {

//         res.status(400).json({
//             message: 'plan not added'
//         })

//     }
// }
