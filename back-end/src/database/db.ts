import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
PGDATABASE = decodeURIComponent(PGDATABASE || '');

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?option=project=${ENDPOINT_ID}`;

const url = `postgres://dbneon_user:d88GpXV2Wglb4SxXxKDrcvVQ98dgLhhd@dpg-cm8c90ocmk4c7391dgsg-a.ohio-postgres.render.com/dbneon`

export const sql = postgres(url, {ssl:true} );

const DbData = postgres({
    host: PGHOST || '',
    database: PGDATABASE || '',
    username: PGUSER || '',
    password: PGPASSWORD || '',
    port: 5432,
    ssl: 'require',
    connection: {
    options: `project=${ENDPOINT_ID || ''}`,
},
});


export { DbData }


