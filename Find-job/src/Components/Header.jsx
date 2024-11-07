import Cover from "../public/images/bg-header-desktop.svg";
import Close from "../public/images/removeIcon.svg";

function Header({ keyWords, removeKeywords, clearAll }) {
  // Use keyWords instead of keywords

  return (
    <>
      <header className="header-container">
        <ul>
          <a href="#" className="btn" onClick={clearAll}>
            Clear All
          </a>
          {keyWords !== undefined &&
            keyWords.map((key, inx) => {
              return (
                <li key={inx}>
                  <button
                    className="btn"
                    onClick={() => {
                      removeKeywords(key);
                      setHasRendered(true);
                    }}
                  >
                    {key}
                    <img src={Close} alt="Remove" />
                  </button>
                </li>
              );
            })}
        </ul>
      </header>
    </>
  );
}

export default Header;
