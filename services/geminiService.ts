
import { GoogleGenAI } from "@google/genai";
import { LoadingStatus } from '../types';
import type { VideosOperationResponse } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const generateVideoFromImage = async (
  base64ImageData: string,
  mimeType: string,
  onStatusChange: (status: LoadingStatus) => void
): Promise<string | null> => {
  onStatusChange(LoadingStatus.INITIALIZING);

  let operation: VideosOperationResponse = await ai.models.generateVideos({
    model: 'veo-2.0-generate-001',
    prompt: 'Animate this image into a short, looping holographic volumetric video. The object should rotate slowly, with glowing edges and digital particle effects. Give it a futuristic, sci-fi feel.',
    image: {
      imageBytes: base64ImageData,
      mimeType: mimeType,
    },
    config: {
      numberOfVideos: 1,
    },
  });
  
  onStatusChange(LoadingStatus.GENERATING);
  
  let pollCount = 0;
  const maxPolls = 30; // Poll for a maximum of 5 minutes (30 * 10s)

  while (!operation.done && pollCount < maxPolls) {
    onStatusChange(LoadingStatus.POLLING);
    await wait(10000); // Wait 10 seconds between polls
    
    try {
        operation = await ai.operations.getVideosOperation({ operation: operation });
    } catch(e) {
        console.error("Polling failed", e);
        // Continue to retry polling
    }
    pollCount++;
  }

  if (!operation.done) {
    throw new Error('Video generation timed out.');
  }

  const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
  
  if (!downloadLink) {
    throw new Error('Failed to retrieve video URI from the generation response.');
  }

  return downloadLink;
};
