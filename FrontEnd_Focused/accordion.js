import { useState } from "react";

export default function Accordion() {
  const [acd1, setAcd1] = useState(true);
  const [acd2, setAcd2] = useState(true);
  const [acd3, setAcd3] = useState(true);

  return (
    <div>
      <div>
        <div onClick={(e) => setAcd1((prev) => !prev)}>
          HTML <span aria-hidden={true} className='accordion-icon' />
        </div>
        <div style={acd1 == true ? { display: "none" } : {}}>
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </div>
      </div>
      <div>
        <div onClick={(e) => setAcd2((prev) => !prev)}>
          CSS <span aria-hidden={true} className='accordion-icon' />
        </div>
        <div style={acd2 == true ? { display: "none" } : {}}>
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </div>
      </div>
      <div>
        <div onClick={(e) => setAcd3((prev) => !prev)}>
          JavaScript <span aria-hidden={true} className='accordion-icon' />
        </div>
        <div style={acd3 == true ? { display: "none" } : {}}>
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </div>
      </div>
    </div>
  );
}
