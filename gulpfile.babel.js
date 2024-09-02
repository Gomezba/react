// Constantes para el automatizador de tareas
import gulp from 'gulp'
import pug from 'gulp-pug'
import prettify from 'gulp-prettify'

gulp.task('pug', () => {
	return gulp
		.src('./dev/views/pages/**/*.pug', { base: './dev/views/pages' })
		.pipe(
			pug({
				pretty: true,
			})
		)
		.pipe(gulp.dest('./public/views'))
})

gulp.task('indexPug', () => {
	return gulp
		.src('./dev/views/index/index.pug')
		.pipe(
			pug({
				pretty: true,
			})
		)
		.pipe(gulp.dest('./'))
})

gulp.task('prettify-html', () => {
	return gulp
		.src('public/views/**/*.html') // Ruta a los HTML generados
		.pipe(
			prettify({
				indent_size: 2, // Tamaño de la indentación (2 espacios)
				unformatted: ['pre', 'code'], // Mantener la indentación en <pre> y <code>
				extra_liners: [], // Eliminar saltos de línea innecesarios
			})
		)
		.pipe(gulp.dest('public/views')) // Carpeta de destino (sobrescribiendo los HTML)
})

gulp.task('prettify-Indexhtml', () => {
	return gulp
		.src('./index.html') // Ruta a los HTML generados
		.pipe(
			prettify({
				indent_size: 2,
				unformatted: ['pre', 'code'],
				extra_liners: [],
			})
		)
		.pipe(gulp.dest('./'))
})

gulp.task('default', () => {
	//PUG
	gulp.watch('./dev/**/*.pug', gulp.series('pug', 'indexPug', 'prettify-html', 'prettify-Indexhtml'))
})
