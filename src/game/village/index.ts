import * as Tiles from './tiles';

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
    const list: number[] = [
      ...new Array<number>(this.tents).fill(Tiles.tent),
      ...new Array<number>(this.huts).fill(Tiles.hut),
      ...new Array<number>(this.houses).fill(Tiles.house),
      ...new Array<number>(this.mints).fill(Tiles.mint),
      ...new Array<number>(this.farms).fill(Tiles.farm),
      ...new Array<number>(this.lumberyards).fill(Tiles.lumberyard),
      ...new Array<number>(this.masonhouses).fill(Tiles.masonhouse),
      ...new Array<number>(this.forges).fill(Tiles.forge),
    ];

    list.sort(Tiles.tileSorter);

    const layout: number[][] = [];
  }
}

function naiveLayout(values: number[]): number[][] {
  const layout: number[][] = [];

  let ix = 0,
    iy = 0;
}

export const mockVillage = new Village(20, 12, 6, 2, 1, 4, 3, 2, 1);
