import React, { useState } from 'react'
import './Modal.scss'

interface ModalProps {
    openModal: boolean
    onClose: () =>void
    title: string
}    

const Modal = ({openModal, onClose, title} :ModalProps )=> {
    const [isOpen] = useState<Boolean>(openModal)

    const closeModal = () =>{
        onClose();
    }
  return (
        <>
            {isOpen?
                <div className='modal'>
                    <div className='modalOverlay' onClick={closeModal}></div>
                    <div className='modalContent'>
                        <div className='modalTop'>
                            <span>{title}</span>
                            <span id='close' onClick={closeModal}>X</span>
                        </div>
                        <form className='modalForm'>
                            <label htmlFor='nome'>Nome:</label>
                            <input type='text' id='nome' name='nome' required />
                            <button type='submit'>Adicionar</button>
                        </form>
                    </div>
                </div> : ''
            }
        </>
    );
}

export default Modal