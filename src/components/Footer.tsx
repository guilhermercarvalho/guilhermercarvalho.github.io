import {
  AiFillEnvironment,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer id="footer" className="mt-5 rounded bg-black py-8 px-8">
      <div className="text-white md:text-center">
        <h1 className="font-medium text-lg">Contact Me</h1>
        <p>Wanna talk?</p>

        <ul className="md:flex justify-center gap-4">
          <li className="flex items-center gap-2">
            <AiFillMail />
            <p>guilhermercarvalho@gmail.com</p>
          </li>
        </ul>

        <ul className="md:flex justify-center gap-4">
          <li className="flex items-center gap-2">
            <AiFillEnvironment />
            <p>São Paulo - Brazil</p>
          </li>
        </ul>

        <div className="flex text-xl text-white gap-4 mt-2 md:justify-center">
          <a href="https://linkedin.com">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com">
            <AiFillGithub />
          </a>
          <a href="https://instagram.com">
            <AiFillInstagram />
          </a>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <p className="text-center text-sm text-gray-300 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a href="https://guilhermercarvalho.github.io">Guilherme Carvalho</a>.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
