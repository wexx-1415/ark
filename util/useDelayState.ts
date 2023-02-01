import { Dispatch, SetStateAction, useEffect, useState } from 'react';
/**
 * @param initialState The initial state
 * @param delay The delay time in milliseconds
 * @returns [immediateState, delayState, setState]
 */
const useDelayState = <T>(
	initialState: T,
	delay: number
): [T, T, Dispatch<SetStateAction<T>>] => {
	const [immediateState, setImmediateState] = useState(initialState);
	const [state, setState] = useState(initialState);
	const [delayState, setDelayState] = useState(initialState);
	useEffect(() => {
		setImmediateState(state);
		// setState() will trigger useEffect() again, so we need to clear the timer);
		const timer = setTimeout(() => {
			setDelayState(state);
		}, delay);
		return () => clearTimeout(timer);
	}, [delay, state]);
	return [immediateState, delayState, setState];
};
export default useDelayState;
