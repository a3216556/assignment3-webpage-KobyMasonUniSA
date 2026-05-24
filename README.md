# assignment3-webpage-KobyMasonUniSA
### University of South Australia – INFOTECH Assignment 3  
### Author: Koby Mason
---
## Overview  
The Study Task Manager is a multi‑page web application designed to help students organise and track their study tasks.  
This project demonstrates core web development skills including:

- HTML structure and multi‑page navigation  
- CSS styling with a modern dark theme  
- JavaScript functionality (CRUD operations)  
- DOM manipulation  
- Form validation  
- Login system  
- Agile development workflow  
- Ethical and privacy considerations  

---

## Project Structure  
Assignment_3_WebPage/
│
├── html/
│   ├── index.html
│   ├── tasks.html
│   ├── blog.html
│   └── ethics.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── main.js
│   └── tasks.js
│
├── images/
│   ├── study1.png
│   ├── study2.png
│   ├── study3.png
│   ├── error1.png
│   └── error2.png
│
└── README.md

---

## Features  

### Login System  
A basic login system restricts access to the Study Task Manager page.  
Credentials (for demonstration only):  
- **Username:** student  
- **Password:** password123  

### Task Management (CRUD)  
Users can:  
- Create new study tasks  
- Edit existing tasks  
- Delete tasks (with confirmation)  
- View tasks in a dynamic table  

### Validation  
The system checks for:  
- Empty required fields  
- Invalid dates (past dates are rejected)  

### Live Date & Time  
Displayed at the bottom of the tasks page and updates every second.

### Dark Theme + Animations  
The entire site uses a modern dark theme with:  
- Neutral blue accent  
- Smooth fade‑ins  
- Hover transitions  
- Button lift effects  
- Table row highlights  
- Form focus glow  

---

## Testing Summary  
All features were tested across multiple iterations:

- Login system  
- Task creation  
- Task editing  
- Task deletion  
- Validation  
- Date/time display  
- Navigation  
- UI responsiveness  

Two real errors were encountered and documented in the **Project Blog** page.

---

## Agile Development  
The project was developed using a 3‑week Agile sprint plan.  
The full plan is documented in `blog.html`.

---

## 🛠 Troubleshooting Log  
Two major issues were encountered:

### 1. Login System Not Working  
Cause: DOM elements accessed before page load.  
Fix: Wrapped all JS in `window.onload`.

### 2. Edit/Delete Buttons Not Working  
Cause: Functions not exposed to global scope.  
Fix: Attached functions to `window` and defined them before rendering tasks.

Full details and reflections are in `blog.html`.

---

## Ethics & Privacy  
The project avoids storing personal data and follows ethical principles including:

- Transparency  
- Data minimisation  
- Accessibility  
- Responsible design  

Full reflection is in `ethics.html`.

---

## How to Run  
1. Download or clone the repository  
2. Open `index.html` in a browser  
3. Navigate using the top menu  
4. Log in to access the Study Task Manager  

---

## License

This project is licensed under the MIT License, which permits reuse, modification, and distribution for educational and personal purposes.

---