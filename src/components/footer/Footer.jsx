import vk from "./../../img/icons/vk.svg";
import inst from "./../../img/icons/instagram.svg";
import tg from "./../../img/icons/tg.svg";
import github from "./../..//img/icons/gitHub.svg";
import linkedin from "./../../img/icons/linkedIn.svg";
import "./../../styles/main.css";
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a target="_blank" href="https://vk.com/id467677342">
                  <img src={vk} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a
                  target="_blank"
                  href="https://www.instagram.com/toshadrugdealer/"
                >
                  <img src={inst} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a target="_blank" href="#!">
                  <img src={tg} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a target="_blank" href="https://github.com/toshadrugdealer">
                  <img src={github} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a target="_blank" href="#!">
                  <img src={linkedin} alt="Link" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
