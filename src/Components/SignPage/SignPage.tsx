import signup_bg from "../../Assets/signup_bg.webp";
import Logo from "../../Assets/exp-logo.webp";
import Input from "../Input/Input"
import Button from "../Button/Button";
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
                  <Input
                    label="Enter your name"
                    inputProps={{
                      type: "name",
                      id: "name",
                      name: "name",
                      className: "input input-bordered w-full",
                    }}
                  />
                </div>
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
                <div className="form_group">
                  <Input
                    label="Confirm password"
                    inputProps={{
                      type: "password",
                      id: "password",
                      name: "password",
                      className: "input input-bordered w-full",
                    }}
                  />
                </div>
                <Button type="submit">Create Account</Button>
                <br />
              </form>
              <div className="form_forget">
                <span>
                  Already have an account? <a href="/login">Log in.</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="signup__welcome">
          <div className="welcome_text">
            <span className="font-light">Hi! Welcome </span>
            <h1 className="font-bold">Glad To See You</h1>
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
