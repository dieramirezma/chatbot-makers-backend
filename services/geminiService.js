import dotenv from "dotenv"
import {inventory} from "../models/inventory.js"

import { GoogleGenerativeAI } from "@google/generative-ai"
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apiKey);

let chatHistory = []

async function callModel(message) {
  try {

    chatHistory.push({ role: "user", content: message });

    let conversation = chatHistory.map(item => `${item.role === "user" ? "Customer" : "Chatbot"}: ${item.content}`).join("\n");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const result = await model.generateContent(
      [
        `A customer is asking: ${message}.
         Here is the previous conversation:
         ${conversation}
         You have the following inventory: ${JSON.stringify(inventory)}.
         Respond like a helpful chatbot by:
         - Answering the question with some details.
         - Asking one follow-up question to engage the customer.`
      ]
    );

    const chatbotResponse = result.response.text();

    chatHistory.push({ role: "chatbot", content: chatbotResponse })

    console.log(chatbotResponse)
    return chatbotResponse
  } catch (error) {
    console.error("Error:", error)
    return `An error occurred while processing the request: ${error}`
  }
}

export default callModel