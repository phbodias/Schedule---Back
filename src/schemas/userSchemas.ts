import joi from "joi";

export const signupSchema = joi.object({
  name: joi.string().min(3).required(),
  password: joi.string().min(6).max(30).required(),
  email: joi.string().email().required(),
});

export const signinSchema = joi.object({
  password: joi.string().min(6).max(30).required(),
  email: joi.string().email().required(),
});