# vscode-onec-theme

Русский | [English](README.en.md)

Набор цветовых тем для Visual Studio Code, созданный по мотивам цветового оформления в платформе 1С:Предприятие 8. Темы задают согласованную палитру для интерфейса редактора и подсветки кода и других форматов файлов.

Для отдельных языков и дополнительных возможностей подсветки могут понадобиться следующие расширения:

- [Language 1C (BSL)](https://marketplace.visualstudio.com/items?itemName=1c-syntax.language-1c-bsl) добавляет грамматики BSL и языка запросов. Также в редакторе подсвечиваются блоки кода `1c`, `bsl`, `os` и `sdbl` в Markdown-файлах.
- [BSL Language Server](https://github.com/1c-syntax/bsl-language-server) нужен для семантической подсветки BSL. По умолчанию в данном расширении она выключена, но может быть включена соответствующей настройкой visual studio code: `editor.semanticHighlighting.enabled`.
- [1C:Enterprise.Element Script](https://marketplace.visualstudio.com/items?itemName=1c-soft.1c-executor-plugin) или [vscode-xbslplugin](https://github.com/bia-technologies/vscode-xbslplugin) предоставляют грамматики для файлов `sbsl` и `xbsl`.
- [Turbo Gherkin support](https://github.com/ChernyakAI/vscode-turbogherkin-support) добавляет подсветку Gherkin-файлов `.feature` и блоков кода с меткой `feature` в Markdown-файлах. Также поддерживается подсветка для расширения [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete).

Также расширение позволяет улучшить внешний вид встроенного Markdown Preview в соответствии с выбранной темой и подсвечивать блоки кода в цветах редактора, включая код 1С, feature-файлов и других поддерживаемых форматов.

## Примеры

OneC Dark - тёмная тема оформления

[![Пример тёмной темы](images/screenshots/dark.png)](images/screenshots/dark.png)

OneC Midnight - альтернативная тёмная тема (ночная), больше подходит для работы при отсутствии внешнего освещения

[![Пример ночной темы](images/screenshots/midnight.png)](images/screenshots/midnight.png)

OneC Light - светлая тема оформления

[![Пример светлой темы](images/screenshots/light.png)](images/screenshots/light.png)

OneC Yellow - без неё набор был бы неполным.

[![Пример жёлтой темы](images/screenshots/yellow.png)](images/screenshots/yellow.png)

## Установка

1. Скачайте VSIX со [страницы релизов](https://github.com/ChernyakAI/vscode-onec-theme/releases). В панели «Расширения» выберите «Установить из VSIX…» и укажите скачанный файл.
2. В панели «Расширения» найдите `OneC Theme` в Marketplace и нажмите «Установить».
