import { useState } from "react";
import { Home, FileText, PlusCircle, User, Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import MyLogo from "./MyLogo";

const navItems = [
  { name: "Dashboard", icon: Home, to: "/dashboard", end: true },
  { name: "My Loan Requests", icon: FileText, to: "/dashboard/loans" },
  { name: "New Loan", icon: PlusCircle, to: "/dashboard/newloan" },
  { name: "Profile", icon: User, to: "/dashboard/profile" },
];

interface sidebarProps {
  className?: string;
  // Add other props as needed
}

const Sidebar: React.FC<sidebarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const location = useLocation();

  const navLinks = (
    <nav className="space-y-2">
      {navItems.map(({ name, icon: Icon, to, end }) => (
        <NavLink
          key={name}
          to={to}
          end={end} // only for `/dashboard`
          onClick={() => setIsOpen(false)} // close sidebar on mobile after click
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 px-4 py-2 rounded-lg transition-all",
              isActive
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted hover:text-muted-foreground"
            )
          }
        >
          <Icon className="w-5 h-5" />
          <span>{name}</span>
        </NavLink>
      ))}
    </nav>
  );

  return (
    <>
      <div className={className}>
        {/* Topbar for mobile */}
        <div className="mobile_nav">
          <div className="for_logo absolute top-[18px] left-[13px] md:hidden">
            <MyLogo />
          </div>
          <div className="absolute top-[10px] right-[10px] rounded-[5px] md:hidden flex justify-between items-center px-4 py-3 bg-primary text-white border-b">
            <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop sidebar */}
        <aside className="hidden md:flex md:flex-col md:w-64 md:h-screen bg-black text-white px-4 py-6 border-r">
          <h1 className="text-2xl font-bold mb-8">
            <MyLogo />
          </h1>
          {navLinks}
        </aside>

        {/* Mobile Sidebar Drawer */}
        {isOpen && (
          <div
            className=" fixed inset-0 z-50 bg-black/50 md:hidden"
            onClick={toggleSidebar}
          >
            <aside
              className="bg-black text-white absolute top-0 left-0 w-64 h-full bg-background text-foreground px-4 py-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">
                  <MyLogo />
                </h1>
                <button onClick={toggleSidebar}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              {navLinks}
            </aside>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
