import React from 'react'
import './Departments.scss'

interface DepartmentsProps {
    name: string,
    img: string
}

const Departments = ({name, img} : DepartmentsProps) => {
  return (
    <>
        <div className='departments'>
            <img src={img} alt='imagem do depertamento'/>
            <span id='last'>{name}</span>
        </div>
    </>
  )
}

export default Departments