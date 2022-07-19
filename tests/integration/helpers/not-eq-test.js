import { module, test } from 'qunit';
import { setupRenderingTest } from 'pokemon/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | not-eq', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{not-eq this.inputValue}}`);

    assert.dom(this.element).hasText('1234');
  });
});
