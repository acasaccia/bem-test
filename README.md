# An introduction to BEM naming convention

pokemon-network-care a tiny application to test the BEM naming convention

---

#### What's BEM

*Technology for creating web applications*

- ~~CSSO (CSS Optimizer) is a CSS minimizer unlike others.~~
- ~~SVGO (SVG Optimizer) is a NodeJS-based tool for optimizing SVG vector graphics files.~~
- ~~borschik is a extendable builder for text-based file formats. It's main purpose is the assembly of static files for web projects (CSS, JS, etc.).~~
- ~~XJST is a DSL for universal data transformations with compiler written on top of the node.js and ometajs and output code working in any browser or on server-side.~~
- Naming convention — BEM entities naming rules.

---

#### Block

It represents a reusable piece of UI.
Rules: it can contain `[a-z]` and the `-` character.

    .block ✔
    .my-awesome-block ✔
    .camelCaseBlock ✘
    .another_block ✘

---

#### Element

It is a piece of UI that depends on another one (makes no sense without it).

Rules: it is delimited by a double underscore `__`.

    .block__element ✔
    .login-form__submit ✔
    .map__marker ✔

---

#### Modifier

It describes a state of a Block or an Element.

Rules: it is delimited by a single underscore `_`.

Boolean modifiers:

    .block_selected ✔
    .menu__item_hidden ✔

Key-value type modifiers:

    .list_theme_horizontal ✔
    .message_style_important ✔
    .message_style_muted ✔

---

#### Still unsure what a Block is?

Negative definition:

    If (it's an attribute/state of an entity)
      Then it's a Modifier
    Else If (it a piece of UI that depends on another)
    Then it's an Element
    Else
      It's a good candidate for a Block
      It should be implemented as a reusable piece of UI

---

#### Nested blocks? ✔

---

#### Nested elements? ✘

Elements cannot be swapped around, removed or added without modifying the existing code.

---

#### Tag selectors? ✘

Avoid specifity problems

    <button class="submit">
    button.submit ✘
    /* ... */
    .submit_active ! /* doesn't work because of specifity! */

---

#### Modifiers ✔

Always include the default block name in the class

\+ CSS rules reuse<br>
\+ helps search

    <div class="menu menu_theme_morning-forest">...</div> ✔

---

#### Global modifiers ✘

Do not apply modifiers to a parent class!
Modifiers in BEM are thought to be applied only to the element they directly affect.

    <body class="app__theme_morning-forest">
      <div class="menu">...</div>
      <div class="message">...</div>
    </body>

    .app__theme_morning-forest .menu ✘
    .app__theme_morning-forest .message ✘

    <body>
      <div class="menu menu_theme_morning-forest">...</div>
      <div class="message message_theme_morning-forest">...</div>
    </body>

    .menu ✔
    .message ✔
    .menu_theme_morning-forest ✔
    .message_theme_morning-forest ✔

\+ avoids specifity problems<br>
\+ it's faster<br>
\- it's verbose
