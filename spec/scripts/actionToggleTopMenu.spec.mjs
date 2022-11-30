import jsdom from 'jsdom';
import fs from 'fs';

import { ToggleTopMenu } from '../../src/assets/scripts/handlers/actions/actionToggleTopMenu.mjs';

describe('Набор тестов для функции ToggleTopMenu', function() {
  beforeEach(function() {
    const index = fs.readFileSync('src/index.html', 'utf-8');
    let dom = new jsdom.JSDOM(index);
    global.window = dom.window;
    global.document = dom.window.document;

    spyOn(console, 'log');
    spyOn(console, 'warn');
  });

  it('При отсутствии настроек в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = null;
      let controlElement = document.getElementById('top-menu-control');
      let message = '<ToggleTopMenu>: Не задано settings Выполнение прервано.';
      let handler = ToggleTopMenu(settings);

      controlElement.addEventListener('click', handler);
      expect(console.warn).toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках символов открытия и закрытия в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {};
      let controlElement = document.getElementById('top-menu-control');
      let message = '<ToggleTopMenu>: Не задано settings.obSymbols Выполнение прервано.';
      let handler = ToggleTopMenu(settings);

      controlElement.addEventListener('click', handler);
      expect(console.warn).toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках символа открытия в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {
        obSymbols: {}
      };
      let message = '<ToggleTopMenu>: Не задано settings.obSymbols.open Выполнение прервано.';
      let controlElement = document.getElementById('top-menu-control');
      let handler = ToggleTopMenu(settings);

      controlElement.addEventListener('click', handler);
      expect(console.warn).toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках символа закрытия в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {
        obSymbols: {
          open: 'M'
        }
      };
      let message = '<ToggleTopMenu>: Не задано settings.obSymbols.close Выполнение прервано.';
      let controlElement = document.getElementById('top-menu-control');
      let handler = ToggleTopMenu(settings);

      controlElement.addEventListener('click', handler);
      expect(console.warn).toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках элемента управлением меню в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {
        obSymbols: {
          open: 'M',
          close: 'X'
        }
      };
      let message = '<ToggleTopMenu>: Не задано settings.controlElement Выполнение прервано.';
      let controlElement = document.getElementById('top-menu-control');
      let handler = ToggleTopMenu(settings);

      controlElement.addEventListener('click', handler);
      expect(console.warn).toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках класса видимости меню в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {
        obSymbols: {
          open: 'M',
          close: 'X'
        },
        controlElement: document.getElementById('top-menu-control')
      };
      let message = '<ToggleTopMenu>: Не задано settings.openMenuClass Выполнение прервано.';
      let handler = ToggleTopMenu(settings);

      settings.controlElement.addEventListener('click', handler);
      expect(console.warn).toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках элемента с меню в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {
        obSymbols: {
          open: 'M',
          close: 'X'
        },
        controlElement: document.getElementById('top-menu-control'),
        openMenuClass: '__open'
      };
      let message = '<ToggleTopMenu>: Не задано settings.menuElement Выполнение прервано.';
      let handler = ToggleTopMenu(settings);

      settings.controlElement.addEventListener('click', handler);
      expect(console.warn).toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('Когда в настройках установлено свойство для отладки в консоль выводится сообщение с c аргументами функции',
    function() {
      let settings = {
        obSymbols: {
          open: 'M',
          close: 'X'
        },
        controlElement: document.getElementById('top-menu-control'),
        openMenuClass: '__open',
        menuElement: document.getElementById('top-menu'),
        debug: true
      };
      let message = settings;
      let handler = ToggleTopMenu(settings);

      settings.controlElement.addEventListener('click', handler);
      expect(console.log).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith(message);
    }
  );
  it('На элементе управления отображается символ открытия',
    function() {
      let settings = {
        obSymbols: {
          open: 'M',
          close: 'X'
        },
        controlElement: document.getElementById('top-menu-control'),
        openMenuClass: '__open',
        menuElement: document.getElementById('top-menu'),
        debug: true
      };
      let expectation = settings.obSymbols.open;
      let handler = ToggleTopMenu(settings);

      settings.controlElement.addEventListener('click', handler);
      expect(settings.controlElement.textContent).toBe(expectation);
    }
  );
  it('При клике на элемент управления символ открытия меняется на символ закрытия',
    function() {
      let settings = {
        obSymbols: {
          open: 'M',
          close: 'X'
        },
        controlElement: document.getElementById('top-menu-control'),
        openMenuClass: '__open',
        menuElement: document.getElementById('top-menu'),
        debug: true
      };
      let expectation = settings.obSymbols.close;
      let handler = ToggleTopMenu(settings);

      settings.controlElement.addEventListener('click', handler);
      settings.controlElement.dispatchEvent(new window.MouseEvent('click'));
      expect(settings.controlElement.textContent).toBe(expectation);
    }
  );
  it('При клике на элемент управления символ закрытия меняется на символ открытия',
    function() {
      let settings = {
        obSymbols: {
          open: 'M',
          close: 'X'
        },
        controlElement: document.getElementById('top-menu-control'),
        openMenuClass: '__open',
        menuElement: document.getElementById('top-menu'),
        debug: true
      };
      let expectation = settings.obSymbols.open;
      let handler = ToggleTopMenu(settings);

      settings.controlElement.addEventListener('click', handler);
      settings.controlElement.dispatchEvent(new window.MouseEvent('click'));
      settings.controlElement.dispatchEvent(new window.MouseEvent('click'));
      expect(settings.controlElement.textContent).toBe(expectation);
    }
  );
  it('При клике на элемент управления переключается класс меню',
    function() {
      let settings = {
        obSymbols: {
          open: 'M',
          close: 'X'
        },
        controlElement: document.getElementById('top-menu-control'),
        openMenuClass: '__open',
        menuElement: document.getElementById('top-menu'),
        debug: true
      };
      let handler = ToggleTopMenu(settings);

      settings.controlElement.addEventListener('click', handler);
      settings.controlElement.dispatchEvent(new window.MouseEvent('click'));
      expect([...settings.menuElement.classList].includes(settings.openMenuClass)).toBeTrue();

      settings.controlElement.dispatchEvent(new window.MouseEvent('click'));
      expect([...settings.menuElement.classList].includes(settings.openMenuClass)).toBeFalse();
    }
  );
});