import Me from '../../assets/2A8A0470[1].jpg'
import './Hero.css'
const Hero = () => {
  return (
    <div className='herocontain'>
        <div className="herronote">
            <h1>Hi 👋,
                <span>My name is</span>
<span className='now'>DevRuesha</span>
<span>I'm a FullStack Engineer</span>
</h1>
        </div>
      <div className="img">
        <img src={Me} alt="Me" />
      </div>
    </div>
  )
}

export default Hero
