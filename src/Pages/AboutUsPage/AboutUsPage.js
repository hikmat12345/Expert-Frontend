//libs
import { FAEContainer, FAEText, FAETitle } from "@findanexpert-fae/components";
import React from "react";

//src
import { getFileSrcFromPublicFolder } from "../../utils";

//scss
import "./AboutUsPage.scss";

const aboutUsFirstImage = getFileSrcFromPublicFolder("about_us_1.png");
const aboutUsSecondImage = getFileSrcFromPublicFolder("about_us_2.png");
const aboutUsThirdImage = getFileSrcFromPublicFolder("about_us_3.png");
const aboutUsIndustryOne = getFileSrcFromPublicFolder(
  "about_us_industry_1.svg"
);
const aboutUsIndustryTwo = getFileSrcFromPublicFolder(
  "about_us_industry_2.svg"
);
const aboutUsIndustryThree = getFileSrcFromPublicFolder(
  "about_us_industry_3.svg"
);

const AboutUsPage = () => {
  document.title = "Expert | About Us";
  return (
    <>
      <FAEContainer>
        <div className="fae--about-us-main-container dpt dpb">
          <FAETitle
            label={
              <FAEText subHeading bold>
                <span className="red-text"> Mission </span> Statement
              </FAEText>
            }
            logo={getFileSrcFromPublicFolder("title_logo.svg")}
          />
          <FAEText tertiary>
            “Revolutionising the global service industry to change the World”
          </FAEText>
          <div className="fae--about-us-descriptions-and-images">
            <img
              src={aboutUsFirstImage}
              alt="about_us_1"
              width="auto"
              height="auto"
            />
            <FAEText tertiary>
              <span className="red-text">
                Expert provides thousands of different services
              </span>{" "}
              bookable via one app. It allows you to book almost any service you
              can think of, from doctors to beauticians and tradesmen.
            </FAEText>
          </div>
          <div className="fae--about-us-descriptions-and-images-mid-section">
            <FAEText tertiary>
              Expert has the most qualified and experienced staff members for
              every profession under its belt. Most services can be performed
              from your home, workplace or online.
            </FAEText>
            <img
              src={aboutUsSecondImage}
              alt="about_us_2"
              width="auto"
              height="auto"
            />
          </div>
          <div className="fae--about-us-descriptions-and-images">
            <img
              src={aboutUsThirdImage}
              alt="about_us_3"
              width="auto"
              height="auto"
            />
            <FAEText tertiary>
              The others can be carried out in our state-of-the-art centres
              across London. The services operate from 7am until 7pm for your
              convenience. For value-for-money fixed rates and unbeatable
              customer service, choose Expert.
            </FAEText>
          </div>
          <div>
            <FAEText secondary bold subHeading>
              Book - any service, anytime, anywhere.
            </FAEText>
            <FAEText style={{ textAlign: "center" }}>
              This is the future of booking services.
            </FAEText>
          </div>
          <div className="fae--about-us-page-services-description">
            <img
              src={aboutUsIndustryOne}
              alt="about_us_industry_1"
              width="55px"
              height="auto"
            />
            <FAEText tertiary>
              <span className="red-text">Beauty - </span>you might want Botox,
              Fillers, Laser hair removal or Peels at your doorstep to make you
              feel more beautiful.
            </FAEText>
          </div>
          <div className="fae--about-us-page-services-description">
            <img
              src={aboutUsIndustryTwo}
              alt="about_us_industry_2"
              width="55px"
              height="auto"
            />
            <FAEText tertiary>
              <span className="red-text">Household - </span>isn’t there always a
              gazillion things to do and never enough time. You may just need a
              handyman or a plumber, or a cleaner to get those chores done. On
              our App you can get the right person for the job.
            </FAEText>
          </div>
          <div className="fae--about-us-page-services-description">
            <img
              src={aboutUsIndustryThree}
              alt="about_us_industry_3"
              width="55px"
              height="auto"
            />
            <FAEText tertiary>
              <span className="red-text">IT - </span>do you want a website or
              even an App developed for your business,. you may just want
              general IT support or a content writer, our team are here to help
              you. All of these services are available on our App.
            </FAEText>
          </div>
        </div>
      </FAEContainer>
    </>
  );
};

export default AboutUsPage;
