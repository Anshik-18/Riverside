"use client";
import { useEffect, useRef, useState } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { VideoCameraIcon,MicrophoneIcon,SpeakerWaveIcon } from "@heroicons/react/16/solid";

import clsx from 'clsx'


export default function MediaSetup() {
  const [devices, setDevices] = useState<{ cameras: any[]; mics: any[]; speakers: any[] }>({
    cameras: [],
    mics: [],
    speakers: [],
  });
  const [selectedCam, setSelectedCam] = useState<string | null>(null);
  const [selectedMic, setSelectedMic] = useState<string | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Get all devices (camera, mic, speakers)
  const getDevices = async () => {
    const allDevices = await navigator.mediaDevices.enumerateDevices();
    console.log("All devices:", allDevices);
    setDevices({
      cameras: allDevices.filter((d) => d.kind === "videoinput"),
      mics: allDevices.filter((d) => d.kind === "audioinput"),
      speakers: allDevices.filter((d) => d.kind === "audiooutput"),
    });
  };

  // Start video preview
  const startPreview = async (deviceId?: string) => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: deviceId ? { deviceId } : true,
      audio: true,
    });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  };

  useEffect(() => {
    getDevices();
    startPreview();
  }, []);

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl w-full max-w-sm space-y-4">
      {/* Video Preview */}
      <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
        <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
      </div>

      {/* Camera Selector */}
   <div className="flex items-center justify-between bg-zinc-800 rounded-lg px-4 py-2 text-gray-200 ">
        <Listbox value={selectedCam} onChange={setSelectedCam}>
            <div className="relative w-full">
                <ListboxButton
                    className="relative w-full cursor-pointer rounded-lg bg-zinc-800 py-2 pl-3 pr-8 text-left text-sm text-white flex items-center gap-2"
                >
                    {VideoCameraIcon && <VideoCameraIcon className="w-5 h-5 mr-2 text-gray-300" />}
                    {devices.cameras.find((cam) => cam.deviceId === selectedCam)?.label || "Select Camera"}
                    <ChevronDownIcon
                    className="absolute right-2 top-2.5 size-4 text-gray-300"
                    aria-hidden="true"
                    />
                </ListboxButton>

                    <ListboxOptions
                        className="absolute z-10 mt-2 w-full rounded-lg bg-zinc-800 border border-zinc-700 shadow-lg"
                    >
                        {devices.cameras.map((cam) => (
                        <ListboxOption
                            key={cam.deviceId}
                            value={cam.deviceId}
                            className={({ active, selected }) =>
                            `cursor-pointer select-none px-4 py-2 text-sm rounded-md flex items-center justify-between ${
                                active ? "bg-zinc-700 text-white" : "text-gray-300"
                            } `
                            }
                        >
                            {cam.label || "Camera"}
                            {selectedCam === cam.deviceId && (
                            <CheckIcon className="h-4 w-4 text-green-400 ml-2" aria-hidden="true" />
                            )}
                        </ListboxOption>
                        ))}
                    </ListboxOptions>
                 </div>
            </Listbox>
        </div>


      {/* Microphone Selector */}
         <div className="flex items-center justify-between bg-zinc-800 rounded-lg px-4 py-2 text-gray-200 ">
                <Listbox value={selectedMic ?? ""} onChange={setSelectedMic}>
                    <div className="relative w-full">
                        <ListboxButton
                            className="relative w-full cursor-pointer rounded-lg bg-zinc-800 py-2 pl-3 pr-8 text-left text-sm text-white flex items-center gap-2 "
                        >
                            {MicrophoneIcon && <MicrophoneIcon className="w-5 h-5 mr-2 text-gray-300" />}
                            {devices.mics.find((mic) => mic.deviceId === selectedMic)?.label || "Select Microphone"}
                            <ChevronDownIcon
                            className="absolute right-2 top-2.5 size-4 text-gray-300"
                            aria-hidden="true"
                            />
                        </ListboxButton>

                        <ListboxOptions
                            className="absolute z-10 mt-2 w-full rounded-lg bg-zinc-800 border border-zinc-700 shadow-lg"
                        >
                            {devices.mics.map((mic) => (
                            <ListboxOption
                                key={mic.deviceId}
                                value={mic.deviceId}
                                className={({ active, selected }) =>
                                `cursor-pointer select-none px-4 py-2 text-sm rounded-md flex items-center justify-between ${
                                    active ? "bg-zinc-700 text-white" : "text-gray-300"
                                } `
                                }
                            >
                                {mic.label || "Microphone"}
                                {selectedMic === mic.deviceId && (
                                <CheckIcon className="h-4 w-4 text-green-400 ml-2" aria-hidden="true" />
                                )}
                            </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </div>
                </Listbox>
        </div>

    

      {/* Speaker Selector */}
         <div className="flex items-center justify-between bg-zinc-800 rounded-lg px-4 py-2 text-gray-200 ">
            <Listbox value={selectedSpeaker ?? ""} onChange={setSelectedSpeaker}>
                <div className="relative w-full">
                    <ListboxButton
                        className="relative w-full cursor-pointer rounded-lg bg-zinc-800 py-2 pl-3 pr-8 text-left text-sm text-white outline-none flex items-center gap-2  "
                    >
                        {SpeakerWaveIcon && <SpeakerWaveIcon className="w-5 h-5 mr-2 text-gray-300" />}
                        {devices.speakers.find((spk) => spk.deviceId === selectedSpeaker)?.label || "Select Speaker"}
                        <ChevronDownIcon
                        className="absolute right-2 top-2.5 size-4 text-gray-300"
                        aria-hidden="true"
                        />
                    </ListboxButton>

                    <ListboxOptions
                        className="absolute z-10 mt-2 w-full rounded-lg bg-zinc-800 border border-zinc-700 shadow-lg"
                    >
                        {devices.speakers.map((spk) => (
                        <ListboxOption
                            key={spk.deviceId}
                            value={spk.deviceId}
                            className={({ active, selected }) =>
                            `cursor-pointer select-none px-4 py-2 text-sm rounded-md flex items-center justify-between ${
                                active ? "bg-zinc-700 text-white" : "text-gray-300"
                            } `
                            }
                        >
                            {spk.label || "Speaker"}
                            {selectedSpeaker === spk.deviceId && (
                            <CheckIcon className="h-4 w-4 text-green-400 ml-2" aria-hidden="true" />
                            )}
                        </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    </div>
  );
}
