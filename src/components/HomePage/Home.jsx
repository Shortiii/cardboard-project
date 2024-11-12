import "./Home.css";
import Arrow from "../../assets/arrow.png";

const Home = () => {
  return (
    <div className="home">
      <div className="navbar">
        <h1>Welcome back!!!</h1>
        <div>
          <h4>Parental Control</h4>
          <img src={Arrow} alt="Arrow Icon" />
        </div>
      </div>
    </div>
  );
};

export default Home;
