import { useState, useMemo } from "react";

export default function AutoComp({ data }) {
  const [isWordMatch, setIsWordMatch] = useState([]);
  const [searchText, setSearchText] = useState("");

  const dataCopy = useMemo(
    () => Object.values(data).map((item) => item.heading),
    [data],
  );

  const handleCheck = (text) => {
    setSearchText(text);
    if (!text) return setIsWordMatch([]);
    const matches = dataCopy.filter((ele) =>
      ele.toLowerCase().includes(text.toLowerCase()),
    );
    setIsWordMatch(matches);
  };

  const styles = {
    mainBox: {
      background: "grey",
      textAlign: "center",
    },
    input: {
      width: "80%",
    },
    suggestionBox: {
      background: "red",
    },
  };
  return (
    <div>
      <div style={styles.mainBox}>
        the whole box
        <div>
          <input
            type='text'
            placeholder='Search for items'
            style={styles.input}
            value={searchText}
            onChange={(e) => {
              handleCheck(e.target.value);
            }}
          />

          <div>
            {isWordMatch.length >= 0
              ? isWordMatch.map((ele, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSearchText(ele);
                      handleCheck(ele);
                    }}
                  >
                    {ele}
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
