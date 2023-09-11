import React, {useState } from 'react'
import './DetailedCard.scss'
import Modal from '../modal/Modal'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import axios from 'axios'
import { BASE_URL } from '../../constants/Constants'


interface DetailedCardProps {
    img: string
    name: string
    keyIdx: Number
    type: string
}

const DetailedCard = ({img, name, keyIdx, type} : DetailedCardProps) => {
    const [hasInfo, setHasInfo] = useState<boolean>(false)
    const [clickedDetails, setClickedDetails] = useState<boolean>(false)
    const [addDetails, setAddDetails] = useState<boolean>(false)
    const [edit, setEdit] = useState<boolean>(false)


    const close = ()=>{
        setAddDetails(false)
        setEdit(false)
    }

    const deleteProcess = () =>{
        axios({
            method: 'delete',
            url: `${BASE_URL}/processos/${keyIdx}`
        })
        .then(()=>{
            console.log("deletado com sucesso")
            window.location.reload()
        })
        .catch((error)=>{
            console.error(error)
        })
    }

  return (
    <>
        <div className='detailedCard'>
            <div className='todoDetailed'> 
                <span onClick={()=> setEdit(true)}><AiFillEdit size={'18px'}/></span>
                {edit?
                    <Modal openModal={edit} onClose={close}
                        title='Editar Atividade' url={`${BASE_URL}/processos/${keyIdx}`}
                        type={type}
                    />
                    : ' '
                }
                <span onClick={deleteProcess}><AiFillDelete size={'18px'}/></span>
            </div>
            <img src={img} alt='imagem do depertamento'/>
            <span id='detailedName'>{name}</span>
            <div className='detailedBottom'>   
                <span id='detailedInfo' onClick={()=> setAddDetails(true)}> Adicionar detalhe</span>
                {addDetails? 
                    <Modal openModal={addDetails} onClose={close} 
                        title='Adicionar detalhe' url= "" type=''
                    />
                    : ''
                }
                <span id='detailedInfo' onClick={()=> setClickedDetails(!clickedDetails)}> Ver detalhes</span>
            </div>
            {clickedDetails?
                <div className='detailedInfoVal'>
                </div>
                :
                ''
            }
        </div>
    </>
  )
}

export default DetailedCard