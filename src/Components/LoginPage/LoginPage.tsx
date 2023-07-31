import welcomee from "../../Assets/welcomee.svg";
import Logo from "../../Assets/exp-logo.webp";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./LoginPage.scss";

function Login() {
  return (
    <>
      <div className="login-top">
        <div className="login">
          <div className="login__page">
            <div className="login__form">
              <div className="form_top">
                <img src={Logo} alt="" />
              </div>
              <div className="form_text">
                <h1 className="font-bold">Log in</h1>
                <p className="font-light">
                  Log in with your data that you entered <br /> during your
                  registration
                </p>
              </div>
              <form action="" className="form-control">
                <div className="form_group">
                  <Input
                    label="Enter your email address"
                    inputProps={{
                      type: "email",
                      id: "email",
                      name: "email",
                      className: "input input-bordered w-full",
                    }}
                  />
                </div>
                <div className="form_group">
                  <Input
                    label="Enter your password"
                    inputProps={{
                      type: "password",
                      id: "password",
                      name: "password",
                      className: "input input-bordered w-full",
                    }}
                  />
                </div>
                <Button type="submit">Log in</Button>
                <br />
              </form>

              <div className="form_forget">
                <a href=""> Forgot Password?</a>
              </div>
              <div className="line-sidebar"></div>
              <div className="form_signup">
                <a href="/signup">Sign up now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="login__welcome">
          <div className="welcome_text">
            <span className="font-light">Nice to see you again</span>
            <h1 className="font-bold">Welcome Back</h1>
          </div>
          <div className="welcome_img">
            <img src={welcomee} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
