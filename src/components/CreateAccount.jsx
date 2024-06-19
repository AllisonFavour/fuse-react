import { Link } from 'react-router-dom';
import '../components/createAccount.css'
import { handleSubmit } from '../scripts';


export default function CreateAccount() {
  return (
    <>
      <section>
        <div className='main-container'>
          <div>
            <h2 className='header-text'>Create Account</h2>
          </div>

          <form onClick={handleSubmit}>
            <div className='inputs-container'>
              <input type="email" placeholder="Enter your email" />
              <input type="text" placeholder="Enter your full name" />
              <input type="text" placeholder="Enter your username" />
              <input type="password" placeholder="Enter your password" />
              <input type="password" placeholder="Re-enter your password" />
              <input type="submit" value="Create Account" className='submit-btn' />
            </div>

            <p>Already a member? <Link to={'/login'}>Log In</Link></p>
          </form>
        </div>
      </section>
    </>
  );
}
