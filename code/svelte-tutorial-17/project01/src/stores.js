import {writable, derived} from 'svelte/store';

export const charity = writable(0);

export const totalGiving = derived(charity, ($charity) => {
	return $charity + 5;
});