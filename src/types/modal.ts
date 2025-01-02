export interface IModalDefaultProps {
  id: string
  className?: string
  isOpen: boolean
  children: React.ReactNode
  pageTitle?: string
}

export interface IModalExtendsProps extends IModalDefaultProps {
  height?: string
}
