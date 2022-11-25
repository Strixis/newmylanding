import jsdom from 'jsdom';
import fs from 'fs';

import * as Utils from '../../src/assets/scripts/Utils.mjs';

describe('Набор тестов для функции addIdToChildren', function() {
  beforeEach(function() {
    const index = fs.readFileSync('src/index.html', 'utf-8');
    global.document = (new jsdom.JSDOM(index)).window.document;

    spyOn(console, 'log');
    spyOn(console, 'warn');
  });

  it('При отсутствии настроек в консоль выводится предупреждение',
    function() {
      Utils.addIdToChildren();
      expect(console.warn).toHaveBeenCalled();
    }
  );
  it('При отсутствии настроек в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let message = '<addIdToChildren>: Не задано settings Выполнение прервано.';

      Utils.addIdToChildren();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках родительского id в консоль выводится предупреждение',
    function() {
      let settings = {};

      Utils.addIdToChildren(settings);
      expect(console.warn).toHaveBeenCalled();
    }
  );
  it('При отсутствии в настройках родительского id в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {};
      let message = '<addIdToChildren>: Не задано settings.parentId. Выполнение прервано.';

      Utils.addIdToChildren(settings);
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках тэга дочерних элементов в консоль выводится предупреждение',
    function() {
      let settings = {
        parentId: 'presentation-welcome'
      };

      Utils.addIdToChildren();
      expect(console.warn).toHaveBeenCalled();
    }
  );
  it('При отсутствии в настройках тэга дочерних элементов в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {
        parentId: 'presentation-welcome'
      };
      let message = '<addIdToChildren>: Не задано settings.childTag. Выполнение прервано.';

      Utils.addIdToChildren(settings);
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках id дочерних элементов в консоль выводится предупреждение',
    function() {
      let settings = {
        parentId: 'presentation-welcome',
        childTag: 'P'
      };

      Utils.addIdToChildren();
      expect(console.warn).toHaveBeenCalled();
    }
  );
  it('При отсутствии в настройках id дочерних элементов в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {
        parentId: 'presentation-welcome',
        childTag: 'P'
      };
      let message = '<addIdToChildren>: Не задано settings.childId. Выполнение прервано.';

      Utils.addIdToChildren(settings);
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках id дочерних элементов в консоль выводится предупреждение',
    function() {
      let settings = {
        parentId: 'presentation-welcome',
        childTag: 'P',
        childId: 'paragraph'
      };

      Utils.addIdToChildren();
      expect(console.warn).toHaveBeenCalled();
    }
  );
  it('При отсутствии в настройках id дочерних элементов в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {
        parentId: 'presentation-welcome',
        childTag: 'P',
        childId: 'paragraph'
      };
      let message = '<addIdToChildren>: Не задано settings.separator. Выполнение прервано.';

      Utils.addIdToChildren(settings);
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('Когда в настройках установлено свойство для отладки в консоль выводится сообщение',
    function() {
      let settings = {
        parentId: 'presentation-welcome',
        childTag: 'P',
        childId: 'paragraph',
        separator: '-',
        debug: true
      };

      Utils.addIdToChildren(settings);
      expect(console.log).toHaveBeenCalled();
    }
  );
  it('Когда в настройках установлено свойство для отладки в консоль выводится сообщение c аргументами функции',
    function() {
      let settings = {
        parentId: 'presentation-welcome',
        childTag: 'P',
        childId: 'paragraph',
        separator: '-',
        debug: true
      };
      let message = settings;

      Utils.addIdToChildren(settings);
      expect(console.log).toHaveBeenCalledWith(message);
    }
  );
  it(`Для каждого дочернего элемента с заданным тэгом устанавливается заданное id.
      id задается по формуле parentId + separator + childId + separator + index`,
    function() {
      let settings = {
        parentId: 'presentation-welcome',
        childTag: 'P',
        childId: 'paragraph',
        separator: '-'
      };
      let expectation = settings.parentId + settings.separator + settings.childId + settings.separator

      Utils.addIdToChildren(settings);
      [...document.getElementById(settings.parentId).children].forEach((child, index) => {
        expect(child.id).toBe(expectation + index)
      })
    }
  );
});

describe('Набор тестов для функции renderTodayYear', function() {
  beforeEach(function() {
    const index = fs.readFileSync('src/index.html', 'utf-8');
    global.document = (new jsdom.JSDOM(index)).window.document;

    spyOn(console, 'log');
    spyOn(console, 'warn');
  });

  it('При отсутствии настроек в консоль выводится предупреждение',
    function() {
      Utils.renderTodayYear();
      expect(console.warn).toHaveBeenCalled();
    }
  );
  it('При отсутствии настроек в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let message = '<renderTodayYear>: Не задано settings Выполнение прервано.';

      Utils.renderTodayYear();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках родительского элемента в консоль выводится предупреждение',
    function() {
      let settings = {};

      Utils.renderTodayYear(settings);
      expect(console.warn).toHaveBeenCalled();
    }
  );
  it('При отсутствии в настройках родительского элемента в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {};
      let message = '<renderTodayYear>: Не задано settings.parentElement. Выполнение прервано.';

      Utils.renderTodayYear(settings);
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('Когда в настройках установлено свойство для отладки в консоль выводится сообщение',
    function() {
      let settings = {
        debug: true,
        parentElement: document.createElement('div')
      };

      Utils.renderTodayYear(settings);
      expect(console.log).toHaveBeenCalled();
    }
  );
  it('Когда в настройках установлено свойство для отладки в консоль выводится сообщение c аргументами функции',
    function() {
      let settings = {
        debug: true,
        parentElement: document.createElement('div')
      };
      let message = settings;

      Utils.renderTodayYear(settings);
      expect(console.log).toHaveBeenCalledWith(message);
    }
  );
  it('В родительском элементе выводится текущая дата', function() {
    let settings = {
      parentElement: document.createElement('div')
    };
    let currentYear = new Date().getFullYear();
    let expectation = document.createTextNode(currentYear);

    Utils.renderTodayYear(settings);
    expect(settings.parentElement.lastChild).toEqual(expectation);
    expect(settings.parentElement.lastChild.textContent).toBe(`${currentYear}`);
  });
});

describe('Набор тестов для функции renderOld', function() {
  beforeEach(function() {
    const index = fs.readFileSync('src/index.html', 'utf-8');
    global.document = (new jsdom.JSDOM(index)).window.document;

    spyOn(console, 'log');
    spyOn(console, 'warn');
  });

  it('При отсутствии настроек в консоль выводится предупреждение',
    function() {
      Utils.renderOld();
      expect(console.warn).toHaveBeenCalled();
    }
  );
  it('При отсутствии настроек в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let message = '<renderOld>: Не задано settings Выполнение прервано.';

      Utils.renderOld();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках даты рождения в консоль выводится предупреждение',
    function() {
      let settings = {};

      Utils.renderOld(settings);
      expect(console.warn).toHaveBeenCalled();
    }
  );
  it('При отсутствии в настройках даты рождения в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {};
      let message = '<renderOld>: Не задано settings.birthday. Выполнение прервано.';

      Utils.renderOld(settings);
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках дня рождения в консоль выводится предупреждение',
    function() {
      let settings = {
        birthday: {}
      };

      Utils.renderOld(settings);
      expect(console.warn).toHaveBeenCalled();
    }
  );
  it('При отсутствии в настройках дня рождения в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {
        birthday: {}
      };
      let message = '<renderOld>: Не задано settings.birthday.day. Выполнение прервано.';

      Utils.renderOld(settings);
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках месяца рождения в консоль выводится предупреждение',
    function() {
      let settings = {
        birthday: {
          day: 1
        }
      };

      Utils.renderOld(settings);
      expect(console.warn).toHaveBeenCalled();
    }
  );
  it('При отсутствии в настройках месяца рождения в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {
        birthday: {
          day: 1,
        }
      };
      let message = '<renderOld>: Не задано settings.birthday.month. Выполнение прервано.';

      Utils.renderOld(settings);
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках года рождения в консоль выводится предупреждение',
    function() {
      let settings = {
        birthday: {
          day: 1,
          month: 1
        }
      };

      Utils.renderOld(settings);
      expect(console.warn).toHaveBeenCalled();
    }
  );
  it('При отсутствии в настройках года рождения в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {
        birthday: {
          day: 1,
          month: 1
        }
      };
      let message = '<renderOld>: Не задано settings.birthday.year. Выполнение прервано.';

      Utils.renderOld(settings);
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках родительского элемента в консоль выводится предупреждение',
    function() {
      let settings = {
        birthday: {
          day: 1,
          month: 1,
          year: 1
        }
      };

      Utils.renderOld(settings);
      expect(console.warn).toHaveBeenCalled();
    }
  );
  it('При отсутствии в настройках родительского элемента в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {
        birthday: {
          day: 1,
          month: 1,
          year: 1
        }
      };
      let message = '<renderOld>: Не задано settings.parentElement. Выполнение прервано.';

      Utils.renderOld(settings);
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('Когда в настройках установлено свойство для отладки в консоль выводится сообщение',
    function() {
      let settings = {
        birthday: {
          day: 1,
          month: 1,
          year: 1
        },
        parentElement: document.createElement('div'),
        debug: true
      };

      Utils.renderOld(settings);
      expect(console.log).toHaveBeenCalled();
    }
  );
  it('Когда в настройках установлено свойство для отладки в консоль выводится сообщение c аргументами функции',
    function() {
      let settings = {
        birthday: {
          day: 1,
          month: 1,
          year: 1
        },
        parentElement: document.createElement('div'),
        debug: true
      };
      let message = settings;

      Utils.renderOld(settings);
      expect(console.log).toHaveBeenCalledWith(message);
    }
  );
  it('В родительском элементе выводится возраст',
    function() {
      let settings = {
        birthday: {
          day: 31,
          month: 7,
          year: 1995
        },
        parentElement: document.createElement('div'),
        debug: true
      };

      let currentDate = new Date();
      let old = currentDate.getFullYear() - settings.birthday.year;
      if (currentDate.getMonth() < settings.birthday.month) {
        if (currentDate.getDay() < settings.birthday.day) {
          old -= 1;
        }
      };

      // Для более точной оценки работы теста измените old на свой возраст.
      // Если поставить возраст вручную тест будет выдавать ошибку когда
      // возраст по факту изменится, но переменная останется прежней.
      // old = 27;
      let expectation = document.createTextNode(old);

      Utils.renderOld(settings);
      expect(settings.parentElement.lastChild).toEqual(expectation);
      expect(settings.parentElement.lastChild.textContent).toBe(`${old}`);
    }
  );
});

