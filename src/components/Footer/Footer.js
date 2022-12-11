import { FooterContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <FooterContainer>
        <footer>
          <p id="footer-texto">Criado por Caio Câmara</p>
          <a
            className="icone"
            href="https://www.facebook.com/profile.php?id=100063626798454"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/1077/1077041.png"
              width="30px"
            ></img>
          </a>
          <a
            className="icone"
            href="https://www.instagram.com/labenu_/"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/717/717392.png"
              width="30px"
            ></img>
          </a>
          <a className="icone" href="https://twitter.com/home" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1051/1051382.png"
              width="30px"
            ></img>
          </a>
          <a
            className="icone"
            href="https://github.com/CaioCmara"
            target="_blank"
          >  
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
              width="30px"
            ></img>
          </a>
        </footer>
      </FooterContainer>
    </>
  );
}

export default Footer;
