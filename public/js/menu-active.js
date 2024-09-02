const hamburger = document.getElementById('hamburger')
const pageHeader = document.getElementById('pageHeader')
const closeIcon = document.getElementById('close')

export const activeMainMenuMovil = () => {
	hamburger.addEventListener('click', () => {
		pageHeader.classList.add('active')
	})

	closeIcon.addEventListener('click', () => {
		pageHeader.classList.remove('active')
	})
}
