import Backbone from 'backbone';

export class Counter extends Backbone.View {
  constructor() {
    super();
    this.model = new Backbone.Model({ count: 0 });
    this.tagName = "div";
    this.template = ({ count }) => `${count} <button>++</button>`;
    this.events = {
      "click button": "buttonClick",
    };
    this.listenTo(this.model, "change", this.render);
  }
  initialize() {
    this.render();
  }
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
  buttonClick() {
    this.model.set({ count: this.model.get("count") + 1 });
  }
}