import ReactDOM from 'react-dom'
import * as S from '@/styles/modal/modal.style'
import { useScrollLock } from '@/hooks/useScrollLock'
import { IModalExtendsProps } from '@/types/modal'

const Modal = ({
  id,
  className,
  isOpen,
  children,
  height
}: IModalExtendsProps) => {
  const modalRoot = document.getElementById('modal-container')

  // const navigate = useNavigate()
  // const { pathname } = useLocation()

  // const { closeIdModal } = useToggleModal({ modalId: id });

  useScrollLock({ isOpen })

  // const handleModalClose = useCallback(() => {
  //   navigate(-1)
  //   // closeIdModal();
  // }, [navigate])

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

  // if (!isOpen) return null

  return ReactDOM.createPortal(
    <S.ModalOverlay $height={height}>
      <S.ModalContainer
        id={id}
        className={className}
        onClick={e => e.stopPropagation()}>
        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalContainer>
    </S.ModalOverlay>,

    modalRoot as HTMLElement
  )
}

export default Modal
