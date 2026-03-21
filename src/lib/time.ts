export function sliderToTime(index: number) {
    const hours = Math.floor(index / 2)
    const minutes = index % 2 === 0 ? "00" : "30"
  
    return `${String(hours).padStart(2, "0")}:${minutes}`
  }