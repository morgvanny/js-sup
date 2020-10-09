class App {
  constructor() {
    this.adapter = new Adapter();

    this.pokemon = [];
    this.getMorePokemon().then(() => {
      this.displayPokemon();
    });
  }

  getMorePokemon() {
    return this.adapter.get().then((data) => {
      data.results.forEach((p) => {
        this.pokemon.push(new Pokemon(p));
      });
    });
  }

  displayPokemon() {
    document.querySelector("main").innerHTML += this.pokemon
      .map((p) => p.render())
      .join("");
  }
}
