import logo from "../assets/investment-calculator-logo.png"
export default function Header(){
    return(
        <div id="header">
            <img src={logo}></img>
            <h1>Investment</h1>
        </div>
    )
}