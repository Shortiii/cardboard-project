import "./Login.css";
import Logo from "../../assets/LOGO.png";
import GoogleIcon from "../../assets/Google.png";

const Login = () => {
  return (
    <div className="login">
      <div className="intro">
        <div className="login-container">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="text">
            <h1>Welcome Back!</h1>
            <p>
              Ready to start creating again? Sign in to continue your artistic
              journey and access your saved masterpieces.
            </p>
          </div>
        </div>
      </div>

      <div className="info">
        <h1>Sign In</h1>
        <p>
          Don’t have an account? <a href="/signup">Sign Up.</a>
        </p>
        <form action="" className="login-form">
          <div className="login-info email-info">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Janedoe@xmail.com" required />
          </div>
          <div className="login-info">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="********" required />
          </div>
          <div className="password">
            <p className="password-reset">
              Forgot Password? <a href=""> No problem! Reset it here.</a>
            </p>
          </div>
          <button>Sign In</button>
        </form>
        <div className="options">
          <p>Or Continue With</p>
          <a href="">
            <img src={GoogleIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
