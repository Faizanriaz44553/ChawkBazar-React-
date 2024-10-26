import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  
  const navigate = useNavigate();
  return (
    
    <div className="main-wrapper">
      <div>
        <img src="images/logo.svg" alt="" />
      </div>
      <div>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/product")}>Product</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </div>
      <div className="button-div">
        <button>Singn Up</button>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Header;
