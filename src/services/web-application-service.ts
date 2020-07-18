import { IWebApplication } from "../interfaces/web-application-interface";
import { sqlConnection } from "../sql-client";

export async function getWebApplications(): Promise<IWebApplication[]> {
    const webApplications: IWebApplication[] = await sqlConnection<IWebApplication[]>(async (pool) => {
        let result = await pool.request().query('select * from WebApplications')
        const webApplications: IWebApplication[] = result.recordset;
        return webApplications;
    });
    return webApplications;
}