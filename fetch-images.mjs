import { mkdir, writeFile, access } from 'node:fs/promises'

const BASE = 'https://annapauseiro.my.canva.site/_assets/media/'
const IMAGES = {
  'logo.png': 'a77dba2da7f350a5a6f66a19a87cb98a.png',
  'hero.png': 'e93ab3ffc9c1b8080ebe04dabc768013.png',
  'portrait.png': '8a1d88af6acebacc704301797f40a717.png',
  'about-porto.png': '34958d1c3cf2964990db491ac40b443d.png',
  'about-desert.jpg': 'a0ccaa4918f544a34b447cd1b02e9383.jpg',
  'about-snow.jpg': '5393717be72799823aa77e47952227e2.jpg',
  'about-dogs.jpg': '57984dba8a0c16331a5aea643aad4023.jpg',
  'portfolio-avatar.png': 'dd59f247afedf677865f795259998b72.png',
  'contact-photo.png': '0251d8be84c646cbbebf65cb03d879d9.png',
}

async function save(url, dest) {
  try { await access(dest); return } catch {}
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Image ${dest} failed: ${res.status}`)
  await writeFile(dest, Buffer.from(await res.arrayBuffer()))
  console.log('saved', dest)
}

await mkdir('public/images', { recursive: true })
for (const [name, id] of Object.entries(IMAGES)) {
  await save(BASE + id, `public/images/${name}`)
}

// Portfolio project slides, stored in github.com/annapauseiro/anna-pauseiro-site/slides
const SLIDES_BASE = 'https://raw.githubusercontent.com/annapauseiro/anna-pauseiro-site/main/slides/'
const SLIDES = { consolidation: 14, dwh: 6, analytics: 6, powerbi: 4, etf: 8 }

await mkdir('public/slides', { recursive: true })
for (const [name, count] of Object.entries(SLIDES)) {
  for (let i = 1; i <= count; i++) {
    const file = `${name}-${String(i).padStart(2, '0')}.webp`
    await save(SLIDES_BASE + file, `public/slides/${file}`)
  }
}

// Site photos stored in github.com/annapauseiro/anna-pauseiro-site/photos
const PHOTOS_BASE = 'https://raw.githubusercontent.com/annapauseiro/anna-pauseiro-site/main/photos/'
for (const file of ['avatar-anna.webp', 'contact-garden.webp']) {
  await save(PHOTOS_BASE + file, `public/images/${file}`)
}
