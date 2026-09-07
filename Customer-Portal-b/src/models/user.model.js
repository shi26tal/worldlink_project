import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import bcrypt from "bcrypt";


export const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,       
        },
        password: {
            type:DataTypes.STRING,
            allowNull: false,
        }

    }
)

// tells Sequelize "run this function automatically right before every INSERT - before User.create() is called, run this function"

User.beforeCreate( async (user) => {
    if(user.password){
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }
})