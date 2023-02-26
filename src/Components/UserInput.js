import { useState } from "react";
import Entry from "../Components/Entry";

//switch onhover to onclick for mobile

function UserInput() {
  const [entryArray, setEntryArray] = useState([
    <Entry
      key="1"
      title="Children of Dune"
      author="Frank Herbert"
      character="Paul Atreides"
      details="scifi book about the spice trade"
    />,
    <Entry key="2" title="Dune: Messiah" author="Frank Herbert" />,
    <Entry key="3" title="Art of Loving" author="Erich Fromm" />,
  ]);

  return (
    <div>
      <div className="inputContainer flex-center">
        <label htmlFor="Title Name">Title Name:</label>
        <input type="text" id="titleInput" />

        <label htmlFor="Author Name">Author Name:</label>
        <input type="text" id="authorInput" />

        <label htmlFor="Author Name">Favorite Character:</label>
        <input type="text" id="favCharacterInput" />

        <label htmlFor="Author Name">Description & Extra Details:</label>
        <input type="text" id="detailsInput" />

        <button
          className="submitButton"
          onClick={() => {
            console.log("clicked");
            let newEntry = document.querySelector("#titleInput").value;
            let newAuthor = document.querySelector("#authorInput").value;
            let newCharacter = document.querySelector("#favCharacterInput").value;
            let newDetails = document.querySelector("#detailsInput").value;

            setEntryArray([
              <Entry
                key={newEntry + newAuthor}
                title={newEntry}
                author={newAuthor}
                character={newCharacter}
                details={newDetails}
              />,
              ...entryArray,
            ]);
          }}
        >
          Submit
        </button>
      </div>
      <div className="grid">{entryArray}</div>
    </div>
  );
}
//need a way to make sure u can't enter same title and author multiple times

export default UserInput;
