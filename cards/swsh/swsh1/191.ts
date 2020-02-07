import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-191",
	localId: 191,

	// Card informations
	name: {
		en: "Wobbuffet V",
		fr: "Qulbutoké V",
	},

	hp: 220,

	type: [
		Type.PSYCHIC,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/191/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/191/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/191/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/191/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],

	illustrator: {
		id: 18,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		name: {
			en: "V rule",
			fr: "Règle V",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gritty Comeback",
			fr: "Retour Abrasif",
		},
		text: {
			en: "Switch all damage counters on this Pokémon with those on your opponent’s Active Pokémon.",
			fr: "Échangez tous les marqueurs de dégâts de ce Pokémon contre ceux du Pokémon Actif de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Shadow Bind",
			fr: "Étreinte d’Ombre",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 3,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card
