import { sqlConfig } from '../sqlconfig';
import { ConnectionPool } from 'mssql';
const sql = require('mssql');

const config = {
    user: sqlConfig.sqlServerUsername,
    password: sqlConfig.sqlServerPassword,
    server: sqlConfig.sqlServerIpAddress,
    database: sqlConfig.sqlServerDefaultDatabase,
}

const getSqlConnection = async (): Promise<ConnectionPool> => {
    return await sql.connect(config);
};

export async function sqlConnection<Type>(callback: (connectionPool: ConnectionPool) => Promise<Type>): Promise<Type> {
    const pool: ConnectionPool = await getSqlConnection();
    return await callback(pool).finally(() => pool.close());
};