<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>Simple Map</title>
    <meta charset="UTF-8">
    <meta name="viewprot"  content="width=device-width ,
          initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie-edge">
  </head>  
  <body>
      <link rel="stylesheet" type="text/css" href="map.css" />
      
    
<script src="map.js"></script>
    <!-- Async script executes immediately and must be after any DOM elements used in callback. -->
    <div id="map"></div>
    <script  async defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDcmzbIGPZnyIpC4YioPEmzMvk11CdCv38&callback=initMap"
     
    ></script>
    
  </body>
</html>
