import './About.css'
import { IoSchool } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
const Aboutme = () => {
  return (
    <div className="about">
     <div className="main">
        <h1>About Me</h1>
        <p>Hi i'm Adewale Ebenezer,As a full stack developer, I create dynamic web applications using HTML, CSS, and JavaScript on the front end, and PHP on the back end. With expertise in database management and deployment on cloud platforms, I ensure seamless integration and high-performance across the stack, delivering scalable solutions that drive digital innovation.</p>
     </div>
     <div className="experience">
        <h1>Education</h1>
        <div className="info">
            <p>Diploma in Software Development</p>
            <div className="div">
            <p><IoSchool /> Sail Innovation Lab</p>
            <p><SlCalender /> Jun 2024 - Jan 2025</p>
            </div>
         
        </div>
        <div className="info">
            <p>National Diploma in Computer Science</p>
            <div className="div">
            <p><IoSchool /> Yaba College Of Technology</p>
            <p><SlCalender /> Dec2021 - Mar 2024</p>
            </div>
            
        </div>
        <div className="info">
            <p>Bachelor of Science in Industrial Mathematics</p>
            <div className="div">
            <p><IoSchool /> University of Lagos</p>
            <p><SlCalender /> Oct 2024 - Till Date</p>
            </div>
           
        </div>
     </div>
    </div>
  )
}

export default Aboutme
