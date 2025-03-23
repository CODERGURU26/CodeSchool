import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav>

                <div id="logo">
                    <img src="https://png.pngtree.com/png-clipart/20230409/original/pngtree-school-logo-design-png-image_9037661.png"                 
                    />
                    <h1 className="text-2xl font-bold text-white">CodingGuru</h1>
                </div>

                <ul >
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Teachers">Teachers</Link></li>
                
                    <li>< Link to="/ContactUs">Contact Us </Link></li>
                    <li><Link to="/Holidays">Holidays</Link></li>

                    <button>Get Started</button>
                </ul>
            </nav>
        </>
    )
}

export default Navbar