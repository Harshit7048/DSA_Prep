export default function Post({ userName, userPosts }) {
  const styles = {
    main: {
      background: "white",
      width: "90%",
      height: "300px",
      borderRadius: "15px",
      margin: "auto",
      padding: "10px",
    },
  };

  return (
    <div style={styles.main}>
      {/* usr info */}
      <div>{userName}</div>
      <div>{userPosts.text}</div>
    </div>
  );
}
