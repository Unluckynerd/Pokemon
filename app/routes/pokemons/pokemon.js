import Route from '@ember/routing/route';

export default class PokemonsPokemonRoute extends Route {
  async model(params) {
    const { id } = params;
    const response = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    ).json();
    return { response };
  }
}
