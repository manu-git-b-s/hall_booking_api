# Hall Booking API

This is an Express.js application for managing bookings and rooms at Hall API.

## Table of Contents

- [Usage](#usage)
- [Endpoints](#endpoints)
- [Demo](#demo)

## Endpoints

### GET /

- **Description:** Returns a welcome message and instructions on how to use the API.
  ![All Rooms](./postmanScreenshots/home_page.png)

### GET /hall-api/all-room-details

**Description:** Retrieves details of all available rooms.

![All Rooms](./postmanScreenshots/all_room_details.png)

### POST /hall-api/create-room

- **Description:** Creates a new room.

  ![Create Room](./postmanScreenshots/create_room.png)

### POST /hall-api/book-room

- **Description:** Books a room for a customer.
  ![](./postmanScreenshots/book_room.png)

### GET /hall-api/all-booked-rooms

- **Description:** Retrieves data of all booked rooms.
  ![](./postmanScreenshots/all_booked_rooms.png)

### GET /hall-api/customers-booked-data

- **Description:** Retrieves data of all customers with booked room details.
  ![](./postmanScreenshots/customers_booked_data.png)

### GET /hall-api/customer-booking-count

- **Description:** Retrieves booking details for each customer along with booking count.
  ![](./postmanScreenshots/customer_booking_count.png)

## Demo

Access the live demo [Hall-Booking-API](https://hall-booking-api-1b89.onrender.com/).
