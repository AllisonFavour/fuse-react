import { Link } from "react-router-dom";

export default function ForgotPassword() {
    return (
        <>
        <section>
            <div>
                <div>
                <h2>Forgot Password</h2>
                <p>Having trouble logging in?</p>
                </div>
                
                <form>
                    <input type="email" placeholder="Enter your email" />
                    <input type="submit" value="Reset Password" />
                </form>

                <p>Return to <Link to={'/login'}>Login Page</Link></p>
            </div>
        </section>
        </>
    )
}