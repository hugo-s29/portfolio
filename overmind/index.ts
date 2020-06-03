import { IConfig, createOvermind } from "overmind";
import state from "./state";
import * as actions from "./actions";
import * as effects from "./effects";
import { createHook } from "overmind-react";

const config = { state, actions, effects };
const overmind = createOvermind(config);

declare module "overmind" {
  // tslint:disable:interface-name
  export interface Config
    extends IConfig<{
      state: typeof config.state;
      actions: typeof config.actions;
      effects: typeof config.effects;
    }> {}
}

export default overmind;

export const useOvermind = createHook<typeof config>();
