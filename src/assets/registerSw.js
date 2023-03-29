// Temporarily disabled
// if ("serviceWorker" in navigator) {
// 	navigator.serviceWorker.register("/sw.js", {
// 		scope: "/app",
// 	}).then(reg => {
// 		console.log("Service worker registered.", reg)
// 	})
// }

// Check if display mode is standalone and if so, redirect to /app (if not already there)
// AKA: This is mainly for Desktop Chrome. When installing PWA, it just pops the current
// tab into a window, so we need to redirect to /app
// PS: Aparently `appinstalled` event does not fire anymore???
window.matchMedia("(display-mode: standalone)").addEventListener("change", e => {
	if (e.matches) {
		if (window.location.pathname !== "/app") {
			window.location.pathname = "/app"
		}
	}
});
