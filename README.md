# React Workshop

## Links

- Create React App: https://create-react-app.dev/
- Next.js (z.B. für SSR): https://nextjs.org/
- Zentrales Statemanagement: https://redux.js.org/ oder https://mobx.js.org/README.html
- React Dev Tools: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=de
- Redux async Middleware:
  - Thunk (Promises)
  - Saga (Generators)
  - Redux Observable (RxJS)
- Blog By Dan Abramov: https://overreacted.io/
- Blog By Kent C Dodds: https://kentcdodds.com/blog/
- Immutabilty Libraries
  - Immutability Helper: https://github.com/kolodny/immutability-helper
  - Immer.js: https://immerjs.github.io/immer/docs/introduction
  - Immutable.js: https://immutable-js.github.io/immutable-js/
- SCSS / SASS: https://sass-lang.com/
- Styled Components: https://styled-components.com/
- Material Components: https://material-ui.com/
- Form handling:
  - Formik: https://formik.org/
  - Redux-Form: https://github.com/redux-form/redux-form
- Routing: https://reactrouter.com/

## Filenaming:

1. PascalCase: TodoListItem.tsx (React Standard)
1. kebab-case: todo-list-item.tsx (Fix für Caseinsensitive Dateisysteme)
1. Typ angeben: TodoListItem.component.tsx

## Class vs. Function Components

- Kein this in Funktionskomponenten
- Möglichkeit von Statefragmentierung in FCs
- Möglichkeit mehrere Lifecyle-Funktionen in FCs

## Backend

1. npm install json-server
2. Datei data.json im Wurzelverzeichnis erstellen
3. package.json > scripts > "backend": "json-server -p 3001 -w data.json"
4. auf der Kommandozeile im Verzeichnis, in dem die package.json liegt: npm run backend

## Styling

1. Inline Styles mit dem style-Attribut
2. CSS Imports (import einer CSS-Datei) - meistens unter Verwendung von CSS Klassen
3. SCSS (+ Installation von node-sass) - genauso wie CSS Importe
4. css-Modules (<Componentenname>.module.css) => namespaced Klassen
5. Externe Bibliotheken wie styled-components
