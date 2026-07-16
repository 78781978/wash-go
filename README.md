# Wash & Go — strona myjni samochodowej

Premium strona internetowa dla ręcznej myjni samochodowej Wash & Go, zbudowana na Next.js (App Router), TypeScript, Tailwind CSS v4 i Framer Motion.

## Podstrony

- `/` — strona główna
- `/uslugi` — usługi
- `/cennik` — cennik
- `/oferta-dla-firm` — oferta dla firm i flot
- `/nasze-prace` — galeria realizacji
- `/o-nas` — o firmie
- `/kontakt` — kontakt i formularz
- `/polityka-prywatnosci` — polityka prywatności i cookies
- `/wymagane-zgody` — wymagane zgody

## Rozwój lokalny

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000).

## Konfiguracja treści

Dane firmowe (adres, telefon, godziny, ceny, usługi, treści marketingowe) znajdują się w jednym miejscu: `src/lib/site-config.ts`. To dane przykładowe — przed publikacją należy je zaktualizować na rzeczywiste dane klienta.

## Build produkcyjny

Strona jest budowana jako statyczny eksport (`output: "export"` w `next.config.ts`) i publikowana na GitHub Pages pod adresem:

**https://78781978.github.io/wash-go/**

Deployment uruchamia się automatycznie (GitHub Actions, `.github/workflows/deploy.yml`) po każdym push do tego brancha. Aby zbudować i podejrzeć statyczną wersję lokalnie:

```bash
npm run build
npx serve out
```

Ważne: ponieważ strona jest hostowana pod ścieżką `/wash-go/`, `basePath`/`assetPrefix` w `next.config.ts` muszą zgadzać się z nazwą repozytorium.
