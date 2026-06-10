# 1of1 Web Queue – Language Translations

This repository contains the language files used for the **1of1 Servers Web Queue script**. We welcome the community to help translate the queue, tickets, applications, and Discord notification text into additional languages.

## How to Contribute

1. Use `eng.ts` as the **base template** for your translation.
2. Copy the file and rename it to your language code.  
   Example:
   - `es.ts` for Spanish
   - `fr.ts` for French
   - `de.ts` for German
   - `no.ts` for Norwegian
   - `tr.ts` for Turkish
   - `fr.ts` for French
3. Translate the values while **keeping the keys and any text inside {} exactly the same**.
4. Submit a **Pull Request** with the new language file.

**Additionally there is a new feature available within the web queue. Language settings can now be edited directly within the panel and the translation can be downloaded directly to submit for your pull request**

## Guidelines

- Do not change the keys or structure from `eng.ts`.
- Only translate the text values.
- Make sure formatting and placeholders remain intact, including placeholders like `{ticket_id}`, `{ticket_title}`, `{application_title}`, and `{position}`.
- Discord notification text lives under the `discord_notifications` section.

## Current Languages

- English (`eng.ts`)
- Spanish (`es.ts`)
- Norwegian (`no.ts`)
- Turkish (`tr.ts`)
- French (`fr.ts`)

## Contributing

If your community uses another language, feel free to contribute. Just follow the steps above and submit a pull request.

All contributions are appreciated and help make the **1of1 Servers Web Queue** accessible to more communities.
