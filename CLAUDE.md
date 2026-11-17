# Karyera Mentoru

## Layihə haqqında
"Karyera Mentoru" — gənclərə və karyerasını dəyişmək istəyənlərə peşə seçimi,
CV hazırlığı və müsahibəyə hazırlıq üzrə mentorluq təklif edən bir səhifəlik saytdır.

- Dil: **Azərbaycan dili** (bütün mətnlər, düymələr, mesajlar)
- Texnologiya: sadə **HTML + CSS + JavaScript** (framework yoxdur, build addımı yoxdur)
- Sayt `index.html` faylını brauzerdə açmaqla işləməlidir

## Fayl strukturu
```
karyera-mentoru/
├── CLAUDE.md          ← bu fayl
├── index.html         ← bütün səhifə (HTML)
├── css/style.css      ← bütün dizayn (CSS)
├── js/script.js       ← bütün interaktivlik (JavaScript)
└── assets/
    ├── logo.svg       ← loqo
    ├── favicon.png    ← brauzer tabındakı ikon
    └── images/        ← illüstrasiyalar, şəkillər
```

Qaydalar:
- Yeni CSS faylı yaratma — hər şey `css/style.css`-də.
- Yeni JS faylı yaratma — hər şey `js/script.js`-də.
- Şəkillər yalnız `assets/images/` qovluğuna; fayl adları kiçik hərflə, latınca, tire ilə (`mentor-sekli.jpg`).

## Dizayn qaydaları

### Rənglər (CSS dəyişənləri `:root`-da)
| Dəyişən            | Dəyər     | İstifadə                     |
|--------------------|-----------|------------------------------|
| `--color-primary`  | `#2563eb` | əsas düymələr, linklər       |
| `--color-primary-dark` | `#1d4ed8` | hover vəziyyəti          |
| `--color-accent`   | `#f59e0b` | vurğu, nişanlar              |
| `--color-text`     | `#1f2937` | əsas mətn                    |
| `--color-muted`    | `#6b7280` | köməkçi mətn                 |
| `--color-bg`       | `#ffffff` | fon                          |
| `--color-bg-soft`  | `#f3f6fb` | bölmə fonları                |

Rəngləri birbaşa yazma — həmişə `var(--...)` istifadə et.

### Tipoqrafiya
- Şrift: `Inter` (Google Fonts), ehtiyat: `system-ui, sans-serif`
- Başlıqlar: `h1` 2.75rem, `h2` 2rem, `h3` 1.25rem; qalınlıq 700
- Əsas mətn: 1rem, sətir hündürlüyü 1.6

### Ölçülər və boşluqlar
- Boşluqlar 8px addımla: `--space-1` (8px) … `--space-8` (64px)
- Künc radiusu: `--radius` (12px), düymələr üçün `--radius-pill` (999px)
- Maksimum məzmun eni: `--container` (1120px)

### Responsiv
- Mobil-first yaz. Breakpoint-lər: `768px` (planşet), `1024px` (masaüstü)
- Mobil versiyada menyu "hamburger" düyməsi ilə açılır

### Əlçatanlıq
- Hər şəkildə mənalı `alt` mətni
- Düymələr üçün `<button>`, linklər üçün `<a>`
- Rəng kontrastı ən azı WCAG AA
- Klaviatura ilə naviqasiya işləməlidir (`:focus-visible` stili var)

## Kod üslubu
- 2 boşluqlu girinti
- CSS sinif adları: kiçik hərf, tire ilə (`.hero-title`, `.card-list`)
- JS: `const`/`let`, `var` yox; funksiyalar kiçik və adları aydın
- Şərhlər Azərbaycan dilində ola bilər
