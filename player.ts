import { Countries } from "./countries";

export interface Player {
  id: number;
  firstName: string;
  secondName: string;
  age: number;
  nathionalityId?: number;
  shamionShips?: number;
  nathionality?: Countries;
}
