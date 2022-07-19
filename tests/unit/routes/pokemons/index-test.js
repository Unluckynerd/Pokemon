import { module, test } from 'qunit';
import { setupTest } from 'pokemon/tests/helpers';

module('Unit | Route | pokemons/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:pokemons/index');
    assert.ok(route);
  });
});
