# Student Form Validation Project 🧑‍🎓

A simple and clean student registration form built using **React**, **Formik** for form handling, and **Yup** for validation. This project demonstrates how to create a fully functional and validated form with useful UI feedback for user input errors.

---

## 🚀 Features

- Formik-based form state management
- Yup-powered schema validation
- Real-time error display with `onBlur` and `touched`
- Password strength rules
- Custom validation messages
- Gender selection using radio buttons
- Grade selection using dropdown

---

## 📦 Tech Stack

- **React** (Functional Components)
- **Formik** (Form handling)
- **Yup** (Validation schema)

---

## 📋 Validation Rules

- **Full Name**: Required, minimum 8 characters
- **Email**: Required, must be a valid email
- **Password**:
  - Minimum 8 characters
  - Must include a number, uppercase, lowercase, and symbol
- **Grade**: Required (dropdown: Freshman, Sophomore, Junior, Senior)
- **Gender**: Required (radio: Male, Female, Other)

---

## 🔧 Installation & Setup

```bash
npm install
npm run dev