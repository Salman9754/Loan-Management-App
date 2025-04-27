import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import MyLogo from "./MyLogo";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto flex justify-between py-3 px-3 mt-2">
        <MyLogo />
        <div className="right">
          <Link to={"/signup"}>
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
