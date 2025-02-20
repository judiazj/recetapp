
import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  MONGO_URI: string;
  JWT_SECRET: string;
  MAIL_HOST: string;
  MAIL_USER: string;
  MAIL_PASSWORD: string;
}

const envsSchema = joi.object({
  PORT: joi.number().required(),
  MONGO_URI: joi.string().required(),
  JWT_SECRET: joi.string().required(),
  MAIL_HOST: joi.string().required(),
  MAIL_USER: joi.string().required(),
  MAIL_PASSWORD: joi.string().required(),
})
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  mongoUri: envVars.MONGO_URI,
  jwtSecret: envVars.JWT_SECRET,
  mailHost: envVars.MAIL_HOST,
  mailUser: envVars.MAIL_USER,
  mailPassword: envVars.MAIL_PASSWORD,
}