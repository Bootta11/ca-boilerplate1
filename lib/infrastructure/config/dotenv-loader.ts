import {config} from 'dotenv';
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

config({ path: `.env.${process.env.NODE_ENV}` });

export default process.env;
