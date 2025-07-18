# 📞 InsureBot Quest 2025 – AI Voice Insurance Assistant

Conversational voice AI bot that **calls customers, answers insurance questions, and reminds them to pay premiums** – built for the *InsureBot Quest 2025* hackathon by ValuEnable.

![Screenshot](demo/screenshot.png)

---

## ✨ Features

- ✅ Outbound & inbound voice calls via Vapi.ai + Twilio  
- ✅ Understands and answers real customer questions about insurance policies  
- ✅ Friendly, human-like conversation with multilingual support (English, Hindi, Marathi, Gujarati)  
- ✅ Built-in RAG (Retrieval-Augmented Generation) engine: uses real insurance call scripts & knowledge base  
- ✅ Fast latency, interruption handling & follow-up questions  
- ✅ Customer support portal on website: chat or call directly from browser

---

## ⚙️ Tech Stack

- **Python** – Flask backend
- **Vapi.ai** – Conversational voice AI & call orchestration
- **Twilio** – Phone numbers & telephony integration
- **Gemini 1.5 Flash** / custom LLM – Real-time responses
- **RAG Engine** – Custom-built to answer from uploaded documents & call scripts
- **Frontend** – HTML / CSS / JavaScript customer portal

---

## 📂 Project Structure

```
├── app.py                # Flask app for handling voice & chat
├── rag_engine.py         # Retrieval-Augmented Generation engine
├── documents/            # Knowledge base & call scripts
├── templates/
│   └── index.html        # Customer support webpage
├── static/               # CSS & assets
└── requirements.txt      # Python dependencies
```

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/NeerajKumarRay1/InsureBot-Quest-2025.git
   cd InsureBot-Quest-2025
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up environment variables**  
   Create a `.env` file with your API keys for Vapi.ai, Twilio, and Gemini.

4. **Run the app**
   ```bash
   python app.py
   ```
   The customer portal will be available at `http://localhost:5000`.

---

## 🖥️ Demo

- [Demo Video](#) <!-- Add your demo video link here -->
- [Live Portal](#) <!-- Add your live deployment link here if available -->

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

[MIT](LICENSE) © 2025 ValuEnable

---

## 🙏 Acknowledgments

- [Vapi.ai](https://vapi.ai/)
- [Twilio](https://www.twilio.com/)
- [Google Gemini](https://ai.google.dev/gemini)
- [ValuEnable](https://valuenable.in/) 