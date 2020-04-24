import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "lc-36",
	localId: 36,

	// Card informations
	name: {
		en: "Arcanine",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 59,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/lc/lc/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/lc/lc/36/high",
		},
	},

	evolveFrom: {
		en: "Growlithe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
		},
		text: {
			en: "Discard 1 Energy card attached to Arcanine in order to use this attack.",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
		},
		text: {
			en: "Arcanine does 30 damage to itself.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "lc"
	}
}

export default card