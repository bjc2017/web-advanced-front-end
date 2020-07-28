import S11210 from '../skills/s11210.js';
import S11220 from '../skills/s11220.js';
import S11230 from '../skills/s11230.js';
export default class Luban {
	constructor() {
		this.name = '鲁班';
		this.ico = './sources/heros/luban1.png';
		this.skills = [new S11210(), new S11220(), new S11230()];
	}
}
