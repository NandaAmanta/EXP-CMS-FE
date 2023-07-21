import welcomee from "../../Assets/welcomee.svg";
import Logo from "../../Assets/exp-logo.png";

function Login() {
  return (
    <>
      <div className="login">
        <div className="login__page">
          <div className="login__form">
            <div className="form_top">
              <img src={Logo} alt="" />
            </div>
            <div className="form_text">
              <h1>Log in</h1>
              <p>
                Log in with your data that you entered during your registration
              </p>
            </div>
            <form action="">
              <div className="form_group">
                <label htmlFor="email">Enter your email address</label> <br />
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form_group">
                <label htmlFor="password">Enter your password</label> <br />
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit">Log in</button> <br />
              <div className="form_group">
               <a href=""> Forgot Password?</a>
              </div>
              <div className="line-sidebar"></div>
              
            </form>
          </div>
          <div className="login__welcome"></div>
        </div>
      </div>
    </>
  );
}
export default Login;
