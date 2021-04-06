import emojis from '../../../emojis';

// Houses
export const tent = 829; // ⛺
export const hut = 801; // 🛖
export const house = 804; // 🏠

// Disitrics
export const castle = 818; // 🏰
export const mint = 810; // 🏦
export const farm = 643; // 🌾
export const lumberyard = 1262; // 🪓
export const masonhouse = 1264; // ⚒
export const forge = 816; // 🏭

export const field = 637; // 🌱
export const forest = 639; // 🌲
export const mountain = 787; // ⛰
export const river = 993; // 🌊

// Resources
export const money = 1202; // 💰
export const foodBread = 686; // 🥖
export const foodMeat = 694; // 🍗
export const foodFish = 605; // 🐟
export const wood = 800; // 🪵
export const stone = 799; // 🪨
export const brick = 798; // 🧱
export const metal = 1266; // 🗡
export const gold = 1112; // 👑

// Colors
export const red = 1523; // 🟥
export const orange = 1524; // 🟧
export const yellow = 1525; // 🟨
export const green = 1526; // 🟩
export const blue = 1527; // 🟦
export const purple = 1528; // 🟪
export const brown = 1529; // 🟫
export const black = 1530; // ⬛
export const white = 1531; // ⬜

// Disasters
export const fire = 991; // 🔥
export const ice = 987; // ❄
export const poison = 1353; // ☣
export const disaster = 977; // 🌪
export const coffin = 1323; // ⚰

// Other
export const up = 1542; // 🔺
export const down = 1543; // 🔻
export const world = 780; // 🌎
export const trophy = 1015; // 🏆

// Utility
export const tilePriorities: { [key: number]: number | undefined } = {
  [castle]: -1,

  [house]: 10,
  [hut]: 11,
  [tent]: 12,

  [mint]: 50,
  [forge]: 51,
  [masonhouse]: 52,
  [lumberyard]: 53,
  [farm]: 54,

  [field]: 100,
  [river]: 101,
  [forest]: 102,
  [mountain]: 103,
};

export function tileSorter(a: number, b: number): number {
  if (tilePriorities[a] === undefined || tilePriorities[b] === undefined) {
    return 0;
  }
  return tilePriorities[a]! - tilePriorities[b]!;
}

export function sortTiles(tiles: number[]): number[] {
  const sorted = [...tiles];
  sorted.sort(tileSorter);

  return sorted;
}

export function debugPrint(): string {
  const allValues: number[] = [
    tent,
    hut,
    house,
    castle,
    mint,
    farm,
    lumberyard,
    masonhouse,
    forge,
    field,
    forest,
    mountain,
    river,
    money,
    foodBread,
    foodMeat,
    foodFish,
    wood,
    stone,
    brick,
    metal,
    gold,
    red,
    orange,
    yellow,
    green,
    blue,
    purple,
    brown,
    black,
    white,
    fire,
    ice,
    poison,
    disaster,
    coffin,
    up,
    down,
    world,
    trophy,
  ];

  return allValues.map((t) => emojis[t]).join('');
}
