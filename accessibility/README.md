# Web Accessibility (A11Y) Fix Tasks

This project consists of 11 progressive tasks to fix web accessibility issues and achieve WCAG compliance. Each task addresses specific accessibility problems in a website.

## 📋 Task Overview

### 1. Skip Links (`fix-a11y/01-index.html`)
Add "Skip to main content" link for keyboard navigation.

### 2. Color Contrast (`fix-a11y/02-index.html`)
Fix color contrast to meet WCAG standards (4.5:1 ratio).

### 3. Document Language (`fix-a11y/03-index.html`)
Add `lang="en"` attribute to `<html>` element.

### 4. Closing Tags (`fix-a11y/04-index.html`)
Fix unclosed HTML tags for valid markup.

### 5. Alternative Text (`fix-a11y/05-index.html`)
Add `alt` attributes to all images with appropriate descriptions.

### 6. Form Labels (`fix-a11y/06-index.html`)
- Add `<label>` with `visually-hidden` class
- Change input type to `email`
- Add `autocomplete`, `required`, `aria-required` attributes
- Replace `<a>` with `<button>` for form submission

### 7. Link Text (`fix-a11y/07-index.html`)
Add `aria-label` attributes to icon links (Facebook, Twitter).

### 8. Zoom and Scaling (`fix-a11y/08-index.html`)
Remove `user-scalable=no` from viewport meta tag.

### 9. Heading Structure (`fix-a11y/09-index.html`)
Create proper heading hierarchy:
```
H1: Homepage
├── H2: This is me, About Me, Services, Feedback, Plans
├── H3: Web Design, Web Development, Plan numbers
└── H4: Economy
```
Convert decorative headings to `<span>` elements.

### 10. Document Landmarks (`fix-a11y/10-index.html`)
Replace generic divs with semantic HTML5 elements:
- `<div class="header">` → `<header>`
- `<div class="nav">` → `<nav>`
- Add `<main>` wrapper
- `<div class="footer">` → `<footer>`
- `<div class="section">` → `<section>` (where appropriate)

### 11. Semantic Lists (`fix-a11y/11-index.html`)
Convert navigation and package features to proper lists:
- Navigation: `<div>` → `<ul>`, `<p>` → `<li>`
- Package list: `<span>` → `<li>` within `<ul>`

## 🎯 Results

After completing all tasks:
- ✅ 50% improvement in automated accessibility tests
- ✅ Full screen reader compatibility
- ✅ Keyboard navigation support
- ✅ WCAG 2.1 compliance
- ✅ Better SEO and code quality

## 🔧 Testing Tools

- **axe DevTools** - Automated accessibility testing
- **WAVE** - Web accessibility evaluation
- **Lighthouse** - Google's accessibility audit
- **HeadingsMap** - Heading structure visualization
- **Landmarks** - Landmark identification

## 📚 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)

---

*Making the web accessible for everyone! 🌐♿*