import './NavBar.css'
const NavBar = () => {
return (
    <div className="navbar fixed-top navbar-dark bg-dark navbar-expand">
        <button className='btn btn-primary navbar-brand power-btn'><i className="fas fa-power-off"></i></button>
        <ul className='navbar-nav ms-auto'>
            <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' roll="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">
                <i class="fas fa-volume-up"></i>
                </a>
            </li>
            <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' roll="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">
                <i class="fas fa-compact-disc"></i>
                </a>
                <div className='dropdown-menu'>
                    <a className='dropdown-item' href="#">Drums</a>
                </div>
            </li>
            <li className='nav-item'>
                <a className='nav-link info-btn' roll="button" href="#">
                <i class="fas fa-info-circle"></i>
                </a>
                <div className='dropdown-menu'>
                    <a className='dropdown-item' href="#">Drums</a>
                </div>
            </li>

        </ul>
    </div>
)
}

export default NavBar