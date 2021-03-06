export default {
  getLinks(cb) {
    axios.get(window.SETTINGS.SITE_URI +'/wp-json/wp/v2/links')
    .then(response => {
      cb(response.data)
    })
    .catch(err => {
      cb(err)
    })
  },
  getWidgets(cb) {
    axios.get(window.SETTINGS.SITE_URI +'/wp-json/wp-rest-api-sidebars/v1/sidebars/main')
    .then(response => {
      cb(response.data.widgets)
    })
    .catch(err => {
      cb(err)
    })
    
  },
  getNavMenu(cb) {
    axios.get(window.SETTINGS.SITE_URI +'/wp-json/menus/v1/menus/'+window.SETTINGS.NAV_MENU_NAME)
    .then(response => {
      cb(response.data.items)
    })
    .catch(e => {
      cb(e)
    })
  },
  getInfo(cb) {
    axios.get("/wp-json")
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  },
  getCategories (cb) {
    axios.get(window.SETTINGS.SITE_URI + '/wp-json/wp/v2/categories?sort=name&hide_empty=true&per_page=50')
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  },
  getPages (cb) {
    axios.get(window.SETTINGS.SITE_URI + '/wp-json/wp/v2/pages?per_page=10')
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  },

  getPage (id, cb) {
    if (_.isNull(id) || !_.isNumber(id)) return false
    axios.get(window.SETTINGS.SITE_URI + 'pages/'+id)
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  },

  getPosts (page, cb) {
    if (_.isEmpty(page)) { let page = 1 }
    
    axios.get(window.SETTINGS.SITE_URI + '/wp-json/wp/v2/posts?_embed&per_page='+window.SETTINGS.POST_PAGE_LIMIT+'&page='+page)
      .then(response => {
        cb(response)
      })
      .catch(e => {
        cb(e)
      })
  },
}
