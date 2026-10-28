self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true })
      .then((windowClients) => {
        for (const client of windowClients) {
          if ("focus" in client) return client.focus();
        }

        if (clients.openWindow) return clients.openWindow("/");
      })
  );
});

// SLIET_CONNECT_FIREBASE_MESSAGING
importScripts(
  "https://www.gstatic.com/firebasejs/12.4.0/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/12.4.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCnEXaS5LuodPbxbXBMgANpkA4ipmdGQ8E",
  authDomain: "sliet-connect.firebaseapp.com",
  projectId: "sliet-connect",
  storageBucket: "sliet-connect.firebasestorage.app",
  messagingSenderId: "504766146769",
  appId: "1:504766146769:web:2e0422a130cae03d5bfdf0"
});

const firebaseMessaging = firebase.messaging();

// SLIET_CONNECT_BACKGROUND_NOTIFICATION
firebaseMessaging.onBackgroundMessage((payload) => {
  const notification = payload.notification || {};

  return self.registration.showNotification(
    notification.title || "SLIET CONNECT",
    {
      body: notification.body || "Aapke liye naya update hai.",
      icon: "/icon-192.png",
      data: payload.data || {}
    }
  );
});




const CACHE_NAME = "sliet-connect-v1";
const APP_SHELL = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok && new URL(event.request.url).origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        if (event.request.mode === "navigate") {
          return (await caches.match("/index.html")) || Response.error();
        }
        return Response.error();
      })
  );
});
