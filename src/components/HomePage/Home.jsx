import "./Home.css";
import Arrow from "../../assets/arrow.png";
import Lipstick from "../../assets/home1.png";
import Fish from "../../assets/home2.png";
import House from "../../assets/home3.png";
import Car from "../../assets/home4.png";
import Jug from "../../assets/home5.png";
import Plant from "../../assets/plant.png";
import rabbit from "../../assets/rabbit.png";

const Home = () => {
  return (
    <div className="home text-black w-full h-screen ">
      <div className="navbar bg-[#ffe488] flex items-center justify-between h-[20vh] px-[15px]">
        <h1 className="text-[#263880] text-2xl font-bold ">Welcome back!!!</h1>
        <div className="flex bg-[#334aaa] p-[20px] text-white gap-[10px] rounded-[20px]">
          <h4 className="text-base font-bold">Parental Control</h4>
          <img className="w-[24px] h-[24px]" src={Arrow} alt="Arrow Icon" />
        </div>
      </div>
      <div className="layout px-36 py-6 grid grid-cols-4 grid-rows-3 gap-[2rem]">
        <a href="" className="flex flex-col gap-[10px] items-center">
          <div className="bg-[#E5F8FF] w-[158px] h-[158px] rounded-[10px]"></div>
          <a href="#" className="font-medium text-xl ">
            New Sheet
          </a>
        </a>
        <a href="" className="flex flex-col gap-[10px] items-center">
          <img src={Lipstick} alt="" />
          <a href="#" className="font-medium text-xl ">
            Latest Project
          </a>
        </a>
        <a href="" className="flex flex-col gap-[10px] items-center">
          <img src={Fish} alt="" />
          <a href="#" className="font-medium text-xl ">
            Fish Painting
          </a>
        </a>
        <a href="" className="flex flex-col gap-[10px] items-center">
          <img src={House} alt="" />
          <a href="#" className="font-medium text-xl ">
            House Painting
          </a>
        </a>
        <a href="" className="flex flex-col gap-[10px] items-center">
          <img src={Car} alt="" />
          <a href="#" className="font-medium text-xl ">
            Car Painting
          </a>
        </a>
        <a href="" className="flex flex-col gap-[10px] items-center">
          <img src={Jug} alt="" />
          <a href="#" className="font-medium text-xl ">
            Object Painting
          </a>
        </a>
        <a href="" className="flex flex-col gap-[10px] items-center">
          <img src={Plant} alt="" />
          <a href="#" className="font-medium text-xl ">
            Object Painting
          </a>
        </a>
        <a href="" className="flex flex-col gap-[10px] items-center">
          <img src={rabbit} alt="" />
          <a href="#" className="font-medium text-xl ">
            Object Painting
          </a>
        </a>
        <a href="" className="flex flex-col gap-[10px] items-center">
          <img src={Fish} alt="" />
          <a href="#" className="font-medium text-xl ">
            Fish Painting
          </a>
        </a>
        <a href="" className="flex flex-col gap-[10px] items-center">
          <img src={House} alt="" />
          <a href="#" className="font-medium text-xl ">
            House Painting
          </a>
        </a>
        <a href="" className="flex flex-col gap-[10px] items-center">
          <img src={Car} alt="" />
          <a href="#" className="font-medium text-xl ">
            Car Painting
          </a>
        </a>
        <a href="" className="flex flex-col gap-[10px] items-center">
          <img src={Jug} alt="" />
          <a href="#" className="font-medium text-xl ">
            Object Painting
          </a>
        </a>
      </div>
    </div>
  );
};

export default Home;
