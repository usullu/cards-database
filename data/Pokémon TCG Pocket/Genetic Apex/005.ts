import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Caterpie"
	},

	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Find a Friend"
		},

		effect: {
			en: "Put 1 random G Pokémon from your deck into your hand."
		}
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card