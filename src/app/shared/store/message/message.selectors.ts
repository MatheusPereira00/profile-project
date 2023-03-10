import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMessage from './message.reducer';

export const getMessageState = createFeatureSelector<fromMessage.MessageState>('message');
export const getMessage = createSelector(getMessageState, fromMessage.getMessage);
