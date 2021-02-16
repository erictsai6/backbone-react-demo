import Backbone from 'backbone';

class App extends Backbone.View {

  constructor() {
    super();
    this.el = '#todo-app';
    this.template = () => `
    <div>Hello World</div>`;
  }

  render() {
    this.$el.html(this.template());
  }
}