import { h } from 'vue'
import Theme from 'vitepress/theme'
import HomeSponsors from './components/HomeSponsors.vue'
import AsideSponsors from './components/AsideSponsors.vue'
import SvgImage from './components/SvgImage.vue'
import LayoutBottom from './components/LayoutBottom.vue'
import SidebarNavBefore from './components/SidebarNavBefore.vue'
import './styles/vars.css'
import './custom.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomeSponsors),
      'aside-ads-before': () => h(AsideSponsors),
      'layout-bottom': () => h(LayoutBottom),
      'sidebar-nav-before': () => h(SidebarNavBefore)
    })
  },
  enhanceApp({ app }) {
    app.component('SvgImage', SvgImage)
  }
}
