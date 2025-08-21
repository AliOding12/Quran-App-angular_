# Fullstack Quran Dashboard  

![GitHub repo size](https://img.shields.io/github/repo-size/your-username/your-repo-name?color=blue)  
![GitHub contributors](https://img.shields.io/github/contributors/your-username/your-repo-name?color=green)  
![GitHub last commit](https://img.shields.io/github/last-commit/your-username/your-repo-name?color=yellow)  
![License](https://img.shields.io/badge/license-MIT-red.svg)  

---

## Introduction  

**Fullstack Quran Dashboard** is a learning-based fullstack application built with **Angular (frontend)** and **Node.js + Express (backend)**.  
It demonstrates user authentication (register/login), dashboard functionality, and a Quran service API integration.  

The project’s main goal is to provide a **practical fullstack architecture** where Angular communicates with an Express API server and a MySQL database connection.  

---

## Features  

- User Registration and Login (JWT-based authentication)  
- Interactive Dashboard (personalized content after login)  
- Quran Service Integration (fetching Quranic data)  
- Secure Backend (Express, DB config, route controllers)  
- Responsive Angular UI with modular components  
- Fast development setup with Angular + Node.js  

---

## Project Structure  

```plaintext
code/
├── server/              # Backend (Node.js + Express)
│   ├── config/          # Database connection setup
│   ├── controller/      # Controller logic (e.g., register)
│   ├── Routes/          # API routes
│   ├── package.json     # Backend dependencies
│   └── server.js        # Express entrypoint
│
└── frontend/            # Frontend (Angular)
    ├── src/
    │   ├── app/         # Angular components & services
    │   ├── index.html   # Main HTML
    │   └── styles.css   # Global styles
    ├── angular.json     # Angular project config
    ├── package.json     # Frontend dependencies
    └── tsconfig.json    # TypeScript config
````



## Table of Contents

* [Introduction](#-introduction)
* [Features](#-features)
* [Project Structure](#-project-structure)
* [Installation](#-installation)
* [Usage](#-usage)
* [Technologies Used](#-technologies-used)
* [Contributing](#-contributing-guidelines)
* [License](#-license-information)
* [Contact](#-contactauthor-information)


## Installation

### 1. Clone the repository

```
```bash
git clone https://github.com/AliOding12/Quran-App_.git
cd code
```

### 2. Setup backend (Express server)

```bash
cd server
npm install
```

### 3. Setup frontend (Angular app)

```bash
cd ../frontend
npm install
```

---

## Usage

### Run backend (server folder)

```bash
cd server
npm start
```

Server runs at: `http://localhost:5000`

### Run frontend (frontend folder)

```bash
cd frontend
ng serve
```

Frontend runs at: `http://localhost:4200`

---
```

```
## Technologies Used
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge\&logo=angular\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge\&logo=express\&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge\&logo=mysql\&logoColor=white)

---

## Contributing Guidelines

1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

Bug reports, suggestions, and improvements are welcome!

---

## License Information

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.

---

## Contact/Author Information

**Abbas Ali**

* GitHub: [AliOding12](https://github.com/AliOding12)
* Email: [abbasali1214313@gmail.com](mailto:abbasali1214313@gmail.com)


