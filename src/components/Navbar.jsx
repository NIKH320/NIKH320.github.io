function Navbar(){

    return(

        <nav style={styles.nav}>
            <h2 style={styles.logo}>Nikhil Damahe</h2>
            <div>
                <a href="#about" style={styles.link}>About</a>
                  <a href="#skills" style={styles.link}>Skills</a>
                  <a href="#projects" style={styles.link}>Projects</a>
                  <a href="#contact" style={styles.link}>Contact</a>

            </div>
        </nav>
    )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#0f172a",
    color: "white",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000
    
  },
  link: {
    marginLeft: "20px",
    color: "white",
    textDecoration: "none"
  },
  logo: {
    margin: 0
  }
}


export default Navbar