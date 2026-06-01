# ENG Group LLC — Deploy na Vercel + GoDaddy DNS

Sajt je Next.js (App Router). Statične stranice: `/`, `/terms`, `/privacy`.

## 0. Lokalno (na tvom Macu)

```bash
cd "putanja/do/Webiste"
rm -rf node_modules .next        # obriši artefakte iz sandboxa (Linux binari)
npm install
npm run dev                      # http://localhost:3000 za pregled
npm run build                    # provera da build prolazi
```

## 1. Push na GitHub

```bash
git init
git add .
git commit -m "ENG Group LLC website"
git branch -M main
git remote add origin https://github.com/<tvoj-nalog>/enggroup-website.git
git push -u origin main
```

## 2. Deploy na Vercel

**Varijanta A — preko sajta (najlakše):**
1. Idi na vercel.com → New Project → Import Git Repository.
2. Izaberi repo. Framework se auto-detektuje kao **Next.js**.
3. Build Command `next build`, Output podrazumevano. Klikni **Deploy**.

**Varijanta B — preko CLI:**
```bash
npm i -g vercel
vercel            # prati upite, poveži projekat
vercel --prod     # produkcioni deploy
```

Nakon deploya dobićeš `*.vercel.app` URL za proveru.

## 3. Dodaj domen na Vercel

1. U Vercel projektu: **Settings → Domains**.
2. Dodaj `enggroup.online` i `www.enggroup.online`.
3. Vercel će prikazati tačne DNS vrednosti. Standardno su:

| Tip   | Host / Name | Vrednost                  |
|-------|-------------|---------------------------|
| A     | `@`         | `76.76.21.21`             |
| CNAME | `www`       | `cname.vercel-dns.com`    |

> Uvek koristi vrednosti koje Vercel prikaže — mogu se razlikovati.

## 4. Podesi DNS na GoDaddy

1. Uloguj se na GoDaddy → **My Products** → kod `enggroup.online` klikni **DNS** (Manage DNS).
2. **A zapis** za root:
   - Type: `A`, Name: `@`, Value: `76.76.21.21`, TTL: 1 hour.
   - Ako već postoji "Parked"/postojeći A zapis za `@`, izmeni ga (Edit), nemoj praviti duplikat.
3. **CNAME** za www:
   - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`, TTL: 1 hour.
4. Sačuvaj. Ukloni GoDaddy "Parking"/forwarding ako je aktivan da ne smeta.

## 5. Verifikacija

- Vratiti se na Vercel → Domains; status prelazi u **Valid Configuration** (DNS propagacija obično 10–60 min, ponekad do par sati).
- Vercel automatski izdaje **SSL (HTTPS)** sertifikat — ne treba ručno.
- Otvori `https://enggroup.online` i `https://www.enggroup.online`.

## Napomene
- Email/kontakt dugmad otvaraju `mailto:info@eu-standard.net`. Ako kasnije želiš formu ili Calendly link za "Schedule a Consultation", lako se ubacuje u `app/content.ts` i `app/page.tsx`.
- Sav tekst je u `app/content.ts` — izmene sadržaja se rade tamo, na jednom mestu.
- Logo, favicon i SEO slika su u `public/`.
