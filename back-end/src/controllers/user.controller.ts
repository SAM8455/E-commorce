import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model.js";
import { NewUserRequestBody } from "../types/types.js";

export const newUser = async (
  req: Request<{}, {}, NewUserRequestBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, gender, photo, role, _id, dob } = req.body;
    console.log(name, email, gender, photo, role, _id, dob );
    

    const user = await User.create({
      name,
      email,
      gender,
      photo,
      role,
      _id,
      dob: new Date(),
    });

    res.status(201).json({
      success: true,
      message: `Welcome ${user.name}`,
    });
  } catch (error) {
    res.status(400).json({
        success: false,
        message: [],
      })
  }
};
