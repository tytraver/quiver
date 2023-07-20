import LoginButton from "./login-button"
import HeaderLogo from "./logo";
import MenuButton from "./menu-button";
import Navigation from "./navigation";
import SignUpButton from "./sign-up-button";

export default function Toolbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-900 p-6">
      <HeaderLogo />
      <div className="block lg:hidden">
        <MenuButton />
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-md">
        <Navigation />
        <LoginButton />
        <SignUpButton />
      </div>
    </nav>
  );
}
