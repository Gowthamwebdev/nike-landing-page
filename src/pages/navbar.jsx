import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { Navitems } from '../utils/Data';


export const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-[100vw]'>
      <nav className='flex justify-between items-center max-container'>
      
        <a href="/">
          <img src={headerLogo} 
          className="px-4 mx-4 px-auto"
          alt="logo" />
        </a>
              
              <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
              {Navitems.map((item) => (
                <li className="cursor-pointer" key={item.label}>
                  <a className="font-montserrat leading-normal text-lg text-slate-gray"
                   href={item.link}>
                    {item.label}
                  </a>
                </li>
              ))}
             </ul>
          
          <div className="cursor-pointer flex flex-1 gap-2 fonr-monserrat font-medium leading-normal max-lg:hidden items-center justify-center">
            <span>Sign-in</span>
            <span>/</span>
            <span>Explore</span>
          </div>

      </nav>
    </header>
  )
}
