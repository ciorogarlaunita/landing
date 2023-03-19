import { useEffect, useState } from "preact/hooks";

export interface ScrollTriggerProps {
	threshold?: number;
}

export const useScrollTrigger = (props: ScrollTriggerProps) => {
	const [triggered, setTriggered] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > (props.threshold || 0)) {
			setTriggered(true);
		} else {
			setTriggered(false);
		}
	}

	useEffect(() => {
		globalThis.addEventListener("scroll", handleScroll);
		return () => {
			globalThis.removeEventListener("scroll", handleScroll);
		}
	}, []);

	return triggered;
}
