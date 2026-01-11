import { GoogleGenerativeAI } from '@google/generative-ai';
import type { AIService, ChatMessage } from '../types';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const geminiService: AIService = {
    name: "Gemini",
    async chat(messages: ChatMessage[]) {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        // Convertir mensajes al formato de Gemini
        const history = messages.slice(0, -1).map(msg => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }]
        }));

        const chat = model.startChat({ history });
        const lastMessage = messages[messages.length - 1];
        if (!lastMessage) throw new Error('No messages provided');
        const result = await chat.sendMessageStream(lastMessage.content);

        return (async function* () {
            for await (const chunk of result.stream) {
                yield chunk.text() || '';
            }
        })();
    }
}
