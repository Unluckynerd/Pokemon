import Route from '@ember/routing/route';

export default class PokemonsIndexRoute extends Route {
  async model() {
    const array = [];
    const response = await (
      await fetch('https://pokeapi.co/api/v2/pokemon/?limit=500')
    ).json();
    let length = response.results.length;
    for (let i = 1; i <= length; i++) {
      let res = await (
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      ).json();
      array.push(res);
    }

    return array;
  }
}
