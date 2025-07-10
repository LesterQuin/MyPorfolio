import logo from "../assets/logo.png";

const Header = ({ children }) => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <nav id="navbar" className="fixed top-0 h-fit w-[100vw] bg-navy">
      <div className="flex py-6 pl-3 pr-6 text-xl">
        <div className="w-[45%] pl-40 mobile-lg:!pl-10">
          <img
            onClick={reloadPage}
            src={logo}
            alt="logo"
            className="w-10 h-10 hover:cursor-pointer"
          />
        </div>
        <div className="w-[55%] text-right tablet:!hidden">
          <div
            id="headerbtn"
            className="flex justify-evenly lg:text-lg md:text-sm md:py-2 sm:text-sm xs:text-xs"
          >
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
