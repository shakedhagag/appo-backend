// barbers.ts
import prisma from "../db";
import bcrypt from "bcrypt";
import { createToken } from "../modules/auth";

export const signUpBarber = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newBarber = await prisma.barber.create({
      data: { ...req.body, password: hashedPassword },
    });
    const token = createToken(newBarber);
    res.status(201).json({ barber: newBarber, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginBarber = async (req, res) => {
  // Note: This is a simplified login function. Normally, you would generate a JWT or session cookie here.
  try {
    const barber = await prisma.barber.findUnique({
      where: { email: req.body.email },
    });
    if (barber && (await bcrypt.compare(req.body.password, barber.password))) {
      const token = createToken(barber);
      res.status(200).json({ barber, token });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logoutBarber = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

export const getBarbers = async (req, res) => {
  try {
    const barbers = await prisma.barber.findMany();
    res.status(200).json(barbers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBarberById = async (req, res) => {
  try {
    const barber = await prisma.barber.findUnique({
      where: { id: req.params.id },
    });
    if (barber) {
      res.status(200).json(barber);
    } else {
      res.status(404).json({ error: "Barber not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBarber = async (req, res) => {
  try {
    const updatedBarber = await prisma.barber.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.status(200).json(updatedBarber);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBarber = async (req, res) => {
  try {
    await prisma.barber.delete({ where: { id: req.params.id } });
    res.status(200).json({ message: "Barber deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
