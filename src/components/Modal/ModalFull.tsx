import ReactDOM from 'react-dom'
import * as S from '@/styles/modal/modalfull.style'
import { useScrollLock } from '@/hooks/useScrollLock'
import { IModalDefaultProps } from '@/types/modal'

const ModalFull = ({ id, className, isOpen, children }: IModalDefaultProps) => {
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
    <S.ModalOverlay>
      <S.ModalContainer
        id={id}
        className={className}
        onClick={e => e.stopPropagation()}>
        {/* 뒤로가기 버튼 들어갈 자리 */}
        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalContainer>
    </S.ModalOverlay>,

    modalRoot as HTMLElement
  )
}

export default ModalFull
