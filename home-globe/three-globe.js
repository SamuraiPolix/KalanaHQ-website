//import { Group } from 'https://cdn.jsdelivr.net/npm/three@0.118.3/build/three.module.js';
import * as THREE from 'https://cdn.skypack.dev/three@<0.128.0>';

const three = window.THREE ? window.THREE : { Group }; // Prefer consumption from global THREE, if exists

import Globe from './globe-kapsule.js';
import fromKapsule from './utils/kapsule-class.js';

export default fromKapsule(Globe, three.Group, true);