 import countries from '../../assets/countries.png'
 import green from '../../assets/green.png'
 import cart from '../../assets/download.png'
 import kuda from '../../assets/Kuda.png'
 import coolors from '../../assets/coolors.png'
 import  funiro from '../../assets/funiro.png'
import './Projects.css'
const Projects = () => {
  return (
    <div className="pro">
<div className="note">
    <h2>Projects</h2>
    <p>Things i've built so far</p>
</div>
<div className="myProjects">
    <div className="init">
        <img src={countries} alt="" />
        <div className="innote">
            <h2>Countries API</h2>
            <p>This project creates a web application using JavaScript, HTML, and CSS, focusing on fetching data from an external API. It combines these technologies to deliver an interactive user experience with dynamic content
</p>
        </div>
        <div className="links">
            <a href="https://countries-three-pink.vercel.app/">Live Preview</a>
            <a href="https://github.com/Ruesha/countries">Github Repo</a>
        </div>
    </div>
    <div className="init">
        <img src={green} alt="" />
        <div className="innote">
            <h2>Nextcent</h2>
            <p>This project creates a web application using HTML, and CSS, focusing on the expert use of to make media responsiveness. It combines these technologies to deliver an interactive user experience with dynamic content
</p>
        </div>
        <div className="links">
            <a href="https://green-taupe-delta.vercel.app/">Live Preview</a>
            <a href="https://github.com/Ruesha/green">Github Repo</a>
        </div>
    </div>
    <div className="init">
        <img src={cart} alt="" />
        <div className="innote">
            <h2>Cart Dessert</h2>
            <p>This project creates a web application using JavaScript, HTML, and CSS, focusing on use JavaScript to make a Webpage Interactive. It combines these technologies to deliver an interactive user experience with dynamic content
</p>
        </div>
        <div className="links">
            <a href="https://cart-beige-ten.vercel.app/">Live Preview</a>
            <a href="https://github.com/Ruesha/cart">Github Repo</a>
        </div>
    </div>
    </div>      
<div className="myProjects">
    <div className="init">
        <img src={kuda} alt="" />
        <div className="innote">
            <h2>Kuda Clone</h2>
            <p>This project creates a web application using React JavaScript, and CSS, focusing upon the use of React to create webpages.  It combines these technologies to deliver an interactive user experience with dynamic content
</p>
        </div>
        <div className="links">
            <a href="https://6723bbc81c22445555a09893--exquisite-horse-6de5fe.netlify.app/">Live Preview</a>
            <a href="https://github.com/Ruesha/Kuda2">Github Repo</a>
        </div>
    </div>
    <div className="init">
        <img src={coolors} alt="" />
        <div className="innote">
            <h2>Coolors</h2>
            <p>This project creates a web application using React JavaScript, and CSS, focusing upon the use of React to create webpages.  It combines these technologies to deliver an interactive user experience with dynamic content
</p>
        </div>
        <div className="links">
            <a href="">Live Preview</a>
            <a href="https://github.com/Ruesha/coolors">Github Repo</a>
        </div>
    </div>
    <div className="init">
        <img src={funiro} alt="" />
        <div className="innote">
            <h2>Funiro</h2>
            <p>This project creates a web application using HTML, and CSS, focusing on the expert use of to make media responsiveness. It combines these technologies to deliver an interactive user experience with dynamic content.
</p>
        </div>
        <div className="links">
            <a href="https://furniro-eight-green.vercel.app/">Live Preview</a>
            <a href="https://github.com/Ruesha/furniro">Github Repo</a>
        </div>
    </div>
    </div>      
    </div>
  )
}

export default Projects
