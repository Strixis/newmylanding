/**
 * Добавляет id дочерним элементам с заданным тэгом по формуле parentId + separator + childId + separator + index.
 * @author Постников К. В. "Strixis" <nivem-strixis@mail.ru>
 * @param {Object} settings - объект с настройками
 * @param {boolean} settings.debug - режим отладки, позволяет вывести в консоль аргументы функции
 * @param {string} settings.parentId - id родительского элемента
 * @param {string} settings.childTag - html-тэг дочерних элементов
 * @param {string} settings.childId - id дочерних элементов
 * @param {string} settings.separator - разделитель между родительским id, дочерним id и index.
 */
export function addIdToChildren(settings) {
  if (!settings) {
    console.warn('<addIdToChildren>: Не задано settings Выполнение прервано.');
    return
  };
  if (!settings.parentId) {
    console.warn('<addIdToChildren>: Не задано settings.parentId. Выполнение прервано.');
    return
  };
  if (!settings.childTag) {
    console.warn('<addIdToChildren>: Не задано settings.childTag. Выполнение прервано.')
    return
  }
  if (!settings.childId) {
    console.warn('<addIdToChildren>: Не задано settings.childId. Выполнение прервано.')
    return
  }
  if (!settings.separator) {
    console.warn('<addIdToChildren>: Не задано settings.separator. Выполнение прервано.')
    return
  }

  if (settings.debug) {
    console.log(...arguments)
  }

  let parentElement = document.getElementById(settings.parentId);
  let childrenAr = [...parentElement.children];
  
  childrenAr.forEach((child, index) => {
    if (child.tagName == settings.childTag) {
      child.id = settings.parentId + settings.separator + settings.childId + settings.separator + index;
    };
  });
}

/**
 * Отображает текущую дату в виде textNode в родительском элементе
 * @author Постников К. В. "Strixis" <nivem-strixis@mail.ru>
 * @param {Object} settings - объект с настройками
 * @param {boolean} settings.debug - режим отладки, позволяет вывести в консоль аргументы функции
 * @param {Element} settings.parentElement - родительский элемент
 */
export function renderTodayDate(settings) {
  if (!settings) {
    console.warn('<renderTodayDate>: Не задано settings Выполнение прервано.');
    return
  };
  if (!settings.parentElement) {
    console.warn('<renderTodayDate>: Не задано settings.parentElement. Выполнение прервано.');
    return
  };

  if (settings.debug) {
    console.log(...arguments);
  }

  let todayDateTextNode = document.createTextNode(new Date().getFullYear());
  settings.parentElement.append(todayDateTextNode);
}

/**
 * Отображает возраст в виде textNode в родительском элементе
 * @author Постников К. В. "Strixis" <nivem-strixis@mail.ru>
 * @param {Object} settings - объект с настройками
 * @param {boolean} settings.debug - режим отладки, позволяет вывести в консоль аргументы функции
 * @param {Element} settings.parentElement - родительский элемент
 * @param {Object} settings.birthday - объект с датой рождения
 * @param {string} settings.birthday.day - день рождения
 * @param {string} settings.birthday.month - месяц рождения
 * @param {string} settings.birthday.year - год рождения
 */
export function renderOld(settings) {
  if (!settings) {
    console.warn('<renderOld>: Не задано settings Выполнение прервано.');
    return
  };
  if (!settings.birthday) {
    console.warn('<renderOld>: Не задано settings.birthday. Выполнение прервано.');
    return
  };
  if (!settings.birthday.day) {
    console.warn('<renderOld>: Не задано settings.birthday.day. Выполнение прервано.');
    return
  };
  if (!settings.birthday.month) {
    console.warn('<renderOld>: Не задано settings.birthday.month. Выполнение прервано.');
    return
  };
  if (!settings.birthday.year) {
    console.warn('<renderOld>: Не задано settings.birthday.year. Выполнение прервано.');
    return
  };
  if (!settings.parentElement) {
    console.warn('<renderOld>: Не задано settings.parentElement. Выполнение прервано.');
    return
  };

  if (settings.debug) {
    console.log(...arguments);
  }

  let currentDate = new Date();

  let old = currentDate.getFullYear() - settings.birthday.year;
  if (currentDate.getMonth() < settings.birthday.month) {
    if (currentDate.getDay() < settings.birthday.day) {
      old -= 1;
    }
  };

  let oldTextNode = document.createTextNode(old);
  settings.parentElement.append(oldTextNode);
}
