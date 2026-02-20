self.addEventListener('install', (e) => {
  console.log('Service Worker instalado!');
});

self.addEventListener('fetch', (e) => {
  // Aqui você pode adicionar lógica de cache no futuro
});