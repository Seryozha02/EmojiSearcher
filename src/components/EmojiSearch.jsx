import { useEffect, useState } from "react";
import "./EmojiSearch.css";
import emojiList from "./emojiList.json";

function EmojiSearch() {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = emojiList.filter((emoji) =>
      emoji.title.toLowerCase().includes(userInput.toLocaleLowerCase()),
    );
    setData(newData);
  }, [userInput]);

  return (
    <div>
      <h1>Emoji Searcher App</h1>
      <input
        type="text"
        placeholder="Input an emoji name"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      {data.map((emoji) => (
        <h2 key={emoji.title}>
          {emoji.title} {emoji.symbol}
        </h2>
      ))}
    </div>
  );
}

export default EmojiSearch;
