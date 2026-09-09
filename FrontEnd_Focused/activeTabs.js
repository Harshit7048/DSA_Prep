// import { useState } from "react";

export default function Tabs() {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  return (
    <div>
      <div>
        <button
          onClick={(pre) => {
            setActive1((pre) => !pre);
            setActive2(false);
            setActive3(false);
          }}
          style={
            active1
              ? {
                  background: "blue",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                }
              : {}
          }
        >
          HTML
        </button>
        <button
          onClick={(pre) => {
            setActive1(false);
            setActive2(true);
            setActive3(false);
          }}
          style={
            active2
              ? {
                  background: "blue",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                }
              : {}
          }
        >
          CSS
        </button>
        <button
          onClick={(pre) => {
            setActive1(false);
            setActive2(false);
            setActive3(true);
          }}
          style={
            active3
              ? {
                  background: "blue",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                }
              : {}
          }
        >
          JavaScript
        </button>
      </div>
      <div>
        <p style={!active1 ? { display: "none" } : {}}>
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </p>
        <p style={!active2 ? { display: "none" } : {}}>
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </p>
        <p style={!active3 ? { display: "none" } : {}}>
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </p>
      </div>
    </div>
  );
}
