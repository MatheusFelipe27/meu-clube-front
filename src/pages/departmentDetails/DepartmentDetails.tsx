import React, { useEffect, useState } from 'react'
import './DepartmentDetails.scss'
import { useParams } from 'react-router-dom'
import soccerRemoved from './../../assets/soccerRemoved.png'
import financesRemoved from './../../assets/financesRemoved.png'
import marketingRemoved from './../../assets/marketingRemoved.png'
import medicineRemoved from './../../assets/medicineRemoved.png'
import baseRemoved from './../../assets/baseRemoved.png'
import socialmediaRemoved from './../../assets/socialmediaRemoved.png'
import soccer from './../../assets/soccer.png'
import finances from './../../assets/finances.png'
import marketing from './../../assets/marketing.png'
import medicine from './../../assets/medicine.png'
import base from './../../assets/base.png'
import socialmedia from './../../assets/socialmedia.png'

import Navbar from '../../components/navbar/Navbar'
import DetailedCard from '../../components/detailedCard/DetailedCard'
import Modal from '../../components/modal/Modal'

import { BASE_URL } from '../../constants/Constants'
import axios from 'axios'

const DepartmentDetails = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    useEffect(()=>{

      window.scrollTo(0, 0)
    },[])

    const {departmentName} = useParams()
    let departmentInfo :any= {}

    switch(departmentName){
      case 'Futebol':
        departmentInfo = {name: departmentName, img: soccer, imgRemoved: soccerRemoved} 
        break
      case 'Medicina':
        departmentInfo = {name: departmentName, img: medicine, imgRemoved: medicineRemoved}
        break
      case 'Base':
        departmentInfo = {name: departmentName, img: base, imgRemoved: baseRemoved }
        break
      case 'Finanças':
        departmentInfo = {name: departmentName, img: finances, imgRemoved: financesRemoved}
        break
      case 'Marketing':
        departmentInfo = {name: departmentName, img: marketing, imgRemoved: marketingRemoved}
        break
      case 'Comunicação':
        departmentInfo = {name: departmentName, img: socialmedia, imgRemoved: socialmediaRemoved}
        break
      default:
        break
    }

    const [navbarFixed,setNavbarFixed] = useState<boolean>(false)

    const updateNavbarPosition = () => {
        window.scrollY > 0 ? setNavbarFixed(true) : setNavbarFixed(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateNavbarPosition);
        return () => {
          window.removeEventListener("scroll", updateNavbarPosition);
        };
      }, []);

    useEffect(() => {
        if (navbarFixed) {
          document.getElementsByTagName("nav")[0].style.background = "#2D2D2D"
        } 
        else{
            document.getElementsByTagName("nav")[0].style.background = "#F7F4EE"
        }
    }, [navbarFixed]);

    const close = () =>{
      setModalIsOpen(false)
    }

    const [data, setData] = useState<Object>({})
    
    useEffect(()=>{
      axios.get(`${BASE_URL}/processos`)
      .then((res)=>{
        setData(res.data)
        console.log(res)
      })
      .catch((error)=>{
        console.error(error)
      })
    },[])
    
  return (
    <>
      <Navbar/>
        <div className='departmentDetailsAllContent'>
            <div className='departmentDetailsInitial' id='departmentDetailsInitial'>
                <div className='departmentDetailsInitialText'>
                    <span id='one'>Explore o Departamento de {departmentInfo.name} do FC Matheus</span>
                    <span id='two'>Bem-vindo ao centro de excelência do nosso clube. 
                      Aqui, abrimos as portas para você conhecer mais sobre o {departmentInfo.name} e 
                      sua contribuição vital para o nosso sucesso. Queremos que você se torne parte 
                      dessa história e entenda como cada departamento desempenha um papel 
                      fundamental no nosso clube.
                    </span>
                    <a href='#departmentDetailsDepartments' id="three">Conheça o departamento!</a>
                </div>
                <img className="teste" src={departmentInfo.imgRemoved} alt='torcedores comemorando'/>
            </div>

            <div className='departmentDetailsDepartments' id='departmentDetailsDepartments'>
              <div className='departmentsDetailsTitle'>
                <span id='title'>Nossas Atividades</span>
                <span id='addAct' onClick={()=> setModalIsOpen(true)}> Adicionar Atividade </span>
                {modalIsOpen? 
                  <Modal openModal={modalIsOpen} onClose={close} 
                    title= 'Nova Atividade' url = {`${BASE_URL}/processos`} type= {departmentInfo.name}
                  />  
                  : 
                  ''
                }
              </div> 
                <div className= 'departmentDetailsDepartmentsGrid' id='departmentDetailsDepartments'>
                  {data?
                    Object.values(data)
                    .map((val, index) => ({ ...val, originalIndex: index }))
                    .filter((val) => val.type ===departmentName)
                    .map((val)=> ( 
                      <DetailedCard img={departmentInfo.img} name={val.name} key={val.originalIndex} 
                        keyIdx={val.originalIndex} type={val.type}
                      />
                    ))
                    : ''
                  }
                </div>
            </div>
        </div>
    </>

  )
}

export default DepartmentDetails