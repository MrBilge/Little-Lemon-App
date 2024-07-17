import { useState } from "react";
import { useCustomerContext } from "./CustomerContext";

function CommentSection() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useCustomerContext();

  const handleAddComment = () => {
    const newComment = {
      id: (data.length + 1).toString(),
      name: "Anonymous",
      src: "default_image_url", // Bir varsayılan resim URL'si kullanabilirsiniz.
      comment: inputValue,
    };
    if (inputValue.trim().length !== 0) {
      setData([...data, newComment]);
      setInputValue("");
    }
  };

  const handleKeyPress = function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAddComment();
    }
  };

  return (
    <div className="share-container">
      <h2 className="share-title">share your experience</h2>
      <div className="share-form-container">
        <textarea
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={handleKeyPress}
        ></textarea>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "3rem 0",
          }}
        >
          <input
            type="submit"
            className="share-btn"
            onClick={handleAddComment}
          />
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
