
const BEARER_TOKEN= process.env.REACT_APP_BEARER_TOKEN
const APP_JDS_BASE_URL = process.env.REACT_APP_PAYMENT_JDS;



var header = new Headers();
header.append("Content-Type", "application/json"); 
header.append("mode", "no-cors");
header.append("Authorization", `Bearer ${BEARER_TOKEN}`); 
header.append("Access-Control-Allow-Origin","*");
  
  export const FindNearestProvider=({ 
        cartId ,  
        latitude ,
        longitude , 
        providerIds , 
        bookingDate, 
        duration,
        serviceId, 
        startTime,
        isInclinic
    })=>{ 
  
      var payloadInClinic = JSON.stringify({
        providers: `${providerIds}`,
        distance: 20,
        latitude: `${latitude}`,
        longitude: `${longitude}`,
        bookingDate: bookingDate,
        startTime: startTime,
        serviceVenue: 2, 
        duration: duration,
        serviceId: serviceId,
        cartId : isInclinic && cartId
      });
      var payloadData = JSON.stringify({
        providers: `${providerIds}`,
        distance: 20,
        latitude: `${latitude}`,
        longitude: `${longitude}`,
        bookingDate: bookingDate,
        startTime: startTime,
        serviceVenu: 1,
        duration: duration, 
        serviceId: serviceId
    });

      var request = {
        method: 'POST',
        headers: header,
        body: isInclinic ? payloadInClinic: payloadData,
        redirect: 'follow'
      }; 
      return fetch(`${APP_JDS_BASE_URL}${isInclinic ==true ?"/Clinic/FindNearestProvider": "/Clinic/FindNearestProviderInHouse"}`, request)
        .then(response => response.json())
        .then(result =>  result)
        .catch(error => error); 
      };
      