import { useEffect, useState } from 'react'

interface ProgressCircleProps {
  value: number
  size?: number
}

export default function ProgressCircle({ value, size = 100 }: ProgressCircleProps) {
  const [isStrokeDashArray, setIsStrokeDashArray] = useState('276 276')
  const [isStrokeDashOffset, setIsStrokeDashOffset] = useState(0)

  const radiusCircle = size / 2 - 6 || 50 - 6
  const centerCircle = size / 2 || 50

  useEffect(() => {
    const handleProgress = (value: number) => {
      const radius = radiusCircle
      const circumference = radius * 2 * Math.PI

      setIsStrokeDashArray(`${circumference} ${circumference}`)

      const offset = circumference - (value / 100) * circumference
      setIsStrokeDashOffset(offset)
    }
    handleProgress(value)
  }, [radiusCircle, value])

  const sizeValue = () => {
    if (size >= 200) {
      return 'text-4xl'
    } else if (size >= 150) {
      return 'text-3xl'
    } else if (size >= 100) {
      return 'text-2xl'
    } else if (size >= 50) {
      return 'text-sm'
    } else {
      return 'text-xs'
    }
  }

  const voteColor = () => {
    if (value >= 70) {
      return 'text-green-500'
    } else if (value >= 40) {
      return 'text-yellow-500'
    } else {
      return 'text-red-500'
    }
  }
  return (
    <div className="relative rounded-full">
      <svg className="-rotate-90 relative" width={size} height={size}>
        <circle
          className="stroke-secondary"
          stroke="currentColor"
          strokeWidth="6"
          r={radiusCircle}
          cx={centerCircle}
          cy={centerCircle}
          strokeLinecap="round"
        />
        <circle
          className={`${voteColor()}`}
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          r={radiusCircle}
          cx={centerCircle}
          cy={centerCircle}
          strokeLinecap="round"
          strokeDasharray={isStrokeDashArray}
          strokeDashoffset={isStrokeDashOffset}
        />
      </svg>
      <div className={`font-semibold text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ${sizeValue()}`}>{value}%</div>
    </div>
  )
}
