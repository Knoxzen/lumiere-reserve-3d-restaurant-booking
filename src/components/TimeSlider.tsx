"use client"

import { useEffect, useState } from "react"

type Props = {
  onChange: (value: number) => void
}


export default function TimeSlider({ onChange }: Props) {
  const [time, setTime] = useState(1170); // 19:30 in minutes (19 * 60 + 30)

  useEffect(() => {
    onChange(time)
  }, [time])

  const min = 1020; // 17:00
  const max = 1350; // 22:30

  // Calculate percentage for the gold track line
  const percentage = ((time - min) / (max - min)) * 100;

  const formatTime = (minutes: number) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}:${m === 0 ? '00' : m}`;
  };

  const timeLabels = [
    { label: '18:00', value: 1080 },
    { label: '18:30', value: 1110 },
    { label: '19:00', value: 1140 },
    { label: '19:30', value: 1170 },
    { label: '20:00', value: 1200 },
    { label: '20:30', value: 1230 },
    { label: '21:00', value: 1260 },
  ];
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 bg-[#1a1a1a] p-10 rounded-2xl w-full max-w-4xl font-sans text-white border border-white/5 shadow-2xl">
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">Time Sequence</p>
          <h1 className="text-6xl font-light text-[#d4af37]">{formatTime(time)}</h1>
        </div>

        {/* Time Labels */}
        <div className="flex gap-6 mt-10">
          {timeLabels.map((t) => (
            <div key={t.value} className="flex flex-col items-center">
              <span className={`text-sm transition-colors duration-200 ${time === t.value ? 'text-[#d4af37] font-medium' : 'text-gray-600'
                }`}>
                {t.label}
              </span>
              {time === t.value && <div className="h-[2px] w-full bg-[#d4af37] mt-1" />}
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full group">
        <input
          type="range"
          min={min}
          max={max}
          step={30}
          value={time}
          onChange={(e) => setTime(parseInt(e.target.value))}
          className="absolute top-0 w-full h-1 bg-transparent appearance-none cursor-pointer z-20 accent-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#ffd700] [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(255,215,0,0.8)]"
        />

        {/* Custom Track Background */}
        <div className="absolute top-[6px] w-full h-[1px] bg-gray-800 z-0"></div>

        {/* Active Track (Gold Line) */}
        <div
          className="absolute top-[6px] h-[1.5px] bg-[#d4af37] z-10 transition-all duration-150"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="flex justify-between mt-10 text-[10px] uppercase tracking-widest text-gray-600 font-bold">
        <span>First Seating 17:00</span>
        <span>Last Call 22:30</span>
      </div>
    </div>
  );
}