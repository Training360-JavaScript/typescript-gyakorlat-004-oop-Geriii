import { TransformerHero } from './transformer';
import { HumanHero } from './hero';
// Importáld be a HumanHero és TransformerHero osztályokat.


/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
  {id: 1, name: 'Hero1', sex: 'female', age: 25, health: 150},
  {id: 2, name: 'Hero2', sex: 'female', age: 35, health: 180},
  {id: 3, name: 'Hero3', sex: 'male', age: 45, health: 120},

];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
  {id: 4, name: 'Hero4', sex: 'female', age: 25, health: 150, wings: 2, wheels: 0, clan: 'Flyers'},
  {id: 5, name: 'Hero5', sex: 'male', age: 25, health: 150, wings: 0, wheels: 4, clan: 'Transformers'},
  {id: 6, name: 'Hero6', sex: 'male', age: 25, health: 150, wings: 2, wheels: 2, clan: 'Hybrid'},
];
