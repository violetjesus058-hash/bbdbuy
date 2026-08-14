import DefaultTheme from 'vitepress/theme'
import { h, Fragment } from 'vue'
import './custom.css'
import GlobalNavbar from './components/GlobalNavbar.vue'
import SiteFooter from './components/SiteFooter.vue'
import ConsentBanner from './components/ConsentBanner.vue'
import ArticlePageHeader from './components/ArticlePageHeader.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(Fragment, [
      h(GlobalNavbar),
      h(DefaultTheme.Layout, null, {
        'doc-before': () => h(ArticlePageHeader),
        'doc-after': () => null
      }),
      h(SiteFooter),
      h(ConsentBanner)
    ])
  }
}
