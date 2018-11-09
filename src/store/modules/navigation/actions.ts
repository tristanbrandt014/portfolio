import { createStandardAction } from 'typesafe-actions';

const TOGGLE = 'navigation/TOGGLE';

export const toggle = createStandardAction(TOGGLE)<boolean>();
