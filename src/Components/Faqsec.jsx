import React from "react";
import Faq from "react-faq-component";
import "../Styles/Components/Faqsec.css";

const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "What will this organization do for women?",
      content: `SADHNA Foundation is on Women Education as we know an Educated woman can educate the whole generation. Secondly by creating Self Help Groups and micro financing facilities making them financially Independent and empowered. An Educated Financially Independent woman is capable enough to take control of her life choice and to decide her future.`,
    },

    {
      title:
        "How do I ensure that my donation for the NGO is utilized properly?",
      content: `Your money is sent directly to the Foundation Account, where it will assist the individuals who need it. Donors will receive a certificate and receipt for their donation, as well as the contact information for the individual or group who will be benefited. The name of the donor will be published on the foundation's website.`,
    },
    {
      title: "Are the charity’s payment method safe ?",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "Does sadhana foundation work in India or other countries too?",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "Do you accept donations in form of books/gadgets/furniture?",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "How can I contribute to this organization?",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "black",
  // rowContentColor: 'grey',
  arrowColor: "#7C122F",
};

const config = {
  // animate: true,
  // arrowIcon: "S",
  // tabFocus: true
};

function Faqsec() {
  return (
    <>
      <div className="faqContainer">
        <div className="faq-container">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </>
  );
}

export default Faqsec;
