import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const comparePassword = async (password: string, hash: string) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};

/**
 * createToken - Create a token for a client to sign in
 * @param client
 * @returns
 */
export const createToken = (client: any) => {
  const token = jwt.sign(
    {
      id: client.id,
      email: client.email,
      name: client.name,
      phoneNumber: client.phoneNumber,
    },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req: any, res: any, next: any) => {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = bearer.split("Bearer ")[1].trim();
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};
