import { fr, ILanguage } from "../data";

export interface IState {
  dark: boolean;
  loaded: boolean;
  language: ILanguage;
}

const defaultState: IState = {
  dark: false,
  loaded: false,
  language: fr,
};

export default defaultState;
