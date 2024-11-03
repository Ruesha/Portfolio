import css from '../../assets/css.svg'
import node from '../../assets/Group.svg'
import figma from '../../assets/figma.svg'
import git from '../../assets/github.svg'
import react from '../../assets/logos_react.svg'
import sass from '../../assets/sass.svg'
import ts from '../../assets/ts.svg'
import html from '../../assets/html.svg'
import js from '../../assets/js.svg'
import icon from '../../assets/git-icon.svg'
import vs from '../../assets/vscode.svg'
import mongo from '../../assets/mongodb-icon-1.svg'
import './Tech.css'

const Tech = () => {
  return (
    <div className="tech">
      <div className="technote">
        <h2>My Tech Stack </h2>
       <p>Technologies I’ve been using and learning recently.</p> 
      </div>
      <div className="techstack">
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src={vs} alt="" />
        <img src={node} alt="" />
        <img src={figma} alt="" />
        <img src={git} alt="" />
        <img src={icon} alt="" />
        <img src={react} alt="" />
        <img src={sass} alt="" />
        <img src={ts} alt="" /> 
        <img src={mongo} alt="" className='riri'/>
      </div>
    </div>
  )
}

export default Tech
