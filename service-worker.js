const myCache = "dev-v1"
const assets = [
  "/",
  "/index.html",
  "/images/icon.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(myCache).then(cache => {
      cache.addAll(assets)
    })
  )
})