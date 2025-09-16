# Movies Rating Service

A RESTful API service for managing movie ratings and reviews, built with TypeScript, Express.js, and Prisma ORM.

## Overview

This service allows users to register anonymously and submit ratings and reviews for movies. It provides a clean API for managing user registrations and movie reviews with unique constraints to prevent duplicate reviews per user per movie.

## Tech Stack

- **Backend Framework**: Express.js 5.1.0
- **Language**: TypeScript 5.9.2
- **Database ORM**: Prisma 6.16.1
- **Database**: PostgreSQL
- **Additional Libraries**:
  - CORS for cross-origin resource sharing
  - UUID for unique identifier generation

## Database Schema

The application uses PostgreSQL with the following models:

### User Model
- `id`: UUID (Primary Key)
- `reviews`: Relation to Review model

### Review Model
- `id`: UUID (Primary Key)
- `movieId`: String (Movie identifier)
- `rating`: Integer (Movie rating)
- `comment`: String (Review comment)
- `createdAt`: DateTime (Timestamp)
- `userId`: UUID (Foreign Key to User)
- **Unique Constraint**: (userId, movieId) - Prevents duplicate reviews

## API Endpoints

### User Management
- `POST /v1/users/register` - Register a new anonymous user

### Reviews
- `POST /v1/reviews` - Add a new movie review
- `GET /v1/reviews/:movieId` - Get all reviews for a specific movie

## Prerequisites

Before running the application, make sure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **PostgreSQL** database running
- **Git** (for cloning the repository)

## Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd movies-rating-service
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory with your database configuration:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"
PORT=3000
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Apply migration
npx prisma migrate dev

# (Optional) View your database in Prisma Studio
npx prisma studio
```

### 5. Run the Application

#### Development Mode (with auto-reload)
```bash
npm run dev
```

#### Production Mode
```bash
# Build the project
npm run build

# Start the production server
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## Available Scripts

- `npm run dev` - Start development server with auto-reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server

### Code Structure
- **Controllers**: Handle HTTP requests and responses
- **Services**: Contain business logic and database operations
- **Routes**: Define API endpoints and middleware
- **Prisma Client**: Database access layer

