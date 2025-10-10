# LearnEaze - A LMS SaaS App

A modern Learning Management System (LMS) SaaS app built with **Next.js**, **Supabase**, **Stripe**, and **Vapi**. This platform enables real-time interactive learning with AI voice agents, secure user authentication, subscription-based access, and a polished UI.

---

## 🚀 Features

* **AI Voice Agents**: Engage with AI-powered tutors via low-latency voice interactions using Vapi.
* **Authentication**: Secure sign-in & sign-up flows with **Clerk** (Google & more).
* **Billing & Subscriptions**: Subscription plans, upgrades, and Stripe-powered payment management.
* **Session History & Bookmarks**: Save tutors, review past sessions, and keep learning organized.
* **Tutor Creation**: Build your own AI tutor with customizable subject, topic, and teaching style.
* **Database Integration**: Real-time storage and APIs powered by **Supabase**.
* **Modern UI/UX**: Responsive interface with **Tailwind CSS** and **shadcn/ui** components.
* **Search Functionality**: Quickly find tutors with filters and search.
* **Cross-Device Ready**: Works seamlessly on desktop, tablet, and mobile.

---

## 🛠️ Tech Stack

* **Next.js** – React framework for full-stack web apps.
* **TypeScript** – Strong typing for reliability and scalability.
* **Clerk** – Authentication, user management, and billing.
* **Supabase** – Realtime database, auth, and storage.
* **Stripe** – Subscription management and payments.
* **Vapi** – Voice AI agents for interactive learning.
* **shadcn/ui + Tailwind CSS** – UI components and styling.
* **Zod** – Schema validation.


---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add the following:

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=


```


---

## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

Then open your browser at: [http://localhost:3000](http://localhost:3000)

---

<img width="500" height="500" alt="app logo" src="https://github.com/user-attachments/assets/e3faddad-3d2f-4b1c-8d4a-14a4396a1472" />

