if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('successful!');
	})
	.catch(function() {
		console.log('somthing went wrong:(');
	});
}