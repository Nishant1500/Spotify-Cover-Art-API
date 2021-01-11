# Spotify Cover Art API
This program helps to get cover art from Spotify

### Installation
```
# npm i -g spotify-cover-art-api
```

### Usage
Spotify-Cover-Art-API should work with any validish Spotify IDs, meaning
that it will work for anything containing something similar to
`track:6PVfRMTytzNlq9P1BP3Jl0`. This will allow usage with all Spotify
URLs I'm aware of - play., open. and spotify: - but I recommend the latter
because it won't contain any weird characters, hopefully.

#### Examples:

##### Command-line:
```
$ spotify-cover-fetch spotify:track:6PVfRMTytzNlq9P1BP3Jl0
```

##### ...with multiple URLs:
```
$ spotify-cover-fetch spotify:track:6PVfRMTytzNlq9P1BP3Jl0 spotify:album:4GMgNPA4fMv3U0QQsdRLJk
```

##### As a module:
```javascript
var scf = require('spotify-cover-fetch')
scf('spotify:track:6PVfRMTytzNlq9P1BP3Jl0')
```

##### ...with multiple URLs:
```javascript
var scf = require('spotify-cover-fetch')
scf(['spotify:track:6PVfRMTytzNlq9P1BP3Jl0', 'spotify:album:4GMgNPA4fMv3U0QQsdRLJk'])
```
