# Subonita Foundation Multi-Page Site

## Run locally

```bash
npm install
npm run dev
```

## What changed in this version

- Homepage board block removed
- Dedicated leadership directory at `/board`
- Individual board profile pages at `/board/[slug]`
- Press reference integrated for Dr. Subodh Kumar Mallik
- Leadership images added as local placeholder portrait files in `/public/board`

## Replace board images with real photos

Swap any of these files with real portrait images using the same filenames:

- `/public/board/anit-mallik.svg`
- `/public/board/subodh-kumar-mallik.svg`
- `/public/board/heem-sunder-shakya.svg`
- `/public/board/mritunjaya-shrestha.svg`
- `/public/board/bhupendra-b-shakya.svg`
- `/public/board/deependra-b-pradhan.svg`
- `/public/board/rambalak-shah.svg`

You can replace the `.svg` files with `.jpg` or `.png` files if you also update the image paths in `lib/site-data.ts`.
