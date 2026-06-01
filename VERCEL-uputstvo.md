# Deploy na Vercel — korak po korak

Kod je već na GitHub-u: https://github.com/vaskezmaj/enggroup-site
Cilj: sajt živ na internetu, povezan sa domenom `enggroup.online`.

---

## DEO 1 — Napravi nalog i poveži GitHub

### Korak 1
Otvori **https://vercel.com** → klikni **Sign Up**.

### Korak 2
Izaberi **Continue with GitHub** i uloguj se svojim GitHub nalogom (`vaskezmaj`).
Vercel će tražiti dozvolu da pristupi tvojim repozitorijumima — potvrdi (**Authorize**).

> Izaberi besplatni **Hobby** plan kad pita.

---

## DEO 2 — Importuj projekat

### Korak 3
Na Vercel dashboardu klikni **Add New… → Project**.

### Korak 4
U listi repozitorijuma nađi **`enggroup-site`** i klikni **Import**.
Ako ga ne vidiš → **Adjust GitHub App Permissions** → dodaj pristup tom repou.

### Korak 5
Na ekranu za podešavanje **ništa ne diraš**:
- Framework Preset: **Next.js** (sam prepozna)
- Build Command, Output, Install — podrazumevano

Klikni **Deploy**.

### Korak 6
Sačekaj ~1-2 minuta. Kad vidiš čestitku i screenshot sajta — uspelo je.
Klikni **Visit** ili **Continue to Dashboard**.
Dobićeš privremeni URL tipa `enggroup-site.vercel.app` — otvori ga i proveri sajt.

---

## DEO 3 — Poveži domen enggroup.online

### Korak 7
U projektu na Vercelu: **Settings** (gore) → **Domains** (levo).

### Korak 8
U polje upiši **`enggroup.online`** → **Add**.
Kad pita, izaberi opciju koja dodaje i `www.enggroup.online` (preusmerenje na glavni).

### Korak 9
Vercel će prikazati DNS vrednosti koje treba uneti na GoDaddy. Standardno:

| Tip   | Name / Host | Value (vrednost)        |
|-------|-------------|-------------------------|
| A     | `@`         | `76.76.21.21`           |
| CNAME | `www`       | `cname.vercel-dns.com`  |

⚠️ Uvek koristi vrednosti koje **Vercel prikaže tebi** — mogu se razlikovati. Ostavi tu stranicu otvorenu.

---

## DEO 4 — Unesi DNS na GoDaddy

### Korak 10
Uloguj se na **godaddy.com** → **My Products** → kod `enggroup.online` klikni **DNS** (Manage DNS).

### Korak 11 — A zapis (glavni domen)
Nađi/dodaj zapis:
- Type: **A**
- Name: **@**
- Value: **76.76.21.21**
- TTL: 1 Hour

Ako već postoji A zapis za `@` (npr. GoDaddy "Parked") → klikni **Edit** i izmeni vrednost, NEMOJ praviti drugi.

### Korak 12 — CNAME zapis (www)
Dodaj:
- Type: **CNAME**
- Name: **www**
- Value: **cname.vercel-dns.com**
- TTL: 1 Hour

### Korak 13
Sačuvaj (**Save**). Ako GoDaddy ima uključen "Forwarding/Parking" na domenu — isključi ga da ne smeta.

---

## DEO 5 — Sačekaj i proveri

### Korak 14
Vrati se na Vercel → Domains. Status će preći u **Valid Configuration** kad DNS propagira.
DNS obično propagira za 10-60 min (ponekad do par sati).

### Korak 15
Vercel **automatski** izdaje HTTPS (SSL) sertifikat — ne radiš ništa.
Kad bude spremno, otvori **https://enggroup.online** i **https://www.enggroup.online**.

---

## Bonus: automatski redeploy
Od sada, svaki put kad pushuješ izmenu na GitHub (`git push`), Vercel **sam** ponovo build-uje i objavi sajt. Ne radiš ništa ručno.

## Ako zapne
- **Domen "Invalid Configuration" duže od par sati** → proveri da su A i CNAME tačno uneti na GoDaddy (bez dupliranih zapisa).
- **Sajt radi na .vercel.app ali ne na domenu** → DNS još propagira, sačekaj; ili je stari A zapis ostao na GoDaddy.
- **Build failed na Vercelu** → otvori **Deployments → Logs**, pošalji mi tekst greške.
