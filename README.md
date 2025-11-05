# Personal Blog Project

A simple personal blog system built with Node.js and Express.js that allows users to create, read, update, and delete blog articles.

## Features

- Article management (CRUD operations)
- Admin panel for content management
- Responsive design
- Static file serving (CSS, JavaScript)
- JSON-based data storage

## Project Structure

```
src/
├── config/
│   ├── database.js
│   └── json/
│       ├── article.json
│       └── user.json
├── controllers/
│   ├── adminController.js
│   └── homeController.js
├── public/
│   ├── css/
│   │   ├── article.css
│   │   └── home.css
│   └── javascript/
├── routes/
│   └── api.js
├── views/
│   ├── article.html
│   ├── home.html
│   ├── index.html
│   └── admin/
│       ├── admin.html
│       ├── delete.html
│       ├── edit.html
│       └── new.html
└── server.js
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm (Node Package Manager)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## TODO

- [ ] Implement user authentication and authorization
- [ ] Add user registration and login functionality
- [ ] Secure admin routes with authentication middleware
- [ ] Add session management

## Technical Notes

- Data is currently stored in JSON files (`config/json/`)
- No authentication system is implemented yet - admin panel is publicly accessible
- Static files are served from the `public` directory
- Views are served as static HTML files

## Security Notice

⚠️ **Important**: This project currently does not implement any authentication or authorization mechanisms. The admin panel and API endpoints are publicly accessible. This is not suitable for production use without implementing proper security measures.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.



