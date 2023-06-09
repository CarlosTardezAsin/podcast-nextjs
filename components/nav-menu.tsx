import Link from "next/link"

export const NavMenu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" href="/">Home</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" href="/podcasts">Podcasts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}