export type ButtonColor = 'purple' | 'violet'
type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor
  size?: ButtonSize
  fontSize?: string
  padding?: string
}
