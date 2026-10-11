# Design system — Trường Đại học Kiểm sát

The complete supplied reference homepage was reviewed from its header through footer at desktop and mobile widths. Its visual direction informs the compact masthead, image-led hero, editorial news composition, dark research links, numbered program cards, and rounded photography panels. The implementation adapts those patterns to the university identity and source-backed content rather than copying reference-only facts or branding.

## Principles

- Keep the official university wordmark and authentic campus/news images.
- Use a calm, accessible institutional layout rather than a generic corporate landing page.
- Use a warm ivory canvas with white content panels, institutional navy as the structural color, red for key emphasis and actions, and restrained gold on dark surfaces.
- Make news readable as an editorial hierarchy and legal documents scannable as an identifier-first list.
- Reuse the system across homepage, information, program, news, document, admission, search, and contact templates.

## Tokens

Defined centrally in `assets/css/site.css`:

| Token | Value | Use |
|---|---|---|
| `--brand` | `#173F7A` | Primary institutional navy; links and primary buttons |
| `--brand-strong` | `#123562` | Hover/focus emphasis |
| `--brand-deep` | `#102E57` | Utility bar, footer, dark text surfaces |
| `--brand-soft` | `#E7EDF5` | Subtle blue surface |
| `--accent` | `#C91F2B` | Admissions action, heading rules, document IDs |
| `--accent-soft` | `#FCE8E8` | Document icon and alert backgrounds |
| `--gold` | `#D0AD69` | Restrained details on dark surfaces and the hero |
| `--paper` | `#F7F7F5` | Warm page canvas and page banner |
| `--surface` | `#FFFFFF` | Content panels and cards |
| `--ink` | `#172B4D` | Primary body text |
| `--muted` | `#536984` | Higher-contrast metadata and supporting text |
| `--line` | `#D9E0EA` | Card and control borders |
| `--radius-card` | `1.15rem` | Rounded content panels, cards, and quick links |
| `--radius-control` | `.6rem` | Buttons, form controls, and compact icons |
| `--shadow-panel` | `0 4px 16px rgb(23 43 77 / 7%)` | Soft elevation for white panels |
| `--shadow-hover` | `0 12px 28px rgb(23 43 77 / 13%)` | Elevated interactive hover state |

## Typography

- Body, headings, navigation, form controls, and metadata: `--font-sans` ("Be Vietnam Pro", Google Fonts, falling back to Segoe UI/Arial), 17px base and 1.65 line height.
- Hero title and numerals: `--font-serif` ("Noto Serif", falling back to Cambria/Times New Roman). Do not use Georgia: it renders stacked Vietnamese diacritics incorrectly (e.g. "viế´t").
- Section titles use `clamp(1.7rem, 2.7vw, 2.3rem)`; homepage/page titles scale fluidly.
- Metadata is muted, but key IDs and categories use institutional red. Vietnamese text uses UTF-8 and system-font fallback.
- Fonts load from Google Fonts with `display=swap`; the fallbacks keep the page readable offline.

## Spacing and grid

- Spacing tokens: 4, 8, 12, 16, 24, 32, 48, and 72px.
- Bootstrap 5 grid with a 1200px maximum container.
- Bootstrap breakpoints: 576px, 768px, 992px, and 1200px.
- Desktop article templates use a readable main column with a supporting side panel; tablet reduces columns; mobile stacks content.
- Validate reflow at 320px and above; the tested page widths had no horizontal document overflow.

## Components and behavior

- **Header/navigation:** compact white institutional masthead with the official wordmark, grouped menus aligned with the source site's institutional, training, news, research, unit, quality, and community categories; desktop search field; red admissions CTA. Dropdowns reveal on hover or keyboard focus at desktop breakpoints and remain tap/click operated on mobile. Mobile search expands accessibly and mobile navigation is an ARIA-synchronized toggle. Existing local routes remain in the grouped menus; source-only curriculum/outcomes categories link to the official site.
- **Hero:** authentic campus image in a tall, dark overlay hero with admissions actions and a translucent, rounded facts panel linked to the official 2026 admissions notice. The facts refer only to verified quota groups, subject combinations, and the admissions year.
- **Section heading:** compact kicker plus navy title and a vertical red rule; view-all link aligned opposite.
- **Homepage news:** place the source notice strip directly after the four-item quick-link row, then use an editorial lead-and-related-stories board without a separate admissions sidebar. The school-news board renders all 10 observed article titles (one lead plus nine compact entries) without truncating long titles. Separate industry and general/student panels retain all 5 industry titles, 5 general/student titles, and 4 admissions notices.
- **Legal documents:** show all 6 source-listed homepage documents, with full titles wrapping rather than clipping. Keep source identifiers visible and do not imply unverified downloads.
- **Programs:** source-style `CTĐT ĐẠI HỌC` and `CTĐT THẠC SĨ` tabs contain the four undergraduate and two postgraduate program titles; the doctorate link is included as a related study destination. Retain the official 2026 admissions summary and links to original curriculum/outcomes resources.
- **Research and practice:** display the source's three main professional/scientific information links in the dark research band; preserve the `Kiểm sát viên cần biết` and journal links as secondary actions in that same band.
- **Other news templates:** lead story with a large image; compact secondary editorial headlines, separated by fine rules; a contextual admissions card at the end of the rail. Do not synthesize publication dates or summaries where source metadata was unavailable.
- **Program detail/list templates:** sequentially numbered cards link to source-listed programs and retain a restrained card treatment; homepage program tabs use the source's undergraduate/postgraduate grouping.
- **Research:** high-contrast navy links band on the homepage and a matching dark link-list template for research categories.
- **Gallery:** rounded responsive photo grid uses authentic images attached to official news entries and links each image to its source article; it is not presented as a CMS-backed photo archive.
- **Homepage media:** `HÌNH ẢNH HOẠT ĐỘNG` presents the five observed source images and `VIDEO` presents five official-page YouTube videos, with the source `XEM THÊM` album link. Both categories use keyboard-accessible tabs; video iframes load lazily.
- **Homepage order:** compact masthead, tall image hero, four institutional quick links and update strip, school news, three-column dark research band, a combined industry/general-news and legal-document band, program tabs/admissions resources, then photo/video library and footer.
- **Document item:** pale-red document icon, red identifier, navy linked title, verification note, and compact action control. No link is presented as a verified file download when the source file was inaccessible.
- **Cards/panels:** white, subtle warm-gray border, approximately 18px radius and soft shadow; numbered program cards use a restrained serif ordinal, and hover lifts are short and restrained.
- **Breadcrumbs:** semantic labeled navigation on white surface.
- **Forms:** visible labels, native validation, 46px controls, visible focus states; contact uses disclosed `mailto:` handoff rather than implying a backend.
- **Alerts/states:** red-tinted source-verification notice, explicit empty/access states, visible error messaging.
- **Footer:** deep navy, official wordmark, verified contact details, and source `GIỚI THIỆU`, `TIN TỨC SỰ KIỆN`, and `KẾT NỐI NHÀ TRƯỜNG` groups. Put `THỐNG KÊ TRUY CẬP` in its own compact full-width row below the link/contact columns so it does not lengthen the connection column; collapse the four metrics to a two-column grid on small screens. Visitor counters are labeled as a snapshot from the source review, not live values.
- **Motion:** hero is an autoplaying crossfade slideshow of five authentic school photos (6s per slide, slow zoom, round prev/next arrows at the screen edges, a caption pill, swipe; no progress indicator; pauses on hover, keyboard focus, and hidden tabs). The hero title reveals word by word, the eyebrow types through "Đào tạo / Nghiên cứu khoa học / Bồi dưỡng nghiệp vụ kiểm sát", and the facts count up. "Mới cập nhật" is a continuously scrolling strip of article cards (thumbnail, category, title) that pauses on hover/focus. A top scroll-progress bar, a frosted header once scrolled, cursor spotlight on cards, and blur-in section reveals complete the layer. Each effect lives in a `use*` function in `site.js` that returns a cleanup, run on every route render. `prefers-reduced-motion` stops autoplay, typing, counting, scrolling, and reveal movement.
- **Image-led news panels:** industry and general/student news each use one source-matched featured photo with four thumbnail rows. The large image loads eagerly when the panel is rendered; related thumbnails load lazily. Image corners and panel surfaces use restrained rounding. Keep the source article link and headline adjacent to each image.
- **News typography refinement:** retain the 17px body base; featured headlines use 1.08rem, compact news headlines and legal-document titles use 1rem, and related metadata remains secondary.

## Palette safeguards

Use custom properties instead of one-off colors where possible. Keep text/background combinations high contrast; red is primarily an accent and button surface, never the only means of communicating state. Verify WCAG contrast and keyboard behavior with an accessibility audit before production launch.
