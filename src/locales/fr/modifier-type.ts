import { ModifierTypeTranslationEntries } from "#app/plugins/i18n";

export const modifierType: ModifierTypeTranslationEntries = {
  ModifierType: {
    "AddPokeballModifierType": {
      name: "{{modifierCount}}x {{pokeballName}}",
      description: "Receive {{pokeballName}} x{{modifierCount}} (Inventory: {{pokeballAmount}}) \nCatch Rate: {{catchRate}}",
    },
    "AddVoucherModifierType": {
      name: "{{modifierCount}}x {{voucherTypeName}}",
      description: "Receive {{voucherTypeName}} x{{modifierCount}}",
    },
    "PokemonHeldItemModifierType": {
      extra: {
        "inoperable": "{{pokemonName}} can't take\nthis item!",
        "tooMany": "{{pokemonName}} has too many\nof this item!",
      }
    },
    "PokemonHpRestoreModifierType": {
      description: "Restores {{restorePoints}} HP or {{restorePercent}}% HP for one Pokémon, whichever is higher",
      extra: {
        "fully": "Fully restores HP for one Pokémon",
        "fullyWithStatus": "Fully restores HP for one Pokémon and heals any status ailment",
      }
    },
    "PokemonReviveModifierType": {
      description: "Revives one Pokémon and restores {{restorePercent}}% HP",
    },
    "PokemonStatusHealModifierType": {
      description: "Heals any status ailment for one Pokémon",
    },
    "PokemonPpRestoreModifierType": {
      description: "Restores {{restorePoints}} PP for one Pokémon move",
      extra: {
        "fully": "Restores all PP for one Pokémon move",
      }
    },
    "PokemonAllMovePpRestoreModifierType": {
      description: "Restores {{restorePoints}} PP for all of one Pokémon's moves",
      extra: {
        "fully": "Restores all PP for all of one Pokémon's moves",
      }
    },
    "PokemonPpUpModifierType": {
      description: "Permanently increases PP for one Pokémon move by {{upPoints}} for every 5 maximum PP (maximum 3)",
    },
    "PokemonNatureChangeModifierType": {
      name: "{{natureName}} Mint",
      description: "Changes a Pokémon's nature to {{natureName}} and permanently unlocks the nature for the starter.",
    },
    "DoubleBattleChanceBoosterModifierType": {
      description: "Doubles the chance of an encounter being a double battle for {{battleCount}} battles",
    },
    "TempBattleStatBoosterModifierType": {
      description: "Increases the {{tempBattleStatName}} of all party members by 1 stage for 5 battles",
    },
    "AttackTypeBoosterModifierType": {
      description: "Increases the power of a Pokémon's {{moveType}}-type moves by 20%",
    },
    "PokemonLevelIncrementModifierType": {
      description: "Increases a Pokémon's level by 1",
    },
    "AllPokemonLevelIncrementModifierType": {
      description: "Increases all party members' level by 1",
    },
    "PokemonBaseStatBoosterModifierType": {
      description: "Increases the holder's base {{statName}} by 10%. The higher your IVs, the higher the stack limit.",
    },
    "AllPokemonFullHpRestoreModifierType": {
      description: "Restores 100% HP for all Pokémon",
    },
    "AllPokemonFullReviveModifierType": {
      description: "Revives all fainted Pokémon, fully restoring HP",
    },
    "MoneyRewardModifierType": {
      description: "Grants a {{moneyMultiplier}} amount of money (₽{{moneyAmount}})",
      extra: {
        "small": "small",
        "moderate": "moderate",
        "large": "large",
      },
    },
    "ExpBoosterModifierType": {
      description: "Increases gain of EXP. Points by {{boostPercent}}%",
    },
    "PokemonExpBoosterModifierType": {
      description: "Increases the holder's gain of EXP. Points by {{boostPercent}}%",
    },
    "PokemonFriendshipBoosterModifierType": {
      description: "Increases friendship gain per victory by 50%",
    },
    "PokemonMoveAccuracyBoosterModifierType": {
      description: "Increases move accuracy by {{accuracyAmount}} (maximum 100)",
    },
    "PokemonMultiHitModifierType": {
      description: "Attacks hit one additional time at the cost of a 60/75/82.5% power reduction per stack respectively",
    },
    "TmModifierType": {
      name: "TM{{moveId}} - {{moveName}}",
      description: "Teach {{moveName}} to a Pokémon",
    },
    "EvolutionItemModifierType": {
      description: "Causes certain Pokémon to evolve",
    },
    "FormChangeItemModifierType": {
      description: "Causes certain Pokémon to change form",
    },
    "FusePokemonModifierType": {
      description: "Combines two Pokémon (transfers Ability, splits base stats and types, shares move pool)",
    },
    "TerastallizeModifierType": {
      name: "{{teraType}} Tera Shard",
      description: "{{teraType}} Terastallizes the holder for up to 10 battles",
    },
    "ContactHeldItemTransferChanceModifierType": {
      description: "Upon attacking, there is a {{chancePercent}}% chance the foe's held item will be stolen",
    },
    "TurnHeldItemTransferModifierType": {
      description: "Every turn, the holder acquires one held item from the foe",
    },
    "EnemyAttackStatusEffectChanceModifierType": {
      description: "Adds a {{chancePercent}}% chance to inflict {{statusEffect}} with attack moves",
    },
    "EnemyEndureChanceModifierType": {
      description: "Adds a {{chancePercent}}% chance of enduring a hit",
    },

    "RARE_CANDY": { name: "Rare Candy" },
    "RARER_CANDY": { name: "Rarer Candy" },

    "MEGA_BRACELET": { name: "Mega Bracelet", description: "Mega Stones become available" },
    "DYNAMAX_BAND": { name: "Dynamax Band", description: "Max Mushrooms become available" },
    "TERA_ORB": { name: "Tera Orb", description: "Tera Shards become available" },

    "MAP": { name: "Map", description: "Allows you to choose your destination at a crossroads" },

    "POTION": { name: "Potion" },
    "SUPER_POTION": { name: "Super Potion" },
    "HYPER_POTION": { name: "Hyper Potion" },
    "MAX_POTION": { name: "Max Potion" },
    "FULL_RESTORE": { name: "Full Restore" },
    
    "REVIVE": { name: "Revive" },
    "MAX_REVIVE": { name: "Max Revive" },
    
    "FULL_HEAL": { name: "Full Heal" },

    "SACRED_ASH": { name: "Sacred Ash" },

    "REVIVER_SEED": { name: "Reviver Seed", description: "Revives the holder for 1/2 HP upon fainting" },

    "ETHER": { name: "Ether" },
    "MAX_ETHER": { name: "Max Ether" },

    "ELIXIR": { name: "Elixir" },
    "MAX_ELIXIR": { name: "Max Elixir" },

    "PP_UP": { name: "PP Up" },
    "PP_MAX": { name: "PP Max" },

    "LURE": { name: "Lure" },
    "SUPER_LURE": { name: "Super Lure" },
    "MAX_LURE": { name: "Max Lure" },

    "MEMORY_MUSHROOM": { name: "Memory Mushroom", description: "Recall one Pokémon's forgotten move" },

    "EXP_SHARE": { name: "EXP. All", description: "Non-participants receive 20% of a single participant's EXP. Points" },
    "EXP_BALANCE": { name: "EXP. Balance", description: "Weighs EXP. Points received from battles towards lower-leveled party members" },

    "OVAL_CHARM": { name: "Oval Charm", description: "When multiple Pokémon participate in a battle, each gets an extra 10% of the total EXP" },

    "EXP_CHARM": { name: "EXP. Charm" },
    "SUPER_EXP_CHARM": { name: "Super EXP. Charm" },
    "GOLDEN_EXP_CHARM": { name: "Golden EXP. Charm" },

    "LUCKY_EGG": { name: "Lucky Egg" },
    "GOLDEN_EGG": { name: "Golden Egg" },

    "SOOTHE_BELL": { name: "Soothe Bell" },

    "SOUL_DEW": { name: "Soul Dew", description: "Increases the influence of a Pokémon's nature on its stats by 10% (additive)" },

    "NUGGET": { name: "Nugget" },
    "BIG_NUGGET": { name: "Big Nugget" },
    "RELIC_GOLD": { name: "Relic Gold" },

    "AMULET_COIN": { name: "Amulet Coin", description: "Increases money rewards by 20%" },
    "GOLDEN_PUNCH": { name: "Golden Punch", description: "Grants 50% of damage inflicted as money" },
    "COIN_CASE": { name: "Coin Case", description: "After every 10th battle, receive 10% of your money in interest" },
    
    "LOCK_CAPSULE": { name: "Lock Capsule", description: "Allows you to lock item rarities when rerolling items" },

    "GRIP_CLAW": { name: "Grip Claw" },
    "WIDE_LENS": { name: "Wide Lens" },
    
    "MULTI_LENS": { name: "Multi Lens" },

    "HEALING_CHARM": { name: "Healing Charm", description: "Increases the effectiveness of HP restoring moves and items by 10% (excludes Revives)" },
    "CANDY_JAR": { name: "Candy Jar", description: "Increases the number of levels added by Rare Candy items by 1" },

    "BERRY_POUCH": { name: "Berry Pouch", description: "Adds a 25% chance that a used berry will not be consumed" },

    "FOCUS_BAND": { name: "Focus Band", description: "Adds a 10% chance to survive with 1 HP after being damaged enough to faint" },

    "QUICK_CLAW": { name: "Quick Claw", description: "Adds a 10% chance to move first regardless of speed (after priority)" },

    "KINGS_ROCK": { name: "King's Rock", description: "Adds a 10% chance an attack move will cause the opponent to flinch" },

    "LEFTOVERS": { name: "Leftovers", description: "Heals 1/16 of a Pokémon's maximum HP every turn" },
    "SHELL_BELL": { name: "Shell Bell", description: "Heals 1/8 of a Pokémon's dealt damage" },

    "BATON": { name: "Baton", description: "Allows passing along effects when switching Pokémon, which also bypasses traps" },

    "SHINY_CHARM": { name: "Shiny Charm", description: "Dramatically increases the chance of a wild Pokémon being Shiny" },
    "ABILITY_CHARM": { name: "Ability Charm", description: "Dramatically increases the chance of a wild Pokémon having a Hidden Ability" },

    "IV_SCANNER": { name: "IV Scanner", description: "Allows scanning the IVs of wild Pokémon. 2 IVs are revealed per stack. The best IVs are shown first" },

    "DNA_SPLICERS": { name: "DNA Splicers" },

    "MINI_BLACK_HOLE": { name: "Mini Black Hole" },

    "GOLDEN_POKEBALL": { name: "Golden Poké Ball", description: "Adds 1 extra item option at the end of every battle" },

    "ENEMY_DAMAGE_BOOSTER": { name: "Damage Token", description: "Increases damage by 5%" },
    "ENEMY_DAMAGE_REDUCTION": { name: "Protection Token", description: "Reduces incoming damage by 2.5%" },
    "ENEMY_HEAL": { name: "Recovery Token", description: "Heals 2% of max HP every turn" },
    "ENEMY_ATTACK_POISON_CHANCE": { name: "Poison Token" },
    "ENEMY_ATTACK_PARALYZE_CHANCE": { name: "Paralyze Token" },
    "ENEMY_ATTACK_SLEEP_CHANCE": { name: "Sleep Token" },
    "ENEMY_ATTACK_FREEZE_CHANCE": { name: "Freeze Token" },
    "ENEMY_ATTACK_BURN_CHANCE": { name: "Burn Token" },
    "ENEMY_STATUS_EFFECT_HEAL_CHANCE": { name: "Full Heal Token", description: "Adds a 10% chance every turn to heal a status condition" },
    "ENEMY_ENDURE_CHANCE": { name: "Endure Token" },
    "ENEMY_FUSED_CHANCE": { name: "Fusion Token", description: "Adds a 1% chance that a wild Pokémon will be a fusion" },
  },
  TempBattleStatBoosterItem: {
    "x_attack": "Attaque +",
    "x_defense": "Défense +",
    "x_sp_atk": "Atq. Spé. +",
    "x_sp_def": "Déf. Spé. +",
    "x_speed": "Vitesse +",
    "x_accuracy": "Précision +",
    "dire_hit": "Muscle +",
  },
  AttackTypeBoosterItem: {
    "silk_scarf": "Mouchoir Soie",
    "black_belt": "Ceinture Noire",
    "sharp_beak": "Bec Pointu",
    "poison_barb": "Pic Venin",
    "soft_sand": "Sable Doux",
    "hard_stone": "Pierre Dure",
    "silver_powder": "Poudre Argentée",
    "spell_tag": "Rune Sort",
    "metal_coat": "Peau Métal",
    "charcoal": "Charbon",
    "mystic_water": "Eau Mystique",
    "miracle_seed": "Graine Miracle",
    "magnet": "Aimant",
    "twisted_spoon": "Cuillère Tordue",
    "never_melt_ice": "Glace Éternelle",
    "dragon_fang": "Croc Dragon",
    "black_glasses": "Lunettes Noires",
    "fairy_feather": "Plume Enchantée",
  },
  BaseStatBoosterItem: {
    "hp_up": "PV Plus",
    "protein": "Protéine",
    "iron": "Fer",
    "calcium": "Calcium",
    "zinc": "Zinc",
    "carbos": "Carbone",
  },
  EvolutionItem: {
    "NONE": "Aucun",

    "LINKING_CORD": "Fil de Liaison",
    "SUN_STONE": "Pierre Soleil",
    "MOON_STONE": "Pierre Lune",
    "LEAF_STONE": "Pierre Plante",
    "FIRE_STONE": "Pierre Feu",
    "WATER_STONE": "Pierre Eau",
    "THUNDER_STONE": "Pierre Foudre",
    "ICE_STONE": "Pierre Glace",
    "DUSK_STONE": "Pierre Nuit",
    "DAWN_STONE": "Pierre Aube",
    "SHINY_STONE": "Pierre Éclat",
    "CRACKED_POT": "Théière Fêlée",
    "SWEET_APPLE": "Pomme Sucrée",
    "TART_APPLE": "Pomme Acidulée",
    "STRAWBERRY_SWEET": "Fraise en Sucre",
    "UNREMARKABLE_TEACUP": "Bol Médiocre",
  
    "CHIPPED_POT": "Théière Ébréchée",
    "BLACK_AUGURITE": "Obsidienne",
    "GALARICA_CUFF": "Bracelet Galanoa",
    "GALARICA_WREATH": "Couronne Galanoa",
    "PEAT_BLOCK": "Bloc de Tourbe",
    "AUSPICIOUS_ARMOR": "Armure de la Fortune",
    "MALICIOUS_ARMOR": "Armure de la Rancune",
    "MASTERPIECE_TEACUP": "Bol Exceptionnel",
    "METAL_ALLOY": "Métal Composite",
    "SCROLL_OF_DARKNESS": "Rouleau des Ténèbres",
    "SCROLL_OF_WATERS": "Rouleau de l'Eau",
    "SYRUPY_APPLE": "Pomme Nectar",
  },
  FormChangeItem: {
    "NONE": "None",

    "ABOMASITE": "Abomasite",
    "ABSOLITE": "Absolite",
    "AERODACTYLITE": "Aerodactylite",
    "AGGRONITE": "Aggronite",
    "ALAKAZITE": "Alakazite",
    "ALTARIANITE": "Altarianite",
    "AMPHAROSITE": "Ampharosite",
    "AUDINITE": "Audinite",
    "BANETTITE": "Banettite",
    "BEEDRILLITE": "Beedrillite",
    "BLASTOISINITE": "Blastoisinite",
    "BLAZIKENITE": "Blazikenite",
    "CAMERUPTITE": "Cameruptite",
    "CHARIZARDITE_X": "Charizardite X",
    "CHARIZARDITE_Y": "Charizardite Y",
    "DIANCITE": "Diancite",
    "GALLADITE": "Galladite",
    "GARCHOMPITE": "Garchompite",
    "GARDEVOIRITE": "Gardevoirite",
    "GENGARITE": "Gengarite",
    "GLALITITE": "Glalitite",
    "GYARADOSITE": "Gyaradosite",
    "HERACRONITE": "Heracronite",
    "HOUNDOOMINITE": "Houndoominite",
    "KANGASKHANITE": "Kangaskhanite",
    "LATIASITE": "Latiasite",
    "LATIOSITE": "Latiosite",
    "LOPUNNITE": "Lopunnite",
    "LUCARIONITE": "Lucarionite",
    "MANECTITE": "Manectite",
    "MAWILITE": "Mawilite",
    "MEDICHAMITE": "Medichamite",
    "METAGROSSITE": "Metagrossite",
    "MEWTWONITE_X": "Mewtwonite X",
    "MEWTWONITE_Y": "Mewtwonite Y",
    "PIDGEOTITE": "Pidgeotite",
    "PINSIRITE": "Pinsirite",
    "RAYQUAZITE": "Rayquazite",
    "SABLENITE": "Sablenite",
    "SALAMENCITE": "Salamencite",
    "SCEPTILITE": "Sceptilite",
    "SCIZORITE": "Scizorite",
    "SHARPEDONITE": "Sharpedonite",
    "SLOWBRONITE": "Slowbronite",
    "STEELIXITE": "Steelixite",
    "SWAMPERTITE": "Swampertite",
    "TYRANITARITE": "Tyranitarite",
    "VENUSAURITE": "Venusaurite",

    "BLUE_ORB": "Blue Orb",
    "RED_ORB": "Red Orb",
    "SHARP_METEORITE": "Sharp Meteorite",
    "HARD_METEORITE": "Hard Meteorite",
    "SMOOTH_METEORITE": "Smooth Meteorite",
    "ADAMANT_CRYSTAL": "Adamant Crystal",
    "LUSTROUS_ORB": "Lustrous Orb",
    "GRISEOUS_CORE": "Griseous Core",
    "REVEAL_GLASS": "Reveal Glass",
    "GRACIDEA": "Gracidea",
    "MAX_MUSHROOMS": "Max Mushrooms",
    "DARK_STONE": "Dark Stone",
    "LIGHT_STONE": "Light Stone",
    "PRISON_BOTTLE": "Prison Bottle",
    "N_LUNARIZER": "N Lunarizer",
    "N_SOLARIZER": "N Solarizer",
    "RUSTED_SWORD": "Rusted Sword",
    "RUSTED_SHIELD": "Rusted Shield",
    "ICY_REINS_OF_UNITY": "Icy Reins Of Unity",
    "SHADOW_REINS_OF_UNITY": "Shadow Reins Of Unity",
    "WELLSPRING_MASK": "Wellspring Mask",
    "HEARTHFLAME_MASK": "Hearthflame Mask",
    "CORNERSTONE_MASK": "Cornerstone Mask",
    "SHOCK_DRIVE": "Shock Drive",
    "BURN_DRIVE": "Burn Drive",
    "CHILL_DRIVE": "Chill Drive",
    "DOUSE_DRIVE": "Douse Drive",
  },
  TeraType: {
    "UNKNOWN": "Inconnu",
    "NORMAL": "Normal",
    "FIGHTING": "Combat",
    "FLYING": "Vol",
    "POISON": "Poison",
    "GROUND": "Sol",
    "ROCK": "Roche",
    "BUG": "Insecte",
    "GHOST": "Spectre",
    "STEEL": "Acier",
    "FIRE": "Feu",
    "WATER": "Eau",
    "GRASS": "Plante",
    "ELECTRIC": "Electrik",
    "PSYCHIC": "Psy",
    "ICE": "Glace",
    "DRAGON": "Dragon",
    "DARK": "Ténèbres",
    "FAIRY": "Fée",
    "STELLAR": "Stellaire",
  },
} as const;