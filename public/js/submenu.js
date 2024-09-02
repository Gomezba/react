const submenu = document.getElementById('submenu')
const arrow = document.getElementById('arrow')

export const activeSubmenuMovil = () => {
	if (arrow) {
		arrow.addEventListener('click', () => {
			submenu.classList.toggle('active')
			console.log('Se hizo click')

			if (arrow.getAttribute('src').includes('back')) {
				arrow.setAttribute('src', '../../assets/icons/arrow-right.svg')
			} else {
				arrow.setAttribute('src', '../../assets/icons/arrow-back.svg')
			}
		})
	}
}
