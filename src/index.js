import 'styles';

import * as Utils from 'scripts/Utils';
import { SwitchPresentationSection } from 'scripts/SwitchPresentationSection';
import { ToggleTopMenu } from 'scripts/ToggleTopMenu';


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
Utils.renderTodayDate({
  parentElement: copyrightLastYearElement
});

let currentElement = document.getElementById('presentation-welcome');
SwitchPresentationSection({
  navigationElement: document.getElementById('presentation-navigation'),
  currentElement,
  currentControlElement: document.getElementById('presentation-navigation-welcome'),
  obConnections: {
    'presentation-navigation-welcome': currentElement,
    'presentation-navigation-about-me': document.getElementById('presentation-about-me'),
    'presentation-navigation-contacts': document.getElementById('presentation-contacts'),
  },
  visibilityClass: '__hidden',
  activeControlClass: 'presentation-menu_link__active',
  timing: getComputedStyle(currentElement).transitionDuration.slice(0, -1) * 1000
});

ToggleTopMenu({
  obSymbols: {
    open: 'M',
    close: 'X'
  },
  controlElement: document.getElementById('top-menu-control'),
  openMenuClass: '__open',
  menuElement: document.getElementById('top-menu')
});