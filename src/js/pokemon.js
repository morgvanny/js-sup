class Pokemon {
  constructor({ name, url, image }) {
    this.name = name;
    this.url = url;
    this.image = image;
  }

  render() {
    return `<div class="pokemon">
    <h2>${this.name}</h2>
    </div>`;
  }
}
