import './Contactme.css'

const Contactme = () => {
  return (
    <div className='mail'>
   <h2>CONTACT ME</h2>
      <form action="">
      <label htmlFor="">NAME</label>
      <br />
      <input type="text" placeholder='e.g JohnDoe' />
<br />
<br />
<label htmlFor="">EMAIL</label >
<br />
<input type="email"placeholder='example@gmail.com' />
<br />
<br />
<label htmlFor="">MESSAGE</label>
<br />
<textarea name="" id=""></textarea>
<br />
<br />
<button>Submit</button>
      </form>
   
    </div>
  )
}

export default Contactme
