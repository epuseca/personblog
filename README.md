# Personal Blog Project

A modern personal blog system built with React (Vite) frontend and Node.js/Express.js backend that allows users to create, read, update, and delete blog articles.

## Features

- Modern React frontend with Vite
- Article management (CRUD operations)
- Admin panel for content management
- Role-based access (User/Admin views)
- Responsive design with SCSS
- RESTful API backend
- JSON-based data storage

## Project Structure

```
frontend-vite/               # React frontend
├── src/
│   ├── components/
│   │   ├── Admin/         # Admin panel components
│   │   ├── Home/         # Home page components
│   │   └── Login/        # Authentication components
│   ├── services/         # API service layer
│   ├── utils/           # Utility functions & axios setup
│   ├── App.jsx         # Main React component
│   └── main.jsx       # Application entry point
│
src/                    # Backend
├── config/
│   ├── database.js
│   └── json/          # JSON data storage
│       ├── article.json
│       └── user.json
├── controllers/       # API controllers
├── routes/           # Express routes
└── server.js         # Backend entry point
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm (Node Package Manager)

### Installation & Setup

1. Clone the repository

2. Setup Backend:
```bash
# From project root
npm install
npm start
```

3. Setup Frontend:
```bash
# From frontend-vite directory
npm install
npm run dev
```

The application will be available at:
- Frontend (Development): http://localhost:5173
- Backend API: http://localhost:3000

## Development

### Running in Development Mode

1. Start the backend server:
```bash
# From project root
node src/server.js
```

2. Start Vite dev server (with hot reload):
```bash
# From frontend-vite directory
npm run dev
```

### Building for Production

1. Build the frontend:
```bash
# From frontend-vite directory
npm run build
```

2. The built files will be in `frontend-vite/dist/`

## Technical Stack

### Frontend
- React 18
- React Router for navigation
- Axios for API calls
- SCSS for styling
- Vite for build tooling

### Backend
- Node.js & Express
- JSON file-based storage
- RESTful API endpoints

## API Endpoints

- `GET /all-article` - Get all articles
- `GET /article/:id` - Get single article
- `POST /article` - Create article (admin only)
- `PUT /article/:id` - Update article (admin only)
- `DELETE /article/:id` - Delete article (admin only)

## TODO

- [ ] Implement user authentication and authorization
- [ ] Add user registration and login functionality
- [ ] Secure admin routes with authentication middleware
- [ ] Add session management
- [ ] Implement persistent data storage (database)
- [ ] Add article search functionality
- [ ] Add article categories/tags

## Security Notice

⚠️ **Important**: This project currently does not implement any authentication or authorization mechanisms. The admin panel and API endpoints are publicly accessible. This is not suitable for production use without implementing proper security measures.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Link 

https://roadmap.sh/projects/personal-blog


