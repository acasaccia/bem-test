var map = L.map('main-map').setView([53.303738, -6.220526], 12);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


pokemons.forEach(function(pokemon, index){
    var icon = new L.DivIcon({
        iconSize: [100, 100],
        className: "map__marker map__marker_" + pokemon.name.toLowerCase()
    });
    var marker = L.marker(pokemon.coordinates, {icon: icon});
    marker.addTo(map);
    marker.on("click", function(){
        $(this._icon).toggleClass("map__marker_selected");
        pokemons[index].selected(!pokemons[index].selected());
    });
});