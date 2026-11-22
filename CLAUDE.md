@AGENTS.md

# NoteHub (Next.js) — правила проєкту

Продовження NoteHub з 6-го ДЗ (`../06-notehub-nextjs`): маршрутизація (parallel, catch-all, intercepting routes).

## Структура

- Компоненти, не прив'язані безпосередньо до маршруту та його частин, лежать у `components/`.
  Кожен — у власній папці з назвою компонента:
  - `components/Header/Header.tsx`
  - `components/Header/Header.module.css`
- Загальні типи та інтерфейси — у `types/note.ts`.
- Функції роботи з API — у `lib/api/` окремими модулями.

## Технології

- HTTP-запити — `axios`.
- Стан запитів у CSR-компонентах — `TanStack Query` (React Query).
- Усі компоненти типізовані (TypeScript).
- Стилізація — CSS Modules (`*.module.css`).
- Код відформатований Prettier.
- Підтримка SSR та CSR відповідно до завдання.
