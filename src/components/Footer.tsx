import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Maq Pedro™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <a href="https://www.instagram.com/maq_pedro/" target="_blank">
          <FaInstagram size={30} />
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
