//libs
import React, { useEffect, useState } from "react";
import {
  FAEDateTimeSelection,
  FAEButton,
  FAETitle,
} from "@findanexpert-fae/components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

//src
import {
  getBookingSlots,
  makeDateTimeNextPageFalse, 
    alternateGetBookingSlots,
    SaveAlternateTempBooking,
    
} from "../../redux/actions/dateTimeSelectionForClinicsActions";
import {saveBookingDateAndTimeNextTime} from "../../redux/actions/dateTimeSelectionPageActions"
import {   saveAddress, } from "../../redux/actions/addressSelectionPageActions";
import { addSpaces, getCookies, getFileSrcFromPublicFolder } from "../../utils";
import { faeBookingTimeSlotsParser } from "../../parsers";
import history from "../../history";

//scss
import "./DateTimeSelectionForClinics.scss"; 
import { saveEditedBookingDateTime } from "../../redux/actions/bookingEditPageActions";
import { FindNearestProvider } from "../../AsyncActions/AsyncActions";
import { FAEDialogueBox } from "@findanexpert-fae/components/dist/stories/FAEDialogueBox/FAEDialogueBox";

const loaderImage = getFileSrcFromPublicFolder("loader.webm");

const DateTimeSelectionForClinics = ({
  loading, 
  timeSlots = [],
  alternatetimeSlots= [],
  getBookingSlots, 
  makeDateTimeNextPageFalse, 
  alternateGetBookingSlots, 
  saveAddress,
  saveBookingDateAndTimeNextTime,
  saveEditedBookingDateTime,
  userCountry,
  
}) => {
  const { service } = useParams();
  const serviceName =   addSpaces(service, "-") ;
  document.title = `Expert | ${serviceName} - Schedule`;
  const [doTakeProviderIds, setProviderIds]= useState();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [Loader, setLoader]= useState(loading)
  const location = useLocation();
  const { state } = location; 
  const {
    serviceId,
    isInHouse,
    bookingDate, 
    isInClinic,
    duration,
    bookingId,
    cartId, 
    voucherId,
    addressId, 
    sessionFlag, 
    providerId,
    notes,
    sessionId, 
    businessId,
    latitude,
    longitude
  } = state; 
  console.log(state,alternatetimeSlots, 'startEndTime?.availableProviders')
  const todayDate= `${new Date().getFullYear()}-${
    `${new Date().getMonth() + 1}`.length === 1
      ? `0${new Date().getMonth() + 1}`
      : new Date().getMonth() + 1
  }-${
    `${new Date().getDate()}`.length === 1
      ? `0${new Date().getDate()}`
      : new Date().getDate()
  }`
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [selectedTime, setSelectedTime] = useState("");
  const userId= getCookies("userId")
  useEffect(() => {
    setSelectedTime(""); 
    if (selectedDate !== "") {
      alternateGetBookingSlots({
          businessId: businessId,
          selectedDate,
          serviceId: serviceId,
          duration: duration, 
          serviceVenu: isInClinic ? 2 : 1,
          bookingId:bookingId
      })  
    }
  }, [
    duration,
    getBookingSlots,
    isInClinic,
    isInHouse,
    selectedDate,
    serviceId,
  ]);

  const renameSLotsKeys= alternatetimeSlots.map((obj)=>{
    obj['availablefrom'] = obj['timeStart'];
    obj['availableto'] = obj['timeEnd'];
   return obj
  }); 
  // generate temp booking and cart id  
  const handleSaveBookingDateAndTime = async (e) => {
    e.preventDefault();
    const startEndTime= renameSLotsKeys.filter((eachSlot)=>eachSlot.availablefrom==selectedTime)
    const startTime= startEndTime[0]?.availablefrom;
    const endTime= startEndTime[0]?.availableto
    await saveBookingDateAndTimeNextTime({
          selectedDate, 
          cartId: cartId, 
          bookingStartTime:startTime,
          bookingEndTime:endTime,
          addressId: addressId,
        })
    await  addressId && history.push({
      pathname: 
        `/booking/${service}/summary`, 
        state: {
          ...state,
          bookingId: bookingId,
          cartId: cartId, 
          selectedDate,
          selectedTime, 
          providerId:startEndTime[0]?.availableProviders,
          startTime:startTime,
        },
    });
    await makeDateTimeNextPageFalse(); 
  }; 
 
  const updateBookingDateAndTime = async (e) => {
      e.preventDefault();
      const startEndTime= renameSLotsKeys.filter((eachSlot)=>eachSlot.availablefrom==selectedTime)
      const startTime= startEndTime[0]?.availablefrom;
      const endTime= startEndTime[0]?.availableto
     
      FindNearestProvider({ 
        cartId ,  
        latitude : `${latitude}` ,
        longitude : `${longitude}` , 
        providerIds : startEndTime[0]?.availableProviders ,
        bookingDate : bookingDate, 
        duration: duration,
        serviceId: serviceId, 
        startTime: startTime,
        isInclinic: isInClinic
      }).then(async(findNPIHRespons)=>{
         if(findNPIHRespons?.providerId !==0){
          setProviderIds(findNPIHRespons?.providerId )
   
            if(providerId !==0){
              saveEditedBookingDateTime({
                bookingId:bookingId,
                providerId: findNPIHRespons?.providerId,
                selectedDate,selectedTime, 
                customerId:!isNaN(userId)?JSON.parse(userId):userId, 
                endTime:endTime,
                startTime:startTime ,
                sessionId:sessionId,
                isSessionBookingAPI:true,
                latitude:latitude,
                longitude:longitude, 
                duration:duration,
                serviceId:serviceId,
                serviceVenu:isInClinic?2:1,
                })
              }else {
                alert("Provider not found.")
              }
            await sessionFlag && history.push("/your-bookings/session") 

         
        } else{
          setLoader(false)
          setContent("The selected slot where you are trying is currently booked by someone else. Please select other slot.");
          setOpen(true);
        } 
     })
  }
  return (
    <>
      <div className="fae--date-time-selection-main-container dpt dpb">
        <FAETitle
          label={serviceName}
          logo={getFileSrcFromPublicFolder("title_logo.svg")}
        />
        <FAEDateTimeSelection
          className="fae-date-time-selection-container-width"
          loaderForTimeSlots={loading}
          loaderPropsForTimeSlots={{
            loaderImage,
            height: "200px",
            type: "video",
          }}
          getSelectedDate={setSelectedDate}
          getSelectedTime={setSelectedTime}
          slots={faeBookingTimeSlotsParser(renameSLotsKeys)}
        />
        {selectedTime !== "" && (
         <><div
            style={{ display: "flex", justifyContent: "center" }}
            className="dpb" >
           {!sessionFlag  && <FAEButton
              className="fae--date-time-selection-button"
              style={{ borderRadius: "4px" }}
              onClick={handleSaveBookingDateAndTime} >
               Next
            </FAEButton>}
          {sessionFlag  && <FAEButton
            className="fae--date-time-selection-button"
            style={{ borderRadius: "4px" }}
            onClick={updateBookingDateAndTime}
          >
            Save
          </FAEButton>
          }
           </div>
          </>
        )}

      </div>
        <FAEDialogueBox
          open={open}
          content={content}
          buttons={[
            {
              label: "Ok",
              onClick: () => {
                setLoader(false)
                setOpen(false);
              },
            },
          ]}
        />
    </>
  );
};

const mapStateToProps = ({
  dateTimeSelectionForClinicsReducer: {
    error,
    loading,
    timeSlots,
    alternatetimeSlots, 
    nextPageDateTimeSelection,
  },defaultReducer: {userId, userCountry}
  
}) => ({
  error,
  loading,
  timeSlots,
  alternatetimeSlots,
  nextPageDateTimeSelection,
  userCountry
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBookingSlots,
      // saveBookingDateAndTime,
      makeDateTimeNextPageFalse,
      alternateGetBookingSlots,
      SaveAlternateTempBooking,
      saveAddress,
      saveBookingDateAndTimeNextTime,
      saveEditedBookingDateTime
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateTimeSelectionForClinics);


