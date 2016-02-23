var pokemons = [
    {
        name: "Charmander",
        description: "Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon.",
        location: "Sandyford",
        coordinates: [53.276850, -6.207982],
        image: "images/charmander.png"
    },
    {
        name: "Pikachu",
        description: "Pikachu (Japanese: ピカチュウ Pikachu) is an Electric-type Pokémon.",
        location: "Temple bar",
        coordinates: [53.345469, -6.264143],
        image: "images/pikachu.png"
    },
    {
        name: "Bulbasaur",
        description: "Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon.",
        location: "Dundrum",
        coordinates: [53.286727, -6.241795],
        image: "images/bulbasaur.png"
    }
];

function app() {

    var self = this;

    this.pokemons = pokemons;

    this.pokemons.map(function(v, i){
        self.pokemons[i].selected = ko.observable(false);
    });

}

ko.applyBindings(app);
