import {Link} from 'react-router-dom';
import logo from '../../../resources/temp_logo.jpg'

export default function Navbar() {
    return (
      <nav className="bg-white border-gray-200 px-2 px-4 py-1.5 bg-gray-900">
          <div className="container flex flex-wrap justify-between items-center">
              <Link to="/" className="flex items-center">
                  <img src={logo} className="mr-3 h-9 rounded" alt="GymRat Logo"/>
                  <span className="self-center text-xl font-semibold whitespace-nowrap text-white">GymRat</span>
              </Link>
              <div>
                  <ul>
                      <li>
                          <Link to="/login"
                                className="py-1 px-2 bg-blue-700 rounded text-white">Login</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
}




