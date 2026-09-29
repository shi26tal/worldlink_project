import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import bcrypt from 'bcrypt'
import { sequelize } from "../config/database.js";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<string>;
  declare username: string;
  declare customer_name: string;
  declare email: string;
  declare password: string;
  declare address: string;
  declare phone_primary: string;
  declare phone_secondary:CreationOptional<string>;
  declare account_status:string;
  declare internet_plan:string;
  declare internet_speed:string;
  declare internet_type:string
  declare routerId:string
  declare oltId:string
  declare pay_plan:string
  declare start_date: Date
  declare end_date: Date
  declare longitude:number
  declare latitude:number
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_primary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_secondary: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    internet_plan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    internet_speed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    internet_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    routerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    oltId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },

    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    pay_plan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { sequelize },
);

User.beforeCreate(async (user) => {
  const password = user.get("password");

  if (typeof password === "string" && password.length > 0) {
    const salt = await bcrypt.genSalt(10);

    user.set("password", await bcrypt.hash(password, salt));
  }
});

export { User };
