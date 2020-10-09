class Adapter {
  constructor() {
    this.page = 1;
  }

  get() {
    return fetch(`https://pokeapi.co/api/v2/pokemon?page=${this.page}`).then(
      (r) => {
        this.page += 1;
        return r.json();
      }
    );
  }
}
