# Website audit and redesign specification

## Audit scope and evidence

- Audited site: <https://kiemsat.edu.vn/>
- Audit date: 9 October 2026.
- The supplied workspace initially contained no project source, CMS integration, build setup, or local asset library. This redesign remains a separate static prototype and does not replace or integrate with the live site's CMS.
- Reviewed the live homepage in a browser at desktop and narrow-screen widths, its navigation/content/footer, homepage-linked images and destinations, `robots.txt`, `sitemap.xml`, and representative interior routes.
- `robots.txt` and both `/sitemap.xml` and `/sitemap_index.xml` returned branded DKS pages rather than crawl directives or a sitemap. Some source routes initially appeared as a generic shell, but client-side navigation from the current source site exposed the 2026 university admissions listing and official notice, the 2026 quota PDF, the curriculum list and embedded Law curriculum PDF, and the learning-outcomes list. Not every article body is available as readable text: the 2018 Law learning-outcomes page, for example, exposed a title but no body or embedded document. A 200 response alone does not prove a page's content or file is available.
- The homepage link extraction returned 66 distinct non-home internal paths in the final snapshot. Four further paths appeared in an earlier, partially populated homepage extraction and are retained in the new route registry. The inventory below records the union of observed routes: 70 non-home routes, plus `/`. A few home links point outside the site or are non-navigation controls and are noted separately.

## Findings

### Existing information architecture and content observed

The current homepage exposes a compressed utility row (login, English, search), a blue brand header with a compact menu, a promotional slideshow, quick-link tiles, a news ticker, school and sector news, admission messaging, training programs, research/practice links, activity albums/video, legal documents, and footer contact information. Its navigation labels include Giới thiệu, Tin tức – Sự kiện, Đào tạo đại học, Đào tạo sau đại học, Đào tạo – Bồi dưỡng nghiệp vụ kiểm sát, Nghiên cứu khoa học, Đơn vị trực thuộc, Đảm bảo chất lượng giáo dục, Tin tuyển sinh, Công tác Đảng, Học viên – Sinh viên, Phân hiệu ĐHKS, and Cựu sinh viên. The prototype consolidates these into grouped menus without dropping the existing local destination routes; verified official curriculum/outcomes categories remain direct source links.

The live desktop menu's nested items were visible in its client-rendered navigation. The local header was therefore updated to expose its grouped children on pointer hover and keyboard focus on desktop while retaining Bootstrap click/tap behavior on smaller screens. The login utility link points to the official `/login` destination; the original language control was not recreated because the source supplied no usable English destination or translated local content.

The footer provided these verified contact details, reused in the prototype:

- Số 59, ngõ 230, đường Ỷ La, phường Dương Nội, thành phố Hà Nội.
- Telephone: 0243.358.0467; fax: 0243.358.0476.
- Email: phongdaotao.dhkshn@gmail.com.
- Admissions code displayed on the homepage: DKS; the visible homepage showed 2026 admissions material.

### Presentation and usability issues observed

- The existing site uses a recognizable bright institutional blue and the official wordmark, but the homepage combines a narrow utility strip, a menu toggle, icon-font labels, a large promotional carousel, dense tickers, and many distinct homepage modules without a consistent visual rhythm.
- In the desktop capture, the carousel title/content was clipped at the left edge. Some carousel images used the alternative text “images not found,” indicating missing or fallback content even though an image response was present.
- The first-fold hierarchy emphasizes a campaign slide rather than a clear institutional introduction or primary admissions action.
- The narrow-screen capture had no measured document-width excess, but it preserves a dense, icon-heavy structure and did not establish that interior page templates, menus, forms, or tables work at small breakpoints.
- The retrieved accessibility tree exposed a navigation toggle, but a complete keyboard, screen-reader, contrast, or form audit was not possible on inaccessible interior pages. The redesign therefore supplies semantic landmarks, skip navigation, explicit labels, focus indicators, reduced-motion handling, and keyboard-operable Bootstrap navigation.
- The original homepage had no inspectable sitemap and the fetched interior route provided no article body, page-specific metadata, document downloads, or working breadcrumbs beyond its shell. Link targets are not proof that the corresponding destinations currently work.
- The homepage redesign preserves the source's activity-news composition: a lead story and compact related stories, followed by research/practice links, industry news, general/student news, legal documents, programs, and campus media. The admissions sidebar was removed to match the reference's section structure; the official admissions facts and all observed admissions headlines remain in the hero/program area and general-news list. No unavailable dates or article descriptions were invented.
- Follow-up full-page review captured the lower homepage and footer. The local page now includes all ten school-news titles, five industry-news titles, four admissions notices, five general/student headlines, six legal-document titles, four undergraduate and two postgraduate program cards, professional/science/article links, five source-linked activity photos and five videos, and the source introduction/news/contact/statistics footer groups. Long headlines are not clamped. Visitor counts are labeled as the dated source snapshot observed on 9 October 2026.
- The live homepage showed some page content/metadata; content from inaccessible paths was not recreated as factual prose, staff biographies, dates, admissions rules, research claims, or downloadable files.
- The official 2026 admissions notice states anticipated quotas of 200 for Law (Procuracy specialization; 100 North and 100 South), 950 for Law, 250 for Economic Law, and 200 for English Language. The redesigned local admissions page uses these as **anticipated** figures, summarizes the published admission methods, and links to the official notice and quota PDF. Detailed eligibility, schedules, and application documents remain linked to the original documents rather than inferred.
- The official “Chương trình” category lists issued curriculum documents; the Law curriculum detail page embeds a PDF hosted by the university's CMS. The “Chuẩn đầu ra” category lists outcomes by program, but the accessible 2018 page did not expose its content. The prototype links to these official categories rather than inventing course-level syllabi or outcomes.
- Follow-up navigation discovered seven additional source URLs beyond the original homepage-link inventory; they are documented in [website-inventory.md](./website-inventory.md). Their official category/document links are exposed in the local admissions and program views rather than represented as additional local route records.

### Reference homepage design review

The supplied reference homepage (`uni-verse-eight-delta.vercel.app`) was reviewed from its institutional header through the footer, including the mobile layout. Its visual system uses a compact white masthead, a dark image-led hero with high-contrast gold/red details, rounded metric and quick-link panels, an editorial news lead, research and general-news groupings, legal-document links, study-program tabs, campus media, and a multi-column footer. Its content order gives an academic overview before the deeper institutional resources.

The local redesign now follows the reference's homepage section order and proportions closely, using the university's own wordmark, source imagery, page modules, and verified admissions information. It does not import reference-only anniversary claims, statistics, text, or branded assets. Interior routes retain the existing source-derived templates and content-coverage limitations documented here.

### Reusable templates inferred from the route structure

1. Homepage and institutional landing page.
2. Standard institutional article (history, mission, organization, public disclosure).
3. Academic unit/faculty profile.
4. Program detail and program index.
5. News category/list and news article detail.
6. Admissions notices and admissions landing page.
7. Legal-document index and document detail.
8. Research/practice information index.
9. Student/alumni and image-album landing pages.
10. Search results, contact, and login/access state.

## URL inventory

Every item below is a route observed on the live homepage. Prefix each path with `https://kiemsat.edu.vn`. The 66 stable paths were grouped by the route prefixes returned by the final extraction; four paths marked **also observed** were in an earlier homepage link snapshot.

### Homepage

- `/`

### Login and specialist information (4 stable paths)

- `/login`
- `/thong-tin-nghiep-vu`
- `/thong-tin-khoa-hoc`
- `/ksv-can-biet`

### Faculties, offices, and centers (14 stable paths)

- `/phong-ban/trung-tam-dam-bao-chat-luong-dao-tao.html`
- `/phong-ban/trung-tam-thong-tin-thu-vien.html`
- `/blog/trung-tam-tin-hoc.html`
- `/phong-ban/phong-to-chuc-hanh-chinh.html`
- `/phong-ban/phong-quan-ly-khoa-hoc-va-hop-tac-quoc-te.html`
- `/phong-ban/phong-tai-vu.html`
- `/phong-ban/phong-dao-tao-va-quan-ly-sinh-vien.html`
- `/phong-ban/khoa-phap-luat-kinh-te-quoc-te.html`
- `/phong-ban/khoa-ly-luan-chinh-tri-041904.html`
- `/phong-ban/khoa-phap-luat-dan-su-va-kiem-sat-dan-su.html`
- `/phong-ban/khoa-phap-luat-hinh-su-va-thuc-hanh-quyen-cong-to-kiem-sat-hoat-dong-tu-phap-trong-linh-vuc-hinh-su-021811.html`
- `/phong-ban/khoa-dao-tao-boi-duong-can-bo-kiem-sat.html`
- `/phong-ban/khoa-nha-nuoc-va-phap-luat-085202.html`
- `/phong-ban/khoa-toi-pham-hoc-va-dieu-tra-toi-pham-085137.html`

### Quality, governance, and institutional information (10 stable paths)

- `/bai-viet/danh-muc/1-cam-ket-chat-luong-giao-duc-va-chat-luong-giao-duc-thuc-te-033858.html`
- `/bai-viet/danh-muc/2-cong-khai-dieu-kien-dam-bao-chat-luong-giao-duc.html`
- `/bai-viet/danh-muc/3-cong-khai-thu-chi-tai-chinh.html`
- `/bai-viet/danh-muc/cong-tac-dang/`
- `/bai-viet/quyen-cua-chu-the-du-lieu-ca-nhan-theo-quy-dinh-cua-luat-bao-ve-du-lieu-ca-nhan-nam-2025.html`
- `/bai-viet/danh-sach-dang-uy-ban-thuong-vu-dang-uy-truong-dai-hoc-kiem-sat-nhiem-ky-2025-2030.html`
- `/bai-viet/lich-su-hinh-thanh-phat-trien-cua-truong-dai-hoc-kiem-sat-ha-noi.html`
- `/bai-viet/su-menh-tam-nhin-muc-tieu-chien-luoc-gia-tri-cot-loi-va-khau-hieu-hanh-dong-triet-ly-giao-duc-cua-truong-dai-hoc-kiem-sat-ha-noi.html`
- `/bai-viet/co-cau-to-chuc-truong-dai-hoc-kiem-sat.html`
- `/bai-viet/ba-cong-khai-092301.html`

### News, admissions, and student life (22 stable paths: 21 news routes and one alumni route)

- `/blog/cuu-sinh-vien.html`
- `/tin-tuc/khai-giang-lop-boi-duong-ky-nang-kiem-sat-cac-vu-an-tham-nhung-chuc-vu-kinh-te-khoa-4.html`
- `/tin-tuc/khai-giang-lop-boi-duong-kien-thuc-nghiep-vu-chuyen-mon-ve-dau-thau.html`
- `/tin-tuc/thong-bao-tuyen-sinh-van-bang-2-dot-2-nam-2026.html`
- `/tin-tuc/hoc-vien-dao-tao-nghiep-vu-kiem-sat-khoa-36-nghien-cuu-thuc-te-tai-trung-tam-phap-y-ha-noi.html`
- `/tin-tuc/to-chuc-mo-lop-boi-duong-ky-nang-lap-luan-trong-cong-to-va-kiem-sat-hoat-dong-tu-phap-trong-giai-doan-khoi-to-dieu-tra-truy-to-xet-xu-so-tha-043009.html`
- `/tin-tuc/lan-toa-ban-sac-ket-noi-suc-tre-tai-chuong-trinh-chao-tan-sinh-vien-nam-2026-truong-dai-hoc-kiem-sat-voi-chu-de-ho-hoi-am-vang-ban-sac.html`
- `/tin-tuc/truong-dai-hoc-kiem-sat-va-vien-khoa-hoc-kiem-sat-lam-viec-ve-trien-khai-nhiem-vu-nghien-cuu-khoa-hoc-cua-nganh-kiem-sat-nhan-dan.html`
- `/tin-tuc/truong-dai-hoc-kiem-sat-to-chuc-le-khai-giang-nam-hoc-20262027.html`
- `/tin-tuc/to-chuc-nhap-hoc-cho-sinh-vien-dai-hoc-chinh-quy-nam-hoc-2026-2027.html`
- `/tin-tuc/truong-dai-hoc-kiem-sat-to-chuc-sinh-hoat-chuyen-de-ve-mot-so-quy-dinh-moi-cua-luat-giao-duc-dai-hoc-va-dinh-huong-phat-trien-truong-dai-hoc-091650.html`
- `/tin-tuc/le-ky-quy-che-phoi-hop-giua-van-phong-chu-tich-nuoc-va-toa-an-nhan-dan-toi-cao-vksnd-toi-cao.html`
- `/tin-tuc/tong-bi-thu-chu-tich-nuoc-to-lam-trao-quyet-dinh-bo-nhiem-chuc-danh-kiem-sat-vien-vksnd-toi-cao.html`
- `/tin-tuc/cong-tac-phoi-hop-giua-chinh-phu-tand-toi-cao-va-vksnd-toi-cao-dat-nhieu-ket-qua-tich-cuc.html`
- `/tin-tuc/vksnd-toi-cao-ky-ket-chuong-trinh-hop-tac-truyen-thong-voi-bao-nhan-dan-dai-tieng-noi-viet-nam-thong-tan-xa-viet-nam.html`
- `/tin-tuc/hoi-nghi-vksnd-cac-tinh-co-chung-duong-bien-gioi-viet-nam-va-lao-lan-thu-8-thanh-cong-tot-dep.html`
- `/tin-tuc/khoa-12-truong-cao-dang-kiem-sat-ha-noi-30-nam-mot-chang-duong-tron-ven-nghia-tinh.html`
- `/tin-tuc/dau-an-chien-dich-mua-he-xanh-nam-2026-tai-xa-khang-chien-tinh-lang-son-cua-doan-thanh-nien-truong-dai-hoc-kiem-sat.html`
- `/tin-tuc/can-bo-doan-truong-dai-hoc-kiem-sat-tham-gia-chuong-trinh-trao-doi-lanh-dao-thanh-nien-viet-nam-singapore-svylep-2026.html`
- `/tin-tuc/can-bo-doan-truong-dai-hoc-kiem-sat-tham-du-hoi-nghi-tap-huan-ky-nang-nghiep-vu-cong-tac-doan-va-phong-trao-thanh-nien-nam-2026.html`
- `/tin-tuc/sinh-vien-truong-dai-hoc-kiem-sat-ghi-dau-an-tai-vong-casting-cap-quoc-gia-chuong-trinh-vu-tru-dong-tien-the-moneyverse-2026.html`
- `/tin-tuc/gap-mat-ky-niem-ngay-nha-giao-viet-nam-20112018-2068.html`

### Legal documents (6 stable paths)

- `/van-ban-phap-luat/quyet-dinh-ban-hanh-quy-che-hoat-dong-cua-hoi-dong-thi-dua-khen-thuong-nganh-kiem-sat-nhan-dan.html`
- `/van-ban-phap-luat/quyet-dinh-ban-hanh-quy-dinh-ve-quy-trinh-giai-quyet-khieu-nai-to-cao-kiem-tra-quyet-dinh-giai-quyet-khieu-nai-to-cao-da-co-hieu-luc-phap-lu-094308.html`
- `/van-ban-phap-luat/quyet-dinh-ban-hanh-quy-dinh-ve-quy-trinh-tiep-cong-dan-trong-nganh-kiem-sat-nhan-dan.html`
- `/van-ban-phap-luat/quyet-dinh-ban-hanh-noi-quy-tiep-cong-dan-cua-vien-kiem-sat-nhan-dan-toi-cao.html`
- `/van-ban-phap-luat/thong-tu-lien-tich-quy-dinh-viec-phoi-hop-giua-vien-kiem-sat-nhan-dan-va-toa-an-nhan-dan-trong-thi-hanh-mot-so-quy-dinh-cua-bo-luat-to-tung--032815.html`
- `/van-ban-phap-luat/thong-tu-quy-dinh-ve-cong-tac-thi-dua-khen-thuong-trong-nganh-kiem-sat-nhan-dan.html`

### Academic programs (6 stable paths)

- `/nganh-dao-tao/nganh-luat-chuyen-nganh-kiem-sat.html`
- `/nganh-dao-tao/ngon-ngu-anh-song-bang.html`
- `/nganh-dao-tao/nganh-luat-kinh-te.html`
- `/nganh-dao-tao/nganh-luat.html`
- `/nganh-dao-tao/chuong-trinh-dao-tao-thac-si-hinh-su.html`
- `/nganh-dao-tao/thac-si-nganh-luat.html`

### Albums and news categories (4 stable paths)

- `/album`
- `/blog/huong-ve-55-nam-ngay-thanh-lap-truong.html`
- `/blog/tin-hoat-dong-truong.html`
- `/blog/tin-hoat-dong-nganh.html`

### Additional paths also observed in an earlier homepage snapshot (4)

- `/tin-tuc/tuyen-sinh-thac-si-2023.html`
- `/bai-viet/danh-muc/dao-tao-tien-si.html`
- `/blog/tuyen-sinh`
- `/blog/doan-tn-083044`

### External and non-route controls

- The homepage links to its admissions portal at `https://tuyensinh.kiemsat.edu.vn/`.
- The homepage links to the student portal at `http://daotao.kiemsat.edu.vn/sinh-vien-dang-nhap.html`.
- The homepage links to the Phân hiệu ĐHKS site at `https://tkshcm.edu.vn/`.
- These three separate domains were identified from their homepage link targets but were not crawled as part of the kiemsat.edu.vn internal-page inventory.
- The English-language control was `javascript:void(0)` and did not expose a language destination in the reviewed page.
- The site search and menu controls are actions, not page URLs.

## Proposed sitemap and navigation

```text
Trang chủ
├── Giới thiệu
│   ├── Lịch sử hình thành
│   ├── Sứ mệnh, tầm nhìn, giá trị cốt lõi
│   ├── Cơ cấu tổ chức
│   ├── Đảng ủy Trường
│   └── Ba công khai
├── Đào tạo
│   ├── Đại học / tuyển sinh / chương trình / chuẩn đầu ra
│   ├── Sau đại học
│   └── Bồi dưỡng nghiệp vụ kiểm sát
├── Tin tức
│   ├── Tin hoạt động trường
│   ├── Tin hoạt động ngành
│   ├── Tin tuyển sinh
│   └── Bài viết chi tiết
├── Nghiên cứu
│   ├── Thông tin khoa học
│   ├── Thông tin nghiệp vụ
│   └── Kiểm sát viên cần biết
├── Đơn vị trực thuộc
│   └── Khoa, phòng và trung tâm
├── Đảm bảo chất lượng
│   └── Cam kết / điều kiện / tài chính / chuẩn đầu ra
├── Cộng đồng
│   ├── Hoạt động và hình ảnh
│   ├── Đoàn Thanh niên
│   ├── Cựu sinh viên
│   ├── Học viên – sinh viên
│   ├── Cổng đào tạo (external site)
│   └── Phân hiệu ĐHKS (external site)
├── Văn bản pháp luật
├── Tìm kiếm
└── Liên hệ
```

Navigation groups the source site's training, news, research, unit, quality, and community categories. Existing local route destinations are retained; curriculum/outcomes pages that remain hosted only on the source are linked directly and identified as external. Desktop dropdowns open on pointer hover and keyboard focus, while mobile menus remain tap/click driven.

## Route coverage checklist

Coverage labels refer to the prototype, not to whether original source prose was available.

- **Completed as navigable route/template:** homepage `/`; aggregate pages `/gioi-thieu`, `/tin-tuc`, `/nganh-dao-tao`, `/phong-ban`, `/nghien-cuu`, `/hoc-vien-sinh-vien`, `/van-ban-phap-luat`, `/tuyen-sinh`, `/lien-he`, `/tim-kiem`; stable and earlier-observed route entries listed above.
- **Partially completed:** news article, unit, program, research, public-disclosure, and document detail pages. Verified titles, categories, selected authentic homepage images, and page-specific templates are represented; inaccessible detail content, dates, downloadable files, and factual metadata are explicitly flagged for official confirmation.
- **Partially completed:** `/album` and `/login`. The route and appropriate empty/access state are represented; original gallery and authentication service were not accessible.
- **Inaccessible for source-content migration:** all interior page bodies not visible during the audit, including history, mission, faculty/unit profiles, admission notices, news article bodies, legal-document files, research content, student services, and login/gallery content. The original sitemap endpoints also did not provide crawlable data.
- **Not reproduced as first-party functionality:** the external admissions site, student portal, and Phân hiệu website (linked externally); English-language control (no usable destination observed).

## Implementation files

- `index.html` — accessible document shell and shared site chrome.
- `assets/css/site.css` — design tokens, responsive layouts, and shared components.
- `assets/js/site.js` — route registry, templates, page rendering, search, pagination, and contact-email handoff.
- `audit/website-inventory.md` — page categories and discovered URLs.
- `design/design-system.md` — screenshot-brief visual system and shared components.
- `audit/verification-report.md` — validation record and remaining checks.

## Reference image availability

The second design brief was supplied as pasted text; a separate screenshot image was not present among the shared attachments. The redesign follows the brief's specified blue-gray background, white editorial panels, navy text, institutional red, section-heading accents, and compact document list. A pixel-level screenshot comparison could not be performed.

## News-panel image and typography follow-up

- Restored image-led presentation in the homepage's `Tin hoạt động ngành` and `Tin tổng hợp` panels: each shows one featured story image and four related-story thumbnails, linked to the same source article as its headline.
- The ten displayed image URLs are mapped to official source article imagery; no unrelated stock photos or invented story visuals are used. The four admissions headlines and six legal-document items remain available in their adjacent content areas.
- Increased the global body font to 17px and enlarged featured, compact-story, and document titles slightly. Added subtle corner rounding to these panels and their thumbnails while preserving the source-backed content.
