import { ability } from "./ability";
import { abilityTriggers } from "./ability-trigger";
import { battle } from "./battle";
import { commandUiHandler } from "./command-ui-handler";
import { fightUiHandler } from "./fight-ui-handler";
import { menu } from "./menu";
import { menuUiHandler } from "./menu-ui-handler";
import { move } from "./move";
import { pokeball } from "./pokeball";
import { pokemon } from "./pokemon";
import { pokemonStat } from "./pokemon-stat";
import { starterSelectUiHandler } from "./starter-select-ui-handler";
import { tutorial } from "./tutorial";
import { titles, trainerClasses, trainerNames } from "./trainers";
import { nature } from "./nature";
import { weather } from "./weather";
import { modifierType } from "./modifier-type";
import { growth } from "./growth";
import { berry } from "./berry";

export const zhCnConfig = {
    ability: ability,
    abilityTriggers: abilityTriggers,
    battle: battle,
    commandUiHandler: commandUiHandler,
    fightUiHandler: fightUiHandler,
    menuUiHandler: menuUiHandler,
    menu: menu,
    move: move,
    pokeball: pokeball,
    pokemonStat: pokemonStat,
    pokemon: pokemon,
    starterSelectUiHandler: starterSelectUiHandler,
    nature: nature,
    titles: titles,
    trainerClasses: trainerClasses,
    trainerNames: trainerNames,
    tutorial: tutorial,
    growth: growth,
    weather: weather,
    modifierType: modifierType,
    berry: berry
}
