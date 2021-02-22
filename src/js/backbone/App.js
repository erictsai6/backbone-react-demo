import Backbone from 'backbone';
import _ from 'underscore';

import tpl from './App.html';

export class App extends Backbone.View {

  initialize(el) {
    this.el = $(el);
    this.model = new Backbone.Model({
      name: 'hello'
    });
    console.log(this.model);
    this.template = _.template(tpl);
    this.render();
  }  

  render() {
    this.el.html(this.template(this.model.toJSON()));
    return this;
  }
}