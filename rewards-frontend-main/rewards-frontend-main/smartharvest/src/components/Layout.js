import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="harvest-rewards">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a class="navbar-brand" href="/">
              Harvest Rewards
            </a>
            <div>
              <button
                className="btn btn-primary mx-1"
                type="button"
                onClick={() => (window.location.href = "/dashboard")}>
                Dashboard
              </button>
              <span className="mx-1">Welcome, User!</span>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;