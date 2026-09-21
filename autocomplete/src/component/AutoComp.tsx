import { useState, useMemo, useRef, useEffect } from "react";

export default function AutoComp({ data }) {
  const [matches, setMatches] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef(null);

  const dataCopy = useMemo(
    () => Object.values(data).map((item) => item.heading),
    [data],
  );

  const handleCheck = (text) => {
    setSearchText(text);
    setActiveIndex(-1);
    if (!text.trim()) {
      setMatches([]);
      setIsOpen(false);
      return;
    }
    const results = dataCopy.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase()),
    );
    setMatches(results);
    setIsOpen(true);
  };

  const handleSelect = (value) => {
    setSearchText(value);
    setMatches([]);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!isOpen || matches.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % matches.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + matches.length) % matches.length);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(matches[activeIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  // Close on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Highlight the matching substring
  const highlight = (text) => {
    const idx = text.toLowerCase().indexOf(searchText.toLowerCase());
    if (idx === -1 || !searchText) return text;
    return (
      <>
        {text.slice(0, idx)}
        <mark style={styles.mark}>
          {text.slice(idx, idx + searchText.length)}
        </mark>
        {text.slice(idx + searchText.length)}
      </>
    );
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <header style={styles.header}>
          <h2 style={styles.title}>Autocomplete</h2>
          <p style={styles.subtitle}>
            Type to search — use ↑ ↓ to navigate, Enter to select, Esc to close.
          </p>
        </header>

        <div ref={wrapperRef} style={styles.wrapper}>
          <div style={styles.inputWrap}>
            <span style={styles.searchIcon} aria-hidden='true'>
              🔍
            </span>
            <input
              type='text'
              placeholder='Search for items...'
              style={styles.input}
              value={searchText}
              onChange={(e) => handleCheck(e.target.value)}
              onFocus={() => searchText && setIsOpen(true)}
              onKeyDown={handleKeyDown}
              aria-autocomplete='list'
              aria-expanded={isOpen}
              aria-controls='autocomplete-list'
            />
            {searchText && (
              <button
                style={styles.clearBtn}
                onClick={() => handleSelect("")}
                aria-label='Clear'
              >
                ✕
              </button>
            )}
          </div>

          {isOpen && matches.length > 0 && (
            <ul
              id='autocomplete-list'
              role='listbox'
              style={styles.suggestionBox}
            >
              {matches.map((item, i) => (
                <li
                  key={item}
                  role='option'
                  aria-selected={i === activeIndex}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setActiveIndex(i)}
                  style={{
                    ...styles.suggestion,
                    ...(i === activeIndex ? styles.suggestionActive : {}),
                  }}
                >
                  {highlight(item)}
                </li>
              ))}
            </ul>
          )}

          {isOpen && matches.length === 0 && searchText && (
            <div style={styles.emptyState}>No results for “{searchText}”</div>
          )}
        </div>

        {searchText && !isOpen && (
          <p style={styles.selected}>
            Selected: <strong>{searchText}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    padding: "2rem",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  card: {
    width: "100%",
    maxWidth: 480,
    background: "#ffffff",
    borderRadius: 16,
    padding: "2rem",
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
  },
  header: { marginBottom: "1.25rem" },
  title: {
    margin: 0,
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#0f172a",
  },
  subtitle: {
    margin: "0.35rem 0 0",
    fontSize: "0.85rem",
    color: "#64748b",
    lineHeight: 1.5,
  },
  wrapper: { position: "relative" },
  inputWrap: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    position: "absolute",
    left: 14,
    fontSize: "0.9rem",
    opacity: 0.55,
    pointerEvents: "none",
  },
  input: {
    width: "100%",
    padding: "0.75rem 2.5rem",
    fontSize: "0.95rem",
    border: "1px solid #e2e8f0",
    borderRadius: 10,
    outline: "none",
    transition: "border-color 0.15s, box-shadow 0.15s",
    color: "#0f172a",
  },
  clearBtn: {
    position: "absolute",
    right: 10,
    border: "none",
    background: "#f1f5f9",
    color: "#64748b",
    width: 24,
    height: 24,
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "0.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  suggestionBox: {
    position: "absolute",
    top: "calc(100% + 6px)",
    left: 0,
    right: 0,
    margin: 0,
    padding: "0.35rem",
    listStyle: "none",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: 10,
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.12)",
    maxHeight: 220,
    overflowY: "auto",
    zIndex: 10,
  },
  suggestion: {
    padding: "0.55rem 0.75rem",
    borderRadius: 6,
    fontSize: "0.9rem",
    color: "#334155",
    cursor: "pointer",
    transition: "background 0.1s",
  },
  suggestionActive: {
    background: "#eef2ff",
    color: "#1e293b",
  },
  mark: {
    background: "#fde68a",
    color: "inherit",
    padding: "0 2px",
    borderRadius: 3,
  },
  emptyState: {
    position: "absolute",
    top: "calc(100% + 6px)",
    left: 0,
    right: 0,
    padding: "0.75rem 1rem",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: 10,
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.12)",
    fontSize: "0.85rem",
    color: "#94a3b8",
  },
  selected: {
    marginTop: "1rem",
    fontSize: "0.85rem",
    color: "#475569",
  },
};
