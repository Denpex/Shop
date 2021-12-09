/*
 * File: api.tsx
 * Project: *
 * Created: Tuesday, 23rd November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import { Nullable } from "./util";

export type Response<T> = Promise<[Nullable<T>, Nullable<Error>]>;
