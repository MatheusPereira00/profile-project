import { createAction, props } from '@ngrx/store';

export enum MessageActions {
	ADD_MESSAGE = '[MESSAGE] Add Message',
	REMOVE_MESSAGE = '[MESSAGE] Remove Message',
}

export const AddMessage = createAction(
	MessageActions.ADD_MESSAGE,
	props<{
		severity: string;
		summary: string;
		detail: string;
		key?: string;
		sticky?: boolean;
	}>(),
);

export const RemoveMessage = createAction(MessageActions.REMOVE_MESSAGE);
