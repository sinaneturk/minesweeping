import { Link, Outlet, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const location = useLocation();
  const path = location.pathname;
  console.log("P=>", path)
  return (
    <div className="App">
      <nav>
        <ul>
          {
            path === "/" || path === "/home"
              ?
            <li className='active'>
              <Link to={`home`}>Home</Link>
            </li>
              :
            <li>
              <Link to={`home`}>Home</Link>
            </li>
          }


          {
            path === "/previous-games"
              ?
            <li className='active'>
              <Link to={`previous-games`}>Previous Games</Link>
            </li>
              :
            <li>
              <Link to={`previous-games`}>Previous Games</Link>
            </li>
          }

          {
            path === "/profile"
              ?
            <li className='active'>
              <Link to={`profile`}>Previous Games</Link>
            </li>
              :
            <li>
              <Link to={`profile`}>Previous Games</Link>
            </li>
          }

        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
