import React, { useState, useEffect } from 'react'
import football from './../../assets/football.jpg'
import soccer from './../../assets/soccer.png'
import finances from './../../assets/finances.png'
import marketing from './../../assets/marketing.png'
import medicine from './../../assets/medicine.png'
import base from './../../assets/base.png'
import socialmedia from './../../assets/socialmedia.png'

import './Home.scss'
import Navbar from '../../components/navbar/Navbar'
import Departments from '../../components/departments/Departments'


const Home = () => {
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

  return (
    <>
        <Navbar/>
        <div className='homeAllContent'>
            <div className='homeInitial' id='homeInitial'>
                <div className='homeInitialText'>
                    <span id='one'>Explore o FC Matheus - Fique Por Dentro de Tudo!</span>
                    <span id='two'>Bem-vindo ao coração pulsante do <strong>FC Matheus</strong>! Aqui, oferecemos a você 
                        uma porta de entrada para o mundo emocionante do nosso clube de futebol.
                        Queremos que você se torne parte da nossa história, e a melhor maneira de
                        fazer isso é ficando por dentro de tudo o que acontece dentro e ao redor
                        do nosso clube.
                    </span>
                    <a href='#homeDepartments' id="three">Conheça o FC Matheus: Viva a Emoção!</a>
                </div>
                <img src={football} alt='torcedores comemorando'/>
            </div>

            <div className='homeDepartments' id='homeDepartments'> 
                <span id='title'>Nossos departamentos</span>
                <div className= 'homeDepartmentsGrid' id='homeDepartments'>
                    <Departments name="Futebol" img={soccer}/>
                    <Departments name="Medicina" img={medicine}/>
                    <Departments name="Categoria de base" img={base}/>
                    <Departments name="Finanças" img={finances}/>
                    <Departments name="Marketing" img={marketing}/>
                    <Departments name="Comunicação" img={socialmedia}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home