import { useState } from "react";
import "../app/page.css";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

const FAQ = ({ question, answer }) => {
  const [isAnswershowing, setIsAnswerShowing] = useState(false);

  return (
    <article
      className="faq"
      onClick={() => setIsAnswerShowing((prev) => !prev)}
    >
      <div className="faq_wrapper">
        <div className="faq_icon">
          {isAnswershowing ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>
        <h4 className="Que">{question}</h4>
      </div>
      {isAnswershowing && <p className="Answers">{answer}</p>}
    </article>
  );
};
export default FAQ;
