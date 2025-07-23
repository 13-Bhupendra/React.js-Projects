import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeChanger";

export default function SocialMediaButtons() {
  const { Theme } = useContext(ThemeContext);

  return (
    <>
      <div className="mt-4">
        <a className="btn fs-3 p-0">
          <FaLinkedin style={{ color: Theme == "light" ? "black" : "white" }} />
        </a>
        <a className="btn fs-3 p-1">
          <FaSquareGithub
            style={{ color: Theme == "light" ? "black" : "white" }}
          />
        </a>
        <a className="btn fs-3 p-1">
          <FaSquareXTwitter
            style={{ color: Theme == "light" ? "black" : "white" }}
          />
        </a>
        <a className="btn fs-3 p-1">
          <RiInstagramFill
            style={{ color: Theme == "light" ? "black" : "white" }}
          />
        </a>
        <a className="btn fs-3 p-1">
          <FaFacebookSquare
            style={{ color: Theme == "light" ? "black" : "white" }}
          />
        </a>
      </div>
    </>
  );
}
