import prisma from "../db";

export const getAppointments = async (req, res) => {
  try {
    const appointments = await prisma.appointment.findMany();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAppointmentById = async (req, res) => {
  try {
    const appointment = await prisma.appointment.findUnique({
      where: { id: req.params.id },
    });
    if (appointment) {
      res.status(200).json(appointment);
    } else {
      res.status(404).json({ error: "Appointment not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createAppointment = async (req, res) => {
  try {
    const newAppointment = await prisma.appointment.create({
      data: req.body,
    });
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAppointment = async (req, res) => {
  try {
    const updatedAppointment = await prisma.appointment.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    await prisma.appointment.delete({
      where: { id: req.params.id },
    });
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
