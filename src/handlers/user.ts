import { emit } from "process";
import prisma from "../db";
import { createToken } from "../modules/auth";

export const createUser = async (req: any, res: any) => {
  const { email, name, phoneNumber } = req.body;
  const user = await prisma.client.create({
    data: {
      email: email,
      name: name,
      phoneNumber: phoneNumber,
    },
  });
  //   res.json(user);
  const token = createToken(user);
  res.json({ token });
};
