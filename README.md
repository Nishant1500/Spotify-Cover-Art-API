## spotify-cover-fetch
This program fetches cover art from Spotify, because over a year ago,
when I still had a local music collection, I got really bummed out about
only finding the cover art on there and not through various image searches.
Now I have the skills to make this, but no need for it; maybe someone does.

### Installation
```
# npm i -g spotify-cover-fetch
```

### Usage
spotify-cover-fetch should work with any validish Spotify IDs, meaning
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

### License
Uses the [LGPL-3.0](LICENSE.md), a.k.a. use it, modify it, contribute back,
keep it open.
