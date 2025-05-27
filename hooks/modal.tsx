import { useState } from "react"

export const useModalStateRemoving = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [idForRemoving, setIdForRemoving] = useState<null | string>(null)

    const closeModal = () => {
        setIsOpenModal(false)
        setIdForRemoving(null)
    }

    return {
        isOpenModal,
        setIdForRemoving,
        idForRemoving,
        closeModal,
        setIsOpenModal,
    }
}