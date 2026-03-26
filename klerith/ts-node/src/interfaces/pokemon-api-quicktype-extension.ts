// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// src/interfaces/pokemon-api-quicktype-extension.ts

// --- Class 90: Mapping HTTP Response with Quicktype Extension ---

/**
 * Represents the full HTTP response structure for a Pokémon
 * retrieved from the PokéAPI v2.
 *
 * @remarks
 * This interface maps the JSON response into strongly typed
 * properties in TypeScript, ensuring type safety when consuming
 * data from the API.
 */
export interface PokemonAPIQuicktypeInterface {
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: PastAbility[];
  past_stats: PastStat[];
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

/**
 * Represents an ability entry for a Pokémon.
 *
 * @remarks
 * Contains details about a Pokémon's abilities, including whether
 * they are hidden and their slot position.
 */
export interface Ability {
  ability: Species | null;
  is_hidden: boolean;
  slot: number;
}

/**
 * Represents a species or reference object with name and URL.
 *
 * @remarks
 * Used for linking to other resources in the PokéAPI, such as moves,
 * abilities, or versions.
 */
export interface Species {
  name: string;
  url: string;
}

/**
 * Represents Pokémon cries (sound files).
 *
 * @remarks
 * Provides access to both the latest and legacy audio files for
 * a Pokémon's cries.
 */
export interface Cries {
  latest: string;
  legacy: string;
}

/**
 * Represents game index information for a Pokémon.
 *
 * @remarks
 * Indicates the index number of the Pokémon in specific game versions.
 */
export interface GameIndex {
  game_index: number;
  version: Species;
}

/**
 * Represents an item held by the Pokémon.
 *
 * @remarks
 * Includes details about the item and version-specific rarity.
 */
export interface HeldItem {
  item: Species;
  version_details: VersionDetail[];
}

/**
 * Represents version-specific item details.
 *
 * @remarks
 * Provides rarity and version information for held items.
 */
export interface VersionDetail {
  rarity: number;
  version: Species;
}

/**
 * Represents a move entry for a Pokémon.
 *
 * @remarks
 * Contains details about moves and how they are learned across
 * different versions.
 */
export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

/**
 * Represents details about how a move is learned.
 *
 * @remarks
 * Includes level, learning method, and version group information.
 */
export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  order: number | null;
  version_group: Species;
}

/**
 * Represents past abilities from older generations.
 *
 * @remarks
 * Provides historical data about abilities across generations.
 */
export interface PastAbility {
  abilities: Ability[];
  generation: Species;
}

/**
 * Represents past stats from older generations.
 *
 * @remarks
 * Provides historical data about stats across generations.
 */
export interface PastStat {
  generation: Species;
  stats: Stat[];
}

/**
 * Represents a stat entry (HP, Attack, etc.).
 *
 * @remarks
 * Includes base stat values, effort values, and stat details.
 */
export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

/**
 * Represents sprite images for Generation V.
 *
 * @remarks
 * Contains sprite variations specific to the Black/White versions.
 */
export interface GenerationV {
  "black-white": Sprites;
}

/**
 * Represents sprite images for Generation IV.
 *
 * @remarks
 * Includes sprites for Diamond/Pearl, HeartGold/SoulSilver, and Platinum.
 */
export interface GenerationIv {
  "diamond-pearl": Sprites;
  "heartgold-soulsilver": Sprites;
  platinum: Sprites;
}

/**
 * Represents version-specific sprite collections across generations.
 *
 * @remarks
 * Provides access to sprites grouped by generation, from Gen I to Gen IX.
 */
export interface Versions {
  "generation-i": GenerationI;
  "generation-ii": GenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": GenerationIv;
  "generation-ix": GenerationIx;
  "generation-v": GenerationV;
  "generation-vi": { [key: string]: Home };
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

/**
 * Represents other sprite collections.
 *
 * @remarks
 * Includes Dream World, Home, Official Artwork, and Showdown sprites.
 */
export interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
  showdown: Sprites;
}

/**
 * Represents sprite images of a Pokémon.
 *
 * @remarks
 * Provides front/back, shiny, female variants, and links to other sprite sets.
 */
export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

/**
 * Represents sprite images for Generation I.
 *
 * @remarks
 * Includes Red/Blue and Yellow version sprites.
 */
export interface GenerationI {
  "red-blue": RedBlue;
  yellow: RedBlue;
}

/**
 * Represents sprite images for Red/Blue and Yellow versions.
 *
 * @remarks
 * Provides front and back sprites, including gray and transparent variants.
 */
export interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

/**
 * Represents sprite images for Generation II.
 *
 * @remarks
 * Includes Crystal, Gold, and Silver version sprites.
 */
export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

/**
 * Represents sprite images for Crystal version.
 *
 * @remarks
 * Provides shiny, transparent, and default sprite variations.
 */
export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

/**
 * Represents sprite images for Gold/Silver versions.
 *
 * @remarks
 * Provides default, shiny, and optional transparent sprites.
 */
export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
}

/**
 * Represents sprite images for Generation III.
 *
 * @remarks
 * Includes Emerald, FireRed/LeafGreen, and Ruby/Sapphire versions.
 */
export interface GenerationIii {
  emerald: OfficialArtwork;
  "firered-leafgreen": Gold;
  "ruby-sapphire": Gold;
}

/**
 * Represents official artwork images.
 *
 * @remarks
 * Provides default and shiny artwork for Pokémon.
 */
export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

/**
 * Represents sprite images for Generation IX.
 *
 * @remarks
 * Includes Scarlet/Violet Dream World sprites.
 */
export interface GenerationIx {
  "scarlet-violet": DreamWorld;
}

/**
 * Represents Dream World sprite images.
 *
 * @remarks
 * Provides front default and female variants.
 */
export interface DreamWorld {
  front_default: null | string;
  front_female: null;
}

/**
 * Represents Home sprite images.
 *
 * @remarks
 * Provides default, shiny, and female variants from Pokémon Home.
 */
export interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

/**
 * Represents sprite images for Generation VII.
 *
 * @remarks
 * Includes icons and Ultra Sun/Ultra Moon sprites.
 */
export interface GenerationVii {
  icons: DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

/**
 * Represents sprite images for Generation VIII.
 *
 * @remarks
 * Includes Brilliant Diamond/Shining Pearl and icon sprites.
 */
export interface GenerationViii {
  "brilliant-diamond-shining-pearl": DreamWorld;
  icons: DreamWorld;
}

/**
 * Represents a type entry for a Pokémon.
 *
 * @remarks
 * Contains slot position and type details (e.g., Fire, Water).
 */
export interface Type {
  slot: number;
  type: Species;
}
