
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";
import { ChatMessage } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;
  private chat: Chat;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const result: GenerateContentResponse = await this.chat.sendMessage({ message });
      return result.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "There was an error communicating with the AI. Please try again later.";
    }
  }

  async *sendMessageStream(message: string) {
    try {
      const stream = await this.chat.sendMessageStream({ message });
      for await (const chunk of stream) {
        yield (chunk as GenerateContentResponse).text || "";
      }
    } catch (error) {
      console.error("Gemini Streaming Error:", error);
      yield "Error in streaming response.";
    }
  }
}
