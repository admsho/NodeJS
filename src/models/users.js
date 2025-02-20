import { DataTypes, Model } from "sequelize";// npm i sequelize,  get both objects from library
import sequelize from "../database/index.js";
import { ROLES } from "../utils/constants.js"
class Users extends Model { }

Users.init({
    id: {
        type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false
    },
    userName: {
        type: DataTypes.TEXT, allowNull: false, unique: true
    },
    password: {

        type: DataTypes.TEXT, allowNull: true
    },
    role: {
        type: DataTypes.ENUM(...Object.values(ROLES)), allowNull: false, defaultValue: ROLES.BUYER //... to remove the array structure ['buyer','admin'..] to 'buyer','admin'
    }
}, { timestamps: false, sequelize, modelName: 'users' })
export default Users;
