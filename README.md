# Tauri Nuxt Mobile 📱

[![Badge](https://img.shields.io/github/package-json/dependency-version/Rettend/tauri-nuxt-mobile/@tauri-apps/api?color=dea584&label=tauri)](https://beta.tauri.app/)
[![Badge](https://img.shields.io/github/package-json/dependency-version/Rettend/tauri-nuxt-mobile/dev/nuxt?color=00DC82&label=nuxt)](https://nuxt.com/)
[![Badge](https://img.shields.io/badge/UnoCSS-4D4D4D)](https://unocss.dev/)
[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

## 🚀 Install

> [!TIP]
> Install [ni](https://github.com/antfu/ni) and choose `pnpm`.
>
> ```bash
> npm i -g @antfu/ni
> ```

### Install `tauri` and `pnpm` globally

```bash
ni -g @tauri-apps/cli@next
```

```bash
npm install -g pnpm
```

If you skip this step, you will need to run the tauri scripts like this: `npx tauri dev` or `nr tauri dev`.

### Install dependencies

```bash
ni
```

## 🥏 Run

- dev (browser): `nr dev`

### Desktop

- dev: `tauri dev`
- build: `tauri build`

### Mobile

- initialize for android/ios: `tauri [android|ios] init` (only once)
- dev: `tauri [android|ios] dev`
- open in android studio/xcode: `tauri [android|ios] open`
- build: `tauri [android|ios] build`

## 🪨 Other

- Vue [Takeover mode](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode)

## 🖥️ [Desktop Version](https://github.com/Rettend/tauri-nuxt-desktop)
