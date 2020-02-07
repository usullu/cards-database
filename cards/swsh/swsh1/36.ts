import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-36",
	localId: 36,

	// Card informations
	name: {
		en: "Cinderace",
		fr: "Pyrobut",
	},

	hp: 170,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/36/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/36/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/36/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/36/high.png",
		},
	},

	evolveFrom: {
		en: "Raboot",
		fr: "Lapyro",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 14,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flame Cloak",
			fr: "Manteau de Feu",
		},
		text: {
			en: "Attach a Fire Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie Fire de votre pile de défausse à ce Pokémon.",
		},
		damage: 40
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Bright Flame",
			fr: "Flamme Éclatante",
		},
		text: {
			en: "Flip a coin. If tails, discard 2 Energy from this Pokémon.",
			fr: "Lancez une pièce. Si c’est pile, défaussez 2 Énergies de ce Pokémon.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card
