import {config} from 'dotenv';

config();
//Se llaman las variables de entorno
export default{
    host:process.env.HOST||"",
    database:process.env.DATABASE||"",
    user:process.env.USER||"",
    password:process.env.PASSWORD||""

}