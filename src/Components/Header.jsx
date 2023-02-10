import React from "react";
import "../Styles/Components/Header.css";

const Header = () => {
  return (
    <>
      <div className="main-header">
        <div className="header-container">
          <div className="header-c-l">
            <div className="header-content">
              <h2>Sadhana Foundation</h2>
              <h3>
                <span className="q-mark">❛❛ </span>We Don’t Talk About Women
                Empowerment,
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;We Help Women Discover Their
                Strengths<span className="q-mark"> ❜❜</span>
              </h3>
              <div className="content-m">
                <div>
                  <p>
                    0%
                    <br />
                    Platform Fee
                  </p>
                </div>
                <div>
                  <p>
                    Easy to Use
                    <br />
                    Interface
                  </p>
                </div>
                <div>
                  <p>
                    Easy
                    <br />
                    Withdrawal
                  </p>
                </div>
              </div>
              <div className="h-btn">
                <p>
                  <a href="/start-fundraising">Start A Free Fundraiser</a>
                </p>
              </div>
            </div>
          </div>
          <div className="header-c-r">
            <div className="c-r-content">
              <p className="c-r-p">
                It’s not about empowering women; it’s more about building a
                nation where equality prevails, and human potential is put to
                the best use for our society. The undermining of women’s
                potential and choices leads to denying equal opportunities and
                equal rights. <br />
                <br />
                As a result, we eventually neglect half of the population to
                live their right to a dignified life. Together, we can not only
                help discover the force of the feminine tribe but build a nation
                with pride.
              </p>
            </div>
            <br />
            <div>
              <p>
                <span className="a-btn">
                  <a href="/about">Read More</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
