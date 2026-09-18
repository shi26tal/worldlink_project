import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";


export const Plan = sequelize.define(
    "Plan",
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        planName : {
            type:DataTypes.STRING,
            allowNull: false,
        },
        speed:{
            type: DataTypes.STRING,
            allowNull:false
        },
        monthlyBill:{
            // (10,2) - upto 10 digit can be accepted but with 2 decimal - 1234.00
            type: DataTypes.DECIMAL(10,2),
            allowNull:false
        },
        billingCycle:{
            type:DataTypes.STRING,
            allowNull:false
        },
        startDate:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        endDate:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        durationMonths:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        autopayEnabled:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        status:{
            type:DataTypes.STRING,
            defaultValue: "active"
        }
    }
)