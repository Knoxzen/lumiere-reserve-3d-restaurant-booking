"use client";

import { useEffect, useState } from "react";
import { BookingScene } from "@/components/canvas/BookingScene";
import TimeSlider from "@/components/ui/TimeSlider";
import { sliderToTime } from "@/lib/time";
import { fetchTableStatus } from "@/lib/api";

export default function BookingPage() {
    const [slider, setSlider] = useState(20)
    const [status, setStatus] = useState({})
    const [selectedTableId, setSelectedTableId] = useState<string | null>(null);

    useEffect(() => {
        const time = sliderToTime(slider)
    
        fetchTableStatus(time).then(setStatus)
      }, [slider])
    

    return (
        <main className="relative h-full w-full">
            <BookingScene status={status}/>
            <TimeSlider value={slider} onChange={setSlider}/>
        </main>
    );
}
