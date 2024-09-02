import { activeSticky } from './sticky.js'
import { activeSubmenuMovil } from './submenu.js'
import { activeMainMenuMovil } from './menu-active.js'
import { submenuLinksObserver, linksScrollMenuMain, toMoveUpMenu } from './links-observer.js'
import { scrollVelocity } from './scroll-velocity.js'

addEventListener('DOMContentLoaded', () => {
	scrollVelocity()
	activeSticky()
	activeMainMenuMovil()
	activeSubmenuMovil()
	linksScrollMenuMain()
	submenuLinksObserver()
	toMoveUpMenu()
})
