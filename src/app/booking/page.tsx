"use client";

import { useEffect, useState } from "react";
import { BookingScene } from "@/components/canvas/BookingScene";
import TimeSlider from "@/components/TimeSlider";
import { sliderToTime } from "@/lib/time";
import { fetchTableStatus } from "@/lib/api";
import { SideDrawer } from "@/components/SideDrawer";

export default function BookingPage() {
    const [slider, setSlider] = useState(20)
    const [status, setStatus] = useState({})
    const [selectedTableId, setSelectedTableId] = useState<string | null>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const time = sliderToTime(slider)

        fetchTableStatus(time).then(setStatus)
    }, [slider])


    return (
        <main className="relative h-full w-full">
            <BookingScene status={status} onTableSelect={(tableId) => {
                setSelectedTableId(tableId)
                setOpen(true)                                                               
            }} />
            <TimeSlider onChange={setSlider}/>
            <SideDrawer open={open} onOpenChange={setOpen} selectedTableId={selectedTableId || ""} />
        </main>
    );
}
