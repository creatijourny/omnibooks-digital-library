This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
# 📚 OmniBook - Online Digital Lending Library

OmniBook is a modern online book lending platform built with Next.js where users can browse books, borrow available titles, manage returns, and explore a seamless digital library experience.

---

## 🚀 Features

- 🔐 User authentication and authorization
- 📖 Browse and search books
- 📦 Book availability tracking
- 👤 User profile management
- 📱 Fully responsive UI
- 🔔 Toast notifications with React Toastify
- ⚡ API routes with Next.js
- 🗄️ MongoDB database integration

---

## 🛠️ Tech Stack

- Next.js
- React
- HeroUI
- Tailwind CSS
- DaisyUI
- MongoDB
- Better Auth / NextAuth
- React Toastify

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/creatijourny/omnibooks-digital-library

```

Move to the project directory:

```bash
cd omnibook
```

Install dependencies:

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_secret_key

BETTER_AUTH_URL=http://localhost:3000
```

---

## ▶️ Run Development Server

```bash
npm run dev
```

Open in browser:

```txt
http://localhost:3000
```

---

## 🔐 Authentication Features

This project includes secure authentication and session management.

### Features

- Sign Up
- Sign In
- Protected Routes
- Session Management

---

## 🗃️ Database Models

### 👤 User

- Name
- Email
- Image
- Password

### 📚 Books

- Title
- Author
- Category
- Availability
- Cover Image
- Reviews

---

## 🌐 Deployment

This project can be deployed easily using Vercel.

Build command:

```bash
npm run build
```

---


## 👨‍💻 Author

Developed by PH team member.

---


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This project uses [`next/font/poppins`]

## Learn More


- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


