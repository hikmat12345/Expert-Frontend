import React from "react";
import {
  getFileSrcFromPublicFolder,
  getFileSrcFromPublicFolderLandingPage,
  getFileSrcFromPublicFolderSpcialLHR,
} from "../../utils";
import ContactUsPage from "../ContactUsPage";
import HelpPage from "../HelpPage";
import Carousel from "react-grid-carousel";
import { FAQs, mainFeature } from "./constant";
import "./SpecialLaserHRPage.scss";
import history from "../../history"; 
import FAEServiceVideoMonitor from "@findanexpert-fae/components/dist/stories/FAEServiceVideoMonitor/FAEServiceVideoMonitor";

function SpecialLaserHRPage() {
  const goToBooking = () => {
    history.push("/booking/Laser-Hair-Removal/sub-services/true/0/1");
  };
  return (
    <>
      {/************************************  Top Banner section ****************************************/}
      <>
        {/* <div className="icon_div"> */}
        <div className="call_div">
          <a
            title="020 8004 6104"
            className="call_number"
            href="tel:020 8004 6104"
          >
            <img
              src={getFileSrcFromPublicFolderLandingPage(`Group 24942.svg`)}
              className=""
              alt="expert service Logo"
              style={{display:"flex"}}
            />
          </a>
          <p className="hide">
            <a
              style={{ textDecoration: "none", color: "#DC0000", fontSize: "18px", fontWeight: "500", paddingRight: "0.5rem"}}
              href="tel:020 8004 6104"
            >
              020 8004 6104{" "}
            </a>
          </p>
        </div>
        {/* <a className="view_Number">020 8004 6104</a> */}
        <div className="mail_div">
          <a href="mailto:contact@expert.one">
            <img
              src={getFileSrcFromPublicFolderLandingPage(`Group 24941.svg`)}
              className=""
              alt="expert service Logo"
              style={{display:"flex"}}
            />
          </a>
          <p className="hide">
            <a
              style={{ textDecoration: "none", color: "gray", fontSize: "18px", fontWeight: "500", paddingRight: "0.5rem"}}
              href="mailto:contact@expert.one"
            >
              contact@expert.one
            </a>
          </p>
        </div>
        <div className="web_div">
          <a href="https://web.whatsapp.com/send?phone=+447464232464">
            <img
              src={getFileSrcFromPublicFolderLandingPage(`Group 24943.svg`)}
              className=""
              alt="expert service Logo"
              style={{display:"flex"}}
            />
          </a>
          <p className="hide">
            <a
              style={{ textDecoration: "none", color: "#25D366", fontSize: "18px", fontWeight: "500", paddingRight: "0.5rem"}}
              href="https://web.whatsapp.com/send?phone=+447445870983"
            >
              +447445870983
            </a>
          </p>
        </div>
        {/* </div> */}

        {/* <div className="live_chat">
          <img
            src={getFileSrcFromPublicFolderLandingPage(`live_chat.PNG`)}
            className=""
            alt="expert service Logo"
            width={160}
            height={40}
          />
        </div> */}

        <section
          className="banner_div">
          <div className="landing_banner">
            <div className="banner_content">
              <h1>Laser Hair Removal</h1>
              <p>
              Ditch the Razor and embrace the Laser! <br/> Silky smooth hair free skin with Laser Hair Removal. You can now book your Laser Hair Removal treatments instantly on Expert App. All Expert clinics are dr led clinics with over 20 years experience so you're in safe hands. We use the best medical laser technology and make each treatment bespoke ensuring you get results from your first session. 
              </p>
              <p>
                From{" "}
                <strong style={{ fontSize: "38px", color: "#333333" }}>
                  £6
                </strong>
              </p>
              <button onClick={goToBooking} className="btn_shadow" style={{display: "flex", flexDirection: "row", justifyContent: "center", textAlign: "center", verticalAlign: "middle", alignItems: "center"}}> 
              <img 
                src={getFileSrcFromPublicFolderLandingPage(
                  `calander_icon.svg`
                )}
                alt="expert service Logo"
              />
                <span style={{marginLeft: "0.5rem"}}>Book your Appointment</span></button>
            </div>
            <div className="banner_image_div_mobile">
              <img
                src={getFileSrcFromPublicFolderLandingPage(
                  `mobile_banner_img.PNG`
                )}
                alt="expert service Logo"
              />
            </div>
            <div className="banner_image_div">
              <img
                src={getFileSrcFromPublicFolderLandingPage(
                  `Mask_group-removebg-preview.png`
                )}
                className="banner-1-img"
                alt="expert service Logo"
              />
            </div>
          </div>

          <div className="app_section">
            <div>
              <p>Want all the Services at our fingertips ?</p>
              <p>
                <strong style={{ color: "#DC0000" }}>Download&nbsp;</strong>the{" "}
                <strong style={{ color: "#DC0000" }}>Expert</strong> app Now
              </p>
            </div>
            <a
              target="_blank"
              className="cursor_pointer"
              href="https://play.google.com/store/apps/details?id=com.findanexpert"
            >
              <img
                src={getFileSrcFromPublicFolderLandingPage("appGoogle.svg")}
                alt="Vercel Logo"
              />{" "}
            </a>
            <a
              target="_blank"
              className="cursor_pointer"
              href="https://apps.apple.com/us/app/find-an-expert/id1468090965?ls=1"
            >
              {" "}
              <img style={{marginRight: "7.5rem"}}
                src={getFileSrcFromPublicFolderLandingPage("appApple.svg")}
                alt="Vercel Logo"
              />{" "}
            </a>

            <img style={{display: "block", position: "absolute", right: 0, padding: "0rem 0rem 4rem 0rem", marginRight: "1rem"}}
              src={getFileSrcFromPublicFolderLandingPage(`appImages.svg`)}
              className=""
              alt="expert service Logo"
            />
          </div>
         </section>
      </>
      {/* mechine section  */}
      <section className="mechine_section">
        <div className="image_div">
          <img
            src={getFileSrcFromPublicFolderLandingPage(`machine.PNG`)}
            className=""
            alt="expert service Logo"
            width={450}
            height={450}
          />
        </div>
        <div className="content_div">
          <p style={{ margin: "2rem 0rem 0.5rem 0rem", fontSize: "22px", fontWeight: "300" }}>Get a </p>
          <h1>Hair Free Body</h1>
          <p style={{ marginBottom: "2rem", marginTop: "1.5rem" }}>
          Laser Hair Removal can benefit everyone Male Female Transgender light to dark skin. At Expert, we use the latest medical grade ND:Yag and Alexandrite lasers that give gold standard results. We've developed our own bespoke protocols and tailor each treatment according to hair and skin type. The laser energy delivers a short burst of light which penetrates into the skin to the root of the hair. The hair absorbs this energy converting into heat and disabling the hair growth mechanism.
          <br/><br/>
          We recommend multiple sessions as the hair grows in cycles. Laser hair removal treatment works best when the hair is in the Anagen phase.  The  follicle has the most pigment and bloody supply during this stage making it a good target for the laser. We recommend 8-10 sessions every 6-8 weeks for optimal results. You will have hair free silky smooth skin. The results from laser hair removal are incomparable to other forms of hair removal. 
          </p>
          <div className="machine_sub_sec">
            <div className="single_sec">
              <img
                src={getFileSrcFromPublicFolderLandingPage(`ingrown.svg`)}
                className=""
                alt="expert service Logo"
                width={70}
                height={70}
              />
              <div>
                <h2>No Ingrown Hairs</h2>
                <p>
                  Ingrown hairs will never grow back into the body or curl back
                  into the skin again with this treatment.
                </p>
              </div>
            </div>
            <div className="single_sec">
              <img
                src={getFileSrcFromPublicFolderLandingPage(`hairFree.svg`)}
                className=""
                alt="expert service Logo"
                width={70}
                height={70}
              />
              <div>
                <h2>Hair Free Skin</h2>
                <p>
                  Free yourself from the unwanted hair on your body and enjoy
                  the freedom to wear whatever you want!
                </p>
              </div>
            </div>
            <div className="single_sec">
              <img
                src={getFileSrcFromPublicFolderLandingPage(`finerSofter.svg`)}
                className=""
                alt="expert service Logo"
                width={70}
                height={70}
              />
              <div>
                <h2>Finer Softer Hair</h2>
                <p>
                  It makes your hair look softer and more supple when more
                  collagen and elastin are produced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="main">
        {/*********************** Before and after section */}

        <section className="beforeAndAfter">
          <h2 style={{ textAlign: "center", marginTop: "1.5rem" }}>
            Before & <span style={{ color: "rgb(220, 0, 0)" }}>After</span>
          </h2>

          <div className="flex_sec_div">
            <div className="column left">
              <img
                src={getFileSrcFromPublicFolderLandingPage("changeOne.PNG")}
                alt="Vercel Logo"
              />
            </div>
            <div className="column middle">
              <img
                src={getFileSrcFromPublicFolderLandingPage("changeTwo.PNG")}
                alt="Vercel Logo"
              />
            </div>

            <div className="column right">
              <img
                src={getFileSrcFromPublicFolderLandingPage("changeThree.PNG")}
                alt="Vercel Logo"
              />
            </div>
          </div>
          <br />
          <br />
          <div
            className="fae-explain-2nd-text"
            style={{ margin: "0px 20px", color: "#a1a1a1" }}
          >
            <p>
            The pigments immerse this particular light in the follicles and results in disabling the hair growth mechanism. The follicles are heated up and damaged without affecting the surrounding areas of the skin. After the initial consultation, the laser practitioner will carry out a patch test. This will help our specialists determine whether your skin is suitable for laser treatment or not. <br/><br/>Secondly, it helps the practitioner set the laser at the most effective setting for the best results and minimal side effects. A patch test will be done for all areas to be treated as the hair and skin aren't the same on all body parts. It will take a minimum of 6 sessions every 4-6 weeks. The number of ses- sions depends on your skin and hair type. After the sessions, you will see a significant improvement. We recommend more sessions on the facial areas. You will require maintenance sessions once you have completed your laser course. You should also purchase a package of treatments to ensure optimal results.

            </p>
          </div>
          <div style={{ textAlign: "center" }}>
             <button onClick={goToBooking} style = {{display: "flex", alignItems: "center", margin: "auto"}}>

            <img 
                src={getFileSrcFromPublicFolderLandingPage(
                  `calander_icon.svg`
                )}
                alt="expert service Logo"
                
              />
                <span style={{marginLeft: "0.5rem"}}>Book your Appointment</span>
            </button>
          </div>
        </section>

        {/************************************  Why Choose Expert Section ****************************************/}
        <div>
          <h2
            style={{
              textAlign: "center",
              color: "#333333",
              fontSize: "24px",
              padding: "15px 10px 0px 0px",
              marginTop: "1.75rem",
              marginBottom: "1rem",
            }}
          >
            Why Choose <span style={{ color: "#eb1e27" }}>Expert?</span>
          </h2>
          <div className="grid">
            {mainFeature.map((item, i) => (
              <div className="mainInfo" key={i}>
                <img
                  src={getFileSrcFromPublicFolderLandingPage(item.imageName)}
                  alt="Vercel Logo"
                />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/***********************  Last Banner section */}
        <section className="">
          <div className="featureBox featureBox_image">
            <div className="column left">
              <div className="featureText">
                Do You <strong style={{ color: "#7c7c7c" }}>Need </strong> All{" "}
                <strong style={{ color: "rgb(220, 0, 0)" }}>Services</strong> at
                your{" "}
                <strong style={{ color: "rgb(220, 0, 0)" }}>Fingertips</strong>
              </div>
              <div
                className="column right">
                <p
                  style={{
                    marginBottom: "10px",
                    whiteSpace: "nowrap",
                    fontSize: "16px",
                  }}
                >
                  Download the{" "}
                  <strong style={{ color: "rgb(220, 0, 0)" }}>
                    Expert App{" "}
                  </strong>{" "}
                  Now!
                </p>
                <div
                  style={{ display: "flex" }}
                  className="fae-landing-feature-text"
                >
                  <a
                    style={{ marginRight: "0.5rem" }}
                    target="_blank"
                    className="cursor_pointer"
                    href="https://play.google.com/store/apps/details?id=com.findanexpert"
                  >
                    <img
                      src={getFileSrcFromPublicFolderLandingPage(
                        "appGoogle.PNG"
                      )}
                      alt="Vercel Logo"
                      width={140}
                      height={40}
                    />{" "}
                  </a>
                  <a
                    target="_blank"
                    className="cursor_pointer"
                    href="https://apps.apple.com/us/app/find-an-expert/id1468090965?ls=1"
                  >
                    {" "}
                    <img
                      src={getFileSrcFromPublicFolderLandingPage(
                        "appApple.PNG"
                      )}
                      alt="Vercel Logo"
                      width={140}
                      height={40}
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="column right">
              <img
                src={getFileSrcFromPublicFolderLandingPage(
                  "appLinks_image.PNG"
                )}
                alt="Vercel Logo"
                width={440}
                height={380}
              />
            </div>
          </div>
          <div className="mobile_contacts">
            <div className="mobile_call">
              <a href="tel:020 8004 6104">
                <img
                  src={getFileSrcFromPublicFolderLandingPage(
                    "phone_mobile.svg"
                  )}
                  alt="Vercel Logo"
                  width={25}
                  height={25}
                />
                Call
              </a>
            </div>
            <div className="whatsapp_mobile">
              <a href= 
              "https://wa.me/447445870983">
                <img
                  src={getFileSrcFromPublicFolderLandingPage(
                    "whatsapp-mobile.svg"
                  )}
                  alt="Vercel Logo"
                  width={25}
                  height={25}
                />
                Whatsapp
              </a>
            </div>
            <div className="mobile_chate">
              <a href="mailto:contact@expert.one">
                <img
                  src={getFileSrcFromPublicFolderLandingPage(
                    "mail-line_mobile.svg"
                  )}
                  alt="Vercel Logo"
                  width={25}
                  height={25}
                />
                Live chat
              </a>
            </div>
          </div>
 
        </section>

        {/***********************  vedio section */}
        <div className="vedioSection">
          <ul>
            <li>You can now book Laser Hair Removal treatment instantly</li>
            <li>Manage your appointemtn , edit and cancel anytime you want</li>
            <li>Rest assured you'll book with the best clinics and Expert</li>
            <li>Most affordable Laser Hair Removal Prices</li>
            <li>Suitable for Men, Women, all skin and Hair Types</li>
            <li>Reduction of ingrown Hairs, pigment spots, shavng bumps</li>
          </ul>
          <div className="vedioFram">
            <FAEServiceVideoMonitor
              video={
                "https://1864597015.rsc.cdn77.org/Uploads/CustomerPages/B891B2FCEA2443A69933C9208B6380E5.mp4"
              }
              width={window.screen.width < 799 ? "98%" : "92%"}
              videoStand={getFileSrcFromPublicFolder("iMac_stand.webp")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialLaserHRPage;
