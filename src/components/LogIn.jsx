import gearIcon from "../../src/assets/gear-icon1.jpg";
import {Link} from 'react-router-dom'

export default function LogIn() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="login-section">
      <div>
        <div className="logo-div">
          <img className="logo" src={gearIcon} alt="Logo" />
        </div>

        <h1>Fuse⚡</h1>

        <p>THE METER APP</p>
      </div>

      <form onClick={handleSubmit}>
        <div className="form-section">
          <div className="login-one">
            <input type="email" placeholder="Email" />

            <input type="password" placeholder="Password" />
          </div>

          <div className="forgot-pass">
            <div className="forgot-div">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>

            <div className="forgot-password">
              Forgot password?
              {/* <Link to=''>Forgot Password?</Link> */}
            </div>
          </div>

          <input type="submit" value="Log In" />

          <p>Don't have an account? Create new account</p>
        </div>
      </form>
    </section>
  );
}
