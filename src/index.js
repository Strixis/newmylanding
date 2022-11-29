import 'styles';

import * as Utils from 'scripts/Utils';
import { handlerSwitchPresentationSection } from './assets/scripts/handlers/handlerSwitchPresentationSection.mjs';
import { handlerToggleTopMenu } from './assets/scripts/handlers/handlerToggleTopMenu.mjs';


Utils.addIdToChildren({
  parentId: 'presentation-welcome',
  childTag: 'P',
  childId: 'paragraph',
  separator: '-',
});
Utils.addIdToChildren({
  parentId: 'presentation-about-me',
  childTag: 'P',
  childId: 'paragraph',
  separator: '-',
});
Utils.addIdToChildren({
  parentId: 'presentation-about-me-knowledge-list',
  childTag: 'LI',
  childId: 'item',
  separator: '-',
});
Utils.addIdToChildren({
  parentId: 'presentation-about-me-certification-list',
  childTag: 'LI',
  childId: 'item',
  separator: '-',
});
Utils.addIdToChildren({
  parentId: 'projects-description',
  childTag: 'P',
  childId: 'paragraph',
  separator: '-',
});
Utils.addIdToChildren({
  parentId: 'projects-list',
  childTag: 'LI',
  childId: 'item',
  separator: '-',
});
Utils.addIdToChildren({
  parentId: 'laboratory-description',
  childTag: 'P',
  childId: 'paragraph',
  separator: '-',
});
Utils.addIdToChildren({
  parentId: 'laboratory-list',
  childTag: 'LI',
  childId: 'item',
  separator: '-',
});

let oldElement = document.querySelector('[data-age]');
Utils.renderOld({
  parentElement: oldElement,
  birthday: {
    day: 31,
    month: 7,
    year: 1995
  }
})

let copyrightLastYearElement = document.querySelector('[data-copyright]');
Utils.renderTodayYear({
  parentElement: copyrightLastYearElement
});

document.getElementById('presentation-navigation').addEventListener('click', handlerSwitchPresentationSection);
document.getElementById('top-menu-control').addEventListener('click', handlerToggleTopMenu);