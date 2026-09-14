export default function App() {
  const styles = {
    title: {
      color: "#5C6AC4",
    },
    header: {
      background: "red",
      color: "white",
      textAlign: "center",
      height: "60px",
    },
    section: {
      display: "flex",
      height: "calc(100vh - 160px)",
    },
    main: {
      padding: "20px",
      width: `calc(100% - 200px)`,
    },
    nav: {
      width: "100px",
      background: "orange",
    },
    sidebar: {
      width: "100px",
      background: "orange",
    },
    footer: {
      background: "grey",
      height: "100px",
    },
  };
  return (
    <>
      <header style={styles.header}>this is header</header>
      <div style={styles.section}>
        <nav style={styles.nav}>this si nav</nav>
        <main style={styles.main}>this is main</main>
        <sidebar style={styles.sidebar}>this is sidebar</sidebar>
      </div>
      <footer style={styles.footer}>this is footer</footer>
    </>
  );
}

// Lessons learned - I was making a mistake while writing hte styles with the calculation property it syntax must be strict.
