/**
 * Copyright 2018, IOOF Holdings Limited.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isPlainObject from 'lodash.isplainobject'
import { shallowMerge, deepMerge } from './merge'

const createStateHandler = merge => ({
  createEmpty: () => {
    return {}
  },
  getKeys: state => {
    return isPlainObject(state) ? Object.keys(state) : []
  },
  getValue: (state, key) => {
    return state[key]
  },
  setValue: (state, key, value) => {
    state[key] = value
    return state
  },
  canMerge: isPlainObject,
  merge
})

export const shallowStateHandler = createStateHandler(shallowMerge)
export const deepStateHandler = createStateHandler(deepMerge)
