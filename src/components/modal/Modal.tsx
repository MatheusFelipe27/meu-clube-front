import React, { useState } from 'react'
import './Modal.scss'
import axios from 'axios'

interface ModalProps {
    openModal: boolean
    onClose: () =>void
    title: string
    url: string
    type: string
    method: string
}    

const Modal = ({openModal, onClose, title, url, type, method} :ModalProps )=> {
    const [isOpen] = useState<Boolean>(openModal)
    const [name, setName] = useState<string>('')

    const closeModal = () =>{
        onClose();
    }

    const add = () =>{
        if(method==='post'){
            url.includes('detalhes')?
                axios.post(url,{
                    detail: name
                })
                .then(()=>{
                    console.log("detalhe adicionado")
                })
                .catch((error)=>{
                    console.error(error)
                })    
            :
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
        else{
            if(url.includes('detalhes')){
                axios.put(url,{
                    detail: name
                })
                .then(()=>{
                    console.log("detalhe atualizado com sucesso")
                })
                .catch((error)=>{
                    console.error(error)
                })    
            }
            else{
                axios.put(url,{
                    type: type,
                    name: name
                })
                .then(()=>{
                    console.log("Atividade atualizada com sucesso")
                })
                .catch((error)=>{
                    console.error(error)
                })    
            }
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