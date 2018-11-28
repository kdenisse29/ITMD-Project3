function initMap(){
	var uluru = {lat: 19.7060, lng: -101.1950};
	var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13,center: uluru});
	 var marker = new google.maps.Marker({position: uluru, map: map});
}
