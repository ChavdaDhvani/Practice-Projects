import { Outlet, NavLink } from 'react-router-dom';

function Root() {
  return (
    <>
      <header>
        <nav>
          <ul style={{ display: "flex", gap: "1rem" }}>
            <li>
              <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", })} end >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", })} >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
