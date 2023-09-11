import React, {useEffect, useState } from 'react'
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
    const [clickedDetails, setClickedDetails] = useState<boolean>(false)
    const [addDetails, setAddDetails] = useState<boolean>(false)
    const [edit, setEdit] = useState<boolean>(false)
    const [editDetail, setEditDetail] = useState<boolean>(false)

    const [data, setData] = useState<any>()

    const close = ()=>{
        setAddDetails(false)
        setEdit(false)
        setEditDetail(false)
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

    const deleteDetail = (index : Number) =>{
        axios({
            method: 'delete',
            url: `${BASE_URL}/processos/${keyIdx}/detalhes/${index}`
        })
        .then(()=>{
            console.log("deletado com sucesso")
            window.location.reload()
        })
        .catch((error)=>{
            console.error(error)
        })
    }


    const seeDetails = () =>{
        setClickedDetails(!clickedDetails)
    }

    useEffect(()=>{
        axios({
            method: 'get',
            url: `${BASE_URL}/processos`
        })
        .then((res)=>{
            setData( res.data.filter((el: DetailedCardProps, index: Number) => index===keyIdx))
        })
        .catch((error)=>{
            console.error(error)
        })
    }, [])

  return (
    <>
        <div className='detailedCard'>
            <div className='todoDetailed'> 
                <span onClick={()=> setEdit(true)}><AiFillEdit size={'18px'}/></span>
                {edit?
                    <Modal openModal={edit} onClose={close}
                        title='Editar Atividade' url={`${BASE_URL}/processos/${keyIdx}`}
                        type={type} method='put'
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
                        title='Adicionar detalhe' url= {`${BASE_URL}/processos/${keyIdx}/detalhes`} 
                        type= {type} method='post'
                    />
                    : ''
                }
                <span id='detailedInfo' onClick={seeDetails}> Ver detalhes</span>
            </div>
            {clickedDetails?
                <div className='detailedInfoVal'>
                    {data[0].details.length>0?
                       data.map((val : any)=>(
                            val.details.map((
                                detail : any, index: number) =>(
                                    <div key={index} className='detailedDiv'> 
                                        <span> {detail}</span>
                                        <div className='detailedIcons'> 
                                            <span onClick={() =>setEditDetail(true)}><AiFillEdit size={'18px'}/></span>
                                            {editDetail?
                                                <Modal openModal={editDetail} onClose={close}
                                                    title='Editar detalhe' url={`${BASE_URL}/processos/${keyIdx}/detalhes/${index}`}
                                                    type={type} method='put'
                                                />
                                                : ' '
                                            }
                                            <span onClick={()=>deleteDetail(index)}><AiFillDelete size={'18px'}/></span>
                                        </div>
                                    </div>
                            ))
                       ))
                        :
                        <span>Não há informações no momento!</span>
                    }
                </div>
                :
                ''
            }
        </div>
    </>
  )
}

export default DetailedCard