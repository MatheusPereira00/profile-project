import { Action, createReducer, on } from '@ngrx/store';
import { AddMessage, RemoveMessage } from './message.actions';
export interface MessageState {
	severity: string;
	summary: string;
	detail: string;
	key?: string;
	sticky?: boolean;
}

const initialState: MessageState = {
	severity: null,
	summary: null,
	detail: null,
	key: null,
	sticky: null,
};

const _messageReducer = createReducer(
	initialState,
	on(AddMessage, (state, props) => {
		let message = {
			severity: props.severity,
			summary: props.summary,
			detail: props.detail,
			key: props.key,
			sticky: props.sticky,
		};
		return {
			...state,
			...message,
		};
	}),
	on(RemoveMessage, state => {
		return {
			...state,
			...initialState,
		};
	}),
);

export function messageReducer(state: MessageState, action: Action) {
	return _messageReducer(state, action);
}

export const getMessage = (state: MessageState) => state;
