import Link from "next/link";
import Image from "next/image"; 

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-3  rounded-full w-10/12 mx-auto mt-11 bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/Logo.svg" 
              alt="Logo"
              width={50} 
              height={50}
            />
          </Link>
          <ul className="flex space-x-4 ml-4">
            <li>
              <Link href="/" className="text-black text-base px-2.5">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="text-black text-base px-2.5">
                Works
              </Link>
            </li>
            <li className="border-l border-gray-300 h-6"></li>
            <li>
              <Link href="/" className="text-black text-base px-2.5">
                Dribbble
              </Link>
            </li>
            <li>
              <Link href="/" className="text-black text-base px-2.5">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="btn">Get in touch</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
