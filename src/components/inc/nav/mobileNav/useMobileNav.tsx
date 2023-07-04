import { useRef, useState } from 'react';
import { usePressKey } from '../../../../hooks/usePressKey';

export const useMobileNav = () => {
	const [isNavActive, setIsNavActive] = useState(false);
	const navButtonRef = useRef<HTMLButtonElement>(null);

	usePressKey('Escape', closeNavOnEsc);

	const toggleNav = () => {
		setIsNavActive((prevState) => !prevState);
	};

	const closeNav = () => {
		setIsNavActive(false);
	};

	// classic fn, beacause used before declaration
	function closeNavOnEsc() {
		if (!isNavActive) {
			return;
		}

		if (!navButtonRef.current) {
			return;
		}

		navButtonRef.current.focus();
		setIsNavActive(false);
	}

	return {
		navButtonRef,
		isNavActive,
		toggleNav,
		closeNav,
	};
};
