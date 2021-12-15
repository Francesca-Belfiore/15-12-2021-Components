import styles from "./Nav.module.scss"

const Nav = (props) => {

    const links = props.links || [{ link: "", label: "" }];

    return (
        <nav className={styles.nav}>
            <ul>
                {links.map((item, index) => (
                    <li key={index}> 
                        <a href={item.link}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;