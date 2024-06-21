import { NavLink } from "react-router-dom";

import { design } from "../assets/images";
const logo = design

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-20 h-20 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-rose-450 font-bold" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-rose-450 font-bold" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
