// Simple test script for chatbot responses
import { getChatbotResponse } from './src/utils/chatbotLogic.js';

const testQuestions = [
  "Hi there!",
  "Tell me about your skills",
  "What AWS experience do you have?",
  "Do you have any certifications?",
  "Tell me about your Kubernetes experience",
  "What projects have you worked on?",
  "How can I contact you?",
  "Where are you located?",
  "What do you do?",
  "Tell me about Terraform",
  "Random question that doesn't match anything"
];

async function testChatbot() {
  console.log("🤖 Testing Vaibhav's Portfolio Chatbot\n");
  console.log("=" .repeat(50));
  
  for (const question of testQuestions) {
    console.log(`\n👤 User: ${question}`);
    console.log("🤖 Bot:", await getChatbotResponse(question));
    console.log("-".repeat(50));
  }
}

// Run the test if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testChatbot();
}
