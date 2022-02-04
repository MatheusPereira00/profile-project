export interface Message {
	severity: string;
	summary: string;
	detail: string;
	key?: string;
	sticky?: boolean;
}
