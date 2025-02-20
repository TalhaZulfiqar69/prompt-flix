# Prompt Flix
### 📌 Project Overview

PromptFlix is an innovative AI-powered platform for scripts, images, and videos generation that transforms simple text prompts into engaging scripts and automatically generates videos based on those scripts. By leveraging cutting-edge AI models from Hugging Face, it streamlines the entire content creation process—making it accessible for storytellers, content creators, marketers, and filmmakers.


### 🚀 Features

* Frontend: Built with React and Vite.
* Backend: Express.js for REST API.
* Database: MongoDB for storing data.
* ES6 Modules: Uses import/export instead of require.
* Git Setup: .gitignore included to prevent unnecessary files from being pushed.
* AI Recommendations: Uses machine learning algorithms to suggest movies and TV shows.
* User Authentication: Secure login and signup system.
* Watchlist: Users can save their favorite movies and shows.
* Search & Filters: Advanced search with genre and rating filters.


## 🔧 Project Setup Guide
### 🛠️ 1. Clone the Repository

```
git clone https://github.com/TalhaZulfiqar69/prompt-flix.git
cd project-folder
```

## 📦 2. Install Dependencies
Run the following command in the root directory to install both frontend and backend dependencies:

```
npm install
```

Or, install separately:

```
cd frontend && npm install
cd ../backend && npm install
```

### ⚙️ 3. Environment Variables Setup

Create a .env file inside the backend directory and add the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
AI_API_KEY=your_ai_api_key
```

### ▶️ 4. Run the Application

Start both frontend and backend together using:

```
npm run dev
```

Or, run separately:

```
# Start backend
cd backend && npm start

# Start frontend
cd frontend && npm run dev
```

### 🌍 5. Access the Application

* Frontend: http://localhost:5173
* Backend: http://localhost:5000

## 📂 Project Structure
```
PromptFlix/
│── backend/            # Express.js server
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── controllers/    # Request handlers
│   ├── config/         # DB connection
│   ├── index.js        # Main server file
│
│── frontend/           # React.js frontend
│   ├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Application pages
│   ├── App.jsx         # Root component
│   ├── vite.config.js  # Vite configuration
│
│── package.json        # Project metadata
│── .gitignore          # Files ignored in Git
│── README.md           # Project documentation
```

## 🛠️ Technologies Used

* Frontend: React.js, Vite
* Backend: Node.js, Express.js
* Database: MongoDB
* AI Integration: OpenAI / Custom AI model
* Package Manager: npm
* Version Control: Git & GitHub

## 💡 Contribution Guidelines

* Fork the repository.
* Create a new branch (git checkout -b feature-branch).
* Commit your changes (git commit -m 'Added new feature').
* Push to the branch (git push origin feature-branch).
* Create a Pull Request.

## 📜 License

This project is open-source and available under the MIT License.

## 📞 Contact

For any queries or contributions, feel free to reach out!
* 📧 Email: talhazee18@gmail.com
* 🔗 GitHub: https://github.com/TalhaZulfiqar69
* 🔗 LinkedIn: https://www.linkedin.com/in/talha-zee/
* 🔗 Upwork: https://www.upwork.com/freelancers/~01c32a02212b515091
