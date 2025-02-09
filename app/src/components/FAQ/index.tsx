"use client";
import React from "react";
import { useState } from "react";
import { UpIcon } from "../../../../public/icons";
import { DownIcon } from "../../../../public/icons";
import { FAQProps } from "../types/faq.types";

// import styles from "./FAQ.module.css";

const FAQ: React.FC<Omit<FAQProps, "questions">> = ({
  expandIcon = <UpIcon />, // Default icon for collapsed state
  collapseIcon = <DownIcon />, // Default icon for expanded state
}) => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null); // Initializes as `null`, no FAQ is active

  // Extracting `questions` type from `FAQProps` //number represents each elements from the array data questions
  type QuestionType = FAQProps["questions"][number];

  // Using FAQProps['questions'] to type the local array
  const questions: QuestionType[] = [
    {
      question: "Why wouldn’t I just hire a full-time designer?",
      content:
        "A full-time designer may be costly and not necessary for short-term or multiple smaller tasks. Our service allows flexibility and cost-efficiency.",
    },
    {
      question: "Is there a limit to how many requests I can have?",
      content:
        "No, there is no limit to how many design requests you can submit. We’re here to handle as many requests as you have!",
    },
    {
      question: "How fast will I receive my designs?",
      content:
        "Designs are typically delivered within 48 hours, depending on the complexity of the request.",
    },
    {
      question: "What will I receive in 48 hours?",
      content:
        "In 48 hours, you’ll receive the first draft of your design. Revisions can be made based on your feedback.",
    },
    {
      question: "Who are the designers?",
      content:
        "Our team consists of experienced and professional designers from around the world, skilled in various design styles and industries.",
    },
  ];

  const toggleFAQ = (index: number) => {
    // Toggle logic: If clicked FAQ is already active, close it (set to null), otherwise set to the clicked FAQ's index
    console.log(`toggleFAQ called with index: ${index}`);
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div>
      {questions.map((item, index: number) => (
        <div key={index} className="border-b-2 border-b-black-500">
          {/* Accordion Header */}
          <div
            className="faq-question faq-question py-4 flex justify-between items-center cursor-pointer "
            onClick={() => toggleFAQ(index)}
          >
            <p className="text-lg font-medium">
              <span className="hover:underline p-0 m-0 leading-[0]">
                {item.question}
              </span>
            </p>
            <span
              className={`text-xl transition-transform duration-300 transform ${
                activeFAQ === index ? "rotate-45" : "rotate-0"
              }`}
            >
              {activeFAQ === index ? collapseIcon : expandIcon}
            </span>
          </div>
          {/* smooth transition */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeFAQ === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="p-4">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
