import {useEffect, useState} from "react"

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
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		}
	}, []);

	return triggered;
}
