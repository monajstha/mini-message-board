# Mini Message Board

A simple message board application built with Express and TypeScript, where users can post and view messages.

## Features
- View a list of messages
- Post new messages
- View individual message details
- Organized structure with separate routers and controllers

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/mini-message-board.git
   cd mini-message-board
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   npm run dev
   ```
   The server will start on `http://localhost:3000`.

## Project Structure
```
📦 mini-message-board
├── 📂 src
│ ├── 📂 controllers
│ │ ├── 📄 indexController.ts
│ │ ├── 📄 messageDetailsController.ts
│ ├── 📂 db
│ │ ├── 📄 messages.ts
│ ├── 📂 errors
│ │ ├── 📄 CustomNotFoundError.ts
│ ├── 📂 public
│ │ ├── 🎨 styles.css
│ ├── 📂 routes
│ │ ├── 📄 indexRouter.ts
│ │ ├── 📄 msgDetailsRouter.ts
│ ├── 📂 utils/helpers
│ │ ├── 📄 avatarInitials.ts
│ │ ├── 📄 dateAndTime.ts
│ ├── 📂 views
│ │ ├── 📄 form.ejs
│ │ ├── 📄 header.ejs
│ │ ├── 📄 index.ejs
│ │ ├── 📄 messageDetails.ejs
│ ├── 📄 index.ts
├── 📄 .env
├── 📄 .gitignore
├── 📄 nodemon.json
├── 📄 package-lock.json
```

## Routes

### Home Page
- `GET /` - Displays the list of messages

### New Message
- `GET /messages/new` - Displays a form to add a new message
- `POST /messages/new` - Submits a new message

### Message Details
- `GET /messages/:msgId` - Displays details of a specific message

## Technologies Used
- **Node.js** - Server runtime
- **Express** - Web framework for handling routes
- **TypeScript** - Type safety and improved development experience
- **EJS** - Template engine for rendering views

## License
This project is licensed under the MIT License.
