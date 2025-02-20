import { DataTypes, Model } from "sequelize";//get both objects from library
import sequelize from "../database/index.js";
class Products extends Model { }

Products.init({
    id: {
        type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false
    },
    name: {
        type: DataTypes.TEXT, allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE, allowNull: true
    }
}, { timestamps: false, sequelize, modelName: 'products' })
export default Products;
