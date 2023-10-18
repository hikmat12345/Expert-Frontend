//libs
import React, { Fragment, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { 
  FAEServiceDescription,
  FAEServiceVideoMonitor,
  FAEAdvertisement,
  FAELoading,
  FAEText,
} from "@findanexpert-fae/components";
import { useParams, useLocation } from "react-router-dom";

//src
import { addSpaces, getCookies, getFileSrcFromPublicFolder } from "../../utils"; 
import { getServiceDetail } from "../../redux/actions/serviceContentPageActions";
import history from "../../history"; 

//scss
import "./ServiceContentPage.scss";

const loaderImage = getFileSrcFromPublicFolder("loader.webm");
const placeholder = getFileSrcFromPublicFolder("placeholder.jpg");

const ServiceContentPage = ({ 
  loading, 
  serviceDescription = {}, 
  getServiceDetail,
  userCountryId,
  userId, 
}) => {
  const isProfileCompleted =
    getCookies("customer_details") !== undefined &&
    getCookies("customer_details").isProfileCompleted;
  const userSignedInStatus =
    userId !== "" || getCookies("userId") !== undefined ? true : false;
  const { service } = useParams();
  const serviceName = addSpaces(service, "-");
  const location = useLocation();
  const { state } = location;
 
  const {
    imagePath = "",
    serviceVideoURL = "",
    serviceShortDescription = "",
    remainingDescription = "",
    hasSubservice,
    currencySymbol,
    // description = "",
    isInClinic,
    isInHouse,
    price,
    serviceId,
    hasAttributes,
    maxPrice,
    duration,
    isFreeConsultation,
    percentDiscount,
    meta_Description,
    isServiceAvailable,
    serviceUnavailableMessage,
    hasSession,
    isAvailableForCountry,
    isOnline,
    hasProducts
  } = (serviceDescription !== null &&  serviceDescription !== undefined) ? serviceDescription :{};
  document.title = `Expert | ${serviceName}`;
  document.getElementsByTagName("META")[2].content = meta_Description;
 
  useEffect(() => {
    if (userCountryId !== "") {
      getServiceDetail({
        serviceName,
        userCountryId,
        isMobile: window.screen.width > 700 ? false : true,
      });
    }
  }, [getServiceDetail, serviceName, userCountryId]);

function sendwithStates(pathname,   subservice, freeConsultation){
  !userSignedInStatus && !subservice && localStorage.setItem("redirectUrl", pathname)
  !userSignedInStatus && !subservice &&  localStorage.setItem('stateObject', JSON.stringify({
    serviceId,
    isInClinic,
    isInHouse,
    hasAttributes,
    price,
    duration,
    freeConsultation,
    currencySymbol,
    voucherId: state ? state.voucherId : 0,
    availableFlag:isServiceAvailable,
    hasProducts,
    isOnline
  }))

  subservice ? history.push({
    pathname:pathname,
    state: {
      mainService: true,
      serviceId,
      isOnline,
      voucherId: state ? state.voucherId : 0,
      availableFlag:isServiceAvailable,
      hasProducts
    },
  }):
  history.push({
    pathname:pathname,
    state: {
      serviceId,
      isInClinic,
      isInHouse,
      hasAttributes,
      price,
      duration,
      freeConsultation,
      currencySymbol,
      isOnline,
      voucherId: state ? state.voucherId : 0,
      availableFlag:isServiceAvailable,
      hasProducts
    } 
  })
}

  const bookingRedirectUrl = (freeConsultation) => { 
    return isServiceAvailable && (isInClinic || isInHouse || isOnline)
      ? hasSubservice === true && !freeConsultation
        ?sendwithStates( `/booking/${service}/sub-services/${hasSubservice?true: false}/${state ? state.voucherId : 0}/${userCountryId}`,   true, freeConsultation)  
        : hasSession ? sendwithStates( `/booking/${service}/sessions`,   false, freeConsultation) 
                     : (isInClinic && isInHouse) ||
                       (isInHouse && isOnline) ||
                       (isInClinic && isOnline) ? sendwithStates( `/booking/${service}/location-selection`,   false, freeConsultation) 
                                   : isOnline  ? sendwithStates( `/booking/${service}/attributes`,false, freeConsultation)
                                               : isInClinic ? sendwithStates( `/booking/${service}/address-selection`,false, freeConsultation)
        : sendwithStates(`/booking/${service}/address-selection`,false, freeConsultation)
       : "";
  };


 
  return (
    <>
      {loading && (
        <FAELoading loaderImage={loaderImage} type="video" height="630px" />
      )}
      {!loading &&  (
        <Fragment>
          <FAEServiceDescription
            className="fae--service-content-page-service-description-tab"
            actionButtonProps={{
              className: "fae--service-description-page-action-button",
            }}
            placeholder={placeholder}
            textOnImage={isOnline && !isInClinic && !isInHouse && "Only Online"}
            isFreeConsultation={isFreeConsultation}
            src={imagePath}
            bookingButtonClicked={() =>
              !isProfileCompleted && userSignedInStatus
                ? history.push({
                    pathname: "/profile/edit",
                    state: { next: history.location.pathname },
                  })
                : bookingRedirectUrl(false)
            }
            isAvailableForCountry={isAvailableForCountry}
            freeConsultationClicked={() =>
              !isProfileCompleted && userSignedInStatus
                ? history.push({
                    pathname: "/profile/edit",
                    state: { next: history.location.pathname },
                  })
              : bookingRedirectUrl(true)
            }
            label={serviceName}
            price={maxPrice}
            discountedPrice={percentDiscount !== 0 && price}
            alt={serviceName}
            currencySymbol={currencySymbol}
            serviceDescription={serviceShortDescription}
            bookingButtonText={
              !isServiceAvailable
                ? serviceUnavailableMessage
                : isInHouse || isInClinic || isOnline
                ? maxPrice === 0
                  ? "Free Consultation"
                  : hasSubservice
                  ? "Book Now"
                  : "Book Now"
                : "Service Unavailable"
            }
            freeConsultationButtonText={
              !isServiceAvailable
                ? serviceUnavailableMessage
                : isInHouse || isInClinic || isOnline
                ? "Free Consultation"
                : "Service Unavailable"
            }
          />
          <div className="fae-service-content-page-advertisement dpt">
            <div
              style={{
                backgroundImage: `url('${getFileSrcFromPublicFolder(
                  "content_page_design_element.png"
                )}`,
              }}
              className="fae-service-content-page-advertisement-content"
            >
              <FAEAdvertisement
                className="fae--service-content-page-advertisement-for-mobile"
                primary={false}
                playStoreImage={getFileSrcFromPublicFolder("google_play.svg")}
                appleStoreImage={getFileSrcFromPublicFolder("apple_store.svg")}
              />
            </div>
            <div className="fae-service-content-page-advertisement-video">
              <FAEServiceVideoMonitor
                video={serviceVideoURL}
                width={window.screen.width < 799 ? "95%" : "75%"}
                videoStand={getFileSrcFromPublicFolder("iMac_stand.webp")}
              />
            </div>
          </div>
          <div>
            <FAEAdvertisement
              primary={true}
              image1={getFileSrcFromPublicFolder("mobile_image.webp")}
              image2={getFileSrcFromPublicFolder("ad_girl_image.webp")}
            />
          </div>
          <div className="fae--service-content-page-container">
            <div className="fae--red-bg-content-container">
              <FAEText
                style={{
                  width: "80%",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  fontWeight: "300",
                  color: "#626262",
                }}
              >
                {remainingDescription}
              </FAEText>
            </div> 
          </div>
        </Fragment>
      )}
    </>
  );
};

const mapStateToProps = ({
  serviceContentPageReducer: {
    error,
    loading,
    relatedServices,
    serviceDescription,
    onlyForYouServices,
    latestBlogs,
    bottomBanners,
    middleBanners,
    topBanners,
    featuredServices,
    trendingServices,
  },
  defaultReducer: { userCountryId, userId },
}) => ({
  error,
  loading,
  relatedServices,
  serviceDescription,
  onlyForYouServices,
  latestBlogs,
  bottomBanners,
  middleBanners,
  userCountryId,
  userId,
  topBanners,
  featuredServices,
  trendingServices,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getServiceDetail,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceContentPage);
