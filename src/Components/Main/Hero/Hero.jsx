import hero1 from "../../../Images/hero9.jpg";
import hero2 from "../../../Images/hero7.jpeg";
import hero3 from "../../../Images/hero8.jpg";
import "./Hero.css";

const Hero = () => {
  return (

    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={hero1} className="d-block w-100 corosel-images hero-size" alt="hero1" />
        </div>
        <div className="carousel-item">
          <img src={hero2} className="d-block w-100 corosel-images hero-size" alt="hero2" />
        </div>
        <div className="carousel-item">
          <img src={hero3} className="d-block w-100 corosel-images hero-size" alt="hero3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  );
};

export default Hero;
