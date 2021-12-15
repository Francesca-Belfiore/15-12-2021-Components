import styles from "./Header.module.scss"

const Header = (props) => {

    const name = props.name || "App";

    return (
        <header className={styles.header}>

            <div className="title">
                <button className="fa fa-bars"></button>
                <h1>{name}</h1>
            </div>

            <div className="search">
                <input type="text" name="sarch" id="search" placeholder="Cerca" />
                <button className="searchBtn">🔍</button>
                <button className="micBtn"><i className="fa fa-microphone"></i></button>
            </div>


            <nav>
                <ul>
                    <li> 
                        <a href="/">Crea</a>
                        <a href="/">App</a>
                        <a href="/">Notifiche</a>
                        <a href="/">Account</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;