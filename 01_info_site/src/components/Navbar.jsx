import reactlogo from "../assets/react-icon-small.png"

export default function Navbar(props) {
    return (
        <nav>
            <img src={reactlogo} className="nav--icon"/>
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}