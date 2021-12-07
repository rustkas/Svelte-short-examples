import {writable} from 'svelte/store';

export const counterStore = writable(0);

export const objectCounterStore = writable({
	value:0,
	name:'Cool store'
});