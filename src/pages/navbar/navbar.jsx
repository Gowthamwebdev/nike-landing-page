import logo from '../../assets/logo.png';

export const Navbar = () => {
  return (
    <header>
      <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80 w-screen">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <div className="h-10 w-10 mr-2" src={logo} alt = "logo"></div>
              <span className='text-xl tracking-tight'>nike</span>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
