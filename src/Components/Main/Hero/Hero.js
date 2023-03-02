import hero1 from '../../../Images/hero1.jpg';
import hero2 from '../../../Images/hero2.jpg';
import hero3 from '../../../Images/hero3.jpg';
import './Hero.css';

const Hero = () =>{

    return(

      <div id="demo" class="carousel slide" data-bs-ride="carousel">
      
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
      
 
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={hero1} alt="" class="d-block w-100 hero-size" />
          </div>
          <div class="carousel-item">
            <img src={hero2} alt="" class="d-block w-100 hero-size" />
          </div>
          <div class="carousel-item">
            <img src={hero3} alt="" class="d-block w-100 hero-size" />
          </div>
        </div>
      
 
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

    );
}

export default Hero;