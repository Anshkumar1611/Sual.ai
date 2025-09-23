# Sual.AI Chatbot

A modern, responsive chatbot built with Next.js, React, and the Gemini API. Features a clean UI with streaming responses and real-time chat functionality.

## Features

- 🤖 **AI Chat Assistant** - Powered by Google's Gemini API
- 💬 **Real-time Streaming** - Live response streaming for better UX
- 🎨 **Modern UI** - Clean, responsive design with Tailwind CSS
- ⚡ **Fast Performance** - Optimized with Next.js 14
- 📱 **Mobile Friendly** - Responsive design for all devices
- 🔄 **State Management** - React Context for shared state

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI API**: Google Gemini
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sualai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Add your Gemini API key to `.env.local`:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/chat/          # API route for chat
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── ChatBubble/       # Main chat container
│   ├── MessageList/      # Messages display
│   ├── MessageInput/     # Input component
│   └── ...
├── contexts/             # React Context providers
├── hooks/                # Custom React hooks
├── utils/                # Utility functions
└── public/               # Static assets
```

## Deployment

The app is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `GEMINI_API_KEY` environment variable
4. Deploy!

## License

MIT License
# Sual.ai
