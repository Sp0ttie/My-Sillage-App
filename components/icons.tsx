import Svg, { Path } from "react-native-svg"

type IconProps = {
  width?: number
  height?: number
  color?: string
}

export function Search({ width = 24, height = 24, color = "#000" }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </Svg>
  )
}

export function Clock({ width = 24, height = 24, color = "#000" }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
      <Path d="M12 6v6l4 2" />
    </Svg>
  )
}

