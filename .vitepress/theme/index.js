import DefaultTheme from 'vitepress/theme'
import { h, Fragment } from 'vue'
import './custom.css'
import GlobalNavbar from './components/GlobalNavbar.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(Fragment, [
      h(GlobalNavbar),
      h(DefaultTheme.Layout, null, {
        'doc-after': () => null
      }),
      h(SiteFooter)
    ])
  }
}
