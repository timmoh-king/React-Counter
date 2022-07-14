/**
 * @Author: Your name
 * @Date:   2022-07-12 23:44:22
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-07-13 18:07:27
 */

const Navbar = ({ totalCounters }) =>{
    return (
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand' href='#'>
                Navbar{" "}
                <span className='badge badge-pill badge-secondary'>
                    { totalCounters }
                </span>
            </a>
        </nav>
    );
}

export default Navbar;