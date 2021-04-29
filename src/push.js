self.addEventListener('push', function (event) {
  self.registration.showNotification('ServiceWorker Cookbook', {
    body: event.data.text(),
  });
});
