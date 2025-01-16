export function isDateInCurrentWeek(date: Date): boolean {
  const now = new Date()
  const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()))
  const endOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 6))

  return date >= startOfWeek && date <= endOfWeek
}

export function getDayOfWeek(date: any = new Date()): string {
  console.log(date)
  if (!(date instanceof Date)) {
    date = new Date(date)
  }

  if (isDateInCurrentWeek(date)) {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    return days[date.getDay()]
  }

  return date.toLocaleDateString()
}
