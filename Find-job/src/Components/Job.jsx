import { useDispatch } from "react-redux";
import { addKeyword } from "../Redux/filterRoleSlice";

export default function Job(props) {
  const dispatch = useDispatch();
  const {
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
  } = props.data || {}; // Ensure props.data is defined

  // Create an array of keywords
  const keyWords = [role, level, ...languages, ...tools].filter(Boolean); // Filter out any undefined values

  return (
    <div className="job-container">
      <div className="logo">
        <img
          src={logo}
          alt={`${company} logo`}
          onError={(e) => (e.target.src = "path/to/default/image.png")}
        />
      </div>
      <div className="part-1">
        <div className="company">
          <div className="cname">{company}</div>
          {featured && <span className="featured">featured</span>}
          {props.data.new && <span className="new">new!</span>}
        </div>
        <div className="position">{position}</div>
        <div className="details">
          <span>{postedAt}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{contract}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="part-2">
        {keyWords.map((keyword, index) => (
          <button
            className="btn"
            onClick={() => dispatch(addKeyword(keyword))} // Dispatch the keyword
            key={index}
          >
            {keyword}
          </button>
        ))}
      </div>
    </div>
  );
}
