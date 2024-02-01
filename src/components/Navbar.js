import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <h1 className='w-18 h-18 object-contain text-white' >Go Rearward</h1>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-white" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
