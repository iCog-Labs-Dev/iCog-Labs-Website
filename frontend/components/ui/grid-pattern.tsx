"use client"

import type React from "react"
import { cn } from "@/lib/utils"

export const GridPattern = ({
  width = 100,
  height = 100,
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  width?: number
  height?: number
}) => {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-800/30 stroke-gray-800/30",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id="grid-pattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x="50%"
          y="50%"
          patternTransform="translate(-25 -25)"
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  )
}

