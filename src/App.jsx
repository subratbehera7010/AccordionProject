import React, { useState } from "react";
import FAQ from "./FAQ";

const faqList = [
  {
    id: 1,
    question: "What is HTML, and why is it important in web development?",
    answer:
      "HTML stands for HyperText Markup Language. This coding language is used to structure web content. Here, you can specify what content appears and where — that includes placing images, text, and links. HTML forms the building blocks of web pages. The latest version of this language is HTML5.",
  },
  {
    id: 2,
    question: "What is CSS, and how does it contribute to web development?",
    answer:
      "If HTML builds the foundational elements of a site, CSS allows you to decorate. CSS, or Cascading Style Sheets, is used to make your content visually appealing. You can choose colors, fonts, spacing, and more. CSS also allows you to build columns and grid layouts across your site.",
  },
  {
    id: 3,
    question: "Explain the role of JavaScript in web development.",
    answer:
      "JavaScript adds interactivity and dynamic behavior to websites. You can use this language to create dynamic content updates and validate information from forms. JavaScript also powers a number of interactive elements you see online. That includes dropdown menus and image carousels. This client-side scripting language runs directly in the user's web browser.",
  },
  {
    id: 4,
    question: "What is an API, and what role does it play in web development?",
    answer:
      "APIs, or Application Programming Interfaces, allow software applications to interact with each other. In web development, APIs allow you to integrate different systems and services into your project.",
  },
  {
    id: 5,
    question: "What is AJAX, and how does it work?",
    answer:
      "AJAX stands for Asynchronous JavaScript and XML. This technique used in web development creates dynamic and interactive web applications.",
  },
];

const App = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleToggle = (id) => {
    setOpenFaq((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full md:w-1/2 bg-white p-5 drop-shadow-xl">
        <h1 className="text-3xl font-bold border-b-2 border-purple">
          <span className="text-purple-600">G</span>eneral Questions
        </h1>
        <div className="py-10">
          {faqList &&
            faqList.map((faq) => (
              <FAQ
                key={faq.id}
                data={faq}
                isOpen={openFaq === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
