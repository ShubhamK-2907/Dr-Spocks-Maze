import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-600 py-12 text-white">
      <div className="w-[96%] max-w-screen-lg mx-auto flex flex-row justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Dr. Spock's Maze
            </span>
          </Link>
        </div>
        <div>
          <div className="space-y-2">
            <h1 className="text-center text-lg">Follow On</h1>
            <div className="flex items-center gap-3">
              <a href="https://github.com/ShubhamK-2907" target="_blank">
                <FaGithub size={30} />
              </a>
              <a href="https://x.com/ShubhamK2907_" target="_blank">
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
