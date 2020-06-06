import { fr, ILanguage } from "../data";
import { wip } from "../data";
export interface IState {
  dark: boolean;
  loaded: boolean;
  language: ILanguage;
  wip: string[];
}

const defaultState: IState = {
  dark: false,
  loaded: false,
  language: fr,
  wip,
};

export default defaultState;
