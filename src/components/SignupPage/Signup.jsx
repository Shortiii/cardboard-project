import "./Sigup.css";
import GoogleIcon from "../../assets/Google.png";
import Logo from "../../assets/LOGO.png";

const Signup = () => {
  return (
    <div className="sign-up">
      <div className="intro">
        <div className="intro-container">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="text">
            <h1>Let’s Get Creative!</h1>
            <p>
              Welcome to CardBoard, where your imagination takes center stage!
              Tap, draw, and create amazing art with easy tools and bright
              colors. Let’s dive in!
            </p>
          </div>
        </div>
      </div>
      <div className="info">
        <h1>Get Started</h1>
        <p>
          Already have an account? <a href="/">Sign In</a>
        </p>
        <form action="">
          <div className="user-info">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Janedoe@xmail.com" required />
          </div>
          <div className="user-info">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="********" required />
          </div>
          <p className="privacy">
            By clicking Sign Up, you accept our <a href="">Terms of Use</a> and
            <a href="">Privacy Policy</a>
          </p>
          <button>Sign Up</button>
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

export default Signup;
