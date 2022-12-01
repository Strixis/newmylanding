import jsdom from 'jsdom';
import fs from 'fs';

import { SwitchPresentationSection } from '../../src/assets/scripts/handlers/actions/actionSwitchPresentationSection.mjs';

describe('Набор тестов для функции SwitchPresentationSection', function() {
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
      let message = '<SwitchPresentationSection>: Не задано settings Выполнение прервано.';
      let handler = SwitchPresentationSection();

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      expect(console.warn).toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках элемента, который отображается сейчас в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let settings = {};
      let message = '<SwitchPresentationSection>: Не задано settings.currentElement Выполнение прервано.';
      let handler = SwitchPresentationSection(settings);

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      expect(console.warn).toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках элемента управления, который отвечает за текущий отображаемый элемент в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let currentElement = document.getElementById('presentation-welcome');
      let settings = {
        currentElement
      };
      let message = '<SwitchPresentationSection>: Не задано settings.currentControlElement Выполнение прервано.';
      let handler = SwitchPresentationSection(settings);

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      expect(console.warn).toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках объекта со связями "id элемента управления: элемент который отображается" в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let currentElement = document.getElementById('presentation-welcome');
      let settings = {
        currentElement,
        currentControlElement: document.getElementById('presentation-navigation-welcome'),
      };
      let message = '<SwitchPresentationSection>: Не задано settings.obConnections Выполнение прервано.';
      let handler = SwitchPresentationSection(settings);

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      expect(console.warn).toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках элемента управлением меню в консоль выводится предупреждение с сообщением об ошибке',
    function() {
      let currentElement = document.getElementById('presentation-welcome');
      let settings = {
        currentElement,
        currentControlElement: document.getElementById('presentation-navigation-welcome'),
        obConnections: {
          'presentation-navigation-welcome': currentElement,
          'presentation-navigation-about-me': document.getElementById('presentation-about-me'),
          'presentation-navigation-contacts': document.getElementById('presentation-contacts'),
        },
      };
      let message = '<SwitchPresentationSection>: Не задано settings.visibilityClass Выполнение прервано.';
      let handler = SwitchPresentationSection(settings);

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      expect(console.warn).toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках класса со стилями видимости элемента в консоль выводится предупреждение с сообщением об ошибке',
    function() {
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
      };
      let message = '<SwitchPresentationSection>: Не задано settings.activeControlClass Выполнение прервано.';
      let handler = SwitchPresentationSection(settings);

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      expect(console.warn).toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('При отсутствии в настройках длительности смены класса в консоль выводится предупреждение с сообщением об ошибке',
    function() {
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
      };
      let message = '<SwitchPresentationSection>: Не задано settings.timing Выполнение прервано.';
      let handler = SwitchPresentationSection(settings);

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      expect(console.warn).toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(message);
    }
  );
  it('Когда в настройках установлено свойство для отладки в консоль выводится сообщение с c аргументами функции',
    function() {
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
        timing: 600,
        debug: true
      };
      let message = settings;
      let handler = SwitchPresentationSection(settings);

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      expect(console.log).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith(message);
    }
  );
  it('При клике на элемент управления, который отвечает за текущий отображаемый элемент, секция не переключается',
    function() {
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
        timing: 600
      };
      let handler = SwitchPresentationSection(settings);

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      settings.currentControlElement.dispatchEvent(new window.MouseEvent('click'));

      expect([...document.getElementById('presentation-welcome').classList].includes(settings.visibilityClass)).toBeFalse();
      expect([...document.getElementById('presentation-about-me').classList].includes(settings.visibilityClass)).toBeTrue();
      expect([...document.getElementById('presentation-contacts').classList].includes(settings.visibilityClass)).toBeTrue()
    }
  );
  it('При клике на элемент управления, который отвечает за текущий отображаемый элемент, элемент управления не переключается',
    function() {
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
        timing: 600
      };
      let handler = SwitchPresentationSection(settings);

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      settings.currentControlElement.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));

      expect([...document.getElementById('presentation-navigation-welcome').classList].includes(settings.activeControlClass)).toBeTrue();
      expect([...document.getElementById('presentation-navigation-about-me').classList].includes(settings.activeControlClass)).toBeFalse();
      expect([...document.getElementById('presentation-navigation-about-me').classList].includes(settings.activeControlClass)).toBeFalse()
    }
  );
  it('При клике на элемент управления, который отвечает за скрытую секцию, секция переключается',
    function() {
      jasmine.clock().install();

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
        timing: 600
      };
      let handler = SwitchPresentationSection(settings);

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      document.getElementById('presentation-navigation-about-me').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));

      expect([...document.getElementById('presentation-welcome').classList].includes(settings.visibilityClass)).toBeTrue();
      jasmine.clock().tick(settings.timing);
      expect([...document.getElementById('presentation-about-me').classList].includes(settings.visibilityClass)).toBeFalse();
      expect([...document.getElementById('presentation-contacts').classList].includes(settings.visibilityClass)).toBeTrue();

      jasmine.clock().uninstall();
    }
  );
  it('При клике на элемент управления, который отвечает за скрытую секцию, элемент управления переключается',
    function() {
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
        timing: 600
      };
      let handler = SwitchPresentationSection(settings);

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      document.getElementById('presentation-navigation-about-me').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));

      expect([...document.getElementById('presentation-navigation-welcome').classList].includes(settings.activeControlClass)).toBeFalse();
      expect([...document.getElementById('presentation-navigation-about-me').classList].includes(settings.activeControlClass)).toBeTrue();
      expect([...document.getElementById('presentation-navigation-contacts').classList].includes(settings.activeControlClass)).toBeFalse();
    }
  );
  it('При клике на элемент управления, который отвечает за скрытую секцию, без соблюдения тайминга секция не переключается',
    function() {
      jasmine.clock().install();

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
        timing: 600
      };
      let handler = SwitchPresentationSection(settings);

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      document.getElementById('presentation-navigation-about-me').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
      jasmine.clock().tick(0);
      document.getElementById('presentation-navigation-welcome').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
      jasmine.clock().tick(0);
      document.getElementById('presentation-navigation-about-me').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
      jasmine.clock().tick(0);
      document.getElementById('presentation-navigation-contacts').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));

      expect([...document.getElementById('presentation-welcome').classList].includes(settings.visibilityClass)).toBeTrue();
      expect([...document.getElementById('presentation-about-me').classList].includes(settings.visibilityClass)).toBeTrue();
      expect([...document.getElementById('presentation-contacts').classList].includes(settings.visibilityClass)).toBeTrue();

      jasmine.clock().uninstall();
    }
  );
  it('При клике на элемент управления, который отвечает за скрытую секцию, без соблюдения тайминга элемент управления не переключается',
    function() {
      jasmine.clock().install();

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
        timing: 600
      };
      let handler = SwitchPresentationSection(settings);

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      document.getElementById('presentation-navigation-about-me').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
      jasmine.clock().tick(0);
      document.getElementById('presentation-navigation-welcome').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
      jasmine.clock().tick(0);
      document.getElementById('presentation-navigation-about-me').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
      jasmine.clock().tick(0);
      document.getElementById('presentation-navigation-contacts').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));

      expect([...document.getElementById('presentation-navigation-welcome').classList].includes(settings.activeControlClass)).toBeFalse();
      expect([...document.getElementById('presentation-navigation-about-me').classList].includes(settings.activeControlClass)).toBeTrue();
      expect([...document.getElementById('presentation-navigation-contacts').classList].includes(settings.activeControlClass)).toBeFalse();

      jasmine.clock().uninstall();
    }
  );
  it('При окончании тайминга секция переключается на ту, которая была выбрана первой, даже если в это время выбирались другие секции',
    function() {
      jasmine.clock().install();

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
        timing: 600
      };
      let handler = SwitchPresentationSection(settings);

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      document.getElementById('presentation-navigation-about-me').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
      jasmine.clock().tick(0);
      document.getElementById('presentation-navigation-welcome').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
      jasmine.clock().tick(0);
      document.getElementById('presentation-navigation-about-me').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
      jasmine.clock().tick(0);
      document.getElementById('presentation-navigation-contacts').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));

      jasmine.clock().tick(settings.timing);
      expect([...document.getElementById('presentation-navigation-welcome').classList].includes(settings.activeControlClass)).toBeFalse();
      expect([...document.getElementById('presentation-navigation-about-me').classList].includes(settings.activeControlClass)).toBeTrue();
      expect([...document.getElementById('presentation-navigation-contacts').classList].includes(settings.activeControlClass)).toBeFalse();

      jasmine.clock().uninstall();
    }
  );
  it('При окончании тайминга элемент управления переключается на тот, который был выбран первым, даже если в это время выбирались другие элементы управления',
    function() {
      jasmine.clock().install();

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
        timing: 600
      };
      let handler = SwitchPresentationSection(settings);

      document.getElementById('presentation-navigation').addEventListener('click', handler);
      document.getElementById('presentation-navigation-about-me').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
      jasmine.clock().tick(0);
      document.getElementById('presentation-navigation-welcome').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
      jasmine.clock().tick(0);
      document.getElementById('presentation-navigation-about-me').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
      jasmine.clock().tick(0);
      document.getElementById('presentation-navigation-contacts').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));

      expect([...document.getElementById('presentation-navigation-welcome').classList].includes(settings.activeControlClass)).toBeFalse();
      expect([...document.getElementById('presentation-navigation-about-me').classList].includes(settings.activeControlClass)).toBeTrue();
      expect([...document.getElementById('presentation-navigation-contacts').classList].includes(settings.activeControlClass)).toBeFalse();

      jasmine.clock().uninstall();
    }
  );
});