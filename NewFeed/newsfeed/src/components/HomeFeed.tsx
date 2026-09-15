import { useState } from "react";
import Post from "./Post";
import CreatePost from "./CreatePost";

export default function HomeFeed({ user }) {
  const [isCreatePost, setIsCreatePost] = useState(false);

  const style = {
    main: {
      display: "flex",
      height: "fit-content",
      position: "relative",
    },
    sidebar: {
      background: "orange",
      width: "150px",
      // height: "100%",
    },
    postFeed: {
      background: "grey",
      width: "calc(100% - 150px)",
      padding: "10px",
    },
    todayDate: {
      background: "teal",
    },
    // postPage: {
    //   textAlign: "center",
    // },
    createPost: {
      position: "absolute",
      height: "100vh",
      width: "100vw",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    cutButton: {
      height: "50px",
      width: "50px",
      backgroundColor: "red",
      position: "absolute",
      top: "10px",
      right: "10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    createPostInner: {
      height: "400px",
      width: "400px",
      background: "#fff",
    },
  };

  return (
    <div style={style.main}>
      {/* side bar */}
      <div style={style.sidebar}>
        <div>{user.name}</div>
        <button onClick={() => setIsCreatePost(true)}>Create Post</button>
      </div>

      {isCreatePost ? (
        <div style={style.createPost}>
          <div style={style.createPostInner}>
            <h1>Create New Post</h1>
            <div style={style.cutButton} onClick={() => setIsCreatePost(false)}>
              X
            </div>
            <CreatePost user={user} setIsCreated={setIsCreatePost} />
          </div>
        </div>
      ) : null}

      {/* main post feed */}
      <div style={style.postFeed}>
        <div style={style.todayDate}>Today's Date</div>

        {/* feed */}
        <div>
          {user.postCreated
            ? user.postCreated.map((ele) => (
                <Post
                  userName={user.name}
                  userPosts={ele}
                  postLike={ele.like}
                  postImg={ele.image}
                ></Post>
              ))
            : "no post create one pls"}
        </div>
      </div>
    </div>
  );
}
