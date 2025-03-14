# Simple Library

### A fully functional library platform built entirely by me, featuring secure microservices and modern frontend.

## Live Demo

[Click here to access Simple Library](#) _(Demo link available upon project completion)_

> **Note:** The live demo may experience limited functionality as the project uses a free database server.

## ⚙️ Technologies Used

- **Backend**: Django, Django Rest Framework, PostgreSQL
- **Frontend**: React JS (Vite), Tailwind CSS, Axios
- **Authentication**: Simple JWT with LocalStorage

---

## 🌟 Project Goals

- **Full-Stack Development**: Mastering backend and frontend integration using modern tools.
- **Secure Microservices**: Implementing robust and secure solutions, with a focus on user data security.
- **Scalability**: Designing the architecture to support large-scale usage.
- **User Experience**: Providing smooth navigation and a user-friendly interface for book viewing and editing.

---

## 💻 Project Highlights

### Backend Features

- **RESTful API**: Built with Django and Django Rest Framework to manage library operations.
- **Database Management**: PostgreSQL used for secure and efficient data storage.
- **Microservices**:
  - JWT authentication to ensure secure user logins.
  - Secure password storage using industry-standard cryptographic practices.
- **Error Handling**: Comprehensive error handling for invalid requests and server issues.

### Frontend Features

- **Modern Frontend**: Developed with React JS and Vite for fast development and excellent performance.
- **Styling**: Tailwind CSS for a responsive and visually appealing design.
- **Dynamic Functionality**:
  - Book viewing functionality with options to edit books if the user is the owner.
  - Intuitive interface to view and edit book details.

---

## 🛠️ Installation Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/JoaoPedro787/simple-library.git
cd simple-library
```

### 2. Install Dependencies

- **Backend**:
  ```bash
  cd backend
  pip install -r requirements.txt
  ```
- **Frontend**:
  ```bash
  cd frontend
  npm install
  ```

### 3. Configure Database Connection

Create a `.env` file with the following environment variables (do not include real data):

```env
DATABASE_NAME=books
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_HOST=
DATABASE_PORT=
```

### 4. Start the Project

- **Backend**:
  ```bash
  cd backend
  python manage.py runserver
  ```
- **Frontend**:
  ```bash
  cd frontend
  npm run dev
  ```

### 5. Open the Project in Your Browser

- Backend: `http://localhost:8000`
- Frontend: `http://localhost:5173`

---

## 🔗 Project Status

- Current progress: **100%**
