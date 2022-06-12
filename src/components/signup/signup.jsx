import {Link} from 'react-router-dom';
import './signup.scoped.css';
function Signup(){
    return(
        <div className="App">
      
        <div className='one'>
          
    
    <img src={"logo_orangebg.png"} alt="" />
          
          </div>
        
        <div className='two'>
        <h1>Sign Up</h1>
        
        <form action="#" method='POST' className='form'>
          <div className='Field'>
            <label >FIRST NAME</label><br />
            <input type="text" name='firstname' placeholder='First Name' /><br />
          </div>
          <div className='Field'>
            <label >LAST NAME</label><br />
            <input type="text" name='lastname' placeholder='Last Name' /><br />
          </div>
          <div className='Field'>
            <label >PHONE</label><br />
            <input type="number" name='phone'  /><br />
          </div>
          <div className='Field'>
            <label >EMAIL </label><br />
            <input type="email" name='email' placeholder='Email Address' /><br />
          </div>
          <div className='Field'>
            <label >PASSWORD</label><br />
            <input type="password" name='password' placeholder='Password' /><br />
          </div>
         
    <div className='Field'>
          <button type="submit" className='sub'>Sign up</button>
      </div>
    
        <div className='a'>
          Already have an account?  
          <Link to="/login">Login</Link>
          </div>
        </form>
       
        </div>
        </div>
    )
}
export default Signup;