import { SmileState, SmileData } from 'smile/model';

export const smileItems = (state: { smile: SmileState }): SmileData[] => state.smile.items;
export const smileItemsCount = (state: { smile: SmileState }): number => state.smile.items.length;
