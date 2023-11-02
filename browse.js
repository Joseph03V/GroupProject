window.onload = function() {
    L.mapquest.key = 'wDqE9BnvH5OgxagEI2OQqf5lI1s4yZ12';
    
    var map = L.mapquest.map('map', {
      center: [30.266666, -97.733330],
      layers: L.mapquest.tileLayer('map'),
      zoom: 12, 
      
    });
    var myIcon = L.icon({
        iconUrl: 'https://assets.mapquestapi.com/icon/v2/marker@2x.png',
        iconSize: [38, 48],
       iconAnchor: [22, 94],
       popupAnchor: [-3, -76],
       shadowUrl: 'my-icon-shadow.png',
       shadowSize: [0, 0],
       shadowAnchor: [22, 94]
   });
   
    L.marker([30.266666, -97.733330], { icon: myIcon}).addTo(map)
    L.marker([30.6333, -97.6780], { icon: myIcon}).addTo(map)
    L.marker([31.7619 , -106.4850], { icon: myIcon}).addTo(map)
    map.addControl(L.mapquest.control());
  }