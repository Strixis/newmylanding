import { SwitchPresentationSection } from "./actions/actionSwitchPresentationSection.mjs"

let currentElement = document.getElementById('presentation-welcome');

let settings = {
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
};

export let handlerSwitchPresentationSection = SwitchPresentationSection(settings);