import { useCallback, useEffect, useState } from 'react';

const useToggleDelayState = (initialState: boolean, delay: number) => {
	const [state, setState] = useState(initialState);
  let timer: null | NodeJS.Timeout = null;
	const toggle = useCallback(() => {
		setState((prevState) => !prevState);
		setTimeout(() => {
			setState((prevState) => !prevState);
		}, delay);
	}, [delay]);
	return [state, toggle] as const;
};
export default useToggleDelayState;
