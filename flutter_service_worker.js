'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "368e1998fcc25563d86c84d687e48240",
".git/config": "56d4b46b6d7700cc0f318e722e56fc8c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "802a2422542dd3783318ccf8d45e7090",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5423079d6bc1eb8fed61ef9d9b40279d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7f9eeb7a3d9de613d8f728711359b7d8",
".git/logs/refs/heads/master": "7f9eeb7a3d9de613d8f728711359b7d8",
".git/logs/refs/remotes/origin/master": "3b51ff32976a8f3e2d34a9835936d293",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0a/fe370776f02094db2169e0595951b0acd1508f": "c1f68b7c6662bee62dd0fcd46e630031",
".git/objects/14/0f2dd4d4aac7704690487ca2e1fe5f5250fecc": "80e807ecb2cf8b34e7fd38b9aeb1e7cf",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/33/d3cf9c2a1e704d2b9c65c86ee90455ca9951e6": "5d962a48e25709bdc305c75d12ba5ba8",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/dfd9239496897114f597ad87f9b3ec3487d871": "dee275d1332b20b5c67b03990dd35ee2",
".git/objects/50/092c904199a82e31a42be9ff1ffb90d7e3f685": "445c79ebde7e848c79e6b39e98905a91",
".git/objects/53/4df42a69193667c615f14c702bb1e8a2d7d080": "fb48c5127ed17dd84290299cf7660cf0",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/bea96d6527274861616f8dd2cc6c7cbcc955d3": "6c0cc37748ba7617378f387e913bd2cf",
".git/objects/58/03a9e438558d622382f134024ee5eb50c14f1d": "d6c47240c041b19cc670a49ddf5e9812",
".git/objects/58/7b6f14ab2fcbf8f4af1a0a14450e4b2d4f41eb": "7a506e4a1f37b6b759fa7ecc0c2113c9",
".git/objects/5a/7cf23b0102329527a2a81520049152494673e3": "0fee32f42744186a001bad50693cf323",
".git/objects/61/1984983bf7847ea46a52af5aea1c8549d3f625": "91ce82a0485465237770124bc964a7a9",
".git/objects/62/f27647ed876d5b04c9f25f8d96f9e3f981837d": "fc0a254ad34fe6881471fcd36777c2bf",
".git/objects/63/3c590896c189e0e9805e65b7067fbfce809f14": "446278441fd375254c97150ebe83abdc",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9d176bfadbd2b35e0461c43dbf38d8ee7de172": "a8d9973e2314e86c54d56b7d6441a74c",
".git/objects/6b/e8aba3e53b695f6098147cdc536e834f3b32e1": "e26b51219a93dc8546276092c4d57b74",
".git/objects/7c/0e769479dc750702a80ae1847c5ee280ba7e08": "a7ee66026e70ff498ce199d70235ca11",
".git/objects/7d/e3b2a288f8a188fb31b411dfe78f2216c16507": "ae03932c78d2f56123bd7ac38f206d36",
".git/objects/87/20ee96989d3eb3df46e43e940968dff5863eeb": "98a4057b036cb937dc49342a5b7fed1b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8f/d42e7a56a1ad5ea94a01cc2d78edb669a9e3f3": "ae08d4b4c247b61aa287223b6f49c952",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/92/6f5daa0cec9394037deb93eca3f895c5a69385": "c0a462c31a1d235e99ff7ade9fb94593",
".git/objects/97/db65bc77d0bec386e232201b8d37ea90346810": "4512599d07d122e99920e24c1289dbfe",
".git/objects/98/83a42ed8c2a39c1d7229675c3ebafefa4d95be": "1a5d803b8136278f43ba7d8f02628e98",
".git/objects/a0/d38f1cd6e2e9b62b5882b8b64fec381be57c31": "7ac6ee485048c5f545e9a83a61485af2",
".git/objects/a5/52f6276cb7fb2df8eb116f11ddf088ae95d14a": "da50cbf8617dd28a90de7f8870701955",
".git/objects/a9/f1366d0ec8750db7117dcb0210a2571a8ee40d": "9f355612ef3e8f08405870ad8c355475",
".git/objects/ad/a9839ceb88263cf4f8113b1d0eee27dd839b96": "6eb4acede79e85d28a7c4713f126e65d",
".git/objects/b1/db246c0e1e568ff71d9112502cac9181a207a5": "0f7a1f0573a3bad2adfdc7cc566dbfcb",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/bb8114f80155d6013f31a866cb5ade62681e2a": "7e1e5ad564af11d7edf5a1e77b3dd3de",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/01b2b21774835ac6d56726212eea8f9744a134": "09be7615891e2210150ab904be75a28d",
".git/objects/ce/8c70534053577b7ba02a80b8fde02d62c1340b": "f2a269836b7f26ca40499dedeadc593c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/c95d2db3102a74c67591ed60237707e6de47a4": "a3564e27df5bd92b61392eda413489d6",
".git/objects/db/a0128eb9e8b7a3fdec3735f319ec2feecf9dd4": "8c3d03b9bcbd5804589a6e3741763234",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fd/33f990caefd43c2cdfd8013b4f040bbabdfca1": "952a0f36751107e27cab6d429e4ab3b9",
".git/objects/fd/611ac429bc0bfd2bd096f3eedddee6bba45e80": "de3f1483e5377be2d1c5c66f779abd34",
".git/ORIG_HEAD": "a337bdc3b5016e1e59b2a5a3db12494d",
".git/refs/heads/master": "669acd2459d092e7d2ae59e42dd78b9c",
".git/refs/remotes/origin/master": "669acd2459d092e7d2ae59e42dd78b9c",
"assets/AssetManifest.bin": "b339c374dd3895cd03825e11b0affee4",
"assets/AssetManifest.bin.json": "2a2c81e517f0a6ca46d5c7e720c0437e",
"assets/AssetManifest.json": "b6a9d5fa71fa45435b8e6dda8a6cf9b0",
"assets/assets/images/Dashatars.png": "c6f56031c490a1840876cad1a99252e5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "d04822a72a3d5465360b305c187f199d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "22415b2d1cb2436f37ce5b91c48276f7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d18b7365ac03a92e4a125a9e163cd14e",
"/": "d18b7365ac03a92e4a125a9e163cd14e",
"main.dart.js": "ac62290c981728752f855d00c3ebdd29",
"manifest.json": "b4fe352f6124c0d7c66ac0b4afec5f14",
"version.json": "9b0e0f49fc0d6e37dcac59e9e38b27a2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
