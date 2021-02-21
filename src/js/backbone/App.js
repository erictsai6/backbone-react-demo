import Backbone from 'backbone';

export class App extends Backbone.View {

  constructor() {
    super();
    this.el = $('#todo-app');
    console.log(this.el);

    this.template = () => `
    <div>Hello World</div>`;
  }

  render() {
    console.log(this.template());
    this.el.html(this.template());
  }
}