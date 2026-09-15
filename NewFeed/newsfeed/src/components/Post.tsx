export default function Post({ userName, userPosts, postLike, postImg }) {
  const styles = {
    main: {
      background: "white",
      width: "90%",
      maxWidth: "600px",
      minHeight: "200px",
      borderRadius: "15px",
      margin: "10px auto",
      padding: "16px",
      display: "flex",
      justifyContent: "space-between",
      gap: "16px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
      fontFamily: "system-ui, sans-serif",
    },

    left: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flex: 1,
      minWidth: 0, // prevents text overflow from breaking flex
    },

    header: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    },

    userName: {
      fontWeight: 600,
      fontSize: "16px",
      color: "#111",
    },

    postText: {
      fontSize: "14px",
      color: "#333",
      lineHeight: 1.5,
      wordBreak: "break-word",
    },

    actions: {
      display: "flex",
      gap: "16px",
      marginTop: "16px",
      fontSize: "13px",
      color: "#666",
      cursor: "pointer",
      userSelect: "none",
    },

    actionItem: {
      transition: "color 0.2s",
    },

    imageBox: {
      width: "140px",
      height: "140px",
      borderRadius: "10px",
      background: "#f0f0f0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#aaa",
      fontSize: "12px",
      flexShrink: 0,
      overflow: "hidden",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };

  return (
    <div style={styles.main}>
      {/* Left: user info + actions */}
      <div style={styles.left}>
        <div style={styles.header}>
          <div style={styles.userName}>{userName}</div>
          <div style={styles.postText}>{userPosts.text}</div>
        </div>

        <div style={styles.actions}>
          <span style={styles.actionItem}>👍 Like {postLike}</span>
          {/* <span style={styles.actionItem}>💬 Comment</span> */}
          {/* <span style={styles.actionItem}>↗ Share</span> */}
        </div>
      </div>

      {/* Right: image */}
      <div style={styles.imageBox}>
        {userPosts.image ? (
          <img src={`${postImg}`} alt='post' style={styles.image} />
        ) : (
          "image"
        )}
      </div>
    </div>
  );
}
