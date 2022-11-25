/**
 * Переключает отображение секций
 * @author Постников К. В. "Strixis" <nivem-strixis@mail.ru>
 * @param {Object} settings - объект с настройками
 * @param {boolean} settings.debug - режим отладки, позволяет вывести в консоль аргументы функции
 * @param {Element} settings.navigationElement - элемент, содержащий элементы управления
 * @param {Element} settings.currentElement - элемент, который отображается сейчас
 * @param {Element} settings.currentControlElement - элемент управления, который отвечает за текущий отображаемый элемент
 * @param {Object} settings.obConnections - объект со связями "id элемента управления: элемент который отображается"
 * @param {string} settings.visibilityClass - класс со стилями видимости элемента
 * @param {string} settings.activeControlClass - класс со стилями активного элемента управления
 * @param {number} settings.timing - длительность смены класса settings.visibilityClass в миллисекундах
 */
export function SwitchPresentationSection(settings) {
  if (!settings) {
    console.warn('<SwitchPresentationSection>: Не задано settings Выполнение прервано.');
    return
  };
  if (!settings.navigationElement) {
    console.warn('<SwitchPresentationSection>: Не задано settings.navigationElement Выполнение прервано.');
    return
  };
  if (!settings.currentElement) {
    console.warn('<SwitchPresentationSection>: Не задано settings.currentElement Выполнение прервано.');
    return
  };
  if (!settings.currentControlElement) {
    console.warn('<SwitchPresentationSection>: Не задано settings.currentControlElement Выполнение прервано.');
    return
  };
  if (!settings.obConnections) {
    console.warn('<SwitchPresentationSection>: Не задано settings.obConnections Выполнение прервано.');
    return
  };
  if (!settings.visibilityClass) {
    console.warn('<SwitchPresentationSection>: Не задано settings.visibilityClass Выполнение прервано.');
    return
  };
  if (!settings.activeControlClass) {
    console.warn('<SwitchPresentationSection>: Не задано settings.activeControlClass Выполнение прервано.');
    return
  };
  if (!settings.timing) {
    console.warn('<SwitchPresentationSection>: Не задано settings.timing Выполнение прервано.');
    return
  };

  if (settings.debug) {
    console.log(...arguments);
  }

  let timer = false;

  settings.navigationElement.addEventListener('click', (event) => {
    if (timer) return
    if (settings.currentControlElement.id == event.target.id) return

    if (Object.keys(settings.obConnections).includes(event.target.id)) {
      timer = true;

      settings.currentElement.classList.toggle(settings.visibilityClass);
      settings.currentElement = settings.obConnections[event.target.id];
      setTimeout(() => {
        settings.currentElement.classList.toggle(settings.visibilityClass);
        setTimeout(() => {
          timer = false
        }, settings.timing);
      }, settings.timing);

      settings.currentControlElement.classList.toggle(settings.activeControlClass);
      settings.currentControlElement = document.getElementById(event.target.id);
      settings.currentControlElement.classList.toggle(settings.activeControlClass);
    }
  });
}