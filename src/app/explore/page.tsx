"use client";

import { useEffect, useState } from "react";
import { BookingScene } from "@/components/canvas/BookingScene";
import TimeSlider from "@/components/TimeSlider";
import { sliderToTime } from "@/lib/time";
import { fetchTableStatus } from "@/lib/api";
import { SideDrawer } from "@/components/SideDrawer";
import Navbar from "@/components/Navbar";

export default function BookingPage() {
    const [slider, setSlider] = useState(20)
    const [status, setStatus] = useState({})
    const [selectedTableId, setSelectedTableId] = useState<string | null>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const time = sliderToTime(slider)
        const timer = setTimeout(() => {
            fetchTableStatus(time).then(setStatus)
        }, 500)

        return () => clearTimeout(timer)
    }, [slider])


    return (
        <main className="relative h-full w-full">
            <Navbar />
            <BookingScene status={status} onTableSelect={(tableId) => {
                setSelectedTableId(tableId)
                setOpen(true)
            }} />
            <TimeSlider onChange={setSlider} />
            <SideDrawer open={open} onOpenChange={setOpen} selectedTableId={selectedTableId || ""} />
        </main>
    );
}
