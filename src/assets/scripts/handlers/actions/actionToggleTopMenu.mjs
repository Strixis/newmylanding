/**
 * Переключает отображение меню
 * @author Постников К. В. "Strixis" <nivem-strixis@mail.ru>
 * @param {Object} settings - объект с настройками
 * @param {boolean} settings.debug - режим отладки, позволяет вывести в консоль аргументы функции
 * @param {Object} settings.obSymbols - объект с символами открытия и закрытия меню
 * @param {string} settings.obSymbols.open - символ на кнопке для открытия меню
 * @param {string} settings.obSymbols.close - символ на кнопке для закрытия меню
 * @param {Element} settings.controlElement - элемент управления отображением меню
 * @param {string} settings.openMenuClass - класс меню при открытии
 * @param {Element} settings.menuElement - элемент с меню
 */
 export function ToggleTopMenu(settings) {
  if (!settings) {
    console.warn('<ToggleTopMenu>: Не задано settings Выполнение прервано.');
    return
  };
  if (!settings.obSymbols) {
    console.warn('<ToggleTopMenu>: Не задано settings.obSymbols Выполнение прервано.');
    return
  };
  if (!settings.obSymbols.open) {
    console.warn('<ToggleTopMenu>: Не задано settings.obSymbols.open Выполнение прервано.');
    return
  };
  if (!settings.obSymbols.close) {
    console.warn('<ToggleTopMenu>: Не задано settings.obSymbols.close Выполнение прервано.');
    return
  };
  if (!settings.controlElement) {
    console.warn('<ToggleTopMenu>: Не задано settings.controlElement Выполнение прервано.');
    return
  };
  if (!settings.openMenuClass) {
    console.warn('<ToggleTopMenu>: Не задано settings.openMenuClass Выполнение прервано.');
    return
  };
  if (!settings.menuElement) {
    console.warn('<ToggleTopMenu>: Не задано settings.menuElement Выполнение прервано.');
    return
  };

  if (settings.debug) {
    console.log(...arguments);
  }

  let isOpen = false;
  settings.controlElement.textContent = settings.obSymbols.open;

  return () => {
    isOpen = !isOpen;
    if (isOpen) {
      settings.controlElement.textContent = settings.obSymbols.close;
    } else {
      settings.controlElement.textContent = settings.obSymbols.open;
    }
    settings.menuElement.classList.toggle(settings.openMenuClass);
  }
}