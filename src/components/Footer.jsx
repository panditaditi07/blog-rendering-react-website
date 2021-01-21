import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Footer.module.css";
import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={style["icons"]}>
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            className={style["facebook-icon"]}
          />
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            className={style["twitter-icon"]}
          />
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className={style["linkedin-icon"]}
          />
        </div>
        <div className={style["footer-heading"]}>
          <p>© Go Green. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
