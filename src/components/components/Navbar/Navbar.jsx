import {Link} from 'react-router-dom';
import logo from '../../../resources/temp_logo.jpg';

export default function Navbar() {
    return (
      <nav className="bg-white border-gray-200 px-2 py-4 bg-russian-violet-50 rounded-b">
          <div className="flex flex-wrap justify-between items-center">
              <Link to="/" className="flex items-center">
                  <img src={logo} className="mr-3 h-9 rounded" alt="GymRat Logo"/>
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">GymRat</span>
              </Link>
              <div>
                  <ul>
                      <li>
                          <Link to="/login"
                                className="py-1 px-1.5 bg-pine-green-50 rounded text-white text-2xl">Login</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
}




