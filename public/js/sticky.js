const root = document.documentElement
const titles = document.querySelectorAll('H2,H3,H4')
const heightH1 = Number(document.querySelector('H1').clientHeight)

export const activeSticky = () => {
	const callback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (entry.target.tagName === 'H2') {
					root.style.setProperty('--top-sticky-1', `${heightH1}px`)
				}
				if (entry.target.tagName === 'H3') {
					const heightH2 = Number(entry.target.closest('.content').querySelector('H2').clientHeight)
					const sumHeights = heightH1 + heightH2
					root.style.setProperty('--top-sticky-2', `${sumHeights}px`)
				}
				if (entry.target.tagName === 'H4') {
					const heightH2 = Number(entry.target.closest('.content').querySelector('H2').clientHeight)
					const heightH3 = Number(entry.target.closest('.content').querySelector('H3').clientHeight)
					const sumHeights = heightH1 + heightH2 + heightH3
					root.style.setProperty('--top-sticky-3', `${sumHeights}px`)
				}
			}
		})
	}

	const options = {
		root: null,
		threshold: 1,
	}

	const observer = new IntersectionObserver(callback, options)

	titles.forEach((title) => observer.observe(title))
}
