import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { Navitems } from "../utils/Data";

export const Navbar = () => {
  return (
    <header className="padding-x py-8 z-10 w-full relative top-0">
      <nav className="flex justify-around items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {Navitems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 gap-2 fonr-monserrat font-medium leading-normal max-lg:hidden items-center justify-center">
          <span>Sign-in</span>
          <span>/</span>
          <span>Explore</span>
        </div>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};
