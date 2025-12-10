## Install

npm i

### Run

npm run dev

### Viewable at

http://localhost:3000/

### Run tests

npm run test

## Accessibility Decisions, Assumptions, and Improvements

I implemented the accordion using semantic <button> elements for headers with aria-expanded and aria-controls to indicate toggle state, and role="region" with aria-labelledby on panels to provide proper landmarks for screen readers.

I used the hidden attribute to hide collapsed content, ensuring both visual hiding and screen reader exclusion, while optionally supporting smooth animations via aria-hidden when content remains in the DOM.

A key assumption was that all content is static and doesn’t require focus management inside panels; the trade-off is that animated panels can’t rely solely on CSS transitions for hiding without additional a11y handling.

With more time, I would implement focus trapping and skip-link support for expanded panels, and potentially support nested accordions while maintaining full keyboard and screen reader compatibility. Possible more unit tests around other individual components as well like the AccordionItem.

# Accordion Component Documentation

## Overview

The `Accordion` and `AccordionItem` components provide a fully accessible, reusable accordion pattern for React applications. They are built to support **keyboard navigation**, **screen readers**, and **responsive layouts**, while remaining flexible for different UI designs.

---

## Components

### `Accordion`

**Purpose:** Container for multiple `AccordionItem`s.

**Props:**

| Prop        | Type        | Description                              | Default  |
| ----------- | ----------- | ---------------------------------------- | -------- |
| `children`  | `ReactNode` | One or more `<AccordionItem>` components | required |
| `className` | `string`    | Optional Tailwind or CSS class overrides | `""`     |

**Usage Example:**

```tsx
<Accordion className="w-full max-w-xl">
  <AccordionItem title="First Item">Content 1</AccordionItem>
  <AccordionItem title="Second Item">Content 2</AccordionItem>
</Accordion>
```

# AccordionItem

A fully **accessible React accordion item** supporting keyboard navigation, ARIA attributes, and customizable heading levels.

## Features

- Toggle content visibility with click or keyboard (Enter/Space)
- Screen reader friendly (ARIA roles and properties)
- Customizable header and content styles
- Supports any heading level (`h1`–`h6`)
- Smooth open/close transitions

---

## Props

| Prop Name          | Type                                           | Description                                    | Required |
| ------------------ | ---------------------------------------------- | ---------------------------------------------- | -------- |
| `title`            | `string`                                       | Text displayed in the accordion header         | ✅       |
| `children`         | `ReactNode`                                    | Content displayed inside the accordion panel   | ✅       |
| `headerClassName`  | `string`                                       | Optional CSS classes for the header button     | ❌       |
| `contentClassName` | `string`                                       | Optional CSS classes for the content container | ❌       |
| `headingLevel`     | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | HTML heading level for the accordion header    | ✅       |

---

## Usage

```tsx
import { AccordionItem } from "@/components/AccordionItem";

export default function Example() {
  return (
    <div className="max-w-md mx-auto">
      <AccordionItem title="Section 1" headingLevel="h2">
        <p>This is the content of section 1.</p>
      </AccordionItem>

      <AccordionItem title="Section 2" headingLevel="h2">
        <p>This is the content of section 2.</p>
      </AccordionItem>
    </div>
  );
}
```
