import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('repository-list', 'Integration | Component | repository list', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{repository-list}}`);

  assert.equal(this.$().text().replace(/\s/g,''), 'LanguagePrivate?');

  // Template block usage:
  this.render(hbs`
    {{#repository-list}}
    {{/repository-list}}
  `);

  assert.equal(this.$().text().replace(/\s/g,''), 'LanguagePrivate?');
});
