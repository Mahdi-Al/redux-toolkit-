// import Cover from "../../src/design/public/images/bg-header-desktop.svg";
import Cover from "../public/images/bg-header-desktop.svg";
import Close from "../public/images/removeIcon.svg";
function Header({ keywords, removeKeywords, clearAll }) {
  return (
    <header className="header-container">
      <ul>
        {keywords !== undefined &&
          keywords.map((key, inx) => {
            return (
              <li key={inx}>
                {key}
                <button onClick={() => removeKeywords(key)}>
                  <img src={Close} />
                </button>
                <a href="#" onClick={() => clearAll}>
                  Clear
                </a>
              </li>
            );
          })}
      </ul>
    </header>
  );
}

export default Header;
