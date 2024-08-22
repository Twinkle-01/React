import { Link } from "react-router-dom"
import "./navbar.css"
function Navbar() {
    return (
        <div className="navbar">
            <h1>Navbar</h1>
            <div className="links">
                <Link to ="/">Home</Link>
                <Link to ="/about">About</Link>
                <Link to ="/blogs">Blogs</Link>
            </div>
            <button style={{
                padding: "11px 27px",
                borderRadius: 5,
                color: "white",
                border: "none",
                backgroundColor: "dodgerblue"
            }}
            >
                Register
            </button>
        </div>
    )
}
export default Navbar