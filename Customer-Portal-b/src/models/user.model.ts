import {
    CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
// import chai js file nai hunxa even tho actual file is ts
import { sequelize } from "../config/database.js";
import bcrypt from "bcrypt";

interface UserAttributes {
  id: number;
  name: string;
  userName: string;
  email: string;
  password: string;
}

// class User extends Model<UserAttributes> implements UserAttributes{
//     declare id : number
//      declare name: string
//     declare userName: string;
//      declare email:string
//      declare password:string
// }

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare userName: string;
  declare email: string;
  declare password: string;
}

User.init(
  {
    // sequelize ko datatype ley already provides the typing
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize },
);

// export const User = sequelize.define(
//     "User",
//     {
//         // sequelize ko datatype ley already provides the typing
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         userName:{
//             type: DataTypes.STRING,
//             allowNull:false
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//         },
//         password: {
//             type:DataTypes.STRING,
//             allowNull: false,
//         },
//         phone:{
//             type: DataTypes.STRING,
//             allowNull: true
//         },
//         address:{
//             type:DataTypes.STRING,
//             allowNull:true
//         },
//         avatarUrl:{
//             type:DataTypes.STRING,
//             allowNull:true
//         }

//     }
// )

// tells Sequelize "run this function automatically right before every INSERT - before User.create() is called, run this function"

User.beforeCreate(async (user) => {
  const password = user.get("password");

  if (typeof password === "string" && password.length > 0) {
    const salt = await bcrypt.genSalt(10);

    user.set("password", await bcrypt.hash(password, salt));
  }
});


export {User}