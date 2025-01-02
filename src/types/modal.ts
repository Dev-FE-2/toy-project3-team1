export interface IModalDefaultProps {
  id: string
  className?: string
  isOpen: boolean
  children: React.ReactNode
}

export interface IModalExtendsProps extends IModalDefaultProps {
  height?: string
}
