"use client";

import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

interface SideDrawerProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    selectedTableId: string;
}

export function SideDrawer({open, onOpenChange, selectedTableId}: SideDrawerProps) {
    return (
        <Drawer open={open} onOpenChange={onOpenChange} direction="right">
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Table {selectedTableId}</DrawerTitle>
                    <DrawerDescription>Select a time slot to book this table</DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    );
}