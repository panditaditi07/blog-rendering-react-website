import style from "./NotFound.module.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className={style["not-found-container"]}>
      <img
        src="https://files.muzli.space/72036d40be5a15a8ec3cfed328d57549.webp"
        alt="Not found"
        className={style["image"]}
      ></img>
      <Link to="/">
        <button className={style["btn"]}>Go back to Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
