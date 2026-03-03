self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("quote-app").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "script.js"
      ]);
    })
  );
});
