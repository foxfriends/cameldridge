'use strict';
// load games dynamically to increase initial load time
// there's a loading screen anyway, and if they start a bit late does that really matter...?
require.ensure([], () => {
  require('./white');
  require('./forks');
  require('./abby-and-elliot');
  require('./tokaido');
}, 'games');
