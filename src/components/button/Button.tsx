import * as S from './Button.styles'
import { TButtonProps } from '@/types/button'

export function Button({
  className = '',
  color,
  padding,
  onClick,
  children,
  fontSize,
  width,
  disabled = false
}: TButtonProps) {
  return (
    <S.StyledButton
      className={className}
      $color={color}
      $padding={padding}
      onClick={onClick}
      $fontSize={fontSize}
      width={width}
      disabled={disabled}>
      {children}
    </S.StyledButton>
  )
}
