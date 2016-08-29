'use strict';
import Background from '../../game-engine/background';
import Foreground from '../../game-engine/foreground';

export default Promise.all([].map(({loaded}) => loaded));
