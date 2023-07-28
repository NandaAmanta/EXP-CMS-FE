import signup_bg from "../../Assets/signup_bg.webp";
import Logo from "../../Assets/exp-logo.webp";
import "./SignPage.scss";

function SignUp() {
  return (
    <>
      <div className="signup-top">
        <div className="signup">
          <div className="signup__page">
            <div className="signup__form">
              <div className="form_top">
                <img src={Logo} alt="" />
              </div>
              <div className="form_text">
                <h1 className="font-bold">Sign up.</h1>
                <p className="font-light">
                  Register your account first and signup <br /> with your
                  registered data.
                </p>
              </div>
              <form action="" className="form-control">
                <div className="form_group">
                  <label htmlFor="name">Enter your name </label>
                  <input type="text" id="name" name="name" className="input input-bordered w-full" required />
                </div>
                <div className="form_group">
                  <label htmlFor="email">Enter your email address</label>
                  <input type="email" id="email" name="email" className="input input-bordered w-full" required />
                </div>
                <div className="form_group">
                  <label htmlFor="password">Enter your password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form_group">
                  <label htmlFor="password">Confirm password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <button type="submit">Create Account</button> <br />
              </form>
              <div className="form_forget">
                <a href=""> Forgot Password?</a>
              </div>
              <div className="line-sidebar"></div>
              <div className="form_signup">
                <a href="">Sign up now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="signup__welcome">
          <div className="welcome_text">
            <span>Hi! Welcome </span>
            <h1>Glad To See You</h1>
          </div>
          <div className="welcome_img">
            <img src={signup_bg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
