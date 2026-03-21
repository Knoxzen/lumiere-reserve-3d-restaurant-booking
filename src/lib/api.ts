export async function fetchTableStatus(time: string) {
    const res = await fetch(`/api/tables?time=${time}`)
    if (!res.ok) throw new Error("Failed to fetch")
    return res.json()
  }