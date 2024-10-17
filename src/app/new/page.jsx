"use client";
import { useEffect, useState } from "react";
import { Parent } from "../components/Parent";
const NewPost = () => {
  const [inputError, setInputError] = useState(null);
  const [inputError2, setInputError2] = useState(null);
  const [input, setInput] = useState(null);
  const [input2, setInput2] = useState(null);

  const publish = () => {
    console.log(input);
    if (input === null) {
      setInputError("Hooson bnaa");
    } else {
      setInputError(null);
    }
  };

  const publish2 = () => {
    console.log(input2);
    if (input2 === null) {
      setInputError2("Hooson bnaa");
    } else {
      setInputError2(null);
    }
  };
  const posting = () => {
    publish();
    publish2();
    if (input != null && input2 != null) {
      alert("Amjilttai");
    }
  };

  console.log(inputError);
  return (
    <div>
      <div className="Npost">
        <Parent>
          {/* <div className="buttons">
              <button className="editButton">Edit</button>
              <button className="editButton">Preview</button>
          </div> */}
        </Parent>
        <div className="bord2">
          <div className="bord">
            {/* <button className="AddCoImg">Add a cover image</button> */}
            <input
              placeholder="New post title here..."
              className="text3"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="inputError">{inputError ? inputError : ""}</div>
            {/* <input placeholder="Add up to 4 tags" className="text4" /> */}
          </div>
          <div style={{ paddingTop: 50 }}>
            <div className="bord3">
              <input
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                placeholder="Write your post content here..."
                className="text5"
              />{" "}
              <div className="inputError">{inputError2 ? inputError2 : ""}</div>
            </div>
            <div style={{ paddingTop: 20 }}>
              <button className="postingButton" onClick={() => posting()}>
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewPost;
