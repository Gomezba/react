const submenu = document.querySelector('.submenu')

export const submenuLinksObserver = () => {
	if (submenu) {
		const articles = document.querySelectorAll('.content')
		const submenuLinks = Array.from(document.querySelectorAll('.submenu__link'))

		const articlesElements = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const linkId = entry.target.id
					activeSubmenu(linkId)
				}
			})
		}

		function activeSubmenu(id) {
			const linkActive = submenuLinks.find((link) => link.classList.contains('active'))
			const linked = document.querySelector(`a[href='#${id}']`)
			if (linkActive) {
				linkActive.classList.remove('active')
			}

			linked.classList.add('active')
		}

		const observer = new IntersectionObserver(articlesElements, {
			rootMargin: '-50%',
		})

		articles.forEach((article) => observer.observe(article))
	}
}

export const linksScrollMenuMain = () => {
	const h1 = document.querySelector('H1').textContent.toLowerCase()
	const links = Array.from(document.querySelectorAll('.cross-menu__link'))

	const linkActive = links.find((link) => link.textContent.toLowerCase().trim() === h1)

	if (linkActive) {
		const menu = linkActive.closest('.container-cross-menu')
		const mainMenu = document.querySelector('.container-menu')
		linkActive.classList.add('active')
		menu.setAttribute('open', true)
		mainMenu.scrollTop = linkActive.offsetTop - mainMenu.offsetTop - 65
	}
}

export const toMoveUpMenu = () => {
	// Verifica si la pantalla tiene un ancho máximo de 500px
	if (window.matchMedia('(max-width: 500px)').matches) {
		const containerMenu = document.querySelector('.container-menu')
		const crossMenus = containerMenu.querySelectorAll('.container-cross-menu')

		crossMenus.forEach((crossMenu, index) => {
			if (index >= 3) {
				// Se aplica solo a partir del cuarto hijo
				const summary = crossMenu.querySelector('summary')

				summary.addEventListener('click', () => {
					if (!crossMenu.hasAttribute('open')) {
						// Verifica si no tiene el atributo open
						const crossMenuRect = crossMenu.getBoundingClientRect()
						const containerMenuRect = containerMenu.getBoundingClientRect()

						// Calcula la posición deseada: 100px desde la parte superior del containerMenu
						const targetPosition = crossMenuRect.top - containerMenuRect.top - 100

						// Realiza el scroll hasta la posición deseada
						containerMenu.scrollBy({
							top: targetPosition,
							behavior: 'smooth',
						})
					}
				})
			}
		})
	}
}
