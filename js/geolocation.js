const geolocationSupport = () => {
	return 'geolocation' in navigator;
};

export const getCurrentPosition = () => {
	if (!geolocationSupport()) throw new Error('No tienes soporte de Geolocalización en tu navegador');
	navigator.geolocation.getCurrentPosition((position) => {
		console.log(position);
		const lat = position.coords.latitude;
		const lon = position.coords.longitude;
		console.log(lat, lon);
	});
};