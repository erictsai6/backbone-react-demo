import Backbone from 'backbone';
import _ from 'underscore';

import tpl from './App.html';

export class App extends Backbone.View {
  constructor(el) {
    this.el = $(el);
    this.model = new Backbone.Model({
      count: 0
    });
    this.template = _.template(tpl);
  }

  initialize() {    
    this.render();
  }  

  render() {
    this.el.html(this.template(this.model.toJSON()));
    return this;
  }
}