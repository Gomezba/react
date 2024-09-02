const info = document.querySelector('.info')

export const scrollVelocity = () => {
	info.addEventListener(
		'wheel',
		function (event) {
			event.preventDefault() // Evitar el comportamiento predeterminado de scroll

			let scrollAmount = 30 // Controla la cantidad de scroll en píxeles
			if (event.deltaY > 0) {
				// Scroll hacia abajo
				window.scrollBy(0, scrollAmount)
			} else {
				// Scroll hacia arriba
				window.scrollBy(0, -scrollAmount)
			}
		},
		{ passive: false }
	)
}
