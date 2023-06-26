import React  from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './Home.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/Animatedletters'

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['R', 'a', 'h', 'u', 'l']
  const jobArray = [
    'w','e', 'b', ' ','d','e','v','e','l','o','p','e','r','.',
  ]

  return (
    <div className='container home-page'>
        <div className="text-zone">
          <h1>Hi, <br /> I'm 
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2> Full stack developer</h2>
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
    </div>
  )
}
