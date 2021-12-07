import {writable, derived} from 'svelte/store';

export const charity1 = writable(0);
export const charity2 = writable(0);

export const totalGiving = derived([charity1, charity2], ([$charity1, $charity2]) => {
	const subTotal = $charity1 + $charity2;
	const fee = subTotal * 0.5;
	return {
		subTotal,
		fee,
		total: subTotal+fee
	}
	
});