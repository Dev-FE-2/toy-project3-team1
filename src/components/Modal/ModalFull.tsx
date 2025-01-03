import ReactDOM from 'react-dom'
import * as S from '@/styles/modal/modalfull.style'
import { useScrollLock } from '@/hooks/useScrollLock'
import { IModalDefaultProps } from '@/types/modal'
import { MouseEvent } from 'react'
//import { useLocation, useNavigate } from 'react-router-dom'
import HeaderSub from '../header/header-sub/HeaderSub'

const ModalFull = ({
  id,
  className,
  isOpen,
  children,
  pageTitle
}: IModalDefaultProps) => {
  const modalRoot = document.getElementById('modal-container')

  // const navigate = useNavigate()
  // const { pathname } = useLocation()

  // const { closeIdModal } = useToggleModal({ modalId: id });

  useScrollLock({ isOpen })

  // const handleModalClose = useCallback(() => {
  //   navigate(-1)
  //   // closeIdModal();
  // }, [])

  // const handlePopState = useCallback(() => {
  //   // closeIdModal();
  // }, [])

  // useEffect(() => {
  //   if (isOpen) {
  //     navigate(`${pathname}?modal=${id}`)

  //     window.addEventListener('popstate', handlePopState)

  //     return () => {
  //       window.removeEventListener('popstate', handlePopState)
  //     }
  //   }
  // }, [isOpen, navigate, pathname, id, handlePopState])

  const handleClick = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation()

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <S.ModalOverlay>
      <S.ModalContainer
        id={id}
        className={className}
        onClick={handleClick}>
        <HeaderSub>{pageTitle}</HeaderSub>
        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalContainer>
    </S.ModalOverlay>,

    modalRoot as HTMLElement
  )
}

export default ModalFull
