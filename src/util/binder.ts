/*
 * File: binder.ts
 * Project: *
 * Created: Wednesday, 1st December 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

export function bindActionCreators<T>(
  actionCreators: T,
  dispatch: (val: any) => void,
): T {
  let bind: any = {};

  for (const key in actionCreators) {
    const action = actionCreators[key];
    if (typeof action === "function") {
      bind[key] = (...args: any[]) => dispatch(action(...args));
    }
  }

  return bind;
}
