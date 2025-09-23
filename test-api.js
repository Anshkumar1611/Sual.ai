// Simple test script for the chat API
// Run with: node test-api.js

const testChatAPI = async () => {
  const API_URL = 'http://localhost:3000/api/chat';
  const testMessage = 'Hello, how are you?';
  
  console.log('Testing Chat API...');
  console.log('Message:', testMessage);
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: testMessage }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log('✅ API Response received');
    console.log('Content-Type:', response.headers.get('content-type'));
    
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullResponse = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6));
            if (data.content) {
              fullResponse += data.content;
              process.stdout.write(data.content);
            }
            if (data.done) {
              console.log('\n\n✅ Streaming completed');
              console.log('Full response:', fullResponse);
              return;
            }
          } catch (e) {
            // Ignore parsing errors
          }
        }
      }
    }
  } catch (error) {
    console.error('❌ Error testing API:', error.message);
    console.log('\nMake sure:');
    console.log('1. The development server is running (npm run dev)');
    console.log('2. GEMINI_API_KEY is set in .env.local');
    console.log('3. The API key is valid');
  }
};

// Only run if this file is executed directly
if (require.main === module) {
  testChatAPI();
}

module.exports = { testChatAPI };
