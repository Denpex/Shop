/*
 * File: context.tsx
 * Project: *
 * Created: Wednesday, 24th November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

export type ContextGlobal = { cart: null };

export type ContextAction<T> = { type: string; payload: { [key: string]: T } };

export type ContextResult<T, K> = [state: Partial<T>, dispatch: Partial<K>];
