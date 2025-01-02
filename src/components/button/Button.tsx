import * as S from './Button.styles'
import { TButtonProps } from '@/types/button'

export function Button({
  className = '',
  color,
  padding,
  onClick,
  children,
  fontSize,
  disabled = false
}: TButtonProps) {
  return (
    <S.StyledButton
      className={className}
      $color={color}
      $padding={padding}
      onClick={onClick}
      $fontSize={fontSize}
      disabled={disabled}>
      {children}
    </S.StyledButton>
  )
}
