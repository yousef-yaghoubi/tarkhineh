# 🍞Tarkhineh Project

Tarkhineh is a full-stack food ordering website built with Next.js. 🍽️

It allows users to browse, search, and order traditional Persian food online.  
This project demonstrates a complete web application, including a responsive frontend, interactive UI components, authentication, and backend API routes for handling data and user requests. 🚀

## 🖥️Demo

Check out the live demo here:  
**[🔗 View Demo](https://tarkhineh-1307.vercel.app)**

## 🖼️Project Preview

<p align="center">
  <img src="./assets/tarkhineh1.webp" width="500">
  <img src="./assets/tarkhineh2.webp" width="500">
  <img src="./assets/tarkhineh3.webp" width="500">
</p>

## 🛠️Technologies Used

🍞 **Next.js(App Router)**
🎨 **Tailwind CSS**  
🖼️ **SVGR**  
📱 **shadcn/ui**  
📡 **React Query**  
🍃 **MongoDB**  
🔐 **NextAuth.js**

## ✨Features

🌙 **Dark Mode**  
Support for dark mode UI with smooth theme transitions.

🌀 **Infinite Scroll**  
Seamless content loading as you scroll down the page.

📦 **Dynamic Content Handling**  
Manage content dynamically based on user interactions.

📱 **Mobile-First Design**  
Fully responsive design optimized for mobile devices.

🍔 **Interactive Mobile Menu**  
Accordion-style mobile menu using shadcn/ui.

👤 **Authentication with NextAuth.js**  
Secure login with Google OAuth and credentials-based sign-in.

🎨 **Custom UI**  
Personalized user experience with flexible components and layouts.

## 🛠️Getting Started

### 📦Prerequisites

⚙️ Node.js (v16 or higher)  
💻 Yarn or npm

### 📥Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yousef-yaghoubi/tarkhineh.git
   cd tarkhineh
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Generate Prisma client:

   ```bash
   npx prisma generate
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the application in your browser:  
   `http://localhost:3000` 🌍

### 🔐Environment Variables

Create a `.env` file in the root of the project and add the following variables:

```env
NEXTAUTH_SECRET=your-secret-key
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret
HASH_PASS_SECRET=your-password-hash-secret
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/tarkhineh
```

## 🤝Contribution

Feel free to fork the project and submit pull requests. If you have any suggestions or improvements, open an issue and we’ll take a look! 💡

## 📝License

This project is licensed under the **MIT License**. 🔒

## 🎨Figma Design

🖌️ You can view the UI/UX design of this project on Figma:  
**[🔗 View Figma File](<https://www.figma.com/design/RSeAI35Xm1iwISm7cxU3zn/Tarkhineh-%7C-Food-ordering-Website-%26-Application-(Community)>)**

---

🔧 Built with ❤️ by **Yousef Yaghoubi**
