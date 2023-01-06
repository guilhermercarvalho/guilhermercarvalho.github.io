import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function About() {
  return (
    <section
      id="home"
      className="min-h-screen text-center mt-4 flex flex-col justify-center"
    >
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-4">
        <img src="/images/avatar.png" alt="My Avatar" />
      </div>
      <h1 className="uppercase text-3xl md:text-5xl font-medium text-teal-500">
        Guilherme Carvalho
      </h1>
      <h3 className="text-xl md:text-2xl">Software Developer</h3>
      <p className="text-md py-1 text-gray-800 md:text-xl">
        Enthusiastic and motivated self-learning about information technology.
        Focused on cloud computing, devsecops, and web development. Now I am
        looking for more experience in my field.
      </p>
      <div className="text-5xl py-4 flex justify-center gap-16 text-gray-600">
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
    </section>
  );
}
