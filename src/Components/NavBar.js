import './NavBar.css'
const NavBar = () => {
return (
    <div className="navbar fixed-top navbar-dark bg-dark navbar-expand">
        <button className='btn navbar-brand power-btn'><i className="fas fa-power-off"></i></button>
        <ul className='navbar-nav ms-auto'>
            <li className='nav-item dropdown'>
                <button className='nav-link dropdown-toggle btn' data-bs-toggle="dropdown" aria-expanded="false" href="#">
                <i class="fas fa-volume-up"></i>
                </button>
            </li>
            <li className='nav-item dropdown'>
                <button className='nav-link dropdown-toggle btn'>
                <i class="fas fa-compact-disc"></i>
                </button>
                <ul className='dropdown-menu'>
                  <li><button className='dropdown-item' href="#">Drums</button></li> 
                </ul>
            </li>
            <li className='nav-item'>
                <button className='nav-link info-btn btn' roll="button" href="#">
                <i class="fas fa-info-circle"></i>
                </button>
            </li>

        </ul>
    </div>
)
}

export default NavBar