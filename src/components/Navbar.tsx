export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm px-8 md:px-20 lg:px-40 py-4 flex justify-between items-center z-auto">
      <h1 className="text-lg">GUILHERME</h1>
      <ul className="flex items-center">
        <li>
          <a
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 bg-blue-300 rounded-md ml-8 text-white"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
