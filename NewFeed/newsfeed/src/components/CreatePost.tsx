import { useState } from "react";
import { addImage, addPost, type Post } from "../Data/users";

export default function CreatePost({ user, setIsCreated }) {
  const [postText, setPostText] = useState<string>("");
  const [postImg, setPostImg] = useState<string>("");

  const styles = {
    main: {
      textAlign: "center",
    },
    input: {
      width: "85%",
      height: "40px",
    },
  };

  const handleCreatePost = function (text, img) {
    console.log(text);
    console.log(img);

    const newPost: Post = {
      id: Date.now(),
      text: text,
      image: img,
    };

    addPost(user, newPost);

    setIsCreated(false);

    // addImage(user,img,)
  };

  return (
    <div style={styles.main}>
      <textarea
        name='mainText'
        id='mainText'
        cols={40}
        rows={10}
        placeholder='Enter content'
        onChange={(e) => setPostText(e.target.value)}
      ></textarea>

      <input
        style={styles.input}
        type='text'
        placeholder='Image Url'
        onChange={(e) => setPostImg(e.target.value)}
      />

      <button onClick={() => handleCreatePost(postText, postImg)}>
        Add Post
      </button>
    </div>
  );
}
