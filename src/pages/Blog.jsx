import { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import initFontAwesome from "../components/initFontAwesome";
import NotFound from "../components/NotFound";
import styles from "./Blog.module.css";
import Loader from "react-loader-spinner";

const url = "https://blog-backend-nodejs.herokuapp.com/blogs/";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: [],
      status: "",
    };
  }

  componentDidMount = () => {
    fetch(`${url}${this.props.match.params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data === undefined) {
          return new Error("Not a valid url");
        } else {
          this.setState({ blog: data.data, status: data.status });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderBlog(id) {
    fetch(`${url}${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ blog: data.data, status: data.status });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    initFontAwesome();
    return (
      <>
        {this.state.status === "" ? (
          <div className={styles["loading"]}>
            <Loader
              type="Puff"
              color="#5d4037"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        ) : this.state.status === "Successful" ? (
          <>
            <Navigation />
            <div className={styles["blog-container"]}>
              <div className={styles["blog-elements"]}>
                <div className={styles["blog-content"]}>
                  <h1 className={styles["blog-title"]}>
                    {this.state.blog.title}
                  </h1>
                  <img
                    src={this.state.blog.imageUrl}
                    alt="Blog Banner"
                    className={styles["blog-image"]}
                  />
                  <p className={styles["blog-description"]}>
                    {this.state.blog.content}
                  </p>
                </div>
                <div className={styles["aside-section"]}>
                  <h1 className={styles["related-links"]}>Related Links</h1>
                  {this.state.blog.links !== []
                    ? this.state.blog.links.map((link, i) => {
                        return (
                          <div
                            className={styles["side-panel"]}
                            key={`${link.id}${i}`}
                          >
                            <Link
                              to={`/blogs/${link.id}`}
                              id={link.id}
                              className={styles["new-link"]}
                              onClick={() => this.renderBlog(link.id)}
                            >
                              {link.title}
                              <hr className={styles["link-hr"]} />
                            </Link>
                          </div>
                        );
                      })
                    : console.log("No links")}
                </div>
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

export default Blog;
