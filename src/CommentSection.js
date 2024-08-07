import { useState } from "react";
import { useCustomerContext } from "./CustomerContext";
import anonim from "./assets/anonim.webp";

function CommentSection() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useCustomerContext();
  const [customerName, setCustomerName] = useState("");

  const handleAddComment = () => {
    const newComment = {
      id: (data.length + 1).toString(),
      name: customerName,
      src: anonim, // Bir varsayılan resim URL'si kullanabilirsiniz.
      comment: inputValue,
    };
    if (inputValue.trim().length !== 0) {
      setData([...data, newComment]);
      setInputValue("");
      setCustomerName("");
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
      <label className="comment-customername-label">
        CustomerName
        <input
          type="text"
          className="comment-customername-input"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        ></input>
      </label>
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
