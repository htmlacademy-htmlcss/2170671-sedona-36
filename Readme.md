# Личный проект «Седона»

[![Project check][check-image]][check-url]

* Студент: [Никита Зубалей](https://up.htmlacademy.ru/htmlcss/36/user/2170671).
* Наставник: [Arthur Litovko](https://github.com/baileys-li), ранее [Сергей Артёмов](https://htmlacademy.ru/profile/firefoxic).

---

_Не удаляйте файлы настроек проекта:_

* `.editorconfig`,
* `.gitattributes`,
* `.gitignore`,
* `.stylelintrc`,
* `gulpfile.js`,
* `package-lock.json`,
* `package.json`,
* `Contributing.md`,
* `Readme.md`.

---

## Памятка

### 1. Зарегистрируйтесь на Гитхабе

Если у вас ещё нет аккаунта на [github.com](https://github.com/join), скорее зарегистрируйтесь.

### 2. Создайте форк

[Откройте мастер-репозиторий](https://github.com/htmlacademy-htmlcss/2170671-sedona-36) и нажмите кнопку «Fork» в правом верхнем углу. Репозиторий из Академии скопируется в ваш аккаунт.

<img width="769" alt="" src="https://user-images.githubusercontent.com/10909/29037949-67a635d6-7bae-11e7-9f2f-1a48fde231b9.jpg">

Получится вот так:

<img width="769" alt="" src="https://user-images.githubusercontent.com/10909/29037953-6a8a7384-7bae-11e7-83ac-59603b1d696c.jpg">

### 3. Клонируйте репозиторий на свой компьютер

Будьте внимательны: нужно клонировать свой репозиторий (форк), а не репозиторий Академии. Нажмите кнопку «Clone or download», а затем «Open in Desktop», чтобы клонировать репозиторий через программу [GitHub Desktop](https://desktop.github.com):

<img width="769" alt="" src="https://user-images.githubusercontent.com/10909/29037955-6c20c16c-7bae-11e7-9e1a-c52010042976.jpg">

Программа клонирует репозиторий на ваш компьютер и подготовит всё необходимое для старта работы.

### 4. Установите зависимости проекта

В локальном репозитории уже можно писать разметку страниц, стили и создавать прочие файлы. Но разрабатывать проект будет удобнее с дополнительными инструментами (зависимостями). А для этого их установить.

#### 4.1. Терминал

Для установки зависимостей понадобится терминал. В macOS и Linux он уже есть, а в Windows лучше установить _git-bash_, который идёт в комплекте с самим [Git](https://git-scm.com/download/windows).

#### 4.2. Node.js

Зависимости работают в среде _node.js_, которую тоже нужно установить, но лучше не с помощью установщика с официального сайта, а через менеджер версий ноды — _nvm_: для [macOS и Linux](https://github.com/nvm-sh/nvm#install--update-script) и для [Windows](https://github.com/coreybutler/nvm-windows/releases).

После установки _nvm_ в macOS и Linux достаточно выполнить в терминале:

```bash
nvm install --lts
```

И перезапустить терминал.

В Windows чуть сложнее. Нужно выполнить (без двойного дефиса):

```bash
nvm install lts
```

И запомнить номер установившейся версии ноды. Затем закрыть терминал _git-bash_. Снова его запустить, но уже от имени администратора, и выполнить (версию подставьте ту, что установилась):

```bash
nvm use 18.12.1
```

Закрыть небезопасный терминал.

#### 4.3. Зависимости

Теперь, когда нам стал доступен менеджер пакетов ноды — _npm_ (не путать с _nvm_!), наконец можем установить сами зависимости. Для этого в терминале, находясь в директории проекта, выполните (на предупреждения во время установки можно не обращать внимание):

```bash
npm ci
```

После установки зависимостей, можно запускать локальный сервер разработки:

```bash
npm start
```

При этом некоторая рутинная обработка стилей будет производиться автоматически. А открывшаяся в брауезере страница будет обновляться при обновлении файлов в проекте.

### 5. Начинайте обучение!

---

<a href="https://htmlacademy.ru/intensive/htmlcss"><img align="left" width="50" height="50" alt="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/htmlcss/logo-for-github-2.png"></a>

Репозиторий создан для обучения на профессиональном онлайн‑курсе «[HTML и CSS. Профессиональная вёрстка сайтов](https://htmlacademy.ru/intensive/htmlcss)» от [HTML Academy](https://htmlacademy.ru).

[check-image]: https://github.com/htmlacademy-htmlcss/2170671-sedona-36/workflows/Project%20check/badge.svg?branch=master
[check-url]: https://github.com/htmlacademy-htmlcss/2170671-sedona-36/actions
