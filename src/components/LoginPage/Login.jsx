import "./Login.css";
import Logo from "../../assets/LOGO.png";
import GoogleIcon from "../../assets/Google.png";

const Login = () => {
  return (
    <div className="login  w-full h-screen flex items-center justify-center gap-[1em] text-black">
      <div className="intro w-full h-full flex ">
        <div className="login-container bg-center bg-cover bg-no-repeat w-full h-full pt-[3em] pl-[3em]">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="text mt-[15em] pb-[3px] w-2/3 text-white bg-[#0c0b0b33] shadow-[8px 8px 16px 0px #00000040]">
            <h1 className="text-[32px] pb-[5px] font-black">Welcome Back!</h1>
            <p className="text-[15px] font-medium">
              Ready to start creating again? Sign in to continue your artistic
              journey and access your saved masterpieces.
            </p>
          </div>
        </div>
      </div>

      <div className="info w-full mt-[3.5em] pl-[5em] ">
        <h1 className="text-[32px] font-semibold pb-[0.25em]">Sign In</h1>
        <p className="font-medium">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#565454] underline">
            Sign Up.
          </a>
        </p>
        <form action="" className="login-form">
          <div className="login-info flex flex-col gap-[3px] pb-[25px]">
            <label className="text-[16px] font-semibold" htmlFor="">
              Email
            </label>
            <input
              className="py-[10px] px-[8px] w-4/5 outline-none border-2 border-[#3c3c4399] rounded-lg border-solid"
              type="email"
              placeholder="Janedoe@xmail.com"
              required
            />
          </div>
          <div className="login-info flex flex-col gap-[3px]">
            <label className="text-[16px] font-semibold" htmlFor="">
              Password
            </label>
            <input
              className="py-[10px] px-[8px] w-4/5 outline-none border-2 border-[#3c3c4399] rounded-lg border-solid"
              type="password"
              placeholder="********"
              required
            />
          </div>
          <div className="password flex justify-end items-center">
            <p className="password-reset content-end w-full pb-[30px]">
              Forgot Password? <a href=""> No problem! Reset it here.</a>
            </p>
          </div>
          <button className="text-white bg-[#334aaa] text-[16px] py-[10px] px-[50px] rounded-[20px] outline-white">
            Sign In
          </button>
        </form>
        <div className="options pt-[30px]">
          <p className="text-[15px] font-semibold pb-[10px]">
            Or Continue With
          </p>
          <a href="">
            <img src={GoogleIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
