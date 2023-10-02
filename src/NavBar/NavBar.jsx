import { useState } from "react";
import Link from "../Components/Link/Link";
import { AiOutlineMenuUnfold, AiOutlineAlert } from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen]= useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/blog', name: 'Blog', id: 'blog' },
      ];


    return (
        <nav>
          <div className="md:hidden text-xl2" onClick={() => setOpen(!open)}>
            {
                open === true ? 
                <AiOutlineAlert></AiOutlineAlert>
                :<AiOutlineMenuUnfold className=" "></AiOutlineMenuUnfold>
            }
          
          </div>
                <ul className={`md:flex duration-1000
                absolute md:static
                ${open ? 'top-12': 'top-60'}
                bg-yellow-200 px-8 shadow-lg`}>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
        </nav>
    );
};

export default NavBar;