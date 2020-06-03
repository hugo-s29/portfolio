import { Action } from "overmind";

export const toggleTheme: Action = ({ state, effects }) => {
  state.dark = !state.dark;
  effects.LocalStorage.set("theme", state.dark ? "dark" : "light");
};

export const loadTheme: Action = ({ state, effects }) => {
  const theme = effects.LocalStorage.get("theme");
  state.dark = theme === "dark";
};
export const setLoaded: Action = ({ state }) => {
  state.loaded = true;
};
export const loadLocales: Action = ({ state, effects }) => {
  const lang = effects.locale.getLang();
  state.language = lang;
};
