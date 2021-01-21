import { Link } from "react-router-dom";
import style from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={style["nav-container"]}>
      <h2 className={style["nav-logo"]}>Go Green</h2>
      <ul className={style["nav-ul"]}>
        <Link to="/" className={style["link-home"]}>
          <li className={style["nav-links"]}>Nature Cards</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
