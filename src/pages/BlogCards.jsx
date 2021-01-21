import { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import initFontAwesome from "../components/initFontAwesome";
import styles from "./BlogCards.module.css";
import NotFound from "../components/NotFound";
import Loader from "react-loader-spinner";

const url = "https://blog-backend-nodejs.herokuapp.com/blogs";

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      status: "",
    };
  }

  componentDidMount = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ blogs: data.data[0], status: data.status });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    initFontAwesome();
    return (
      <>
        {this.state.status === "" ? (
          <div className={styles["loading"]}>
            <Loader
              type="Puff"
              color="#b5d4037"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        ) : this.state.status === "Successful" ? (
          <>
            <Navigation />
            <div className={styles["body-container"]}>
              <h1 className={styles["blog-heading"]}>
                A Short Glossary for Nature Lovers.
              </h1>

              <div className={styles["blog-container"]}>
                {this.state.blogs.map((blog) => {
                  return (
                    <div className={styles["blog-card"]} key={blog.id}>
                      <div>
                        <Link to={`/blogs/${blog.id}`}>
                          <img
                            src={blog.imageUrl}
                            alt="BlogImage"
                            className={styles["blog-image-cards"]}
                          ></img>
                        </Link>
                        <div className={styles["blog-card-content"]}>
                          <div className={styles["blog-author-overlay"]}>
                            <div className={styles["blog-author"]}>
                              <h3>{blog.author}</h3>
                            </div>
                          </div>
                          <div className={styles["overlay"]}>
                            <div className={styles["blog-title"]}>
                              {blog.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Footer />
            </div>
          </>
        ) : (
          <NotFound />
        )}
      </>
    );
  }
}

export default Blogs;
