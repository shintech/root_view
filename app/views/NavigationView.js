const NavigationView = Backbone.Marionette.View.extend({
  tagName: 'nav',
  className: 'navbar navbar-inverse',
  initialize: function (options) {
    this.title = options.title
  },
  template: _.template(
  '<div class="container-fluid"> \
    <div class="navbar-header"> \
      <a href="#" class="navbar-brand active"><%- title %></a> \
    </div> \
  </div>'
  ),
  serializeData: function () {
    return {
      'title': this.title
    }
  }
})

export default NavigationView
