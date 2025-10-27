'use client';
import { use, useState } from 'react';
import CameraMicInput from '@/components/ui/camera_mic_input';
export default function StudioCreate(){
  const [usingHeadphones, setUsingHeadphones] = useState(false);
  const [name, setName] = useState('');
  return (
    <div className='flex min-h-screen bg-black text-white'>
      <div className='w-1/2 flex items-center justify-center p-10'>
        <div className=" min-h-screen bg-black flex items-center justify-center p-5">
          <div className="w-full max-w-xl">
            <p className="text-gray-400 text-base mb-3">
              You're about to join Code Kickstart
            </p>
            
            <h1 className="text-4xl font-semibold mb-10">
              Let's check your cam and mic
            </h1>

              <div className="bg-zinc-800 rounded-xl p-5 flex items-center justify-between mb-5">
              <input
                className="text-lg bg-transparent outline-none flex-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
              <span className="bg-zinc-700 text-gray-400 px-4 py-1.5 rounded-lg text-sm ml-3">
                Host
              </span>
              </div>

            <div className="flex gap-3 mb-5">
              <button
                onClick={() => setUsingHeadphones(false)}
                className={`flex-1 py-4 px-6 rounded-xl font-medium transition-all ${
                  !usingHeadphones
                    ? 'bg-purple-500 text-white'
                    : 'bg-zinc-800 text-white hover:opacity-80'
                }`}
              >
                I am not using headphones
              </button>
              
              <button
                onClick={() => setUsingHeadphones(true)}
                className={`flex-1 py-4 px-6 rounded-xl font-medium transition-all ${
                  usingHeadphones
                    ? 'bg-purple-500 text-white'
                    : 'bg-zinc-800 text-white hover:opacity-80'
                }`}
              >
                I am using headphones
              </button>
            </div>

            <button className="w-full bg-purple-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-purple-600 transition-colors mb-5">
              Join studio
            </button>

            <p className="text-gray-400 text-sm">
              You are joining as a host.

            </p>
          </div>
        </div>
      </div>
      <div className='w-1/2 flex items-center justify-center p-10'>
        {/* Camera and Mic Input Component */}
        <CameraMicInput />
      </div>
    </div>
  );

}