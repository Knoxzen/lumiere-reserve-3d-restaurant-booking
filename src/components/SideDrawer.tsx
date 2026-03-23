"use client";

import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { useRouter } from "next/navigation";

interface SideDrawerProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    selectedTableId: string;
}

export function SideDrawer({ open, onOpenChange, selectedTableId }: SideDrawerProps) {
    const router = useRouter();
    return (
        <Drawer open={open} onOpenChange={onOpenChange} direction="right">
            <DrawerContent>
                <div className="flex justify-end min-h-screen bg-black font-sans antialiased text-gray-300 ">
                    {/* Side Drawer Container */}
                    <aside className="w-[400px] bg-[#0A0A0A] border-l border-white/10 h-screen flex flex-col p-8 relative shadow-2xl overflow-y-auto">

                        {/* Header */}
                        <div className="flex justify-between items-start mb-10">
                            <div>
                                <h2 className="text-3xl font-light text-[#E5C167] tracking-wide">Reservation</h2>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1">
                                    Table 12 • Prime Exposure
                                </p>
                            </div>
                            <button className="text-gray-500 hover:text-white transition-colors">
                            </button>
                        </div>

                        {/* Stepper / Navigation */}
                        <nav className="space-y-6 mb-10">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-1 h-10 bg-[#E5C167] shadow-[0_0_8px_rgba(229,193,103,0.5)]"></div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[11px] uppercase tracking-widest text-[#E5C167] font-medium">01 Table Curation</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pl-5 opacity-40 hover:opacity-100 transition-opacity cursor-not-allowed">
                                <span className="text-[11px] uppercase tracking-widest">02 Booking Parameters</span>
                            </div>

                            <div className="flex items-center gap-4 pl-5 opacity-40 hover:opacity-100 transition-opacity cursor-not-allowed">
                                <span className="text-[11px] uppercase tracking-widest">03 Guest Identification</span>
                            </div>
                        </nav>

                        {/* Atmosphere Image Section */}
                        <div className="mb-8">
                            <div className="relative h-48 w-full overflow-hidden rounded-sm mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
                                    alt="Table Atmosphere"
                                    className="object-cover w-full h-full brightness-75"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-1">Atmosphere</p>
                                    <p className="text-sm font-light text-white">Kitchen View</p>
                                </div>
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-1">Service Team</p>
                                    <p className="text-sm font-light text-white">Elite Brigade</p>
                                </div>
                            </div>

                            {/* Quote / Description */}
                            <div className="border-l border-[#E5C167]/30 pl-4 py-1 italic text-xs leading-relaxed text-gray-400">
                                "Strategically positioned near the culinary pass, Table 12 offers guests a front-row seat to our brigade's precision and artistry."
                            </div>
                        </div>

                        {/* Footer Action */}
                        <div className="p-8 pt-0">
                            <button onClick={() => {
                                router.push("/booking");

                            }} 
                            className="w-full bg-gradient-to-r from-[#F2D07E] to-[#D9AC51] text-black py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-lg shadow-yellow-900/10 active:scale-[0.98]">
                                Proceed with Selection
                            </button>
                        </div>
                    </aside>
                </div>
            </DrawerContent>
        </Drawer>
    );
}