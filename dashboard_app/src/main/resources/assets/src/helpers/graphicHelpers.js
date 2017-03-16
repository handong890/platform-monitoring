//export const scaledPoints = (points, maxX, xAxisMargin, maxY, yAxisMargin) => {
//  const yMax = 100 - xAxisMargin
//  const maxYPoint = Math.max(...points)
//  const yRatio = yMax / maxYPoint
//
//  const xMax = 100 - yAxisMargin
//  const maxXPoint = points.length
//  const xRatio = xMax / maxXPoint
//
//  const scaledPoints = points.map((p, i) => {
//    const x = i * xRatio + yAxisMargin
//    const y = p * yRatio
//    return `${x ? x : 0},${y ? (100 - y + xAxisMargin) : 0}` // TODO: Handle NaN (x/y = 0) more gracefully
//  })
//
//  return scaledPoints.join(' ')
//}

export const scaledPoints = (points, maxX, xAxisMargin, maxY, yAxisMargin) => {
  return ''
}