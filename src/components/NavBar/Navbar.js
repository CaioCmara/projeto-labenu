import { CarrinhoContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar({ setShow, size }) {
  return (
    <CarrinhoContainer>
      <div className="nav_box">
        <span className="nav_title" onClick={() => setShow(true)}>
          Be a captain!
        </span>

        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </CarrinhoContainer> //teste
  );
}

export default Navbar;
