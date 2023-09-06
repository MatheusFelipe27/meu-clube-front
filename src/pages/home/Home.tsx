import React from 'react'
import football from './../../assets/football.jpg'
import './Home.scss'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className='homeInitial'>
            <div className='homeInitialText'>
                <span id='one'>Explore o FC Matheus - Fique Por Dentro de Tudo!</span>
                <span id='two'>Bem-vindo ao coração pulsante do FC Matheus! Aqui, oferecemos a você 
                    uma porta de entrada para o mundo emocionante do nosso clube de futebol.
                    Queremos que você se torne parte da nossa história, e a melhor maneira de
                    fazer isso é ficando por dentro de tudo o que acontece dentro e ao redor
                    do nosso clube.
                </span>
            </div>
            <img src={football} alt='torcedores comemorando'/>
        </div>
    </>
  )
}

export default Home