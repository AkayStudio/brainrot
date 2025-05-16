'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7ee016ec0f0c6d79043d1f8703f950ef",
"assets/AssetManifest.bin.json": "5cff68a8f7b796cc0ec95e071f691d2e",
"assets/AssetManifest.json": "f96876dd42ab9885c74db34c3567e7d8",
"assets/assets/images/BallerinaCappucina.png": "14a95d88175d3472f8457a96333352bc",
"assets/assets/images/BallerinoLololo.png": "970711a3aaa6b6d81c6506c6588abd85",
"assets/assets/images/BlueberriniOctopussini.png": "f76b84b7ea9ba756d38308422a752930",
"assets/assets/images/BobrittoBandito.png": "8f74dd716796760ef761cbc522e8e811",
"assets/assets/images/BombardinoCrocodilo.png": "4e14922b96722c056c5c2cf89f567321",
"assets/assets/images/BonecaAmbalabu.png": "562244abd59e4e2af220056953154679",
"assets/assets/images/Brainrot_logo.png": "757e895ec40116efe5e0b7887d99e686",
"assets/assets/images/Brainrot_soundboard.png": "4371941b1ab96f7b4cbc6fa0e1afd1cf",
"assets/assets/images/BriibriiBicus.png": "183d84a23e5982d4773afa0f43fb1c88",
"assets/assets/images/BryBryPatapim.png": "a0af3e03edece81d8d55a0310469b654",
"assets/assets/images/BulbitoBanditoTraktorito.png": "3ff4da21e7b9a8d138b941bc6e7181d7",
"assets/assets/images/BumbumbiniGuzzini.png": "a3e4ae0a3bac219afcc3284581fb665e",
"assets/assets/images/Burrbaloni.png": "e7eb3f1387de959af330c993afed7d67",
"assets/assets/images/CappucinoAssassino.png": "f6946df82b38f30b5a3dce98ccdd46bc",
"assets/assets/images/ChimpanziniBananini.png": "1883275b945ecf498155a03bbbd3565c",
"assets/assets/images/FrigoCamello.png": "db3b99e0e57dc2737b234edf91a6280b",
"assets/assets/images/icon_brainrot.png": "84f98d30a95678e9174d9a4bf026ccc6",
"assets/assets/images/LavacaSaturnoSaturnitaLirilli.png": "1be98eb80dfa6e5419af233c4289b6fb",
"assets/assets/images/LirilliLarilla.png": "4290a006d684bf6e9194abb7c8905c3b",
"assets/assets/images/TralaleroTralala.png": "8c8a24b0be64e17f99ce5879f9ff3c66",
"assets/assets/images/TungTungTung.png": "25e4b2142f4859ff8fa9095501627e1f",
"assets/assets/images/UDinMaDinDun.png": "6cb7d837c90530aece4fd0e93db6088b",
"assets/assets/sounds/BallerinaCappucina.mp3": "52f63e585d59662822ff17a39bafcdae",
"assets/assets/sounds/BallerinoLololo.mp3": "ca415c6295046eb8b9a3687332fc8c40",
"assets/assets/sounds/BlueberriniOctopussini.mp3": "2f6cf12b795fc345297216f024b6346c",
"assets/assets/sounds/BobrittoBandito.mp3": "7dc799ef265e119cb5ff714c8605eaf5",
"assets/assets/sounds/BombardinoCrocodilo.mp3": "362a3e7c4a0192795dc68fc358bf5839",
"assets/assets/sounds/BonecaAmbalabu.mp3": "25e6bf1f3cd8a5b3bdf2f7f32d3f9fbb",
"assets/assets/sounds/BriibriiBicus.mp3": "dfb00e69fd4b88391d5f4a9238542287",
"assets/assets/sounds/BryBryPatapim.mp3": "9a0bbc9c9fe12190116f60aea370d0f9",
"assets/assets/sounds/BulbitoBanditoTraktorito.mp3": "a1e53bd947216d68c5872d17fadf7ed5",
"assets/assets/sounds/BumbumbiniGuzzini.mp3": "93070e61c568afd53a4faa25a1be9ff1",
"assets/assets/sounds/Burrbaloni.mp3": "70f181e1ea92f7b3b81372cc0c6b9449",
"assets/assets/sounds/CappucinoAssassino.mp3": "67f0e4086e1d218bc8a9e3d79e1d8377",
"assets/assets/sounds/ChimpanziniBananini.mp3": "ac5cb922ee1515802b7469413e5d212c",
"assets/assets/sounds/FrigoCamello.mp3": "150af6b14af9b87f15170f6fdab9c691",
"assets/assets/sounds/LavacaSaturnoSaturnitaLirilli.mp3": "8b29d6f5ad3b7c92e12934e05d5941b8",
"assets/assets/sounds/LirilliLarilla.mp3": "16e2f45b411e4605339ea95ad2b30c13",
"assets/assets/sounds/TralaleroTralala.mp3": "1ef49d64137c5f20b4cde1e34e81e3db",
"assets/assets/sounds/tungtungtungsahurr.mp3": "de08cb756399a502593f4c195e9f1d63",
"assets/assets/sounds/UDinMaDinDun.mp3": "5c4fd6b3782ffc694fff41211f2a16a2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c1b108cbcc1e69d780f02b9be608f7b3",
"assets/NOTICES": "97b41e115d0cc32944fdd76ea46db68c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "793c0953704ec09c73e07b5f1e1e76a4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "148a46cebc6eb58e5f3f8eb54e46704f",
"/": "148a46cebc6eb58e5f3f8eb54e46704f",
"main.dart.js": "7197d608be0265b0c864931a6dcec8bb",
"manifest.json": "adf91c5ece1e1ba7ae0d638eaddf1c8e",
"version.json": "744549fa4b1887fd804dde732ec5d34f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
