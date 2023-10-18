//libs
import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  FAEBanners,
  FAEIndustries,
  FAEHorizontalScrollServices,
  FAEVerticalScrollServices,
  FAEBannerSlider,
  FAEText,
  FAELoading,
} from "@findanexpert-fae/components";

//src
import {
  getAllServicesAction,
  getHomePageData,
  getIndustries,
  getOnlyForYouServices,
  
} from "../../redux/actions/homePageActions";
 
import {
  faeBannersCarouselParser,
  faeBannersParser,
  faeIndustriesParser,
  faeOnlyForYouServicesParser,
  faeServicesParser,
  faeAllServicesParser
} from "../../parsers";
import { getCookies, getFileSrcFromPublicFolder } from "../../utils";
import { getNotificationsList } from "../../redux/actions/defaultActions";

//scss
import "./LandingPage.scss"; 
import { FAETitle } from "@findanexpert-fae/components/dist/stories/FAETitle/FAETitle";
import history from "../../history";

const loaderImage = getFileSrcFromPublicFolder("loader.webm");
const placeholder = getFileSrcFromPublicFolder("placeholder.jpg");
 
const LandingPage = ({
  getHomePageData,
  getIndustries,
  industries = [], 
  loading = false,
  topBanners = [],
  topSlider = [],
  bottomBanners = [],
  middleBanners = [],
  featuredServices = [],
  trendingServices = [],
  onlyForYouServices = [],  
  userCountryId,
  userCountry,
  bottomBannerScroller = [],
  offerServices = [],
  getOnlyForYouServices = [],
  getNotificationsList, 
  getallServiesData=[],
  loadingAllServices,
  getAllServicesAction

}) => {  
  const pagenumber=1;
  const [pageRow, setPageRow] = useState(20);    
  document.title = "Expert | AnyService, AnyTime, AnyWhere";
  document.getElementsByTagName("META")[2].content =
    "Expert provides the Beauty, Household, IT services that can be availed 24/7 hours. Download the Expert app and get all services you can think of under one roof. ";
  useEffect( async() => {
    window.scrollTo(0, 0);
    if (userCountryId !== "") {
      await getHomePageData({
        userCountryId,
        isMobile: window.screen.width > 700 ? false : true,
      });
      await getIndustries(userCountryId, );
      await getAllServicesAction(userCountryId, pagenumber, pageRow,)
     } 
   
  }, [
    getHomePageData,
    getIndustries,
    getOnlyForYouServices,
    userCountry,
    userCountryId,  
  ]);
 
  useEffect( async() => {
    if (userCountryId !== "") { 
      await getAllServicesAction(userCountryId, pagenumber, pageRow,)
    } 
  }, [pageRow]);
  const loadMore =()=>{
   setPageRow(pageRow+20)  
  } 
  
  useEffect(() => {
    if (getCookies("userId") !== undefined) {
      getNotificationsList(getCookies("userId"));
    } 
  }, [getNotificationsList]);

  if (loading) {
    return <FAELoading className="fae-loading-img" type="video" loaderImage={loaderImage} height="630px" />;
  } 
 const tabs=[
  {
    imgSrc:"Legal.svg",
    label: "Referral ",
    onClick: () => history.push("/referral"),
  },
  { 
    imgSrc:"Contact Us.svg",
    label: "Contact us", 
    onClick: () => history.push("/contact-us") 
  },
  {
    imgSrc:"Recommended a Friend.svg",
    label: "Offers",
    onClick: () => history.push("/offers"),
  },
  
 ]
 const doPadding= industries?.length<4 ?(industries.length==1 ?{paddingBottom: 284}:{paddingBottom: 280}): {paddingBottom: 284}

  return (
    <>  
      <div className="fae--landing-page-container dpb" style={doPadding}>
       <FAEBannerSlider
          className="fae--home-page-banner-slider"
          banners={faeBannersCarouselParser(topSlider)}
          sliderProps={{
            arrows: window.screen.width < 500 ? false : true,
            autoPlay: topSlider?.length > 1 && true,
            infinite: topSlider?.length > 1 && true,
            autoPlaySpeed: 6000,
          }}
        />
        <div className="fae-mobile-tabs">
           {tabs.map(({imgSrc, label, onClick})=>(
             <button onClick={onClick}>
              <img src={getFileSrcFromPublicFolder(imgSrc)} />
              <span>{label}</span>
            </button>))
           }
        </div>
        <FAEIndustries
          className="fae--home-page-industries"
          industries={faeIndustriesParser(industries)}
          collapseIcon={
            window.screen.width > 600
              ? getFileSrcFromPublicFolder("up_arrow.png")
              : getFileSrcFromPublicFolder("mobile_down.png")
          }
          expandIcon={
            window.screen.width > 600
              ? getFileSrcFromPublicFolder("down_arrow.png")
              : getFileSrcFromPublicFolder("mobile_up.png")
          }
        />
        {userCountryId !== "" && !loading && (
          <div className="home-advertisement-container">
            <div className=" advertisement-div home-mobile-image-advertisement">
              <img
                src={getFileSrcFromPublicFolder("mobile_image.webp")}
                alt="mobileimage"
                width="100px"
                height="auto"
              />
            </div>

            <div className="advertisement-div home-text-advertisement">
              <div className="info-box section-bg-light" id="col_2">
                <FAEText
                  style={{ fontSize: "14px", marginBottom: "10px" }}
                  className="lead text"
                  light
                >
                  Want all the <strong>Services</strong> at your fingertips ?
                </FAEText>
                <FAEText
                  style={{ fontSize: "14px", textAlign: "center" }}
                  className="lead text"
                  light
                >
                  <strong>Download</strong> the Expert app <strong>Now</strong>
                </FAEText>
              </div>
            </div>
            <div className=" advertisement-div home-app-links-adevrtisement">
              <a
                href="https://play.google.com/store/apps/details?id=com.findanexpert"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={getFileSrcFromPublicFolder("google_play.svg")}
                  alt="googlelogo"
                  width="120px"
                  height="auto"
                  className="store-icon"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/find-an-expert/id1468090965?ls=1"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={getFileSrcFromPublicFolder("apple_store.svg")}
                  alt="applelogo"
                  width="120px"
                  className="store-icon"
                  height="auto"
                />
              </a>
            </div>
          </div>
        )}
        {topBanners?.length !== 0 && (
          <FAEBanners
            style={{ marginTop: window.screen.width > 799 ? "-15px" : "-25px" }}
            className="fae--home-page-banners"
            banners={faeBannersParser(topBanners)}
          />
        )}
         <div className="fae-other-services">
          {offerServices?.length !== 0 && (
            <FAEHorizontalScrollServices
              className="fae--home-page-services-slider"
              services={faeServicesParser(offerServices)}
              label={
                offerServices[0] !== undefined && offerServices[0].bannerHeading
              }
              sliderProps={{
                slidesToShowOnDesktop: 4.3,
                slidesToShowOnTablet: 3.3,
                slidesToShowOnMobile: 2.0,
                arrows: window.screen.width < 600 ? false : true,
              }}
              placeholder={placeholder}
            />
          )}
         </div> 
        {middleBanners?.length !== 0 && (
          <FAEBanners
            className="fae--home-page-banners"
            banners={faeBannersParser(middleBanners)}
          />
        )}
       <div className="fae-other-services">
        {featuredServices?.length !== 0 && (
          <FAEHorizontalScrollServices
            className="fae--home-page-services-slider"
            services={faeServicesParser(featuredServices)}
            label={
              featuredServices[0] !== undefined &&
              featuredServices[0].bannerHeading
            }
            sliderProps={{
              slidesToShowOnDesktop: 4.3,
              slidesToShowOnTablet: 3.3,
              slidesToShowOnMobile: 2.0,
              arrows: window.screen.width < 500 ? false : true,
            }}
            placeholder={placeholder}
          />
        )}
        </div>
        {bottomBanners?.length !== 0 && (
          <FAEBanners
            className="fae--home-page-banners"
            banners={faeBannersParser(bottomBanners)}
          />
        )}
       <div className="fae-other-services">
        {bottomBannerScroller?.length !== 0 && (
          <FAEHorizontalScrollServices
            className="fae--home-page-services-slider"
            services={faeServicesParser(bottomBannerScroller)}
            label={
              bottomBannerScroller[0] !== undefined &&
              bottomBannerScroller[0].bannerHeading
            }
            sliderProps={{
              slidesToShowOnDesktop: 4.3,
              slidesToShowOnTablet: 3.3,
              slidesToShowOnMobile: 2.0,
              arrows: window.screen.width < 500 ? false : true,
            }}
            placeholder={placeholder}
          />
        )}

        {trendingServices?.length !== 0 && (
          <FAEHorizontalScrollServices
            className="fae--home-page-services-slider"
            services={faeServicesParser(trendingServices)}
            label={
              trendingServices[0] !== undefined &&
              trendingServices[0].bannerHeading
            }
            sliderProps={{
              slidesToShowOnDesktop: 4.3,
              slidesToShowOnTablet: 3.3,
              slidesToShowOnMobile: 2.0,
              arrows: window.screen.width < 500 ? false : true,
            }}
            placeholder={placeholder}
          />
        )}
      </div>
       {(getallServiesData?.servicesList || [])?.length !== 0 && (
        <div className="fae-all-service-title"> 
          <FAETitle
            className="sub-Heading servies-heading"
            label={"All Services"}
            
            logo={getFileSrcFromPublicFolder("title_logo.svg")}
         /> 
         <FAEVerticalScrollServices
          className="fae--services-page-services-container"
          loading={loading}
          loaderProps={{
            loaderImage,
            height: "200px",
            type: "video",
          }}
          services={faeAllServicesParser(getallServiesData?.servicesList)}
          primary
          placeholder={placeholder}
        /> 
          </div>
        )}
       {(getallServiesData?.servicesList || [])?.length !== 0 && ( <div className="fae--loadmore-btn">
          {getallServiesData?.totalPages !==1 ?
            <button onClick={loadMore} className="fae-button">
              {loadingAllServices ? ' Loading ...' : 'Load More ↓'} 
            </button>
           : <button className="fae-enoght-button">
             {'No More Data'} 
          </button> } 
        </div>)}
 {/* services section end  */}
    {(onlyForYouServices || [])?.length !== 0 && (
         <FAEVerticalScrollServices
            className="fae--home-page-services-scroll"
            services={ faeOnlyForYouServicesParser(onlyForYouServices)}
            label={
              onlyForYouServices[0] !== undefined &&
              onlyForYouServices[0].bannerHeading
            }
            primary
            placeholder={placeholder}
            />
          )}
        </div>
      </>
    );
  };

const mapStateToProps = ({
  homePageReducer: {
    industries,
    error,
    loading, 
    topBanners,
    topSlider,
    bottomBanners,
    middleBanners,
    featuredServices,
    trendingServices,
    onlyForYouServices,
    bottomBannerScroller,
    offerServices,
      
  },
  defaultReducer: { userCountryId, userCountry },
  allServicesHomePage: {getallServiesData, loadingAllServices}
}) => { 
        return {
          error,
          loading,
          topSlider,
          industries,
          topBanners,
          featuredServices,
          middleBanners,
          trendingServices,
          bottomBanners,
          onlyForYouServices,
          userCountryId,
          bottomBannerScroller,
          offerServices,
          userCountry,
          getallServiesData,
          loadingAllServices
        }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getHomePageData,
      getIndustries,
      getOnlyForYouServices,
      getNotificationsList, 
      getAllServicesAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

 
