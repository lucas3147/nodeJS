import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.MS_DB as string,
    process.env.MS_USER as string,
    process.env.MS_PASSWORD as string,
    {
        dialect: 'mariadb',
        port: parseInt(process.env.MS_PORT as string)
    }
)