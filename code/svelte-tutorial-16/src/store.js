import {tweened} from 'svelte/motion';
import {cubicOut} from 'svelte/easing';

export const tweenedStore = tweened(0,{
	duration: 5000,
	delay: 1000,
	easing: cubicOut
});