import React, { useState } from 'react'
import './Modal.scss'
import axios from 'axios'

interface ModalProps {
    openModal: boolean
    onClose: () =>void
    title: string
    url: string
    type: string
}    

const Modal = ({openModal, onClose, title, url, type} :ModalProps )=> {
    const [isOpen] = useState<Boolean>(openModal)
    const [name, setName] = useState<string>('')

    const closeModal = () =>{
        onClose();
    }

    console.log(url)
    const add = () =>{
        if(url.length>31){

            console.log("teste")
            axios.put(url,{
                type: type,
                name: name
            })
            .then(()=>{
                console.log("atualizado com sucesso")
            })
            .catch((error)=>{
                console.error(error)
            })
        }
        else{
            axios.post(url, {
                type: type,
                name: name
            })
            .then(()=>{
                console.log("Cadastro realizado!")
            })
            .catch((error)=>{
                console.log(error)
            })
        }
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
                        <form className='modalForm' onSubmit={add}>
                            <label htmlFor='nome'>Nome:</label>
                            <input type='text' id='nome' name='nome' required onChange={(e) => setName(e.target.value)} />
                            <button type='submit'>Adicionar</button>
                        </form>
                    </div>
                </div> : ''
            }
        </>
    );
}

export default Modal