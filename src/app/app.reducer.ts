import { ActionReducerMap } from '@ngrx/store';

import * as fromLoading from '@shared/store/loading/loading.reducer';
import * as fromMessage from '@shared/store/message/message.reducer';

export interface AppState {
	loading: fromLoading.LoadingState;
	message: fromMessage.MessageState;
}

export const reducers: ActionReducerMap<AppState> = {
	loading: fromLoading.loadingReducer,
	message: fromMessage.messageReducer,
};
