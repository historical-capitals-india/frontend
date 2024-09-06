# Historical Capitals of India

## Project Overview - [Link](https://historical-indian-cities.netlify.app/)

**Historical Capitals** is an interactive web application designed to explore the history of India's ancient capitals through a map-based interface. Users can explore historical data via a dynamic Leaflet map on the left side of the screen, while a scrollable list of capitals is available on the right. The application provides a seamless experience: clicking a map marker opens a popup with the capital's name, and selecting a capital from the list highlights its marker on the map and shows detailed information below. The app also features a chatbot powered by a fine-tuned Gemini-1.5-flash LLM and a feedback form with automated email acknowledgment.

## Key Features

- **Interactive Map:** Explore historical capitals through a Leaflet map with interactive markers.
- **Synchronized List and Map:** Seamless interaction between the map markers and the list of capitals.
- **Detailed Information Display:** Detailed historical information about each capital displayed below the map.
- **Chatbot Interface:** AI-powered chatbot for answering queries about historical capitals, powered by Gemini API and LangChain.
- **Feedback Mechanism:** Automated email response system for user feedback.

## Technology Stack

### Frontend
- **[React.js](https://react.dev/):** JavaScript library for building interactive user interfaces with efficient rendering and component-based architecture.

### Backend
- **[Node.js](https://nodejs.org/en/):** Scalable JavaScript runtime for server-side applications, known for its performance and efficiency.
- **[Express.js](https://expressjs.com/):** Robust Node.js framework for building scalable web applications.
- **[Flask](https://flask.palletsprojects.com/en/3.0.x/):** Minimalist Python web framework for creating API endpoints.

### Mapping
- **[Leaflet](https://leafletjs.com/):** Open-source library for creating interactive maps, ideal for visualizing geographical data.
- **[OpenStreet Map](https://www.openstreetmap.org/):** OpenStreetMap is a collaborative, open-source platform that enables users to create, edit, and distribute freely licensed geographic data.

### Email Service
- **[SMTP](https://www.smtp.com/resources/api-documentation/):** Protocol for sending emails, used for automating feedback acknowledgments.

### Chatbot
- **[Gemini API](https://ai.google.dev/):** Google’s advanced language and multimodal AI model for intelligent interactions.
- **[LangChain](https://www.langchain.com/):** Framework for integrating large language models into applications, with tools for prompt engineering and model management.
- **[Gunicorn](https://gunicorn.org/):** Popular Python WSGI HTTP server for efficiently handling web requests.

### Visual Enhancements
- The application is fully responsive and adapts to different screen sizes, ensuring an optimal user experience across mobile, tablet, and desktop devices.

### Security
- User data security is prioritized, with secure API endpoints and email verification ensuring that feedback is safely processed.

## Getting Started

### Prerequisites

- **Python 3.x**: Ensure Python 3 is installed on your device.
- **Node.js**: Ensure Node.js is installed for running the frontend.
- **Flask**: Ensure Flask is installed for the backend API.

### Installation Instructions

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/rayaankhan/historic-capitals-india-btp2.git
    cd historic-capitals-india-btp2
    ```

2. **Setup and Run the Frontend:**
   ```bash
   npm install
   npm run dev
   ```

   Backend services are hosted on `render.com`, so the frontend will use those API calls directly. However, to work on the backend code and run it locally, follow the steps below:

3. **Setup and Run the Backend Server:**
   - **Feedback Server:**
   ```bash
   cd backend
   node index.js
   ```
   - **Chatbot API:**
   ```bash
   cd backend/chatbot
   pip3 install -r requirements.txt
   python3 chatbot.py
   ```

4. **Configure Feedback Functionality**:
    - Create a new Gmail account.
    - Go to the [Google Account Page](https://myaccount.google.com/).
    - Search for "App Password" in the search bar and create one.
    - Copy the generated app password.
    - Create a `.env` file in the `backend` folder and add:
    ```bash
    SMTP_HOST=smtp.gmail.com
    SMTP_PORT=587
    SMTP_MAIL=<GMAIL_ACCOUNT>
    SMTP_PASSWORD=<PASSWORD>
    PORT=3100
    ```

5. **Configure Chatbot Functionality**:
    - Navigate to [Gemini API](https://aistudio.google.com/app/apikey) and generate your API key.
    - Go to [LangChain Smith](https://smith.langchain.com/) and create an account.
    - Generate a LangChain API key and save it.
    - Create a `.env` file in the `backend/chatbot` folder and add:
    ```bash
    GOOGLE_API_KEY=<GEMINI_API>
    LANGCHAIN_API_KEY=<LANGCHAIN_API>
    ```

## Backend APIs

### 1. Chat API

This API allows users to send a message and receive a response generated by the LLM.

**Endpoint**:  
`POST https://historic-capitals-india-btp2-1.onrender.com/chat`

**Request Format**:
- Method: `POST`
- Headers: 
  - `Content-Type: application/json`
- Body: 
  - JSON object with a `message` field containing the user query.

**Example Request**:

```bash
curl -X POST https://historic-capitals-india-btp2-1.onrender.com/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "your message here"}'
```

**Response**:
- JSON object containing the reply from the LLM.

**Example Response**:
```json
{
  "reply": "This is the response from the model."
}
```

### 2. Feedback Email API

This API allows users to send feedback, which will trigger an automated acknowledgment email to the user.

**Endpoint**:  
`POST https://historic-capitals-india-btp2.onrender.com/sendmail`

**Request Format**:
- Method: `POST`
- Headers: 
  - `Content-Type: application/json`
- Body: 
  - JSON object with `name`, `email`, and `message` fields representing the user's feedback.

**Example Request**:

```bash
curl -X POST https://historic-capitals-india-btp2.onrender.com/sendmail \
  -H "Content-Type: application/json" \
  -d '{
        "name": "John Doe",
        "email": "johndoe@example.com",
        "message": "This is my feedback."
      }'
```

**Response**:
- JSON object containing the status of the email sending process.

**Success Response**:
```json
{
  "status": "Email sent"
}
```

**Error Response**:
```json
{
  "status": "Error sending email"
}
```

## Contributing

We welcome contributions to enhance this project. To contribute:
1. Fork the repository.
2. Create a new branch.
3. Make your changes and test them.
4. Submit a pull request with a detailed description of your changes.

## Contributors

- **[Rayaan Khan](https://github.com/rayaankhan)**
- **[Yash Shivhare](https://github.com/YashShivhare007)**
- **[Santhoshini Thota](https://github.com/santhoshinithota)**

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For inquiries or feedback, contact us at [rayaan.khan@students.iiit.ac.in](mailto:rayaan.khan@students.iiit.ac.in).