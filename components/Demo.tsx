
import React, { useState, useRef, useCallback } from 'react';
import { generateVideoFromImage } from '../services/geminiService';
import { LoadingStatus } from '../types';

const LoadingMessages: Record<LoadingStatus, string> = {
  [LoadingStatus.IDLE]: '',
  [LoadingStatus.UPLOADING]: 'Reading your image...',
  [LoadingStatus.INITIALIZING]: 'Warming up the AI Core...',
  [LoadingStatus.GENERATING]: 'Reconstructing 3D model...',
  [LoadingStatus.POLLING]: 'Applying holographic effects...',
  [LoadingStatus.DONE]: 'Generation complete!',
  [LoadingStatus.ERROR]: 'An error occurred. Please try another image.',
};

const Demo: React.FC = () => {
  const [status, setStatus] = useState<LoadingStatus>(LoadingStatus.IDLE);
  const [error, setError] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        setError('Please upload a valid image file (PNG, JPG, etc.).');
        setStatus(LoadingStatus.ERROR);
        return;
    }

    setVideoUrl(null);
    setError(null);
    setStatus(LoadingStatus.UPLOADING);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = (reader.result as string).split(',')[1];
      setUploadedImage(reader.result as string);
      
      try {
        await generateVideo(base64String, file.type);
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Failed to generate video.');
        setStatus(LoadingStatus.ERROR);
      }
    };
    reader.onerror = () => {
        setError('Failed to read the file.');
        setStatus(LoadingStatus.ERROR);
    };
    reader.readAsDataURL(file);
  };
  
  const generateVideo = useCallback(async (base64String: string, mimeType: string) => {
    try {
        const videoUri = await generateVideoFromImage(base64String, mimeType, (newStatus: LoadingStatus) => {
          setStatus(newStatus);
        });

        if (videoUri) {
          const response = await fetch(`${videoUri}&key=${process.env.API_KEY}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch video: ${response.statusText}`);
          }
          const blob = await response.blob();
          const objectURL = URL.createObjectURL(blob);
          setVideoUrl(objectURL);
          setStatus(LoadingStatus.DONE);
        } else {
            throw new Error('Video generation did not return a valid URI.');
        }
    } catch (err) {
        console.error(err);
        setError('An unexpected error occurred during video generation.');
        setStatus(LoadingStatus.ERROR);
    }
  }, []);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  const isLoading = status !== LoadingStatus.IDLE && status !== LoadingStatus.DONE && status !== LoadingStatus.ERROR;

  return (
    <section id="demo" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Interactive Demo</h2>
          <p className="text-gray-400 mt-4">Upload an image and see the magic happen in real-time.</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-slate-800/60 border border-slate-700 rounded-2xl p-6 md:p-10 shadow-2xl shadow-slate-900/50">
          <div className="aspect-video w-full bg-slate-900 rounded-lg mb-6 flex items-center justify-center overflow-hidden border border-slate-700 relative">
            {videoUrl && status === LoadingStatus.DONE ? (
              <video src={videoUrl} autoPlay loop muted playsInline className="w-full h-full object-contain"></video>
            ) : isLoading ? (
                <div className="text-center p-4">
                    <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-lg font-semibold text-cyan-300">{LoadingMessages[status]}</p>
                    <p className="text-sm text-gray-400 mt-2">This may take a few minutes...</p>
                </div>
            ) : status === LoadingStatus.ERROR ? (
                <div className="text-center p-4 text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p className="font-semibold">Generation Failed</p>
                    <p className="text-sm">{error}</p>
                </div>
            ) : (
              <div className="text-center p-4">
                  {uploadedImage ? (
                      <img src={uploadedImage} alt="Uploaded preview" className="max-h-full max-w-full object-contain rounded-lg" />
                  ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <p className="text-slate-400">3D Preview Will Appear Here</p>
                    </>
                  )}
              </div>
            )}
          </div>
          
          <div className="text-center">
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
            <button
              onClick={handleUploadClick}
              disabled={isLoading}
              className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 shadow-[0_0_20px_theme(colors.cyan.500/50%)]"
            >
              {isLoading ? 'Processing...' : (videoUrl ? 'Upload Another Image' : 'Upload Image')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
