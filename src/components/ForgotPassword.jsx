import { Link } from "react-router-dom";
import { handleSubmit } from "../scripts";

export default function ForgotPassword() {
  return (
    <>
      <section>
        <div className="main-container">
          <div>
            <h2 className="header-text">Forgot Password</h2>
          </div>

          <form onClick={handleSubmit}>
            <div className="inputs-container">
              <p>Having trouble logging in?</p>
              <input type="email" placeholder="Enter your email" />
              <input
                type="submit"
                value="Reset Password"
                className="submit-btn"
              />
            </div>
          </form>

          <div className="main-container-p">
            <span>
              Return to <Link to={"/login"}>Login Page</Link>
            </span>

            <span>
              <Link to={"/create-account"}>Create Account</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
