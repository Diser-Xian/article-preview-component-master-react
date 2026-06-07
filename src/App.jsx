import { useState } from 'react'
import './styles/App.css'


import drawerImg from './assets/images/drawers.jpg'
import avatarMichelle from './assets/images/avatar-michelle.jpg'
import shareIcon from './assets/images/icon-share.svg'
import fbIcon from "./assets/images/icon-facebook.svg"
import ptIcon from "./assets/images/icon-pinterest.svg"
import twitIcon from './assets/images/icon-twitter.svg'

import anime from "./assets/videos/Sheesh-just-relax-and-watch.mp4"
import zias from './assets/videos/wahahahah-you-fell-on-my-trap!.mp4'
import sleep from './assets/videos/BROO_YOU_NEED_SOME_SLEEP!.mp4'



function App() {
  const [click, setClick] = useState(false);

  function HandleClick() {
    setClick(prev => !prev );
  }




  return (

    <div className='main-card'>

      <div className='card-section'>
        <div className='img-container'>
          <img className='drawer-img' src={drawerImg} alt="drawer image" />
        </div>
        <section className='texts-section'>
            
            <h3>
            Shift the overall look and feel by adding these wonderful 
            touches to furniture in your home
            </h3>
            <p>
            Ever been in a room and felt like something was missing? Perhaps 
            it felt slightly bare and uninviting. I’ve got some simple tips 
            to help you make any room feel complete.
            </p>

          <div className='bottom-text-section'>
            <img className='avatar' src={avatarMichelle} alt="" />
            <div className='pfp-info'>
              <h4>Michelle Appleton</h4>
              <p>28 Jun 2020</p>
            </div>
            
            <div className={`links ${click ? "active": ""}`}>
              <p className='share-text'>SHARE</p>
               <a href={anime}><img src={fbIcon} alt="facebook icon" /></a>
              <a href={zias}><img src={twitIcon} alt="twitter icon" /></a>
              <a href={sleep}><img src={ptIcon} alt="pentirest icon" /></a>
            </div>
            <button onClick={HandleClick} className={`share-btn ${click ? 'active' : ""} `}><img src={shareIcon} alt="share icon" /></button>
          </div>
        
        </section>
      </div>


      <footer class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/Diser-Xian" norefferer noopener >XDEV</a>.
      </footer>


    </div>
  )
}

export default App
