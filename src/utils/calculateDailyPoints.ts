export function calculateDailyPoints(dayOfSeason: number): string {
  if (dayOfSeason <= 0) return '0'

  const pointsArr = [2, 3]

  if (dayOfSeason === 1) {
    return formatPoints(pointsArr[0])
  } else if (dayOfSeason === 2) {
    return formatPoints(pointsArr[1])
  }

  for (let i = 3; i <= dayOfSeason; i++) {
    const dayIndex = i - 1
    const newPoints = pointsArr[dayIndex - 2] + 0.6 * pointsArr[dayIndex - 1]
    pointsArr[dayIndex] = Math.round(newPoints)
  }

  const result = pointsArr[dayOfSeason - 1]
  return formatPoints(result)
}

function formatPoints(points: number): string {
  if (points < 1000) {
    return points.toString()
  }
  const thousands = Math.floor(points / 1000)
  return `${thousands}K`
}
