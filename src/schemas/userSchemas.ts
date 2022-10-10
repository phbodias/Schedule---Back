import joi from "joi";

export const signupSchema = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  profilePic: joi.string().uri(),
  password: joi.string().min(6).max(30).required(),
});

export const signinSchema = joi.object({
  password: joi.string().min(6).max(30).required(),
  email: joi.string().email().required(),
});