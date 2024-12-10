import "./Sigup.css";
import GoogleIcon from "../../assets/Google.png";
import Logo from "../../assets/LOGO.png";

const Signup = () => {
  return (
    <div className="sign-up w-full text-black flex items-center justify-between h-screen">
      <div className="intro w-full h-full flex">
        <div className="intro-container bg-no-repeat bg-center bg-cover pt-[3em] pl-[3em]">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="text pt-[15em] w-2/3">
            <h1 className="text-[32px] pb-[5px] font-black">
              Let’s Get Creative!
            </h1>
            <p className="text-[15px] font-medium">
              Welcome to CardBoard, where your imagination takes center stage!
              Tap, draw, and create amazing art with easy tools and bright
              colors. Let’s dive in!
            </p>
          </div>
        </div>
      </div>
      <div className="info w-full mt-[3.5em] pl-[5em]">
        <h1 className="text-[32px] font-semibold pb-[0.25em]">Get Started</h1>
        <p className="font-medium">
          Already have an account?{" "}
          <a href="/" className="text-[#565454] underline">
            Sign In
          </a>
        </p>
        <form action="" className="mt-[1.5em]">
          <div className="user-info flex flex-col gap-[3px] pb-[15px]">
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
          <div className="user-info flex flex-col gap-[3px] pb-[15px]">
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
          <p className="privacy text-[#0f172a] w-1/2 pt-[5px] pb-[30px]">
            By clicking Sign Up, you accept our{" "}
            <a href="" className="text-[#9FA2AA] underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="" className="text-[#9FA2AA] underline">
              Privacy Policy
            </a>
          </p>
          <button className="text-white bg-[#334aaa] text-[16px] py-[10px] px-[50px] rounded-[20px] outline-white">
            Sign Up
          </button>
        </form>
        <div className="options  pt-[30px]">
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

export default Signup;
