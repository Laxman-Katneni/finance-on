# 💸 BudgetIQ – AI-Powered Expense Tracker

BudgetIQ is an **AI-driven expense tracking web app** that helps you stay on top of your finances.  
With a modern Next.js + React frontend, secure PostgreSQL backend, and **Gemini-powered AI**, BudgetIQ not only lets you log and manage your expenses but also provides **AI insights** to improve your financial habits.  

![BudgetIQ Landing Page](screenshots/homepage.png)

---

## 🚀 Features

- 📊 **Expense Tracking**
  - Add, edit, and delete transactions
  - Categorize expenses and incomes
  - Manage multiple accounts

- 🧾 **AI Receipt Scanner (Gemini)**
  - Upload a receipt and automatically extract transaction details  
  - Auto-fill expense forms with AI

- 💡 **AI-Powered Insights (Gemini)**
  - Personalized suggestions to optimize spending  
  - Summarized financial reports with actionable tips

- 💰 **Budgeting**
  - Set a **monthly budget**
  - Receive **email alerts** when you exceed **80% of your budget**
  - Track spending progress in real-time

- 📧 **Automated Reports**
  - Monthly **email reports** summarizing income, expenses, and insights  
  - AI-generated recommendations for improving financial health

- 🔁 **Automations**
  - Recurring transactions  
  - Scheduled budget alerts  
  - Event batching and throttling (via Inngest)

- 🔒 **Security & Rate Limiting**
  - [Clerk](https://clerk.com/) authentication for secure user management  
  - [Arcjet](https://arcjet.com/) middleware for:
    - **Rate limiting** → 10 requests/hour for collection creation per user  
    - Protection against bots and common attacks  

---

## 🛠️ Tech Stack

- **Frontend**
  - [Next.js](https://nextjs.org/) + [React](https://react.dev/)
  - [Tailwind CSS](https://tailwindcss.com/) for modern, responsive UI  
  - React Hooks (`useState`, `useEffect`, `useMemo`)
  - React Hook Form for easy form handling

- **Backend & Database**
  - [PostgreSQL](https://www.postgresql.org/) (via [Supabase](https://supabase.com/))
  - [Prisma ORM](https://www.prisma.io/)

- **AI**
  - [Gemini](https://deepmind.google/technologies/gemini/) →  
    - Receipt scanning & parsing  
    - AI-driven financial insights and recommendations  

- **Infrastructure**
  - [Inngest](https://www.inngest.com/) → CRON jobs, recurring transactions, alerts  
  - [Arcjet](https://arcjet.com/) → rate limiting & security  
  - [Clerk](https://clerk.com/) → user authentication  

---

## 📧 Email Notifications

- **Budget Alerts** → Email when spending exceeds **80%** of your monthly budget  
- **Monthly Report** → Automated summary with:
  - Expense breakdowns
  - Income tracking
  - AI insights (powered by Gemini) for smarter financial planning  

---

## ⚙️ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/Laxman-Katneni/finance-on.git
   cd BudgetIQ
2. **Install Dependencies**
   ```bash
   npm install
3. **Set up environment variables**
   Create a .env file in the root directory with:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL =
   NEXT_PUBLIC_CLERK_SIGN_UP_URL = 
   DATABASE_URL=
   DIRECT_URL=
   ARCJET_KEY=
   RESEND_API_KEY = 
   GEMINI_API_KEY = 

