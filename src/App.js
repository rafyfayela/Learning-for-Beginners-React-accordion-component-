import { useState } from "react";
import "./index.css";

const faqs = [
  {
    id: 1,
    title:
      "What educational qualifications does Fayela Rafy hold in the field of software development?",
    text: "Fayela Rafy has pursued a degree in Software Engineering & Information Systems Development at the International University of Tunis from September 2020 to September 2023. Additionally, he has completed several online courses, including a Node.js bootcamp and an Ultimate React course on Udemy, as well as studying JavaScript Algorithms and Data Structures through CodeCamp.",
  },
  {
    id: 2,
    title:
      "What professional experience did Fayela Rafy gain during his internship, and what technologies did he work with?",
    text: "During his internship at GARK from April 2023 to September 2023, Fayela contributed to the development of a web application for managing sports tournaments using the MERN stack (MongoDB, Express, React, and Node.js). He focused on implementing key functionalities such as team management, event scheduling, and results publishing, which enhanced his web development skills and his ability to work collaboratively in a team environment.",
  },
  {
    id: 3,
    title:
      "Can you describe a personal project that Fayela Rafy developed and its main features?",
    text: 'Fayela developed a personal project called "Testour Escapes" which is a web application built with Node.js, React, and MongoDB. This innovative platform is designed to provide seamless booking services for guesthouses and tour guides in Testour, Tunisia. It aims to help users discover, plan, and easily book their ideal getaways. Additionally, he has worked on another project that focuses on agricultural management, allowing users to manage various farm-related aspects such as equipment rental, driver management, and salary management.',
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="accordion">
        {data.map((el, i) => (
          <AccordionItem
            currOpen={currOpen}
            setIsOpen={setIsOpen}
            title={el.title}
            num={i}
            key={i}
          >
            {el.text}
          </AccordionItem>
        ))}
        <AccordionItem
          currOpen={currOpen}
          setIsOpen={setIsOpen}
          title="this is a reusable component testing"
          num={3}
          key={122}
        >
          <p>React Allow developers to :</p>
          <ul>
            <li>BREAK UP UI INTO COMPONENTS !</li>
            <li>MAKE COMPONENTS REUSABLE !</li>
            <li>PLACE STATE EFFICIENTLY</li>
          </ul>
        </AccordionItem>
      </div>
    </>
  );
}

function AccordionItem({ num, title, currOpen, setIsOpen, children }) {
  const isOpen = num === currOpen;
  function handleOC() {
    setIsOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : " "}`} onClick={handleOC}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
