
import { GoogleGenAI, Type } from "@google/genai";
import type { Idea } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateDigitalProductIdeas = async (category: string): Promise<Idea[]> => {
    const prompt = `Generate 10 detailed and creative digital product ideas for the category: '${category}'. For each idea, provide a catchy name, a brief description (2-3 sentences), and a specific target audience.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            name: {
                                type: Type.STRING,
                                description: 'A catchy and descriptive name for the digital product idea.'
                            },
                            description: {
                                type: Type.STRING,
                                description: 'A brief 2-3 sentence description of the product.'
                            },
                            targetAudience: {
                                type: Type.STRING,
                                description: 'The specific target audience for this product.'
                            }
                        },
                        required: ["name", "description", "targetAudience"]
                    },
                },
            },
        });

        const jsonText = response.text.trim();
        const ideas: Idea[] = JSON.parse(jsonText);
        return ideas;

    } catch (error) {
        console.error("Error generating content with Gemini API:", error);
        throw new Error("Failed to generate ideas from Gemini API.");
    }
};
