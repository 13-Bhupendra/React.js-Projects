import Person from "../assets/Person.png";
import SocialMediaButtons from "./SocialMediaIcons";
import "../style/style.css";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeChanger";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

export default function MainContent() {
  const { Theme, handleThemeChange } = useContext(ThemeContext);

  return (
    <>
      <div
        className="container  mt-5 pt-3"
        style={{
          border: "1px solid gray",
          backgroundColor: Theme == "light" ? "lightgray" : "rgb(40, 40, 40)",
          color: Theme == "light" ? "black" : "white",
        }}
      >
        <div className="w-100 d-flex justify-content-end pe-5 ">
          <a href="#" onClick={handleThemeChange}>
            {Theme !== "light" ? (
              <FaSun
                style={{
                  fontSize: "25px",
                  color: Theme == "light" ? "black" : "white",
                }}
              />
            ) : (
              <FaMoon
                style={{
                  fontSize: "25px",
                  color: Theme == "light" ? "black" : "white",
                }}
              />
            )}
          </a>
        </div>

        <div className="row p-5 pt-3 pb-md-0 pb-5 align-items-center">
          <div className="col-12 col-md-7 order-2 order-md-1">
            <h1 className="fw-bold mb-5">Hey ! , I'm John Deo. </h1>
            <p
              className="fs-5 fw-medium"
              style={{ color: Theme == "light" ? "black" : "white" }}
            >
              A freelancing Web Developer from London . I convert custom Web
              Design to Bootsrap Template . I make YouTube videos and Write
              Blogs.
            </p>
            <a className="btn btn-outline-primary mt-3">I'M AVAILABLE</a>
            <SocialMediaButtons />
          </div>

          <div className="col-12 col-md-5 order-1 order-md-2 mb-5 mb-md-0 d-flex justify-content-center">
            <img src={Person} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
