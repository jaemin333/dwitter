import { config } from 'dotenv';
import mysql from 'mysql2';

export const pool = mysql.createPool({
    host:config.db.host,
    user:config.db.user,
    database:config.db.database,
    password:config.db.password,

});