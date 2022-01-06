function initMap() {

    const myLocation = {lat: 42.63376, lng: 24.816163};

    const map = new google.maps.Map(document.getElementById('map'), {
        center: myLocation,
        zoom: 18
    });
    
    

   const marker =  new google.maps.Marker({
    position: myLocation,
    map: map,
    title:"Hello Petko",
    visible:true , 
    
    });
    
  var infoWindow = new google.maps.InfoWindow(
          {
              content:" my habitate",
  
    } )
    marker.addListener(
            'click',()=>{
    infoWindow.open(map,marker);   
            }
            )
    
}

