import { useEffect, useCallback } from 'react';

type Keys = 'Escape';

export const usePressKey = (key: Keys, callback: () => void) => {
	const onPressKey = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === key) callback();
		},
		[key, callback]
	);

	useEffect(() => {
		document.addEventListener('keydown', onPressKey);

		return () => document.removeEventListener('keydown', onPressKey);
	}, [onPressKey]);
};
