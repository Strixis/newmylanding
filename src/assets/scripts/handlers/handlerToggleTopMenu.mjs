import { ToggleTopMenu } from "./actions/actionToggleTopMenu.mjs";

let settings = {
  obSymbols: {
    open: 'M',
    close: 'X'
  },
  controlElement: document.getElementById('top-menu-control'),
  openMenuClass: '__open',
  menuElement: document.getElementById('top-menu')
}

export let handlerToggleTopMenu = ToggleTopMenu(settings);
