import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class PokemonsController extends Controller {
  queryParams = ['search'];

  @tracked search = '';
}
