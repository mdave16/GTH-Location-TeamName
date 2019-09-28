const pgp = require('pg-promise')(/* options */)
pgp.pg.defaults.ssl = true

const db = pgp(process.env.DATABASE_URL)

export const findAll = (predicates) => (
	db.manyOrNone(`
		SELECT
		  *
		FROM city
	`).then(data => {
		console.log('DATA:', data.value)
	}).catch(error => {
		console.log('ERROR:', error)
	})
)