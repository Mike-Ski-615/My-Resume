# Resume Site Template

Personal resume and project site template built with React Router.

## Quick Start

```bash
bun install
bun run dev
```

For a production build:

```bash
bun run build
bun run start
```

## Files You Usually Customize

- `app/site.config.ts`
- `app/types.ts`
- `app/content/en.ts`
- `app/content/zh.ts`
- `public/images/avatar/user.webp`
- `public/documents/resume.md`
- `public/markdown/*.md`

## Template Defaults

- GitHub activity ships as a built-in mock section and is visible by default.
- Newsletter ships as a built-in mock section and is visible by default.
- Booking, email, socials, and visitor count are hidden until you add them in `app/site.config.ts`.

## Minimal Customization Flow

1. Update `app/site.config.ts` with your default language, resume file, contact email, socials, and optional links.
2. Replace `public/images/avatar/user.webp` with your own avatar.
3. Replace `public/documents/resume.md` with your resume.
4. Update `app/content/en.ts` and `app/content/zh.ts` with your home-section content, UI copy, and project data.
5. Update matching files in `public/markdown/`.

## Notes

- Project detail routes and prerender paths are derived from the project data automatically.
- To add a project, update the project data and matching assets/markdown files. No slug constant needs to be edited.
