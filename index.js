import NavigationView from './app/views/NavigationView'

const RootView = Backbone.Marionette.View.extend({
  className: 'main',
  template: _.template(
    '<header id="header-view"></header> \
    <div class="container-fluid"> \
    <div id="main-view"></div> \
    </div>'
  ),
  regions: {
    header: {
      el: '#header-view'
    },
    main: {
      el: '#main-view'
    }
  },
  initialize: function (options) {
    this.title = options.title
  },
  onRender: function () {
    this.showChildView('header', new NavigationView({ title: this.title }))
  }
})

export default RootView
