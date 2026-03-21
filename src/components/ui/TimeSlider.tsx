"use client"

import { useState } from "react"

type Props = {
  value: number
  onChange: (value: number) => void
}

const TOTAL_STEPS = 48 // 24 hours * 2 (30 min)

export default function TimeSlider({ value, onChange }: Props) {
  return (
    <div className="absolute bottom-4 w-full px-8">
      <input
        type="range"
        min={0}
        max={TOTAL_STEPS - 1}
        step={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  )
}