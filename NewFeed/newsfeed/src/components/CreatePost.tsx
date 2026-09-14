export default function CreatePost() {
  const styles = {
    main: {
      textAlign: "center",
    },
    input: {
      width: "85%",
      height: "40px",
    },
  };

  return (
    <div style={styles.main}>
      <textarea
        name='mainText'
        id='mainText'
        cols={40}
        rows={10}
        placeholder='Enter content'
      ></textarea>

      <input style={styles.input} type='text' placeholder='Image Url' />

      <button>Add Post</button>
    </div>
  );
}
