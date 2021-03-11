import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from "../models/User";


export async function all(request: Request, response: Response, next: NextFunction) {
  const userRepository = getRepository(User);

  const users = await userRepository.find();

  return response.json(users);
}

export async function save(request: Request, response: Response, next: NextFunction) {
  const userRespository = getRepository(User);

  const userExists = await userRespository.findOne({
    where: [
      {
        email: request.body.email,
      }
    ],
  });

  if (!!userExists) {
    return response.status(400).json({ message: 'User already exists.' });
  }

  try {

    const hash = await bcrypt.hash(request.body.password, 10);

    const newUser = { ...request.body, password: hash };

    let user = new User()

    user = newUser;

    // const user = userRespository.create(newUser);

    const result = await userRespository.save(user);

    const token = jwt.sign(String(result.id), 'APP_SECRET_EXAMPLE');

    result.password = undefined;

    return response.json({ user: result, token });
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }

}
