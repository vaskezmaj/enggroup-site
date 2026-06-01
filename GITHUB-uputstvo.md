# Push na GitHub — korak po korak

Repo: https://github.com/vaskezmaj/enggroup-site.git

---

## Korak 1 — Otvori Terminal
`Cmd + razmak`, ukucaj **Terminal**, Enter.

## Korak 2 — Uđi u folder sajta
```bash
cd ~/Documents/Claude/Projects/Webiste
```
Provera da si na pravom mestu (treba da vidiš `package.json`, `app`, `public`):
```bash
ls
```

## Korak 3 — Reci git-u ko si (radi se samo jednom na računaru)
```bash
git config --global user.email "aleksandar.vasic018@gmail.com"
git config --global user.name "Vaske"
```

## Korak 4 — Inicijalizuj git u folderu
```bash
git init
```

## Korak 5 — Dodaj sve fajlove
```bash
git add -A
```

## Korak 6 — Napravi commit
```bash
git commit -m "ENG Group LLC website"
```
✅ Ispis MORA da prikaže nešto kao `26 files changed`.
❌ Ako kaže `nothing to commit` — nisi u pravom folderu (vrati se na Korak 2).

## Korak 7 — Postavi granu na main
```bash
git branch -M main
```

## Korak 8 — Poveži sa GitHub repoom
```bash
git remote add origin https://github.com/vaskezmaj/enggroup-site.git
```
Ako javi `remote origin already exists`, pokreni umesto toga:
```bash
git remote set-url origin https://github.com/vaskezmaj/enggroup-site.git
```

## Korak 9 — Pushuj
```bash
git push -u origin main
```

### Kad traži login
- **Username:** `vaskezmaj`
- **Password:** ovde NE ide tvoja GitHub lozinka, nego **token** (`ghp_...`).
  - Token: GitHub → Settings → Developer settings → **Tokens (classic)** → Generate new token (classic) → čekiraj ceo **`repo`** → Generate → kopiraj.
- Ako se otvori browser prozor "Authorize" — samo potvrdi.

## Korak 10 — Provera
Otvori https://github.com/vaskezmaj/enggroup-site — treba da vidiš sve fajlove.

---

## Ako zapne

**`src refspec main does not match any`**
→ Commit nije napravljen. Vrati se na Korak 6 i proveri da ispis kaže "files changed".
Brza provera:
```bash
git log --oneline
```
Ako je prazno — nema commita. Ponovi Korak 5 i 6.

**`Permission denied (403)`**
→ Token nema `repo` ovlašćenje. Napravi nov classic token sa čekiranim `repo` (Korak 9).

**`Authentication failed`**
→ Pogrešan token ili istekao. Napravi nov i probaj `git push -u origin main` ponovo.

---

## Posle uspešnog push-a
Sledi povezivanje na Vercel i GoDaddy DNS — sve piše u `DEPLOY.md`.
Bezbednost: opozovi (Revoke) sve tokene koje si delio u chatu.
