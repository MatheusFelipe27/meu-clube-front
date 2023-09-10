import React, { useState } from 'react'
import './DetailedCard.scss'
import Modal from '../modal/Modal'

interface DetailedCardProps {
    img: string
}

const DetailedCard = ({img} : DetailedCardProps) => {
    const [hasInfo, setHasInfo] = useState<boolean>(false)
    const [clickedDetails, setClickedDetails] = useState<boolean>(false)
    const [addDetails, setAddDetails] = useState<boolean>(false)

    const close = ()=>{
        setAddDetails(false)
    }
    
  return (
    <>
        <div className='detailedCard'>
            <img src={img} alt='imagem do depertamento'/>
            <span id='detailedName'>teste</span>
            <div className='detailedBottom'>   
                <span id='detailedInfo' onClick={()=> setAddDetails(true)}> Adicionar detalhe</span>
                {addDetails? <Modal openModal={addDetails} onClose={close} title='Adicionar detalhe'/>: ''}
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