import joi from "joi";

export const signupSchema = joi.object({
  name: joi.string().min(3).required(),
  password: joi.string().min(6).required(),
  email: joi.string().email().required(),
});
