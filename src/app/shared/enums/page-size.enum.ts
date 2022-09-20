export enum PageSizeEnum {
  Twelve = 12,
  TwentyFour = 24,
  FortyEight = 48,
  SeventyTwo = 72,
  NinetySix = 96
}

const TEXTS: { [key: number]: string } = {
  12: '12 itens por página',
  24: '24 itens por página',
  48: '48 itens por página',
  72: '72 itens por página',
  96: '96 itens por página',
};

export namespace PageSizeEnum {

  export function getAll(): { value: number; text: string }[] {
    const keys = Object.entries(PageSizeEnum).filter(([key, value]) => typeof PageSizeEnum[key] === 'number');
    return keys
      .map(([key, value]) => ({ value: PageSizeEnum[key], text: TEXTS[PageSizeEnum[key]] }));
  }
}
