document.getElementById('askButton').addEventListener('click', function() {
    var startLocation = document.getElementById('startLocationInput').value.trim();
    var endLocation = document.getElementById('endLocationInput').value.trim();
    
    if (startLocation === '' || endLocation === '') {
        alert('Please enter both start and end locations.');
        return;
    }

    var mapUrl = 'https://www.google.com/maps/dir/?api=1';
    var startLocationUrl = 'origin=' + encodeURIComponent(startLocation);
    var endLocationUrl = 'destination=' + encodeURIComponent(endLocation);
    var travelModeUrl = 'travelmode=driving'; // Você pode alterar para 'walking', 'bicycling' ou 'transit' se necessário

    mapUrl += '&' + startLocationUrl + '&' + endLocationUrl + '&' + travelModeUrl;
    
    window.open(mapUrl, '_blank');
});
