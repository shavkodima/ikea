//day 2 -no
'use strict';

import {generateHeader} from './generateHeader.js';
import {generateFooter} from './geanerateFooter.js';
import {generateCatalog} from './generateCatalog.js';
import {generateSubCatalog} from './generateSubCatalog.js';
import {catalog} from './catalog.js';
import {loadData} from './loadData.js';


generateHeader();
generateFooter();
generateCatalog();
generateSubCatalog();
catalog();
loadData();

