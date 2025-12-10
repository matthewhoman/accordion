### Install

npm i

### Run

npm run dev

### Viewable at

http://localhost:3000/

### Run tests

npm run test

### Prettier

npm run format

### Accessibility Decisions, Assumptions, and Improvements

I implemented the accordion using semantic <button> elements for headers with aria-expanded and aria-controls to indicate toggle state, and role="region" with aria-labelledby on panels to provide proper landmarks for screen readers.

I used the hidden attribute to hide collapsed content, ensuring both visual hiding and screen reader exclusion, while optionally supporting smooth animations via aria-hidden when content remains in the DOM.

A key assumption was that all content is static and doesn’t require focus management inside panels; the trade-off is that animated panels can’t rely solely on CSS transitions for hiding without additional a11y handling.

With more time, I would implement focus trapping and skip-link support for expanded panels, and potentially support nested accordions while maintaining full keyboard and screen reader compatibility.
