# Artistly – Frontend Developer Assignment

This is the submission for the frontend developer assignment for Eventful India Marketing Services.  
It demonstrates a real-world UI implementation using **Next.js App Router**, **Tailwind CSS**, and **ShadCN UI** components, with a focus on accessibility, reusability, and best practices.

---

## 🚀 Live Demo

🔗 [View Live Site](https://artistly.vercel.app)  
💻 [Public GitHub Repo](https://github.com/Shujaulislam/artistly)


---

## 🛠️ Tech Stack

- **Next.js 15 (App Router)**
- **React 18**
- **Tailwind CSS**
- **ShadCN UI**
- **React Hook Form + Yup**
- **Mock JSON data**
- **Vercel** 

---

## 📁 Pages & Features

### `/` Homepage
- Platform overview and hero section
- CTA to browse artists
- Artist category cards (Singers, DJs, Dancers, Speakers)

### `/artists`
- Grid view of artists from mock JSON
- Category and name-based filtering

### `/onboard`
- Artist onboarding form
- Multi-select for categories and languages
- Form validation (React Hook Form + Yup)
- Toast notifications on submit

### `/dashboard`
- Manager dashboard (Vercel v0 inspired UI)
- Artist submission table with search, sort, and filter
- Actions: View, Edit, Approve, Reject, Delete
- Statistics cards with real-time updates
- Fully responsive and accessible
- Conditional rendering for empty and pending states

---

## ♿ Accessibility & Best Practices

- Semantic HTML and ARIA attributes for all forms and tables
- Proper label associations and error message accessibility
- Dark mode support via Tailwind `dark:` classes
- Responsive layout for all screen sizes
- Reusable UI components (table, badge, button, dropdown, etc.)

---

## 📦 Project Structure

```
src/
  app/
    dashboard/
      page.tsx         # Manager Dashboard page
    artists/
      page.tsx         # Artists listing page
    onboard/
      page.tsx         # Artist onboarding form
  components/
    ArtistForm.tsx     # Artist submission form
    ui/                # Reusable UI components
  data/
    artists.json       # Mock artist data
```

---

## 🔒 Notes

- All logic is client-side with mock data (per assignment instructions)
- No backend or authentication implemented
- UI prioritizes accessibility, structure, and code quality

---

## 👨‍💻 Author

**[Shuja]**  
📧 [shujaulisla@gmail.com]  
🔗 [GitHub](https://github.com/Shujaulislam) · [LinkedIn](https://linkedin.com/in/shuja-ul-islam)

---

## 📄 License

This project is for evaluation and demonstration purposes only.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
