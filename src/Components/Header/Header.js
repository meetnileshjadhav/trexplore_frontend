import Logo from '../../Logo/Logo_1.jpg'
import './Header.css';
import { Link } from "react-router-dom";

const Header = () =>{
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">
    <img src={Logo} className="border rounded"/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link to="/" className='nav-link btn-outline-success bg-dark text-white font-weight-bold border border-2 rounded m-2'>Home</Link>
        {/* <link class="nav-link btn-outline-success bg-dark text-white font-weight-bold border border-2 rounded m-2" href="#">Show All Treks</link> */}
      </li>
      <li class="nav-item">
        <a class="nav-link btn-outline-success bg-dark text-white font-weight-bold border border-2 rounded m-2" href="#">Customise Treks</a>
      </li>
      <li class="nav-item">
        <a class="nav-link btn-outline-success bg-dark text-white font-weight-bold border border-2 rounded m-2" href="#">Filter Treks</a>
      </li>
    </ul>

    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success bg-dark text-white my-2 my-sm-0 font-weight-bold" type="submit">Search Trek</button>
    </form>
  </div>
</nav>
    );

}

export default Header;