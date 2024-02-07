import ErrorHandler from "../Error/error.js";
import { Reservation } from "../Models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, date, time, email, phone } = req.body;
  if (!firstName || !lastName  || !date || !time || !email || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, date, time, email, phone });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }
    return next(error);
  }
};
