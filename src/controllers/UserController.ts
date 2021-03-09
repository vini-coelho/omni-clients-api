import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../models/User";


export async function all(request: Request, response: Response, next: NextFunction) {
  const userRepository = getRepository(User);

  const users = await userRepository.find();

  return response.json(users);
}

export async function one(request: Request, response: Response, next: NextFunction) {
  const userRepository = getRepository(User);

  return userRepository.findOne(request.params.id);
}

export async function save(request: Request, response: Response, next: NextFunction) {
  const userRepository = getRepository(User);

  const user = await userRepository.save(request.body);

  return response.json(user);
}

export async function remove(request: Request, response: Response, next: NextFunction) {
  const userRepository = getRepository(User);

  let userToRemove = await userRepository.findOne(request.params.id);
  await userRepository.remove(userToRemove);
}

