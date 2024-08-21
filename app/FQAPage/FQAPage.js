"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./FAQPage.css";
import SearchBar from "../SearchBar";
import FAQs from "../FAQs";
import { faqs } from "../Data";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import Vector from "../Svgs/Vector.svg";

function FQAPage({ defaultLength = 5, search }) {
  const [questions, setQuestions] = useState(faqs);
  const [allowedFaqs, setAllowedFaqs] = useState(questions.slice(0, parseInt(defaultLength)));
  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(parseInt(defaultLength));
  const [countLeft, setCountLeft] = useState(
    parseInt(questions.length - defaultLength)
  );

  const loadMore = () => {
    if (count < questions.length) {
      let c = count + parseInt(defaultLength);
      setCount(parseInt(c));
      setCountLeft(parseInt(questions.length - c));
    }
  };

  const loadLess = () => {
    let newCount;
    if (count > parseInt(defaultLength)) {
      newCount = count - parseInt(defaultLength);
    } else {
      newCount = parseInt(defaultLength);
    }
    setCount(newCount);
    setCountLeft(questions.length - newCount);
  };

  const handleSearch = (search) => {
    if(search){
    setSearchTerm(search);
    let result = faqs.filter(o => o.question.toLowerCase().includes(search.toLowerCase()) || o.question.toLowerCase().includes(search.toLowerCase()));
    setQuestions(result);
    setAllowedFaqs(result);
    setCountLeft(0)
    }else{
        setSearchTerm("");
        setAllowedFaqs(questions.slice(0, parseInt(defaultLength)))
        setCountLeft(parseInt(questions.length - defaultLength))
        setCount(parseInt(defaultLength))
    }
  }

  return (
    <section className="FQA" id="Faq">
      <div>
        <div className="FQA_Title">
          <div className="FQA_bigText">Frequently Asked Questions (FAQ)</div>
          <div className="FQA_smallText">
            {" "}
            Get quick answers to frequently asked questions, don't see what you
            are looking for reach out to support.
          </div>
        </div>
        <div className="FQA_contact">
          <a href="">
            <div>Contact Support</div>
            <Image src={Vector} alt="" />
          </a>
        </div>
        <div className="FQA_search">
          <div className="FQA_help">How can we help you?</div>
          {/* <SearchBar /> */}
          <div className="search-bar"> 
          <AiOutlineSearch size={20} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search"
            className="search-input"
          />
          </div>
        </div>
        <div className="Questions">
          <div className="">
            {allowedFaqs.map(({ id, question, answer }) => {
              return <FAQs key={id} question={question} answer={answer} />;
            })}
          </div>
        </div>
        {countLeft > 0 && (
          <div className="More_section" onClick={() => loadMore()}>
            <div>More </div>
            <div>
              <AiFillCaretDown />
            </div>
          </div>
        )}
        {count > 5 && (
          <div className="More_section" onClick={() => loadLess()}>
            <div>Less</div>
            <div>
              <AiFillCaretDown />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default FQAPage;
