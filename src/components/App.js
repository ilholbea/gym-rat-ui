import {Link} from 'react-router-dom';

export default function App() {
    return (
      <div>
          <h2>GymRat</h2>
          <nav>
              <Link to="/login">Login</Link>
          </nav>
      </div>
    );
}
