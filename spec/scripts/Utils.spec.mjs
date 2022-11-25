import jsdom from 'jsdom';
import fs from 'fs';

import * as Utils from '../../src/assets/scripts/Utils.mjs';

describe('Набор тестов для функции renderTodayDate', function() {
  beforeEach(function() {
    const index = fs.readFileSync('src/index.html', 'utf-8');
    global.document = (new jsdom.JSDOM(index)).window.document;

    spyOn(console, 'log');
    spyOn(console, 'warn');
  })

  it('При отсутствии настроек выводится предупреждение в консоль',
    function() {
      Utils.renderTodayDate();
      expect(console.warn).toHaveBeenCalled();
    }
  );
  it('При отсутствии в настройках родительского элемента выводится предупреждение в консоль',
    function() {
      let settings = {};

      Utils.renderTodayDate(settings);
      expect(console.warn).toHaveBeenCalled();
    }
  );
  it('Когда в настройках установлено свойство для отладки выводится сообщение в консоль',
    function() {
      let parentElement = document.createElement('div');
      let settings = {
        debug: true,
        parentElement
      };

      Utils.renderTodayDate(settings);
      expect(console.log).toHaveBeenCalled();
    }
  );
  it('В родительском элементе выводится текущая дата.', function() {
    let parentElement = document.createElement('div');
    let settings = {
      parentElement
    };
    let expectation = document.createTextNode(new Date().getFullYear())

    Utils.renderTodayDate(settings);
    expect(settings.parentElement.lastChild).toEqual(expectation);
  });
});