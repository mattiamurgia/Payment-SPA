export type MainCity = {
  name?: Name;
  cca2?: string;
  capital?: string[];
  region?: string;
  subregion?: string;
  flag?: string;
  maps: Maps;
  flags?: Flags;
  coatOfArms?: CoatOfArms;
};

export type Name = {
  common: string;
  official: string;
};

export type CoatOfArms = {
  png: string;
  svg: string;
};

export type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

export type Flags = {
  png: string;
  svg: string;
  alt: string;
};
