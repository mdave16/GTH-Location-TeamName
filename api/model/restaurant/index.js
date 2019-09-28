const pgp = require('pg-promise')(/* options */)
pgp.pg.defaults.ssl = true

const db = pgp(process.env.DATABASE_URL)

async function findAll (predicates) {
	const {
		kosher,
		halal,
		vegetarian,
		vegan,
		dairyfree,
		glutenfree
	} = predicates.lifestyle

	return await db.manyOrNone(`
		SELECT
		 	c.name AS city_name,
		  res.*
		FROM restaurant res
		INNER JOIN city c ON c.id = res.city_id
		WHERE 1=1
		${vegan ? 'AND res.vegan=true' : ''}
		${kosher ? 'AND res.kosher=true' : ''}
		${halal ? 'AND res.halal=true' : ''}
		${vegetarian ? 'AND res.vegetarian=true' : ''}
		${dairyfree ? 'AND res.dairy_free=true' : ''}
		${glutenfree ? 'AND res.gluten_free=true' : ''}
	`)
}

module.exports = {
	findAll
}