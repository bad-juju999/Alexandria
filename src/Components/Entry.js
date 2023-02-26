//import { useState } from "react";
import { useState } from "react";

function Entry(props) {
  const [backsideVisible, setBacksideVisible] = useState(false);
  return (
    <div
      className="entry flex-center"
      onMouseEnter={() => setBacksideVisible(true)}
      onMouseLeave={() => setBacksideVisible(false)}
    >
      {backsideVisible ? (
        <>
          <p className="topTextCard">{props.character}</p>
          <p className="bottomTextCard">{props.details}</p>
        </>
      ) : (
        <>
          <p className="topTextCard">{props.title}</p>
          <p className="bottomTextCard">{props.author}</p>
        </>
      )}
    </div>
  );
}

export default Entry;

//I want to firgue out how to make the cards flip on hover so that the user can see the background/ review details of each individual entry
// i imagine that would mean there would be a new component imported when the user hovers over this component
