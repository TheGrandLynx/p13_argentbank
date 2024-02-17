import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NotConnected() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateHome = () => {
    navigate("/");
  };
  return (
    <div className="notConnected">
      <i class="fa-solid fa-user-slash"></i>
      <h2>You are actually not logged in ! </h2>
      <p>Would you like to log in ?</p>
      <Link></Link>
      <button className="notConnected__button" onClick={navigateToLogin}>
        Go to login page
      </button>
      <button className="notConnected__button" onClick={navigateHome}>
        Come back to homepage
      </button>
    </div>
  );
}
export default NotConnected;
