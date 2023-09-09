import React, { useState } from 'react'
import './DetailedCard.scss'

interface DetailedCardProps {
    name: string,
    img: string
}

const DetailedCard = ({name, img} : DetailedCardProps) => {
    const [hasInfo, setHasInfo] = useState<Boolean>(false)
    const [clickedDetails, setClickedDetails] = useState<Boolean>(false)

  return (
    <>
        <div className='detailedCard'>
            <img src={img} alt='imagem do depertamento'/>
            <span id='detailedName'>{name}</span>
            <div className='detailedBottom'>   
                <span id='detailedInfo'> Adicionar detalhe</span>
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