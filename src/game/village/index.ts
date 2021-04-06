import * as Tiles from './tiles';
import emojis from '../../emojis';

export class Village {
  public population = 0;

  public tents = 0;
  public huts = 0;
  public houses = 0;

  public mints = 0;
  public farms = 0;
  public lumberyards = 0;
  public masonhouses = 0;
  public forges = 0;

  public constructor(
    population: number,
    tents: number,
    huts: number,
    houses: number,
    mints: number,
    farms: number,
    lumberyards: number,
    masonhouses: number,
    forges: number,
  ) {
    this.population = population;
    this.tents = tents;
    this.huts = huts;
    this.houses = houses;
    this.mints = mints;
    this.farms = farms;
    this.lumberyards = lumberyards;
    this.masonhouses = masonhouses;
    this.forges = forges;
  }

  public static fromJson(json: { [key: string]: unknown }): Village {
    return new Village(
      json['population'] as number,
      json['tents'] as number,
      json['huts'] as number,
      json['population'] as number,
      json['mints'] as number,
      json['farms'] as number,
      json['lumberyards'] as number,
      json['masonhouses'] as number,
      json['forges'] as number,
    );
  }

  public toJson(): { [key: string]: unknown } {
    return {
      population: this.population,
      tents: this.tents,
      huts: this.huts,
      houses: this.houses,
      mints: this.mints,
      farms: this.farms,
      lumberyards: this.lumberyards,
      masonhouses: this.masonhouses,
      forges: this.forges,
    };
  }

  public render(): string {
    const tiles: number[] = [
      ...new Array<number>(this.tents).fill(Tiles.tent),
      ...new Array<number>(this.huts).fill(Tiles.hut),
      ...new Array<number>(this.houses).fill(Tiles.house),
      ...new Array<number>(this.mints).fill(Tiles.mint),
      ...new Array<number>(this.farms).fill(Tiles.farm),
      ...new Array<number>(this.lumberyards).fill(Tiles.lumberyard),
      ...new Array<number>(this.masonhouses).fill(Tiles.masonhouse),
      ...new Array<number>(this.forges).fill(Tiles.forge),
    ];

    tiles.sort(Tiles.tileSorter);

    const layout: number[][] = naiveLayout(tiles);

    return layout.map((r) => r.map((t) => emojis[t]).join('')).join('\n');
  }
}

function naiveLayout(values: number[]): number[][] {
  const layout: number[][] = [[values[0]]];

  let ix = 0,
    iy = 0,
    lastix = 0,
    lastiy = 0,
    direction = 0; // 0 - east, 1 - north, 2 - west, 3 - south

  for (let i = 1; i < values.length; i++) {
    switch (direction) {
      case 0: // East
        ix = lastix + 1;
        iy = lastiy;
        break;
      case 1: // North
        ix = lastix;
        iy = lastiy - 1;
        break;
      case 2: // West
    }
  }

  return layout;
}

export const mockVillage = new Village(20, 12, 6, 2, 1, 4, 3, 2, 1);
