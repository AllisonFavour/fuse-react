import { Link } from 'react-router-dom';
import '../components/createAccount.css'


export default function CreateAccount() {
  return (
    <>
      <section>
        <div>
          <div>
            <h2>Create Account</h2>
          </div>

          <form>
            <div>
              <input type="email" placeholder="Enter your email" />
              <input type="text" placeholder="Enter your full name" />
              <input type="text" placeholder="Enter your username" />
              <input type="password" placeholder="Enter your password" />
              <input type="password" placeholder="Re-enter your password" />
              <input type="submit" value="Create Account" />
            </div>

            <p>Already a member? <Link to={'/login'}>Log In</Link></p>
          </form>
        </div>
      </section>
    </>
  );
}
