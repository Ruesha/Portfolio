import Me from '../../assets/me.jpg'
import './Hero.css'
const Hero = () => {
  return (
    <div className='herocontain'>
        <div className="herronote">
            <h1>Hi 👋,
                <span>My name is</span>
<span className='now'>DevRuesha</span>
<span>I'm a Web Developer</span>
</h1>
        </div>
      <div className="img">
        <img src={Me} alt="Me" />
      </div>
    </div>
  )
}

export default Hero
