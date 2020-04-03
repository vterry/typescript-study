import { User } from './model/User';
// import { Company } from './model/Company';
import { CustomMap } from './model/CustomMaps';
import { Company } from './model/Company';

const sampleUser = new User();
const sampleCompany = new Company();

const customMap = new CustomMap('map');

customMap.addMarker(sampleUser);
customMap.addMarker(sampleCompany);
