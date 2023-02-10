import React, {useEffect} from 'react'
import '../Styles/Pages/About.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const About = () => {
  // const [userData, setUserData] = useState({})
  const callUserName = async() =>{
    try {
      const res= await fetch('/about', {
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
      });

      const data = await res.json();
      console.log(data);
      // setUserData(data)
      if(!res.status===200){
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    callUserName();
  }, []);
  return (
    <>
    <Navbar/>
    <div className='about-container'>
        <div className='about-banner'>
          <h3><span className='q-mark'>❛❛ </span>We Don’t Talk About Women Empowerment,<br/> &nbsp;&nbsp;&nbsp;&nbsp;We Help Women Discover Their Strengths<span className='q-mark'> ❜❜</span></h3>
        </div>
    <div className='about-details'>
      <div className='content-about'>
      <p>A woman plays many roles, like a daughter, wife, mother, working professional, etc., but she usually overlooks her existence and own sense of self. However, she can be only two things, ‘Who’ and ‘What’ she wants to be.<br/><br/> Therefore, Sadhna Foundation focuses on Women’s Education primarily because we understand that an educated woman is not only a powerful woman but can create a whole new qualified generation and robust humankind. </p><br/>
      <p>We ensure that every woman is informed, skilled, conversant, and confident by creating self-help communities and microfinancing facilities leading to a self-reliant feminist world. <br/><br/>Only an educated and financially independent woman is equipped to control the reins of her life and respect her choices about work, marriage, or motherhood. </p><br/>
      <p>While we live in the digital era where feminism and equality are not new words to a modern woman in the metro cities, women in the rural sectors struggle to voice their opinions, and the rest of the world is oblivious to their existence. <br/><br/>Most rustic men usually dominate the spaces where girls are born as a liability and married to a man because there is nothing beyond that she is considered worthy. Sadhana Foundation works towards providing the most vital assistance and support to women for their advancement, especially in India’s rural and remote regions.</p><br/>
      <p>It’s not about empowering women; it’s more about building a nation where equality prevails, and human potential is put to the best use for our society. The undermining of women’s potential and choices leads to denying equal opportunities and equal rights.<br/><br/> As a result, we eventually neglect half of the population to live their right to a dignified life. Together, we can not only help discover the force of the feminine tribe but build a nation with pride.</p>
      </div>
      <div className='about-form'>
        <div className='a-form'>
        <h2>Become Volunteer With Us</h2>
            <form method='GET'>
                <div>
                    <input className='a-input' placeholder='Your Name' type="text" required/>
                </div>
                <div>
                    <input className='a-input' placeholder='Your Email' type="text" required/>
                </div>
                <div>
                    <input className='a-input' placeholder='Your Phone' type="number" required/>
                </div>
                <div>
                    <textarea className='a-input text-a' placeholder='Your Address' type="text" rows="4" cols="50" required/>
                </div>
                <div>
                    <input className='a-input' placeholder='Your Adhar Number' type="number" required/>
                </div>
                <div>
                    <label className='a-label'>Your Adhar Card Photo</label><br/>
                    <input className='a-input' placeholder='Adhar Card Photo' type="file" required/>
                </div>
                <div>
                    <input className='a-input' placeholder='Your PAN Number' type="text" required/>
                </div>
                <div>
                    <label className='a-label'>Your PAN Card Photo</label><br/>
                    <input className='a-input' placeholder='Your PAN Number' type="file" required/>
                </div>
                <div>
                    <input className='a-submit' type='submit' value='Submit'/>
                </div>
            </form>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default About