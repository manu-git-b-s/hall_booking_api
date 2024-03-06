import express from "express";
import {
  AllCustomersBookedData,
  CustomerBookingDetails,
  bookRoom,
  createRoom,
  getAllBookedRooms,
  getAllRooms,
} from "../controllers/booking.js";

let router = express.Router();

// All Room Details
router.get("/all-room-details", getAllRooms);

// Creating a New Room
router.post("/create-room", createRoom);

// Function to book room
router.post("/book-room", bookRoom);

// To get all booked rooms
router.get("/all-booked-rooms", getAllBookedRooms);

router.get("/customers-booked-data", AllCustomersBookedData);
router.get("/customer-booking-count", CustomerBookingDetails);

export default router;
