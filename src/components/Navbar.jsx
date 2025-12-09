import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex gap-6 shadow-lg">
      <Link className="hover:text-blue-400 font-semibold" to="/">Home</Link>
      <Link className="hover:text-blue-400 font-semibold" to="/abaddon">Abaddon</Link>
      <Link className="hover:text-blue-400 font-semibold" to="/alchemist">Alchemist</Link>
      <Link className="hover:text-blue-400 font-semibold" to="/ancient-apparition">Ancient Apparition</Link>
      <Link className="hover:text-blue-400 font-semibold" to="/anti-mage">Anti-Mage</Link>
      <Link className="hover:text-blue-400 font-semibold" to="/arc-warden">Arc Warden</Link>
    </nav>
  );
}