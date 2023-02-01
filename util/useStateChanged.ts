import { useEffect, useState } from 'react';

const useStateChanged = (state: any) => {
	const [prev, setPrev] = useState(state);
	const changed = prev !== state;
	useEffect(() => {
		if (changed) setPrev(state);
	}, [changed, state]);
	return changed;
};
export default useStateChanged;
