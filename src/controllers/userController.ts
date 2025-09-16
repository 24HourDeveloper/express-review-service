import { Request, Response } from "express";
import * as userService from "../services/userService";

export async function registerUser(req: Request, res: Response) {
  const user = await userService.createAnonymousUser();
  res.json({ id: user.id });
}
