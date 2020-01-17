if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/sw_yii2.js", {
            scope: "/"
        })
        .then(function (reg) {
            console.log("Service worker has been registered for scope: " + reg.scope);
        });
}

window.addEventListener('beforeinstallprompt', e => {
    e.userChoice.then(choiceResult => {
		ga('send', 'event', 'A2H', choiceResult.outcome);
		if (choiceResult.outcome === 'accepted') {
			ga('send', 'event', 'A2H_test', 'accepted');
		} else {
			console.log('User dismissed the A2HS prompt');
		}
	});
});

// событие определяет было ли приложение успешно добавленно на домашний экран пользователя после того, как он принял приглашение.
window.addEventListener('appinstalled', function (evt) {
    ga('send', 'event', 'pwa_popup', 'successfullyinstalled_pwa');
});
