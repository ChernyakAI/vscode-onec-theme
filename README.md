# vscode-onec-theme

Набор тем цветового оформления (приложение + раскраска кода) для Visual Studio Code. Может подойти в случае, если вы:
* работаете только в стеке 1С или около него
* используете отдельные профили с настроенным окружением в vscode под 1С
> _Подсветка синтаксиса языков программирования общего назначения не гарантируется._

Расширения, необходимые для работы подсветки синтаксиса:
* [vsc-language-1c-bsl](https://marketplace.visualstudio.com/items?itemName=1c-syntax.language-1c-bsl) - добавляет подсветку в файлах `*.bsl` и `*.os`: встроенного языка 1С:Предприятие 8 и [OneScript](http://oscript.io/), а также языка запросов 1С:Предприятие 8.
> _При использовании тем оформления совместно с bsl-language-server версии 0.25.х и старше рекомендуется отключать настройку `editor.semanticTokenColorCustomizations` - чтобы частично не потерять ту расцветку кода, которая реализуется текущим набором тем._ 
* [1C:Enterprise.Element Script](https://marketplace.visualstudio.com/items?itemName=1c-soft.1c-executor-plugin) и [vscode-xbslplugin](https://github.com/bia-technologies/vscode-xbslplugin) - Подсветка синтаксиса в файлах `sbsl` и `xbsl`
 - [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete) - Подсветка синтаксиса в файлах `feature`

## Примеры

OneC Dark - тёмная тема оформления

![Пример тёмной темы](./images/screenshots/dark.png)

OneC Midnight - альтернативная тёмная тема (ночная), больше подходит для работы при отсутствии внешнего освещения

![Пример ночной темы](./images/screenshots/midnight.png)

OneC Light - светлая тема оформления

![Пример светлой темы](./images/screenshots/light.png)

OneC Yellow - без неё набор был бы неполным.

![Пример жёлтой темы](./images/screenshots/yellow.png)



## Установка

### 1. Вручную из файла расширения

1. Скачайте расширение со страницы [релизов](https://github.com/ChernyakAI/vscode-onec-theme/releases).
2. В Visual Studio Code нажмите на значок "Расширения" (Extensions) в левой части окна
3. В открывшейся панели расширений в верхней части нажмите на "..." и выберите из выпадающего списка "Установка из VSIX(Install from VSIX)
4. После установки перейдите Файл -> Настройки -> Тема -> Цветовая тема (File -> Preferences -> Theme -> Color Theme)
В появившемся меню выберите необходимый вариант.

### 2. Из магазина приложений

1. В Visual Studio Code перейдите на вкладку "Расширения"
2. В окне поиска введите "OneC Theme"
3. Установите расширение
4. Выберите необходимый вариант
