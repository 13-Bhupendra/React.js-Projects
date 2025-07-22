import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function SocialMediaButtons() {
  return (
    <>
      <div className="mt-4">
        <a className="btn fs-3 p-0">
          <FaLinkedin />
        </a>
        <a className="btn fs-3 p-1">
          <FaSquareGithub />
        </a>
        <a className="btn fs-3 p-1">
          <FaSquareXTwitter />
        </a>
        <a className="btn fs-3 p-1">
          <RiInstagramFill />
        </a>
        <a className="btn fs-3 p-1">
         <FaFacebookSquare />
        </a>
      </div>
    </>
  );
}
