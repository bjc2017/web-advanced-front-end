import S16610 from '../skills/s16610.js';
import S16620 from '../skills/s16620.js';
import S16630 from '../skills/s16630.js';
export default class Yase {
	constructor() {
		this.name = '亚瑟';
		this.ico = './sources/heros/yase1.png';
		this.skills = [new S16610(), new S16620(), new S16630()];
	}
}
