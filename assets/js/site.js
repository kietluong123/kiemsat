"use strict";

const campusImage = "https://gatewaycms.hpu.vn/Media/ASC.CMS/slideshow/202110/Images/slider-view-truong-20211006094738-e.jpg";
const newsImages = {
  opening: "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202610/Images/image001-20261006083235-e.jpg",
  bidding: "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202610/Images/image001-20261002042327-e.jpg",
  practice: "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202609/Images/image001-20260928041357-e.jpg",
  student: "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202609/Images/image005-20260923083040-e.jpg",
  research: "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202609/Images/image007-20260923100405-e.jpg",
  ceremony: "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202609/Images/image017-20260916062441-e.jpg",
  orientation: "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202609/Images/1-20260913055918-e.png"
};

const heroSlides = [
  { image: campusImage, label: "Khuôn viên Trường Đại học Kiểm sát" },
  { image: newsImages.ceremony, label: "Lễ khai giảng năm học 2026–2027" },
  { image: newsImages.opening, label: "Bồi dưỡng kỹ năng kiểm sát" },
  { image: newsImages.student, label: "Chào tân sinh viên năm 2026" },
  { image: newsImages.research, label: "Hợp tác nghiên cứu khoa học" }
];

const pages = [
  { path: "/login", title: "Đăng nhập", category: "Cổng thông tin" },
  { path: "/thong-tin-nghiep-vu", title: "Thông tin nghiệp vụ", category: "Nghiên cứu và nghiệp vụ" },
  { path: "/thong-tin-khoa-hoc", title: "Thông tin khoa học", category: "Nghiên cứu và nghiệp vụ" },
  { path: "/ksv-can-biet", title: "Kiểm sát viên cần biết", category: "Nghiên cứu và nghiệp vụ" },
  { path: "/phong-ban/trung-tam-dam-bao-chat-luong-dao-tao.html", title: "Trung tâm Bảo đảm chất lượng đào tạo", category: "Khoa, phòng và trung tâm" },
  { path: "/phong-ban/trung-tam-thong-tin-thu-vien.html", title: "Trung tâm Thông tin – Thư viện", category: "Khoa, phòng và trung tâm" },
  { path: "/blog/trung-tam-tin-hoc.html", title: "Trung tâm Tin học", category: "Khoa, phòng và trung tâm" },
  { path: "/phong-ban/phong-to-chuc-hanh-chinh.html", title: "Phòng Tổ chức – Hành chính", category: "Khoa, phòng và trung tâm" },
  { path: "/phong-ban/phong-quan-ly-khoa-hoc-va-hop-tac-quoc-te.html", title: "Phòng Quản lý khoa học và Hợp tác quốc tế", category: "Khoa, phòng và trung tâm" },
  { path: "/phong-ban/phong-tai-vu.html", title: "Phòng Tài vụ – Quản trị", category: "Khoa, phòng và trung tâm" },
  { path: "/phong-ban/phong-dao-tao-va-quan-ly-sinh-vien.html", title: "Phòng Đào tạo", category: "Khoa, phòng và trung tâm" },
  { path: "/phong-ban/khoa-phap-luat-kinh-te-quoc-te.html", title: "Khoa Pháp luật kinh tế – quốc tế", category: "Khoa, phòng và trung tâm" },
  { path: "/phong-ban/khoa-ly-luan-chinh-tri-041904.html", title: "Khoa Lý luận chính trị", category: "Khoa, phòng và trung tâm" },
  { path: "/phong-ban/khoa-phap-luat-dan-su-va-kiem-sat-dan-su.html", title: "Khoa Pháp luật dân sự và Kiểm sát dân sự", category: "Khoa, phòng và trung tâm" },
  { path: "/phong-ban/khoa-phap-luat-hinh-su-va-thuc-hanh-quyen-cong-to-kiem-sat-hoat-dong-tu-phap-trong-linh-vuc-hinh-su-021811.html", title: "Khoa Pháp luật hình sự và thực hành quyền công tố, kiểm sát hoạt động tư pháp trong lĩnh vực hình sự", category: "Khoa, phòng và trung tâm" },
  { path: "/phong-ban/khoa-dao-tao-boi-duong-can-bo-kiem-sat.html", title: "Khoa Đào tạo, bồi dưỡng cán bộ kiểm sát", category: "Khoa, phòng và trung tâm" },
  { path: "/phong-ban/khoa-nha-nuoc-va-phap-luat-085202.html", title: "Khoa Nhà nước và Pháp luật", category: "Khoa, phòng và trung tâm" },
  { path: "/phong-ban/khoa-toi-pham-hoc-va-dieu-tra-toi-pham-085137.html", title: "Khoa Tội phạm học và Điều tra tội phạm", category: "Khoa, phòng và trung tâm" },
  { path: "/bai-viet/danh-muc/1-cam-ket-chat-luong-giao-duc-va-chat-luong-giao-duc-thuc-te-033858.html", title: "Cam kết chất lượng giáo dục", category: "Đảm bảo chất lượng" },
  { path: "/bai-viet/danh-muc/2-cong-khai-dieu-kien-dam-bao-chat-luong-giao-duc.html", title: "Điều kiện bảo đảm chất lượng giáo dục", category: "Đảm bảo chất lượng" },
  { path: "/bai-viet/danh-muc/3-cong-khai-thu-chi-tai-chinh.html", title: "Công khai thu chi tài chính", category: "Đảm bảo chất lượng" },
  { path: "/bai-viet/danh-muc/cong-tac-dang/", title: "Công tác Đảng", category: "Hoạt động nhà trường" },
  { path: "/blog/cuu-sinh-vien.html", title: "Cựu sinh viên", category: "Học viên – sinh viên" },
  { path: "/tin-tuc/khai-giang-lop-boi-duong-ky-nang-kiem-sat-cac-vu-an-tham-nhung-chuc-vu-kinh-te-khoa-4.html", title: "Khai giảng Lớp bồi dưỡng kỹ năng kiểm sát các vụ án tham nhũng, chức vụ, kinh tế - Khóa 4", category: "Tin hoạt động trường", image: newsImages.opening },
  { path: "/tin-tuc/khai-giang-lop-boi-duong-kien-thuc-nghiep-vu-chuyen-mon-ve-dau-thau.html", title: "Khai giảng lớp Bồi dưỡng kiến thức nghiệp vụ chuyên môn về đấu thầu", category: "Tin hoạt động trường", image: newsImages.bidding },
  { path: "/tin-tuc/thong-bao-tuyen-sinh-van-bang-2-dot-2-nam-2026.html", title: "Thông báo tuyển sinh văn bằng 2 (đợt 2) năm 2026", category: "Tin tuyển sinh" },
  { path: "/tin-tuc/hoc-vien-dao-tao-nghiep-vu-kiem-sat-khoa-36-nghien-cuu-thuc-te-tai-trung-tam-phap-y-ha-noi.html", title: "Học viên Đào tạo nghiệp vụ kiểm sát - Khóa 36 nghiên cứu thực tế tại Trung tâm Pháp y Hà Nội", category: "Tin hoạt động trường", image: newsImages.practice },
  { path: "/tin-tuc/to-chuc-mo-lop-boi-duong-ky-nang-lap-luan-trong-cong-to-va-kiem-sat-hoat-dong-tu-phap-trong-giai-doan-khoi-to-dieu-tra-truy-to-xet-xu-so-tha-043009.html", title: "Tổ chức mở lớp Bồi dưỡng kỹ năng lập luận trong công tố và kiểm sát hoạt động tư pháp trong giai đoạn khởi tố, điều tra, truy tố, xét xử sơ thẩm vụ án hình sự - Khóa 1", category: "Tin hoạt động trường" },
  { path: "/tin-tuc/lan-toa-ban-sac-ket-noi-suc-tre-tai-chuong-trinh-chao-tan-sinh-vien-nam-2026-truong-dai-hoc-kiem-sat-voi-chu-de-ho-hoi-am-vang-ban-sac.html", title: "Lan tỏa bản sắc, kết nối sức trẻ tại chương trình Chào tân sinh viên năm 2026 Trường Đại học Kiểm sát với chủ đề “Hò hội – Âm vang bản sắc”", category: "Học viên – sinh viên", image: newsImages.student },
  { path: "/tin-tuc/truong-dai-hoc-kiem-sat-va-vien-khoa-hoc-kiem-sat-lam-viec-ve-trien-khai-nhiem-vu-nghien-cuu-khoa-hoc-cua-nganh-kiem-sat-nhan-dan.html", title: "Trường Đại học Kiểm sát và Viện Khoa học Kiểm sát làm việc về triển khai nhiệm vụ nghiên cứu khoa học của ngành Kiểm sát nhân dân", category: "Nghiên cứu khoa học", image: newsImages.research },
  { path: "/tin-tuc/truong-dai-hoc-kiem-sat-to-chuc-le-khai-giang-nam-hoc-20262027.html", title: "Trường Đại học Kiểm sát tổ chức Lễ khai giảng năm học 2026–2027", category: "Tin hoạt động trường", image: newsImages.ceremony, summary: "Lễ khai giảng diễn ra sáng 16/9/2026 với sự tham dự của lãnh đạo VKSND tối cao, đại diện các đơn vị, chuyên gia, giảng viên và sinh viên. Nhà trường nhấn mạnh đổi mới phương thức đào tạo, gắn lý luận với thực tiễn, phát triển kỹ năng nghề nghiệp và năng lực số; buổi lễ cũng ghi nhận tân thủ khoa và sinh viên có thành tích học tập tốt." },
  { path: "/tin-tuc/to-chuc-nhap-hoc-cho-sinh-vien-dai-hoc-chinh-quy-nam-hoc-2026-2027.html", title: "Tổ chức nhập học cho sinh viên đại học chính quy năm học 2026–2027", category: "Tin tuyển sinh", image: newsImages.orientation },
  { path: "/tin-tuc/truong-dai-hoc-kiem-sat-to-chuc-sinh-hoat-chuyen-de-ve-mot-so-quy-dinh-moi-cua-luat-giao-duc-dai-hoc-va-dinh-huong-phat-trien-truong-dai-hoc-091650.html", title: "Trường Đại học Kiểm sát tổ chức sinh hoạt chuyên đề về một số quy định mới của Luật Giáo dục đại học và định hướng phát triển Trường Đại học Kiểm sát đến năm 2030, tầm nhìn đến năm 2045", category: "Tin hoạt động trường" },
  { path: "/bai-viet/quyen-cua-chu-the-du-lieu-ca-nhan-theo-quy-dinh-cua-luat-bao-ve-du-lieu-ca-nhan-nam-2025.html", title: "Quyền của chủ thể dữ liệu cá nhân theo quy định của Luật Bảo vệ dữ liệu cá nhân năm 2025", category: "Bài viết khoa học" },
  { path: "/tin-tuc/le-ky-quy-che-phoi-hop-giua-van-phong-chu-tich-nuoc-va-toa-an-nhan-dan-toi-cao-vksnd-toi-cao.html", title: "Lễ ký Quy chế phối hợp giữa Văn phòng Chủ tịch nước và Tòa án nhân dân tối cao, VKSND tối cao", category: "Tin hoạt động ngành" },
  { path: "/tin-tuc/tong-bi-thu-chu-tich-nuoc-to-lam-trao-quyet-dinh-bo-nhiem-chuc-danh-kiem-sat-vien-vksnd-toi-cao.html", title: "Tổng Bí thư, Chủ tịch nước Tô Lâm trao Quyết định bổ nhiệm chức danh Kiểm sát viên VKSND tối cao", category: "Tin hoạt động ngành" },
  { path: "/tin-tuc/cong-tac-phoi-hop-giua-chinh-phu-tand-toi-cao-va-vksnd-toi-cao-dat-nhieu-ket-qua-tich-cuc.html", title: "Công tác phối hợp giữa Chính phủ, TAND tối cao và VKSND tối cao đạt nhiều kết quả tích cực", category: "Tin hoạt động ngành" },
  { path: "/tin-tuc/vksnd-toi-cao-ky-ket-chuong-trinh-hop-tac-truyen-thong-voi-bao-nhan-dan-dai-tieng-noi-viet-nam-thong-tan-xa-viet-nam.html", title: "VKSND tối cao ký kết Chương trình hợp tác truyền thông với Báo Nhân Dân, Đài Tiếng nói Việt Nam, Thông tấn xã Việt Nam", category: "Tin hoạt động ngành" },
  { path: "/tin-tuc/hoi-nghi-vksnd-cac-tinh-co-chung-duong-bien-gioi-viet-nam-va-lao-lan-thu-8-thanh-cong-tot-dep.html", title: "Hội nghị VKSND các tỉnh có chung đường biên giới Việt Nam và Lào lần thứ 8 thành công tốt đẹp", category: "Tin hoạt động ngành" },
  { path: "/tin-tuc/khoa-12-truong-cao-dang-kiem-sat-ha-noi-30-nam-mot-chang-duong-tron-ven-nghia-tinh.html", title: "Khóa 12 Trường Cao đẳng Kiểm sát Hà Nội: 30 năm một chặng đường, trọn vẹn nghĩa tình", category: "Tin tổng hợp" },
  { path: "/tin-tuc/dau-an-chien-dich-mua-he-xanh-nam-2026-tai-xa-khang-chien-tinh-lang-son-cua-doan-thanh-nien-truong-dai-hoc-kiem-sat.html", title: "Dấu ấn Chiến dịch Mùa hè xanh năm 2026 tại xã Kháng Chiến, tỉnh Lạng Sơn của Đoàn Thanh niên Trường Đại học Kiểm sát", category: "Học viên – sinh viên" },
  { path: "/tin-tuc/can-bo-doan-truong-dai-hoc-kiem-sat-tham-gia-chuong-trinh-trao-doi-lanh-dao-thanh-nien-viet-nam-singapore-svylep-2026.html", title: "Cán bộ Đoàn Trường Đại học Kiểm sát tham gia Chương trình Trao đổi lãnh đạo Thanh niên Việt Nam – Singapore (SVYLEP 2026)", category: "Học viên – sinh viên" },
  { path: "/tin-tuc/can-bo-doan-truong-dai-hoc-kiem-sat-tham-du-hoi-nghi-tap-huan-ky-nang-nghiep-vu-cong-tac-doan-va-phong-trao-thanh-nien-nam-2026.html", title: "Cán bộ Đoàn Trường Đại học Kiểm sát tham dự Hội nghị Tập huấn kỹ năng, nghiệp vụ công tác Đoàn và phong trào Thanh niên năm 2026", category: "Học viên – sinh viên" },
  { path: "/tin-tuc/sinh-vien-truong-dai-hoc-kiem-sat-ghi-dau-an-tai-vong-casting-cap-quoc-gia-chuong-trinh-vu-tru-dong-tien-the-moneyverse-2026.html", title: "Sinh viên Trường Đại học Kiểm sát ghi dấu ấn tại vòng Casting Cấp quốc gia Chương trình “Vũ trụ đồng tiền – The Moneyverse 2026”", category: "Học viên – sinh viên" },
  { path: "/van-ban-phap-luat/quyet-dinh-ban-hanh-quy-che-hoat-dong-cua-hoi-dong-thi-dua-khen-thuong-nganh-kiem-sat-nhan-dan.html", title: "Số 08/QĐ-VKSTC — Quyết định ban hành Quy chế hoạt động của Hội đồng Thi đua - Khen thưởng ngành Kiểm sát nhân dân", category: "Văn bản pháp luật" },
  { path: "/van-ban-phap-luat/quyet-dinh-ban-hanh-quy-dinh-ve-quy-trinh-giai-quyet-khieu-nai-to-cao-kiem-tra-quyet-dinh-giai-quyet-khieu-nai-to-cao-da-co-hieu-luc-phap-lu-094308.html", title: "Số 50/QĐ-VKSTC — Quyết định ban hành Quy định về quy trình giải quyết khiếu nại, tố cáo; kiểm tra quyết định giai quyết khiếu nại, tố cáo đã có hiệu lực pháp luật và kiểm sát viẹc giải quyết khiếu nại, tố cáo trong hoạt động tư pháp", category: "Văn bản pháp luật" },
  { path: "/van-ban-phap-luat/quyet-dinh-ban-hanh-quy-dinh-ve-quy-trinh-tiep-cong-dan-trong-nganh-kiem-sat-nhan-dan.html", title: "Số 51/QĐ-VKSTC — Quyết định ban hành Quy định về quy trình tiếp công dân trong ngành Kiểm sát nhân dân", category: "Văn bản pháp luật" },
  { path: "/van-ban-phap-luat/quyet-dinh-ban-hanh-noi-quy-tiep-cong-dan-cua-vien-kiem-sat-nhan-dan-toi-cao.html", title: "Số 52/QĐ-VKSTC — Quyết định ban hành Nội quy tiếp công dân của Viện kiểm sát nhân dân tối cao", category: "Văn bản pháp luật" },
  { path: "/van-ban-phap-luat/thong-tu-lien-tich-quy-dinh-viec-phoi-hop-giua-vien-kiem-sat-nhan-dan-va-toa-an-nhan-dan-trong-thi-hanh-mot-so-quy-dinh-cua-bo-luat-to-tung--032815.html", title: "Số 07/2026/TTLT-VKSNDTC-TANDTC — Thông tư liên tịch quy định việc phối hợp giữa Viện kiểm sát nhân dân và Tòa án nhân dân trong thi hành một số quy định của Bộ luật Tố tụng dân sự", category: "Văn bản pháp luật" },
  { path: "/van-ban-phap-luat/thong-tu-quy-dinh-ve-cong-tac-thi-dua-khen-thuong-trong-nganh-kiem-sat-nhan-dan.html", title: "Số 05/2026/TT-VKSTC — Thông tư quy định về công tác thi đua, khen thưởng trong ngành Kiểm sát nhân dân", category: "Văn bản pháp luật" },
  { path: "/nganh-dao-tao/nganh-luat-chuyen-nganh-kiem-sat.html", title: "Ngành Luật, chuyên ngành Kiểm sát", category: "Chương trình đào tạo" },
  { path: "/nganh-dao-tao/ngon-ngu-anh-song-bang.html", title: "Ngôn ngữ Anh (song bằng)", category: "Chương trình đào tạo" },
  { path: "/nganh-dao-tao/nganh-luat-kinh-te.html", title: "Ngành Luật kinh tế", category: "Chương trình đào tạo" },
  { path: "/nganh-dao-tao/nganh-luat.html", title: "Ngành Luật", category: "Chương trình đào tạo" },
  { path: "/nganh-dao-tao/chuong-trinh-dao-tao-thac-si-hinh-su.html", title: "Chương trình đào tạo Thạc sĩ Hình sự", category: "Chương trình đào tạo" },
  { path: "/nganh-dao-tao/thac-si-nganh-luat.html", title: "Thạc sĩ ngành Luật", category: "Chương trình đào tạo" },
  { path: "/album", title: "Hình ảnh hoạt động", category: "Học viên – sinh viên" },
  { path: "/bai-viet/danh-sach-dang-uy-ban-thuong-vu-dang-uy-truong-dai-hoc-kiem-sat-nhiem-ky-2025-2030.html", title: "Đảng ủy Trường Đại học Kiểm sát nhiệm kỳ 2025–2030", category: "Công tác Đảng" },
  { path: "/bai-viet/lich-su-hinh-thanh-phat-trien-cua-truong-dai-hoc-kiem-sat-ha-noi.html", title: "Lịch sử hình thành, phát triển của Trường Đại học Kiểm sát Hà Nội", category: "Giới thiệu" },
  { path: "/bai-viet/su-menh-tam-nhin-muc-tieu-chien-luoc-gia-tri-cot-loi-va-khau-hieu-hanh-dong-triet-ly-giao-duc-cua-truong-dai-hoc-kiem-sat-ha-noi.html", title: "Sứ mệnh, tầm nhìn, mục tiêu chiến lược, giá trị cốt lõi và triết lý giáo dục", category: "Giới thiệu" },
  { path: "/bai-viet/co-cau-to-chuc-truong-dai-hoc-kiem-sat.html", title: "Cơ cấu tổ chức Trường Đại học Kiểm sát", category: "Giới thiệu" },
  { path: "/bai-viet/ba-cong-khai-092301.html", title: "Ba công khai", category: "Đảm bảo chất lượng" },
  { path: "/blog/huong-ve-55-nam-ngay-thanh-lap-truong.html", title: "Hướng về 55 năm ngày thành lập Trường", category: "Tin hoạt động trường" },
  { path: "/blog/tin-hoat-dong-truong.html", title: "Tin hoạt động trường", category: "Tin tức" },
  { path: "/blog/tin-hoat-dong-nganh.html", title: "Tin hoạt động ngành", category: "Tin tức" },
  { path: "/tin-tuc/gap-mat-ky-niem-ngay-nha-giao-viet-nam-20112018-2068.html", title: "Gặp mặt kỷ niệm Ngày Nhà giáo Việt Nam 20/11", category: "Tin hoạt động trường" },
  { path: "/tin-tuc/tuyen-sinh-thac-si-2023.html", title: "Tuyển sinh thạc sĩ", category: "Tin tuyển sinh" },
  { path: "/bai-viet/danh-muc/dao-tao-tien-si.html", title: "Đào tạo tiến sĩ", category: "Chương trình đào tạo" },
  { path: "/blog/tuyen-sinh", title: "Tin tuyển sinh", category: "Tin tuyển sinh" },
  { path: "/blog/doan-tn-083044", title: "Đoàn Thanh niên", category: "Học viên – sinh viên" }
];

const programs = pages.filter((page) => page.category === "Chương trình đào tạo");
const faculties = pages.filter((page) => page.category === "Khoa, phòng và trung tâm");
const legalDocs = pages.filter((page) => page.category === "Văn bản pháp luật");
const homepageNews = pages.filter((page) => page.path.startsWith("/tin-tuc/") && page.category !== "Tin hoạt động ngành");
const latestNews = homepageNews.slice(0, 10);
const homepageCardImages = {
  "/tin-tuc/khoa-12-truong-cao-dang-kiem-sat-ha-noi-30-nam-mot-chang-duong-tron-ven-nghia-tinh.html": "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202608/Images/image011-20260824023708-e.jpg",
  "/tin-tuc/dau-an-chien-dich-mua-he-xanh-nam-2026-tai-xa-khang-chien-tinh-lang-son-cua-doan-thanh-nien-truong-dai-hoc-kiem-sat.html": "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202608/Images/747931449-2105154403738122-1530613135666038730-n-20260804103834-e.jpg",
  "/tin-tuc/can-bo-doan-truong-dai-hoc-kiem-sat-tham-gia-chuong-trinh-trao-doi-lanh-dao-thanh-nien-viet-nam-singapore-svylep-2026.html": "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202607/Images/752334331-1471602931669054-4092546891525303911-n-20260720101912-e.jpg",
  "/tin-tuc/can-bo-doan-truong-dai-hoc-kiem-sat-tham-du-hoi-nghi-tap-huan-ky-nang-nghiep-vu-cong-tac-doan-va-phong-trao-thanh-nien-nam-2026.html": "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202607/Images/hng67380jpg-20260717105416-e.jpg",
  "/tin-tuc/sinh-vien-truong-dai-hoc-kiem-sat-ghi-dau-an-tai-vong-casting-cap-quoc-gia-chuong-trinh-vu-tru-dong-tien-the-moneyverse-2026.html": "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202607/Images/749270056-2348876898853747-6815820715499848976-n-20260717103323-e.jpg"
};
const withHomepageImage = (page) => homepageCardImages[page.path] ? { ...page, image: homepageCardImages[page.path] } : page;
const homepageDigest = pages.filter((page) => page.path.startsWith("/tin-tuc/") && (page.category === "Tin tổng hợp" || page.category === "Học viên – sinh viên")).slice(0, 5).map(withHomepageImage);
const homepagePhotos = [
  { title: "Lễ ký Quy chế phối hợp giữa Văn phòng Chủ tịch nước và Tòa án nhân dân tối cao, VKSND tối cao", path: "/tin-tuc/le-ky-quy-che-phoi-hop-giua-van-phong-chu-tich-nuoc-va-toa-an-nhan-dan-toi-cao-vksnd-toi-cao.html", image: "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202609/Images/1-20260930104206-e.jpeg" },
  { title: "Tổng Bí thư, Chủ tịch nước Tô Lâm trao Quyết định bổ nhiệm chức danh Kiểm sát viên VKSND tối cao", path: "/tin-tuc/tong-bi-thu-chu-tich-nuoc-to-lam-trao-quyet-dinh-bo-nhiem-chuc-danh-kiem-sat-vien-vksnd-toi-cao.html", image: "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202608/Images/3-20260825092413-e.png" },
  { title: "Công tác phối hợp giữa Chính phủ, TAND tối cao và VKSND tối cao đạt nhiều kết quả tích cực", path: "/tin-tuc/cong-tac-phoi-hop-giua-chinh-phu-tand-toi-cao-va-vksnd-toi-cao-dat-nhieu-ket-qua-tich-cuc.html", image: "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202608/Images/1-20260803021014-e.png" },
  { title: "VKSND tối cao ký kết Chương trình hợp tác truyền thông với Báo Nhân Dân, Đài Tiếng nói Việt Nam, Thông tấn xã Việt Nam", path: "/tin-tuc/vksnd-toi-cao-ky-ket-chuong-trinh-hop-tac-truyen-thong-voi-bao-nhan-dan-dai-tieng-noi-viet-nam-thong-tan-xa-viet-nam.html", image: "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202607/Images/13-20260727064551-e.jpeg" },
  { title: "Hội nghị VKSND các tỉnh có chung đường biên giới Việt Nam và Lào lần thứ 8 thành công tốt đẹp", path: "/tin-tuc/hoi-nghi-vksnd-cac-tinh-co-chung-duong-bien-gioi-viet-nam-va-lao-lan-thu-8-thanh-cong-tot-dep.html", image: "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202607/Images/5-20260718111801-e.jpeg" }
];
const homepageIndustryNews = pages.filter((page) => page.category === "Tin hoạt động ngành").slice(0, 5).map((page) => {
  const image = homepagePhotos.find((photo) => photo.path === page.path)?.image;
  return image ? { ...page, image } : page;
});
const homepageVideos = [
  { title: "Diễn đàn Nghiên cứu Tư pháp - Trường Đại học Kiểm sát Hà Nội", videoId: "G6MGsh_uxVI" },
  { title: "Trường Đại học Kiểm sát Hà Nội tổ chức Lễ kỷ niệm 10 năm ngày thành lập (25/04/2013 - 25/04/2023) và 53 năm ngày truyền thống của nhà trường", videoId: "YRcvE8qHgv8" },
  { title: "Tham luận chuyển đổi số tại Trường Đại học Kiểm sát Hà Nội", videoId: "Vd5X6sPWtOE" },
  { title: "Hướng dẫn cài đặt và khai báo y tế nội địa", videoId: "D7t500i0N6Y" },
  { title: "Hướng dẫn cài đặt và khai báo Y tế qua ứng dụng NCOVI", videoId: "ud03uUFQVys" }
];
const admissions2026 = {
  source: "https://kiemsat.edu.vn/bai-viet/thong-tin-tuyen-sinh-dai-hoc-nam-2026-chinh-thuc.html",
  quotaDocument: "https://gatewaycms.hpu.vn/Media/ASC.CMS/FolderFunction/202607/Documents/dang-ky-chi-tieu-nam-2026-1-20260702112942-e.pdf",
  detailedNotice: "https://drive.google.com/file/d/1luF-SiWbOkM_5BiRRK-ph_F8DZx-AkXH/view?usp=drive_link",
  quotas: [
    { program: "Luật, chuyên ngành Kiểm sát", quota: 200, note: "Dự kiến: 100 từ Hà Tĩnh trở ra; 100 từ Quảng Trị trở vào" },
    { program: "Luật", quota: 950, note: "Dự kiến" },
    { program: "Luật kinh tế", quota: 250, note: "Dự kiến" },
    { program: "Ngôn ngữ Anh", quota: 200, note: "Dự kiến" }
  ]
};
const officialStudyLinks = [
  { label: "Chương trình đào tạo", href: "https://kiemsat.edu.vn/bai-viet/danh-muc/chuong-trinh-2591.html", icon: "bi-journal-text" },
  { label: "Chuẩn đầu ra", href: "https://kiemsat.edu.vn/bai-viet/danh-muc/chuan-dau-ra-120550.html", icon: "bi-check2-circle" }
];
const officialResearchCollections = [
  {
    title: "Thông tin nghiệp vụ",
    href: "https://kiemsat.edu.vn/thong-tin-nghiep-vu",
    topics: [
      ["Kiến nghị", "https://kiemsat.edu.vn/thong-tin-nghiep-vu/danh-muc/kien-nghi-8677.html"],
      ["Thông tin nghiệp vụ", "https://kiemsat.edu.vn/thong-tin-nghiep-vu/danh-muc/thong-tin-nghiep-vu-8676.html"],
      ["Quyết định của Hội đồng thẩm phán", "https://kiemsat.edu.vn/thong-tin-nghiep-vu/danh-muc/quyet-dinh-cua-hoi-dong-tham-phan-8675.html"],
      ["Quyết định kháng nghị giám đốc thẩm", "https://kiemsat.edu.vn/thong-tin-nghiep-vu/danh-muc/quyet-dinh-khang-nghi-giam-doc-tham-8674.html"],
      ["Thông báo rút kinh nghiệm", "https://kiemsat.edu.vn/thong-tin-nghiep-vu/danh-muc/thong-bao-rut-kinh-nghiem-8673.html"],
      ["Văn bản hướng dẫn nghiệp vụ", "https://kiemsat.edu.vn/thong-tin-nghiep-vu/danh-muc/van-ban-huong-dan-nghiep-vu-8672.html"]
    ],
    articles: [
      ["Kiến nghị khắc phục vi phạm pháp luật", "https://kiemsat.edu.vn/thong-tin-nghiep-vu/kien-nghi-khac-phuc-vi-pham-phap-luat-9162.html"],
      ["Kiến nghị về việc tiếp nhận, giải quyết tố giác, tin báo về tội phạm", "https://kiemsat.edu.vn/thong-tin-nghiep-vu/kien-nghi-khac-phuc-vi-pham-phap-luat-trong-viec-tiep-nhan-giai-quyet-to-giac-tin-bao-ve-toi-pham-9135.html"],
      ["Quyết định giám đốc thẩm đối với vụ Vàng Văn Tân", "https://kiemsat.edu.vn/thong-tin-nghiep-vu/quyet-dinh-giam-doc-tham-doi-voi-vu-vang-van-tan-bi-ket-an-ve-toi-giet-nguoi-8802.html"]
    ]
  },
  {
    title: "Thông tin khoa học",
    href: "https://kiemsat.edu.vn/thong-tin-khoa-hoc",
    topics: [
      ["Hành chính – TTHC", "https://kiemsat.edu.vn/thong-tin-khoa-hoc/danh-muc/hanh-chinh--tthc-7788.html"],
      ["Luật nhà nước", "https://kiemsat.edu.vn/thong-tin-khoa-hoc/danh-muc/lua%CC%A3t-nha%CC%80-nuo%CC%81c-7787.html"],
      ["Lĩnh vực khác", "https://kiemsat.edu.vn/thong-tin-khoa-hoc/danh-muc/linh-vuc-khac-7786.html"],
      ["Kinh doanh – Thương mại", "https://kiemsat.edu.vn/thong-tin-khoa-hoc/danh-muc/kinh-doanh--thuong-mai-7785.html"],
      ["Dân sự – TTDS", "https://kiemsat.edu.vn/thong-tin-khoa-hoc/danh-muc/dan-su--ttds-7784.html"],
      ["Tội phạm học", "https://kiemsat.edu.vn/thong-tin-khoa-hoc/danh-muc/to%CC%A3i-pha%CC%A3m-ho%CC%A3c-7783.html"],
      ["Hình sự – TTHS", "https://kiemsat.edu.vn/thong-tin-khoa-hoc/danh-muc/hi%CC%80nh-su%CC%A3--tths-7782.html"]
    ],
    articles: [
      ["Một số vấn đề về quyết định hành chính là đối tượng khởi kiện vụ án hành chính", "https://kiemsat.edu.vn/thong-tin-khoa-hoc/mot-so-van-de-ve-quyet-dinh-hanh-chinh-la-doi-tuong-khoi-kien-vu-an-hanh-chinh.html"],
      ["Giải pháp ứng dụng ChatGPT trong các phương pháp học luật ở bậc đại học", "https://kiemsat.edu.vn/thong-tin-khoa-hoc/giai-phap-ung-dung-chatgpt-trong-cac-phuong-phap-hoc-luat-o-bac-dai-hoc.html"],
      ["Trách nhiệm bồi thường thiệt hại trong kỷ nguyên trí tuệ nhân tạo", "https://kiemsat.edu.vn/thong-tin-khoa-hoc/trach-nhiem-boi-thuong-thiet-hai-trong-ky-nguyen-tri-tue-nhan-tao-8665.html"]
    ]
  }
];

const app = document.getElementById("app");
const searchPanel = document.querySelector("[data-search-panel]");
const searchToggle = document.querySelector("[data-search-toggle]");
const navToggle = document.querySelector("[data-nav-toggle]");
const primaryNav = document.getElementById("primaryNav");
let newsPage = 1;
let revealObserver;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function normalizeSearch(value) {
  return String(value)
    .toLocaleLowerCase("vi")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

function routeHref(path) {
  return `#${path === "/" ? "/" : path}`;
}

function pageFor(path) {
  return pages.find((page) => page.path === path);
}

function crumb(title, parent = "Trang chủ") {
  const parentRoutes = {
    "Tin tức": "/tin-tuc",
    "Tin hoạt động trường": "/tin-tuc",
    "Tin hoạt động ngành": "/blog/tin-hoat-dong-nganh.html",
    "Tin tuyển sinh": "/tuyen-sinh",
    "Đào tạo": "/nganh-dao-tao",
    "Chương trình đào tạo": "/nganh-dao-tao",
    "Giới thiệu": "/gioi-thieu",
    "Khoa, phòng và trung tâm": "/phong-ban",
    "Đảm bảo chất lượng": "/dam-bao-chat-luong",
    "Công tác Đảng": "/gioi-thieu",
    "Nghiên cứu": "/nghien-cuu",
    "Nghiên cứu và nghiệp vụ": "/nghien-cuu",
    "Nghiên cứu khoa học": "/nghien-cuu",
    "Tài nguyên": "/van-ban-phap-luat",
    "Văn bản pháp luật": "/van-ban-phap-luat",
    "Bài viết khoa học": "/nghien-cuu",
    "Học viên – sinh viên": "/hoc-vien-sinh-vien",
    "Đời sống học đường": "/hoc-vien-sinh-vien",
    "Kết nối nhà trường": "/lien-he",
    "Cổng thông tin": "/"
  };
  const parentHref = parentRoutes[parent] || "/";
  return `<div class="breadcrumb-wrap"><div class="container"><nav aria-label="Điều hướng đường dẫn"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="#/">Trang chủ</a></li>${parent === "Trang chủ" ? "" : `<li class="breadcrumb-item"><a href="${routeHref(parentHref)}">${escapeHTML(parent)}</a></li>`}<li class="breadcrumb-item active" aria-current="page">${escapeHTML(title)}</li></ol></nav></div></div>`;
}

function banner(title, subtitle, parent) {
  return `<section class="page-banner"><div class="container"><span class="eyebrow">${escapeHTML(parent || "Trường Đại học Kiểm sát")}</span><h1>${escapeHTML(title)}</h1>${subtitle ? `<p>${escapeHTML(subtitle)}</p>` : ""}</div></section>`;
}

function sectionHeading(kicker, title, href, label = "Xem tất cả") {
  return `<div class="section-head"><div><p class="section-kicker">${escapeHTML(kicker)}</p><h2 class="section-title">${escapeHTML(title)}</h2></div><a class="section-link" href="${escapeHTML(href)}">${escapeHTML(label)} <i class="bi bi-arrow-right" aria-hidden="true"></i></a></div>`;
}

function newsRailItem(page) {
  return `<article class="news-rail-item"><div class="news-meta"><span class="news-tag">${escapeHTML(page.category)}</span></div><h3><a href="${routeHref(page.path)}">${escapeHTML(page.title)}</a></h3></article>`;
}

function homeNewsFeature(page) {
  return `<article class="home-news-feature"><a class="home-news-feature-image" href="${routeHref(page.path)}"><img src="${escapeHTML(page.image || campusImage)}" alt="${escapeHTML(page.title)}" loading="lazy" data-fallback><span class="home-news-image-arrow" aria-hidden="true"><i class="bi bi-arrow-up-right"></i></span></a><div class="home-news-feature-copy"><span class="home-news-category">${escapeHTML(page.category)}</span><h3><a href="${routeHref(page.path)}">${escapeHTML(page.title)}</a></h3><a class="home-news-more" href="${routeHref(page.path)}">Đọc tin <i class="bi bi-arrow-right" aria-hidden="true"></i></a></div></article>`;
}

function homeNewsListItem(page) {
  const thumbnail = page.image
    ? `<img src="${escapeHTML(page.image)}" alt="" loading="lazy" data-fallback>`
    : `<span class="home-news-placeholder" aria-hidden="true"><i class="bi bi-bank2"></i></span>`;
  return `<article class="home-news-list-item"><a class="home-news-list-image" href="${routeHref(page.path)}" tabindex="-1" aria-hidden="true">${thumbnail}</a><div><span class="home-news-category">${escapeHTML(page.category)}</span><h3><a href="${routeHref(page.path)}">${escapeHTML(page.title)}</a></h3></div></article>`;
}

function heroSlider() {
  const slides = heroSlides.map((slide, index) => `<div class="hero-slide${index === 0 ? " is-active" : ""}" role="group" aria-roledescription="slide" aria-label="${index + 1} / ${heroSlides.length}: ${escapeHTML(slide.label)}"><img src="${escapeHTML(slide.image)}" alt="" ${index === 0 ? 'fetchpriority="high"' : 'decoding="async"'}></div>`).join("");
  return `<div class="hero-slides">${slides}</div><p class="hero-slide-label" aria-live="polite">${escapeHTML(heroSlides[0].label)}</p><button class="hero-arrow hero-arrow-prev" type="button" data-slide-step="-1" aria-label="Ảnh trước"><i class="bi bi-chevron-left" aria-hidden="true"></i></button><button class="hero-arrow hero-arrow-next" type="button" data-slide-step="1" aria-label="Ảnh tiếp theo"><i class="bi bi-chevron-right" aria-hidden="true"></i></button>`;
}

function newsMarquee(items) {
  const card = (page, hidden) => {
    const thumbnail = page.image
      ? `<img src="${escapeHTML(page.image)}" alt="" loading="lazy" data-fallback>`
      : `<span class="marquee-card-placeholder"><i class="bi bi-bank2"></i></span>`;
    return `<a class="marquee-card" href="${routeHref(page.path)}"${hidden ? ' tabindex="-1"' : ""}><span class="marquee-card-image" aria-hidden="true">${thumbnail}</span><span class="marquee-card-copy"><span class="marquee-card-category">${escapeHTML(page.category)}</span><span class="marquee-card-title">${escapeHTML(page.title)}</span></span></a>`;
  };
  const group = (hidden) => `<div class="ticker-group"${hidden ? ' aria-hidden="true"' : ""}>${items.map((page) => card(page, hidden)).join("")}</div>`;
  return `<div class="ticker-track">${group(false)}${group(true)}</div>`;
}

function homeAdmissionsSidebar() {
  return `<aside class="home-sidebar" aria-label="Tuyển sinh và liên kết đào tạo"><section class="home-admissions-card"><p class="section-kicker">Tuyển sinh đại học</p><div class="home-admissions-title"><h3>Thông tin tuyển sinh</h3><span>2026</span></div><div class="home-admissions-code"><span>Mã Trường</span><strong>DKS</strong></div><p class="home-admissions-note">Chỉ tiêu dự kiến, phương thức và tổ hợp xét tuyển.</p><a class="btn btn-admissions w-100 justify-content-center" href="#/tuyen-sinh">Xem thông tin tuyển sinh <i class="bi bi-arrow-right" aria-hidden="true"></i></a><a class="home-admissions-source" href="${admissions2026.source}" target="_blank" rel="noopener noreferrer">Mở thông báo gốc <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i><span class="visually-hidden">(mở website chính thức)</span></a></section><nav class="home-sidebar-links" aria-label="Liên kết đào tạo"><a href="#/nganh-dao-tao"><i class="bi bi-mortarboard" aria-hidden="true"></i><span>Đào tạo đại học</span><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a><a href="#/nganh-dao-tao/thac-si-nganh-luat.html"><i class="bi bi-journal-bookmark" aria-hidden="true"></i><span>Đào tạo sau đại học</span><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a><a href="#/nganh-dao-tao/nganh-luat-chuyen-nganh-kiem-sat.html"><i class="bi bi-briefcase" aria-hidden="true"></i><span>Bồi dưỡng nghiệp vụ kiểm sát</span><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></nav><a class="home-sidebar-document" href="#/van-ban-phap-luat"><i class="bi bi-file-earmark-text" aria-hidden="true"></i><span><strong>Văn bản pháp luật</strong><small>Tra cứu văn bản và quy định</small></span><i class="bi bi-arrow-right" aria-hidden="true"></i></a></aside>`;
}

function programCard(page) {
  return `<a class="program-card" href="${routeHref(page.path)}"><i class="bi bi-journal-bookmark" aria-hidden="true"></i><strong>${escapeHTML(page.title)}</strong><span>Tìm hiểu chương trình <i class="bi bi-arrow-right" aria-hidden="true"></i></span></a>`;
}

function homeProgramCard(page, program) {
  const meta = program.meta.map((row) => `<span><i class="bi ${row.icon}" aria-hidden="true"></i>${escapeHTML(row.text)}</span>`).join("");
  return `<a class="program-tile program-tone-${program.tone}${program.featured ? " is-featured" : ""}" href="${routeHref(page.path)}"><span class="program-tile-icon" aria-hidden="true"><i class="bi ${program.icon}"></i></span><span class="program-tile-label">${escapeHTML(program.label)}</span><strong class="program-tile-title">${escapeHTML(program.title)}</strong><span class="program-tile-desc">${escapeHTML(program.description)}</span><span class="program-tile-meta">${meta}</span><span class="program-tile-btn">Xem chi tiết chương trình <i class="bi bi-arrow-right" aria-hidden="true"></i></span></a>`;
}

function homepageResearchSection() {
  return `<section class="section research-band"><div class="container"><div class="home-resource-grid"><a class="home-resource-link" href="#/thong-tin-nghiep-vu"><i class="bi bi-briefcase" aria-hidden="true"></i><strong>Thông tin nghiệp vụ</strong><span>Kỹ năng, kinh nghiệm thực tiễn trong công tác kiểm sát.</span></a><a class="home-resource-link" href="#/thong-tin-khoa-hoc"><i class="bi bi-journal-richtext" aria-hidden="true"></i><strong>Thông tin khoa học</strong><span>Đề tài, hội thảo và hoạt động nghiên cứu của Nhà trường.</span></a><a class="home-resource-link" href="#/bai-viet/quyen-cua-chu-the-du-lieu-ca-nhan-theo-quy-dinh-cua-luat-bao-ve-du-lieu-ca-nhan-nam-2025.html"><i class="bi bi-journal-text" aria-hidden="true"></i><strong>Bài viết khoa học</strong><span>Công trình, bài báo của giảng viên, học viên, sinh viên.</span></a></div><nav class="home-resource-secondary" aria-label="Chuyên mục nghiên cứu bổ sung"><a href="#/ksv-can-biet">Kiểm sát viên cần biết <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a><a href="https://khoahockiemsat.hpu.vn/" target="_blank" rel="noopener noreferrer">Tạp chí khoa học kiểm sát <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i></a></nav></div></section>`;
}

function homepageMediaSection(photosMarkup, videosMarkup) {
  return `<section class="section home-gallery-section"><div class="container"><div class="section-head"><div><p class="section-kicker">Hình ảnh hoạt động</p><h2 class="section-title">Khoảnh khắc tại Trường</h2></div><a class="section-link" href="#/album">XEM THÊM <i class="bi bi-arrow-right" aria-hidden="true"></i></a></div><ul class="nav nav-pills home-media-tabs" id="home-media-tabs" role="tablist"><li class="nav-item" role="presentation"><button class="nav-link active" id="home-photos-tab" data-bs-toggle="pill" data-bs-target="#home-photos" type="button" role="tab" aria-controls="home-photos" aria-selected="true">HÌNH ẢNH HOẠT ĐỘNG</button></li><li class="nav-item" role="presentation"><button class="nav-link" id="home-videos-tab" data-bs-toggle="pill" data-bs-target="#home-videos" type="button" role="tab" aria-controls="home-videos" aria-selected="false">VIDEO</button></li></ul><div class="tab-content"><div class="tab-pane fade show active" id="home-photos" role="tabpanel" aria-labelledby="home-photos-tab" tabindex="0"><div class="home-gallery-grid">${photosMarkup}</div><a class="home-gallery-more" href="#/album">XEM THÊM <i class="bi bi-arrow-right" aria-hidden="true"></i></a></div><div class="tab-pane fade" id="home-videos" role="tabpanel" aria-labelledby="home-videos-tab" tabindex="0"><div class="home-video-grid">${videosMarkup}</div></div></div></div></section>`;
}

function directoryCard(page, icon = "bi-building") {
  return `<article class="directory-card"><i class="bi ${icon}" aria-hidden="true"></i><h2>${escapeHTML(page.title)}</h2><p>${escapeHTML(page.category)}</p><a href="${routeHref(page.path)}">Xem thông tin <i class="bi bi-arrow-right" aria-hidden="true"></i></a></article>`;
}

function officialStudyResources() {
  return `<div class="official-study-resources"><span class="official-study-icon" aria-hidden="true"><i class="bi bi-folder2-open"></i></span><h2>Tài liệu đào tạo trên website Trường</h2><p>Trường công bố danh mục chương trình đào tạo và chuẩn đầu ra theo từng ngành. Mở danh mục để xem quyết định và tài liệu gốc mới nhất.</p><div class="study-resource-links">${officialStudyLinks.map((item) => `<a class="btn btn-outline-primary" href="${item.href}" target="_blank" rel="noopener noreferrer"><i class="bi ${item.icon} me-2" aria-hidden="true"></i>${item.label}<i class="bi bi-box-arrow-up-right ms-2" aria-hidden="true"></i><span class="visually-hidden">(mở website chính thức)</span></a>`).join("")}</div></div>`;
}

function quotaBreakdown() {
  const total = admissions2026.quotas.reduce((sum, item) => sum + item.quota, 0);
  const bar = admissions2026.quotas.map((item, index) => `<span class="quota-bar-segment quota-tone-${index}" style="--share:${(item.quota / total * 100).toFixed(2)}%"></span>`).join("");
  const label = admissions2026.quotas.map((item) => `${item.program}: ${item.quota}`).join("; ");
  const items = admissions2026.quotas.map((item, index) => `<article class="quota-item quota-tone-${index}"><strong data-count-to="${item.quota}" data-count-on-view>${item.quota}</strong><span>${escapeHTML(item.program)}</span><small>${escapeHTML(item.note)}</small></article>`).join("");
  return `<div class="quota-total"><strong data-count-to="${total}" data-count-on-view>${total.toLocaleString("vi-VN")}</strong><span>tổng chỉ tiêu dự kiến</span></div><div class="quota-bar" role="img" aria-label="Tỷ lệ chỉ tiêu theo ngành: ${escapeHTML(label)}">${bar}</div><div class="quota-grid">${items}</div>`;
}

function admissionsSnapshot() {
  return ``;
}

function homePage() {
  const featured = latestNews[0];
  const quotaFor = (name) => admissions2026.quotas.find((item) => item.program === name)?.quota;
  const generalIntake = "Tuyển sinh trong cả nước theo các phương thức xét tuyển của Trường năm 2026.";
  const combinations = { icon: "bi-ui-checks-grid", text: "11 tổ hợp xét tuyển" };
  const undergraduatePrograms = [
    { path: "/nganh-dao-tao/nganh-luat-chuyen-nganh-kiem-sat.html", title: "Ngành Luật (Chuyên ngành Kiểm sát)", icon: "bi-shield-check", tone: "gold", featured: true, label: "Đại học chính quy", description: "Tuyển sinh trong cả nước; thí sinh cần đạt sơ tuyển theo quy định của ngành Kiểm sát nhân dân.", meta: [{ icon: "bi-people", text: `Chỉ tiêu dự kiến: ${quotaFor("Luật, chuyên ngành Kiểm sát")}` }, { icon: "bi-geo-alt", text: "100 từ Hà Tĩnh trở ra; 100 từ Quảng Trị trở vào" }] },
    { path: "/nganh-dao-tao/ngon-ngu-anh-song-bang.html", title: "Ngôn ngữ Anh (Song bằng)", icon: "bi-translate", tone: "blue", label: "Chương trình song bằng", description: generalIntake, meta: [{ icon: "bi-people", text: `Chỉ tiêu dự kiến: ${quotaFor("Ngôn ngữ Anh")}` }, combinations] },
    { path: "/nganh-dao-tao/nganh-luat-kinh-te.html", title: "Ngành Luật Kinh tế", icon: "bi-graph-up-arrow", tone: "red", label: "Đại học chính quy", description: generalIntake, meta: [{ icon: "bi-people", text: `Chỉ tiêu dự kiến: ${quotaFor("Luật kinh tế")}` }, combinations] },
    { path: "/nganh-dao-tao/nganh-luat.html", title: "Ngành Luật", icon: "bi-bank2", tone: "navy", label: "Đại học chính quy", description: generalIntake, meta: [{ icon: "bi-people", text: `Chỉ tiêu dự kiến: ${quotaFor("Luật")}` }, combinations] }
  ];
  const postgraduateIntro = "Thông tin chương trình, tuyển sinh và chuẩn đầu ra được công bố trên website Trường.";
  const mastersPrograms = [
    { path: "/nganh-dao-tao/chuong-trinh-dao-tao-thac-si-hinh-su.html", title: "Thạc sĩ Hình sự", icon: "bi-journal-check", tone: "gold", featured: true, label: "Sau đại học", description: postgraduateIntro, meta: [{ icon: "bi-mortarboard", text: "Bậc đào tạo: Thạc sĩ" }] },
    { path: "/nganh-dao-tao/thac-si-nganh-luat.html", title: "Thạc sĩ ngành Luật", icon: "bi-book", tone: "blue", label: "Sau đại học", description: postgraduateIntro, meta: [{ icon: "bi-mortarboard", text: "Bậc đào tạo: Thạc sĩ" }] },
    { path: "/bai-viet/danh-muc/dao-tao-tien-si.html", title: "Đào tạo Tiến sĩ", icon: "bi-award", tone: "red", label: "Sau đại học", description: postgraduateIntro, meta: [{ icon: "bi-mortarboard", text: "Bậc đào tạo: Tiến sĩ" }] }
  ];
  const industryPanel = (title, kicker, href, items, className = "", linkLabel = "Xem tất cả") => {
    const [featured, ...related] = items;
    const featureMarkup = featured ? `<article class="ref-topic-feature"><a class="ref-topic-feature-image" href="${routeHref(featured.path)}"><img src="${escapeHTML(featured.image || campusImage)}" alt="${escapeHTML(featured.title)}" loading="eager" data-fallback></a><h3><a href="${routeHref(featured.path)}">${escapeHTML(featured.title)}</a></h3></article>` : "";
    const relatedMarkup = related.map((page) => `<article class="ref-topic-item"><a class="ref-topic-item-image" href="${routeHref(page.path)}"><img src="${escapeHTML(page.image || campusImage)}" alt="" loading="lazy" data-fallback></a><h3><a href="${routeHref(page.path)}">${escapeHTML(page.title)}</a></h3></article>`).join("");
    const alumniLink = className === "ref-digest" ? `<a class="ref-topic-related" href="#/blog/cuu-sinh-vien.html">Cựu sinh viên <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>` : "";
    return `<section class="home-topic-panel ${className}"><div class="home-topic-heading"><div><p class="section-kicker">${escapeHTML(kicker)}</p><h2 class="section-title">${escapeHTML(title)}</h2></div><a class="section-link" href="${routeHref(href)}">${escapeHTML(linkLabel)} <i class="bi bi-arrow-right" aria-hidden="true"></i></a></div>${featureMarkup}<div class="ref-topic-list">${relatedMarkup}</div>${alumniLink}</section>`;
  };
  const photosMarkup = homepagePhotos.map((photo) => `<a class="home-gallery-item" href="${routeHref(photo.path)}"><img src="${escapeHTML(photo.image)}" alt="${escapeHTML(photo.title)}" loading="lazy" data-fallback><span>${escapeHTML(photo.title)}</span></a>`).join("");
  const videosMarkup = homepageVideos.map((video) => `<article class="home-video-card"><div class="home-video-frame"><iframe src="https://www.youtube.com/embed/${escapeHTML(video.videoId)}" title="${escapeHTML(video.title)}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><h3>${escapeHTML(video.title)}</h3></article>`).join("");
  return `<section class="hero" data-hero-slider aria-roledescription="carousel" aria-label="Hình ảnh nổi bật">${heroSlider()}<div class="container"><div class="hero-content"><span class="eyebrow" data-typewriter="Đào tạo|Nghiên cứu khoa học|Bồi dưỡng nghiệp vụ kiểm sát"><span class="visually-hidden">Đào tạo · Nghiên cứu · Bồi dưỡng nghiệp vụ</span><span class="typewriter-text" aria-hidden="true">Đào tạo</span><span class="typewriter-caret" aria-hidden="true"></span></span><h1 data-split-words>Trường Đại học Kiểm sát</h1><p>Đào tạo, nghiên cứu khoa học và bồi dưỡng nghiệp vụ kiểm sát.</p><div class="hero-actions"><a class="btn btn-admissions" href="https://tuyensinh.kiemsat.edu.vn/" target="_blank" rel="noopener noreferrer">Thông tin tuyển sinh <i class="bi bi-arrow-up-right" aria-hidden="true"></i><span class="visually-hidden">(mở cổng tuyển sinh bên ngoài)</span></a><a class="btn btn-outline-light" href="#/bai-viet/lich-su-hinh-thanh-phat-trien-cua-truong-dai-hoc-kiem-sat-ha-noi.html">Tìm hiểu về Trường</a></div></div><div class="hero-facts" aria-label="Thông tin tuyển sinh năm 2026"><div class="hero-fact"><strong data-count-to="4" data-pad="2">04</strong><span>nhóm chỉ tiêu dự kiến</span></div><div class="hero-fact"><strong data-count-to="11">11</strong><span>tổ hợp xét tuyển</span></div><div class="hero-fact"><strong data-count-to="2026" data-count-from="2000">2026</strong><span>thông tin tuyển sinh</span></div><a class="hero-fact-source" href="${admissions2026.source}" target="_blank" rel="noopener noreferrer">Theo thông báo tuyển sinh chính thức <i class="bi bi-arrow-up-right" aria-hidden="true"></i><span class="visually-hidden">(mở website chính thức)</span></a></div></div></section>
    <section class="quick-links ref-quick-links" aria-label="Liên kết nhanh"><div class="container"><div class="row g-0">
      <div class="col-6 col-md-3"><a class="quick-link" href="#/tuyen-sinh"><i class="bi bi-mortarboard" aria-hidden="true"></i><div><strong>Tuyển sinh</strong><span>Đại học, thạc sĩ, tiến sĩ</span></div></a></div>
      <div class="col-6 col-md-3"><a class="quick-link" href="#/bai-viet/danh-muc/cong-tac-dang/"><i class="bi bi-bank" aria-hidden="true"></i><div><strong>Công tác Đảng</strong><span>Đảng ủy, chi bộ</span></div></a></div>
      <div class="col-6 col-md-3"><a class="quick-link" href="http://daotao.kiemsat.edu.vn/sinh-vien-dang-nhap.html" target="_blank" rel="noopener noreferrer"><i class="bi bi-person-vcard" aria-hidden="true"></i><div><strong>Học viên – sinh viên</strong><span>Lịch học, quy chế, hỗ trợ</span></div></a></div>
      <div class="col-6 col-md-3"><a class="quick-link" href="https://tkshcm.edu.vn/" target="_blank" rel="noopener noreferrer"><i class="bi bi-building" aria-hidden="true"></i><div><strong>Phân hiệu ĐHKS</strong><span>Tại TP. Hồ Chí Minh</span></div></a></div>
    </div></div></section>
    <section class="news-marquee" aria-labelledby="news-marquee-title"><div class="container news-marquee-head"><h2 id="news-marquee-title" class="news-marquee-title"><span class="live-dot" aria-hidden="true"></span>Mới cập nhật</h2><a class="section-link" href="#/tin-tuc">Tất cả tin <i class="bi bi-arrow-right" aria-hidden="true"></i></a></div><div class="container"><div class="news-marquee-viewport" data-ticker>${newsMarquee(latestNews)}</div></div></section>
    <section class="section home-news-section ref-home-news"><div class="container"><div class="home-news-heading"><div class="home-news-heading-label"><span>Tin tức – Sự kiện</span><h2>Tin hoạt động Trường</h2></div><a href="#/tin-tuc" class="home-news-heading-link">Xem tất cả tin <i class="bi bi-arrow-right" aria-hidden="true"></i></a></div><div class="home-news-layout"><div class="home-news-board"><div class="home-news-primary">${homeNewsFeature(featured)}</div><div class="home-news-list">${latestNews.slice(1, 10).map(homeNewsListItem).join("")}</div></div></div></div></section>
    ${homepageResearchSection()}
    <section class="section ref-information"><div class="container"><div class="ref-information-grid">
      ${industryPanel("Tin hoạt động ngành", "Tin tức – Sự kiện", "/blog/tin-hoat-dong-nganh.html", homepageIndustryNews, "ref-industry")}
      ${industryPanel("Tin tổng hợp", "Học viên – Sinh viên", "/hoc-vien-sinh-vien", homepageDigest, "ref-digest")}
      <div class="document-panel ref-documents-panel"><div class="section-head"><div><p class="section-kicker">Văn bản và thông báo</p><h2 class="section-title">Văn bản pháp luật</h2></div><a class="section-link" href="#/van-ban-phap-luat">Xem danh mục <i class="bi bi-arrow-right" aria-hidden="true"></i></a></div><div class="document-list">${legalDocs.map(documentListItem).join("")}</div></div>
    </div><nav class="ref-admission-news" aria-label="Thông báo tuyển sinh">${pages.filter((page) => page.category === "Tin tuyển sinh").slice(0, 4).map((page) => `<a href="${routeHref(page.path)}">${escapeHTML(page.title)} <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>`).join("")}</nav></div></section>
    <section class="section section-paper ref-programs"><div class="container"><div class="program-section-head"><span class="program-section-badge">Chương trình đào tạo</span><h2 class="program-section-title">Ngành đào tạo</h2><p>Đào tạo, nghiên cứu khoa học và bồi dưỡng nghiệp vụ kiểm sát.</p></div><ul class="nav nav-pills home-program-tabs" id="home-program-tabs" role="tablist"><li class="nav-item" role="presentation"><button class="nav-link active" id="home-undergraduate-tab" data-bs-toggle="pill" data-bs-target="#home-undergraduate" type="button" role="tab" aria-controls="home-undergraduate" aria-selected="true">Đào tạo Đại học</button></li><li class="nav-item" role="presentation"><button class="nav-link" id="home-masters-tab" data-bs-toggle="pill" data-bs-target="#home-masters" type="button" role="tab" aria-controls="home-masters" aria-selected="false">Đào tạo Sau Đại học (Thạc sĩ, Tiến sĩ)</button></li></ul><div class="tab-content home-program-content"><div class="tab-pane fade show active" id="home-undergraduate" role="tabpanel" aria-labelledby="home-undergraduate-tab" tabindex="0"><div class="home-program-grid">${undergraduatePrograms.map((item) => homeProgramCard(item, item)).join("")}</div></div><div class="tab-pane fade" id="home-masters" role="tabpanel" aria-labelledby="home-masters-tab" tabindex="0"><div class="home-program-grid home-masters-grid">${mastersPrograms.map((item) => homeProgramCard(item, item)).join("")}</div></div></div><div class="ref-program-resources">${admissionsSnapshot()}${officialStudyResources()}</div></div></section>
    ${homepageMediaSection(photosMarkup, videosMarkup)}
`;
}

function listPage(title, category, items, opts = {}) {
  const description = opts.description || "Danh mục nội dung được liên kết từ website chính thức của Trường Đại học Kiểm sát.";
  const content = opts.layout === "directory"
    ? items.length ? `<div class="row g-3">${items.map((page) => `<div class="col-md-6 col-lg-4">${directoryCard(page, opts.icon || "bi-building")}</div>`).join("")}</div>` : `<div class="empty-state">Thư viện ảnh chưa tải được từ website nguồn trong lần kiểm tra.</div>`
    : opts.layout === "research"
      ? items.length ? `<div class="research-link-grid">${items.map((page) => `<a class="research-link-card" href="${routeHref(page.path)}"><span class="research-link-icon"><i class="bi ${opts.icon || "bi-journal-richtext"}" aria-hidden="true"></i></span><span class="research-link-copy"><strong>${escapeHTML(page.title)}</strong><small>${escapeHTML(page.category)}</small></span><i class="bi bi-arrow-up-right research-link-arrow" aria-hidden="true"></i></a>`).join("")}</div>` : `<div class="empty-state">Chưa có nội dung để hiển thị trong danh mục này.</div>`
    : opts.layout === "programs"
      ? items.length ? `<div class="row g-3 program-grid">${items.map((page) => `<div class="col-sm-6 col-lg-4">${programCard(page)}</div>`).join("")}</div>` : `<div class="empty-state">Chưa có nội dung để hiển thị trong danh mục này.</div>`
      : items.length ? `<div id="news-list" class="article-list">${items.map((page) => articleListItem(page)).join("")}</div><nav class="mt-4" aria-label="Phân trang tin tức"><ul class="pagination" id="news-pagination"></ul></nav>` : `<div class="empty-state">Chưa có nội dung để hiển thị trong danh mục này.</div>`;
  return `${banner(title, description, category)}${crumb(title)}<section class="content-section"><div class="container"><div class="content-grid"><div>${content}</div><aside class="side-panel"><h2>Chuyên mục liên quan</h2><ul class="side-links">${relatedLinks(category)}</ul></aside></div></div></section>`;
}

function researchPage(path) {
  const collections = path === "/thong-tin-nghiep-vu"
    ? officialResearchCollections.slice(0, 1)
    : path === "/thong-tin-khoa-hoc"
      ? officialResearchCollections.slice(1)
      : officialResearchCollections;
  const content = collections.map((collection) => {
    const topics = collection.topics.map(([title, href]) => `<a class="research-link-card" href="${href}" target="_blank" rel="noopener noreferrer"><span class="research-link-icon"><i class="bi bi-folder2-open" aria-hidden="true"></i></span><span class="research-link-copy"><strong>${escapeHTML(title)}</strong><small>${escapeHTML(collection.title)}</small></span><i class="bi bi-box-arrow-up-right research-link-arrow" aria-hidden="true"></i></a>`).join("");
    const articles = collection.articles.map(([title, href]) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHTML(title)} <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i></a></li>`).join("");
    return `<section class="research-source-group"><div class="section-head"><div><p class="section-kicker">Danh mục chính thức</p><h2 class="section-title">${escapeHTML(collection.title)}</h2></div><a class="section-link" href="${collection.href}" target="_blank" rel="noopener noreferrer">Mở website Trường <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i></a></div><div class="research-link-grid">${topics}</div></section>`;
  }).join("");
  const title = path === "/thong-tin-nghiep-vu" ? "Thông tin nghiệp vụ" : path === "/thong-tin-khoa-hoc" ? "Thông tin khoa học" : "Nghiên cứu và nghiệp vụ";
  return `${banner(title, "Danh mục và bài viết được lấy từ các chuyên mục đang công khai trên website Trường Đại học Kiểm sát.", "Nghiên cứu")}${crumb(title, "Nghiên cứu")}<section class="content-section"><div class="container">${content}<p class="source-caption">Liên kết mở bài viết và danh mục tương ứng trên website chính thức của Trường.</p></div></section>`;
}

function galleryPage() {
  const galleryItems = pages.filter((page) => page.image).slice(0, 6);
  const content = galleryItems.length
    ? `<div class="gallery-grid">${galleryItems.map((page) => `<article class="gallery-card"><a class="gallery-image" href="${routeHref(page.path)}"><img src="${escapeHTML(page.image)}" alt="${escapeHTML(page.title)}" loading="lazy" data-fallback><span class="gallery-open" aria-hidden="true"><i class="bi bi-arrow-up-right"></i></span></a><div class="gallery-caption"><span class="news-tag">${escapeHTML(page.category)}</span><h2><a href="${routeHref(page.path)}">${escapeHTML(page.title)}</a></h2><a class="section-link" href="${routeHref(page.path)}">Xem bài viết <i class="bi bi-arrow-right" aria-hidden="true"></i></a></div></article>`).join("")}</div>`
    : `<div class="empty-state">Thư viện ảnh chưa tải được từ website nguồn trong lần kiểm tra.</div>`;
  return `${banner("Hình ảnh hoạt động", "Một số hình ảnh được sử dụng trong các tin bài chính thức của Trường.", "Học viên – sinh viên")}${crumb("Hình ảnh hoạt động")}<section class="content-section"><div class="container">${content}</div></section>`;
}

function articleListItem(page) {
  const image = page.image
    ? `<div class="article-list-image"><img src="${escapeHTML(page.image)}" alt="${escapeHTML(page.title)}" loading="lazy" data-fallback></div>`
    : `<div class="article-list-image d-flex align-items-center justify-content-center"><i class="bi bi-bank2 text-primary fs-2" aria-hidden="true"></i></div>`;
  return `<article class="article-list-item">${image}<div><div class="news-meta"><span class="news-tag">${escapeHTML(page.category)}</span></div><h2><a href="${routeHref(page.path)}">${escapeHTML(page.title)}</a></h2>${page.summary ? `<p>${escapeHTML(page.summary)}</p>` : ""}</div></article>`;
}

function relatedLinks(category) {
  const candidates = pages.filter((page) => page.category === category).slice(0, 5);
  return candidates.map((page) => `<li><a href="${routeHref(page.path)}">${escapeHTML(page.title)}</a></li>`).join("") || `<li><a href="#/tin-tuc">Tin tức và hoạt động</a></li>`;
}

function paginateNews(items, pageNumber = 1) {
  const pageSize = 8;
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  newsPage = Math.min(Math.max(pageNumber, 1), pageCount);
  const list = document.getElementById("news-list");
  const pagination = document.getElementById("news-pagination");
  if (!list || !pagination) return;
  const start = (newsPage - 1) * pageSize;
  list.innerHTML = items.slice(start, start + pageSize).map(articleListItem).join("");
  pagination.innerHTML = Array.from({ length: pageCount }, (_, index) => {
    const number = index + 1;
    return `<li class="page-item${number === newsPage ? " active" : ""}"><button class="page-link" type="button" data-page="${number}"${number === newsPage ? ' aria-current="page"' : ""}>${number}</button></li>`;
  }).join("");
}

function infoPage(page) {
  const isFaculty = page.category === "Khoa, phòng và trung tâm";
  const isProgram = page.category === "Chương trình đào tạo";
  const isResearch = page.category === "Nghiên cứu và nghiệp vụ";
  const intro = isFaculty
    ? "Đơn vị trực thuộc Trường Đại học Kiểm sát."
    : isProgram
      ? "Trường công bố chương trình đào tạo và chuẩn đầu ra theo từng ngành trên website chính thức. Chỉ tiêu tuyển sinh đại học năm 2026 được trình bày theo thông báo tuyển sinh của Trường."
      : isResearch
        ? "Chuyên mục thông tin chuyên môn của Trường Đại học Kiểm sát."
        : "Thông tin thuộc danh mục công khai của Trường Đại học Kiểm sát.";
  const links = isFaculty ? faculties : isProgram ? programs : pages.filter((item) => item.category === page.category);
}

function documentsPage() {
  return `${banner("Văn bản pháp luật", "Danh mục văn bản được liên kết từ trang chủ website chính thức.", "Tài nguyên")}${crumb("Văn bản pháp luật", "Tài nguyên")}<section class="content-section"><div class="container"><div class="document-list document-list-panel">${legalDocs.map(documentListItem).join("")}</div></div></section>`;
}

function documentListItem(doc) {
  const [identifier, title] = doc.title.split(" — ");
  return `<article class="document-item"><span class="document-icon"><i class="bi bi-file-earmark-text" aria-hidden="true"></i></span><div class="document-copy"><p class="document-identifier">${escapeHTML(identifier || "Văn bản")}</p><h2><a href="${routeHref(doc.path)}">${escapeHTML(title || doc.title)}</a></h2><p class="document-note">Mở trang văn bản</p></div><a class="document-action" href="${routeHref(doc.path)}" aria-label="Xem thông tin: ${escapeHTML(doc.title)}"><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></article>`;
}

function admissionPage() {
  const admissions = pages.filter((page) => page.category === "Tin tuyển sinh");
  const programMethods = [
    "Xét tuyển thẳng theo Quy chế tuyển sinh của Bộ Giáo dục và Đào tạo.",
    "Xét kết quả học tập THPT lớp 10, 11, 12; hoặc IELTS Academic từ 5.0; hoặc đạt giải học sinh giỏi Quốc gia (Khuyến khích) hay cấp tỉnh (Nhất, Nhì, Ba).",
    "Xét kết quả đánh giá năng lực: Đại học Quốc gia Hà Nội từ 60/150 điểm hoặc Đại học Quốc gia TP. Hồ Chí Minh từ 600/1200 điểm.",
    "Xét điểm thi tốt nghiệp THPT năm học 2025–2026 theo các tổ hợp A00, A01, C01, C02, C03, C04, D01, D07, D09, D14, D15."
  ];
  const prosecutorMethods = [
    "Sơ tuyển và xét tuyển thẳng theo Quy chế tuyển sinh của Bộ Giáo dục và Đào tạo.",
    "Sơ tuyển và xét học bạ lớp 10, 11, 12 đối với thí sinh học tại trường THPT chuyên hoặc hệ thống lớp chuyên trực thuộc đại học, tỉnh, thành phố; hoặc IELTS Academic từ 6.0; hoặc đạt giải học sinh giỏi Quốc gia (Khuyến khích) hay cấp tỉnh (Nhất, Nhì, Ba).",
    "Sơ tuyển và xét kết quả đánh giá năng lực: Đại học Quốc gia Hà Nội từ 70/150 điểm hoặc Đại học Quốc gia TP. Hồ Chí Minh từ 700/1200 điểm.",
    "Sơ tuyển và xét điểm thi tốt nghiệp THPT năm học 2025–2026 theo các tổ hợp A00, A01, C01, C02, C03, C04, D01, D07, D09, D14, D15."
  ];
  const subjectCombinations = [
    "A00 — Toán, Vật lý, Hóa học",
    "A01 — Toán, Vật lý, Tiếng Anh",
    "C01 — Toán, Ngữ văn, Vật lý",
    "C02 — Toán, Ngữ văn, Hóa học",
    "C03 — Toán, Ngữ văn, Lịch sử",
    "C04 — Toán, Ngữ văn, Địa lý",
    "D01 — Toán, Ngữ văn, Tiếng Anh",
    "D07 — Toán, Hóa học, Tiếng Anh",
    "D09 — Toán, Lịch sử, Tiếng Anh",
    "D14 — Ngữ văn, Lịch sử, Tiếng Anh",
    "D15 — Ngữ văn, Địa lý, Tiếng Anh"
  ];
  const methodList = (items) => `<ol class="admission-method-list">${items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ol>`;
  return `${banner("Thông tin tuyển sinh đại học 2026", "Chỉ tiêu dự kiến và phương thức theo thông báo chính thức của Trường Đại học Kiểm sát.", "Tuyển sinh")}${crumb("Thông tin tuyển sinh")}<section class="content-section"><div class="container"><div class="admission-source-note"><i class="bi bi-patch-check-fill" aria-hidden="true"></i><p><strong>Căn cứ:</strong> Thông tin tuyển sinh đại học năm 2026 ban hành kèm Quyết định số 308/QĐ-T2-ĐT ngày 03/03/2026 của Hiệu trưởng Trường.</p><a href="${admissions2026.source}" target="_blank" rel="noopener noreferrer">Mở thông báo gốc <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i><span class="visually-hidden">(mở website chính thức)</span></a></div><h2 class="section-title mb-3">Chỉ tiêu tuyển sinh dự kiến</h2><div class="quota-grid quota-grid-full">${admissions2026.quotas.map((item) => `<article class="quota-item"><strong>${item.quota}</strong><span>${escapeHTML(item.program)}</span><small>${escapeHTML(item.note)}</small></article>`).join("")}</div><div class="admission-methods"><article class="admission-method-card"><p class="section-kicker">200 chỉ tiêu dự kiến</p><h2>Luật, chuyên ngành Kiểm sát</h2><p class="method-intro">Tuyển sinh trong cả nước; thí sinh cần đạt sơ tuyển theo quy định của ngành Kiểm sát nhân dân.</p>${methodList(prosecutorMethods)}</article><article class="admission-method-card"><p class="section-kicker">1.400 chỉ tiêu dự kiến</p><h2>Luật, Luật kinh tế và Ngôn ngữ Anh</h2><p class="method-intro">Tuyển sinh trong cả nước theo các phương thức dưới đây.</p>${methodList(programMethods)}</article></div><div class="subject-combinations"><h2>Tổ hợp xét điểm thi tốt nghiệp THPT</h2><ul>${subjectCombinations.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul></div><div class="admission-doc-links"><h2>Tài liệu và thông tin liên quan</h2><a href="${admissions2026.quotaDocument}" target="_blank" rel="noopener noreferrer"><i class="bi bi-file-earmark-pdf" aria-hidden="true"></i> Đăng ký chỉ tiêu tuyển sinh năm 2026 (PDF)<i class="bi bi-box-arrow-up-right" aria-hidden="true"></i></a><a href="${admissions2026.detailedNotice}" target="_blank" rel="noopener noreferrer"><i class="bi bi-file-earmark-pdf" aria-hidden="true"></i> Thông tin tuyển sinh chi tiết năm 2026<i class="bi bi-box-arrow-up-right" aria-hidden="true"></i></a><a href="https://kiemsat.edu.vn/bai-viet/danh-muc/chuong-trinh-2591.html" target="_blank" rel="noopener noreferrer"><i class="bi bi-journal-text" aria-hidden="true"></i> Chương trình đào tạo theo ngành<i class="bi bi-box-arrow-up-right" aria-hidden="true"></i></a><a href="https://kiemsat.edu.vn/bai-viet/danh-muc/chuan-dau-ra-120550.html" target="_blank" rel="noopener noreferrer"><i class="bi bi-check2-circle" aria-hidden="true"></i> Chuẩn đầu ra theo ngành<i class="bi bi-box-arrow-up-right" aria-hidden="true"></i></a></div><p class="source-caption">Nguồn tuyển sinh: <a href="${admissions2026.source}" target="_blank" rel="noopener noreferrer">kiemsat.edu.vn</a>. Các mức chỉ tiêu trên là số dự kiến được nêu trong thông báo; yêu cầu theo từng phương thức, hồ sơ và lịch tuyển sinh chi tiết xem tại văn bản gốc.</p><h2 class="section-title mt-5 mb-3">Thông báo tuyển sinh khác</h2><div class="admissions-announcements">${admissions.map((page) => `<p><a href="${routeHref(page.path)}">${escapeHTML(page.title)} <i class="bi bi-arrow-right" aria-hidden="true"></i></a></p>`).join("")}</div></div></section>`;
}

function aboutPage() {
  const aboutPages = pages.filter((page) => page.category === "Giới thiệu");
  return `${banner("Giới thiệu Trường", "Các mục lịch sử, sứ mệnh, cơ cấu tổ chức và công khai được liên kết từ website chính thức.", "Trường Đại học Kiểm sát")}${crumb("Giới thiệu")}<section class="content-section"><div class="container"><div class="row g-3">${aboutPages.map((page) => `<div class="col-md-6 col-lg-4">${directoryCard(page, "bi-bank")}</div>`).join("")}</div><h2 class="section-title mt-5 mb-3">Khoa, phòng và trung tâm</h2><div class="row g-3">${faculties.slice(0, 6).map((page) => `<div class="col-md-6 col-lg-4">${directoryCard(page)}</div>`).join("")}</div></div></section>`;
}

function qualityPage() {
  const qualityPages = pages.filter((page) => page.category === "Đảm bảo chất lượng");
  return `${banner("Đảm bảo chất lượng", "Thông tin công khai về chất lượng giáo dục của Trường.", "Đảm bảo chất lượng")}${crumb("Đảm bảo chất lượng")}<section class="content-section"><div class="container"><div class="row g-3">${qualityPages.map((page) => `<div class="col-md-6 col-lg-4">${directoryCard(page, "bi-patch-check")}</div>`).join("")}</div></div></section>`;
}

function contactPage() {
  return `${banner("Liên hệ", "Thông tin liên hệ được trích từ chân trang website chính thức.", "Kết nối nhà trường")}${crumb("Liên hệ")}<section class="content-section"><div class="container"><div class="row g-3 mb-4"><div class="col-md-4"><section class="contact-card"><i class="bi bi-geo-alt" aria-hidden="true"></i><h2>Địa chỉ</h2><p>Số 59, ngõ 230, đường Ỷ La, phường Dương Nội, thành phố Hà Nội</p></section></div><div class="col-md-4"><section class="contact-card"><i class="bi bi-telephone" aria-hidden="true"></i><h2>Điện thoại</h2><p><a href="tel:+842433580467">0243.358.0467</a><br>Fax: 0243.358.0476</p></section></div><div class="col-md-4"><section class="contact-card"><i class="bi bi-envelope" aria-hidden="true"></i><h2>Email</h2><p><a href="mailto:phongdaotao.dhkshn@gmail.com">phongdaotao.dhkshn@gmail.com</a></p></section></div></div><form class="row g-3" id="contact-form"><div class="col-md-6"><label class="form-label" for="contact-name">Họ và tên <span class="text-danger">*</span></label><input class="form-control" id="contact-name" name="name" autocomplete="name" required></div><div class="col-md-6"><label class="form-label" for="contact-email">Địa chỉ email <span class="text-danger">*</span></label><input class="form-control" id="contact-email" name="email" type="email" autocomplete="email" required></div><div class="col-12"><label class="form-label" for="contact-subject">Chủ đề <span class="text-danger">*</span></label><input class="form-control" id="contact-subject" name="subject" required></div><div class="col-12"><label class="form-label" for="contact-message">Nội dung <span class="text-danger">*</span></label><textarea class="form-control" id="contact-message" name="message" required></textarea></div><div class="col-12"><button class="btn btn-primary" type="submit">Soạn email <i class="bi bi-envelope-arrow-up ms-1" aria-hidden="true"></i></button><p class="small text-secondary mt-2 mb-0" id="contact-status" role="status"></p></div></form></div></section>`;
}

function searchPage(query) {
  const normalized = normalizeSearch(query.trim());
  const results = normalized ? pages.filter((page) => normalizeSearch(`${page.title} ${page.category}`).includes(normalized)) : [];
  const body = results.length
    ? `<div class="article-list">${results.map(articleListItem).join("")}</div>`
    : `<div class="empty-state"><i class="bi bi-search fs-2 d-block mb-2" aria-hidden="true"></i>${normalized ? "Không tìm thấy nội dung phù hợp trong danh mục đã lập." : "Nhập từ khóa để tìm tin tức, chương trình đào tạo, khoa/phòng hoặc văn bản."}</div>`;
  return `${banner("Tìm kiếm", "Kết quả trong danh mục trang đã kiểm kê.", "Tìm kiếm")}${crumb("Tìm kiếm")}<section class="content-section"><div class="container"><form class="search-form mb-4" role="search" data-search-form><label class="visually-hidden" for="search-results-input">Tìm kiếm trên website</label><input id="search-results-input" class="form-control" name="q" type="search" value="${escapeHTML(query)}" placeholder="Nhập từ khóa..." required><button class="btn btn-primary" type="submit">Tìm kiếm</button></form><p class="text-secondary">${results.length} kết quả</p>${body}</div></section>`;
}

function routeContent(path, query) {
  if (path === "/" || path === "") return homePage();
  if (path === "/tuyen-sinh" || path === "/blog/tuyen-sinh") return admissionPage();
  if (path === "/gioi-thieu") return aboutPage();
  if (path === "/dam-bao-chat-luong") return qualityPage();
  if (path === "/lien-he") return contactPage();
  if (path === "/van-ban-phap-luat") return documentsPage();
  if (path === "/tim-kiem") return searchPage(query);
  if (path === "/tin-tuc" || path === "/blog/tin-hoat-dong-truong.html") return listPage("Tin tức và hoạt động", "Tin tức", homepageNews, { description: "Tin hoạt động trường và thông tin tuyển sinh được liên kết trên website chính thức." });
  if (path === "/blog/tin-hoat-dong-nganh.html") return listPage("Tin hoạt động ngành", "Tin tức", pages.filter((page) => page.category === "Tin hoạt động ngành"));
  if (path === "/nganh-dao-tao" || path === "/dao-tao") return listPage("Ngành đào tạo", "Đào tạo", programs, { layout: "programs", description: "Các chương trình đào tạo được liệt kê trên trang chủ website chính thức." });
  if (path === "/phong-ban") return listPage("Khoa, phòng và trung tâm", "Giới thiệu", faculties, { layout: "directory", description: "Danh mục đơn vị trực thuộc được phát hiện qua liên kết nội bộ.", icon: "bi-building" });
  if (path === "/nghien-cuu" || path === "/thong-tin-nghiep-vu" || path === "/thong-tin-khoa-hoc") return researchPage(path);
  if (path === "/hoc-vien-sinh-vien") return listPage("Học viên – sinh viên", "Đời sống học đường", pages.filter((page) => page.category === "Học viên – sinh viên"), { description: "Liên kết hoạt động học viên, sinh viên và cựu sinh viên được ghi nhận trên website." });
  if (path === "/album") return galleryPage();
  if (path === "/login") return `${banner("Cổng đăng nhập", "Đăng nhập qua cổng thông tin chính thức của Trường.", "Cổng thông tin")}${crumb("Cổng đăng nhập", "Cổng thông tin")}<section class="content-section"><div class="container"><a class="btn btn-primary" href="https://kiemsat.edu.vn/login" target="_blank" rel="noopener noreferrer">Mở cổng đăng nhập <i class="bi bi-box-arrow-up-right ms-2" aria-hidden="true"></i></a></div></section>`;
  const page = pageFor(path);
  return `${banner("Trang chưa có trong danh mục", "Đường dẫn này chưa được lập nội dung trong bản dựng hiện tại.", "Trường Đại học Kiểm sát")}${crumb("Trang chưa có trong danh mục")}<section class="content-section"><div class="container"><div class="empty-state">Vui lòng sử dụng điều hướng để tìm nội dung trong phạm vi đã kiểm kê.</div></div></section>`;
}

function getCurrentRoute() {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const [path, queryString = ""] = raw.split("?");
  const params = new URLSearchParams(queryString);
  return { path: decodeURIComponent(path), query: params.get("q") || "" };
}

function updateActiveNavigation(path) {
  const page = pageFor(path);
  document.querySelectorAll(".main-nav .nav-link").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const route = href.replace(/^#/, "");
    const active = route === path
      || (route === "/tin-tuc" && (path.startsWith("/tin-tuc/") || path === "/blog/tin-hoat-dong-truong.html"))
      || (route === "/nganh-dao-tao" && (path.startsWith("/nganh-dao-tao/") || path === "/dao-tao"))
      || (route === "/nghien-cuu" && page?.category === "Nghiên cứu và nghiệp vụ")
      || (route === "/phong-ban" && page?.category === "Khoa, phòng và trung tâm")
      || (route === "/gioi-thieu" && page?.category === "Giới thiệu")
      || (route === "/dam-bao-chat-luong" && page?.category === "Đảm bảo chất lượng");
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function initializeRevealAnimations() {
  revealObserver?.disconnect();
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const targets = document.querySelectorAll(
    "#app .section-head, #app .featured-news, #app .news-rail, #app .admissions-panel, #app .document-panel, #app .program-card, #app .resource-row, #app .directory-card, #app .article-list-item, #app .document-item, #app .side-panel, #app .alert-review, #app .contact-card, #app .content-table-wrap, #app .home-news-heading, #app .home-news-feature, #app .home-news-list-item, #app .home-sidebar, #app .home-topic-panel, #app .home-gallery-item, #app .quick-link, #app .program-tile, #app .home-resource-link, #app .ref-topic-item, #app .quota-item, #app .ref-admission-news a, #app .home-video-card"
  );
  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -28px 0px" });

  targets.forEach((target, index) => {
    target.classList.add("reveal-on-scroll");
    target.style.setProperty("--reveal-delay", `${(index % 4) * 55}ms`);
    revealObserver.observe(target);
  });
}

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let effectCleanups = [];

// Each effect sets itself up on the freshly rendered route and returns a cleanup function.
function useSplitWords(root) {
  root.querySelectorAll("[data-split-words]").forEach((heading) => {
    const text = heading.textContent.trim();
    heading.setAttribute("aria-label", text);
    heading.innerHTML = text.split(/\s+/).map((word, index) => `<span class="split-word" aria-hidden="true" style="--i:${index}">${escapeHTML(word)}</span>`).join(" ");
    heading.classList.add("is-split");
  });
}

function useTypewriter(root) {
  const timers = [];
  root.querySelectorAll("[data-typewriter]").forEach((element) => {
    const output = element.querySelector(".typewriter-text");
    const words = element.dataset.typewriter.split("|");
    if (!output || words.length < 2 || prefersReducedMotion()) return;
    let wordIndex = 0;
    let length = words[0].length;
    let deleting = false;
    const tick = () => {
      const word = words[wordIndex];
      length += deleting ? -1 : 1;
      output.textContent = word.slice(0, length);
      let delay = deleting ? 38 : 75;
      if (!deleting && length >= word.length) { deleting = true; delay = 1800; }
      else if (deleting && length <= 0) { deleting = false; wordIndex = (wordIndex + 1) % words.length; delay = 350; }
      timers.push(setTimeout(tick, delay));
    };
    deleting = true;
    timers.push(setTimeout(tick, 2200));
  });
  return () => timers.forEach(clearTimeout);
}

function useCountUp(root) {
  const frames = [];
  if (prefersReducedMotion()) return;
  const animate = (element) => {
    const to = Number(element.dataset.countTo);
    const from = Number(element.dataset.countFrom || 0);
    const pad = Number(element.dataset.pad || 0);
    const duration = 1400;
    const start = performance.now() + (element.hasAttribute("data-count-on-view") ? 0 : 350);
    const format = (value) => to >= 1000 ? value.toLocaleString("vi-VN") : String(value).padStart(pad, "0");
    const step = (now) => {
      const progress = Math.min(Math.max((now - start) / duration, 0), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = format(Math.round(from + (to - from) * eased));
      if (progress < 1) frames.push(requestAnimationFrame(step));
    };
    frames.push(requestAnimationFrame(step));
  };
  const observer = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      animate(entry.target);
    });
  }, { threshold: 0.6 }) : null;
  root.querySelectorAll("[data-count-to]").forEach((element) => {
    if (element.hasAttribute("data-count-on-view") && observer) {
      element.textContent = element.dataset.countFrom || "0";
      observer.observe(element);
    }
    else animate(element);
  });
  return () => {
    observer?.disconnect();
    frames.forEach(cancelAnimationFrame);
  };
}

function useTicker(root) {
  root.querySelectorAll("[data-ticker] .ticker-track").forEach((track) => {
    const groupWidth = track.firstElementChild?.scrollWidth || 0;
    track.style.setProperty("--ticker-duration", `${Math.max(groupWidth / 40, 30)}s`);
    track.classList.add("is-running");
  });
}

function useHeroSlider(root) {
  const hero = root.querySelector("[data-hero-slider]");
  if (!hero) return;
  const slides = [...hero.querySelectorAll(".hero-slide")];
  const label = hero.querySelector(".hero-slide-label");
  const interval = 6000;
  let current = 0;
  let timer;
  let paused = false;
  hero.style.setProperty("--slide-duration", `${interval}ms`);

  const goTo = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === current));
    if (label) label.textContent = heroSlides[current].label;
    schedule();
  };
  const schedule = () => {
    clearTimeout(timer);
    if (!paused && !prefersReducedMotion()) timer = setTimeout(() => goTo(current + 1), interval);
  };
  const setPaused = (value) => {
    paused = value;
    hero.classList.toggle("is-paused", value);
    if (value) clearTimeout(timer);
    else goTo(current);
  };

  const onClick = (event) => {
    const arrow = event.target.closest("[data-slide-step]");
    if (arrow) goTo(current + Number(arrow.dataset.slideStep));
  };
  let startX = null;
  const onPointerDown = (event) => { if (event.pointerType !== "mouse") startX = event.clientX; };
  const onPointerUp = (event) => {
    if (startX === null) return;
    const deltaX = event.clientX - startX;
    startX = null;
    if (Math.abs(deltaX) > 50) goTo(current + (deltaX < 0 ? 1 : -1));
  };
  const onEnter = () => setPaused(true);
  const onLeave = () => setPaused(false);
  const onFocusOut = (event) => { if (!hero.contains(event.relatedTarget)) setPaused(false); };
  const onVisibility = () => setPaused(document.hidden);

  hero.addEventListener("click", onClick);
  hero.addEventListener("pointerdown", onPointerDown);
  hero.addEventListener("pointerup", onPointerUp);
  hero.addEventListener("mouseenter", onEnter);
  hero.addEventListener("mouseleave", onLeave);
  hero.addEventListener("focusin", onEnter);
  hero.addEventListener("focusout", onFocusOut);
  document.addEventListener("visibilitychange", onVisibility);
  hero.classList.add("is-ready");
  schedule();
  return () => {
    clearTimeout(timer);
    document.removeEventListener("visibilitychange", onVisibility);
  };
}

function useSpotlight() {
  if (window.matchMedia("(hover: none)").matches) return;
  const selector = ".quick-link, .home-program-card, .home-resource-link, .ref-admission-news a, .home-topic-panel, .document-panel";
  const onMove = (event) => {
    const card = event.target.closest(selector);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };
  app.addEventListener("pointermove", onMove);
  return () => app.removeEventListener("pointermove", onMove);
}

function initializeEffects() {
  effectCleanups.forEach((cleanup) => cleanup?.());
  effectCleanups = [useSplitWords(app), useTypewriter(app), useCountUp(app), useTicker(app), useHeroSlider(app), useSpotlight()];
}

function render() {
  const { path, query } = getCurrentRoute();
  app.innerHTML = routeContent(path, query);
  initializeEffects();
  initializeRevealAnimations();
  updateActiveNavigation(path);
  const routeTitles = {
    "/": "Trường Đại học Kiểm sát",
    "/gioi-thieu": "Giới thiệu Trường",
    "/dam-bao-chat-luong": "Đảm bảo chất lượng",
    "/tin-tuc": "Tin tức và hoạt động",
    "/nganh-dao-tao": "Ngành đào tạo",
    "/dao-tao": "Ngành đào tạo",
    "/phong-ban": "Khoa, phòng và trung tâm",
    "/nghien-cuu": "Nghiên cứu và nghiệp vụ",
    "/hoc-vien-sinh-vien": "Học viên – sinh viên",
    "/van-ban-phap-luat": "Văn bản pháp luật",
    "/tuyen-sinh": "Thông tin tuyển sinh",
    "/lien-he": "Liên hệ",
    "/tim-kiem": "Tìm kiếm",
    "/album": "Hình ảnh hoạt động"
  };
  const title = pageFor(path)?.title || routeTitles[path] || "Trường Đại học Kiểm sát";
  document.title = `${title} | Trường Đại học Kiểm sát`;
  primaryNav.classList.remove("show");
  navToggle.setAttribute("aria-expanded", "false");
  document.querySelectorAll("#primaryNav .dropdown-menu.show").forEach((menu) => menu.classList.remove("show"));
  window.scrollTo({ top: 0, behavior: "instant" });
  if (path === "/tin-tuc" || path === "/blog/tin-hoat-dong-truong.html") paginateNews(homepageNews, 1);
  document.querySelectorAll("img[data-fallback]").forEach((image) => {
    image.addEventListener("error", () => {
      image.hidden = true;
    }, { once: true });
  });
}

document.addEventListener("click", (event) => {
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    paginateNews(homepageNews, Number(pageButton.dataset.page));
    document.getElementById("news-list")?.scrollIntoView({ block: "start", behavior: "smooth" });
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-search-form]");
  if (form) {
    event.preventDefault();
    const query = new FormData(form).get("q");
    if (query && String(query).trim()) window.location.hash = `/tim-kiem?q=${encodeURIComponent(String(query).trim())}`;
    searchPanel.hidden = true;
    searchToggle.setAttribute("aria-expanded", "false");
    return;
  }
  if (event.target.id === "contact-form") {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    const formData = new FormData(event.target);
    const subject = String(formData.get("subject")).trim();
    const body = `Họ và tên: ${String(formData.get("name")).trim()}\nEmail: ${String(formData.get("email")).trim()}\n\n${String(formData.get("message")).trim()}`;
    const status = document.getElementById("contact-status");
    status.textContent = "Đang mở ứng dụng email để bạn gửi thư. Chưa có dữ liệu nào được gửi lên website.";
    window.location.href = `mailto:phongdaotao.dhkshn@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
});

searchToggle.addEventListener("click", () => {
  searchPanel.hidden = !searchPanel.hidden;
  searchToggle.setAttribute("aria-expanded", String(!searchPanel.hidden));
  if (!searchPanel.hidden) document.getElementById("site-search").focus();
});

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") !== "true";
  navToggle.setAttribute("aria-expanded", String(expanded));
  primaryNav.classList.toggle("show", expanded);
});

primaryNav.addEventListener("click", (event) => {
  const submenuLink = event.target.closest(".dropdown-menu a");
  if (!submenuLink) return;
  const dropdown = submenuLink.closest(".dropdown");
  dropdown.classList.add("is-dismissed");
  dropdown.querySelector(":scope > .dropdown-toggle")?.setAttribute("aria-expanded", "false");
  dropdown.querySelector(":scope > .dropdown-menu")?.classList.remove("show");
  submenuLink.blur();
});

const desktopNavigation = window.matchMedia("(min-width: 992px)");
primaryNav.querySelectorAll(".dropdown").forEach((dropdown) => {
  const toggle = dropdown.querySelector(":scope > .dropdown-toggle");
  const menu = dropdown.querySelector(":scope > .dropdown-menu");
  if (!toggle || !menu) return;

  dropdown.addEventListener("mouseenter", () => {
    if (desktopNavigation.matches) {
      dropdown.classList.remove("is-dismissed");
      toggle.setAttribute("aria-expanded", "true");
    }
  });
  dropdown.addEventListener("mouseleave", () => {
    dropdown.classList.remove("is-dismissed");
    if (desktopNavigation.matches && !menu.classList.contains("show")) toggle.setAttribute("aria-expanded", "false");
  });
  dropdown.addEventListener("focusin", () => {
    if (desktopNavigation.matches) {
      dropdown.classList.remove("is-dismissed");
      toggle.setAttribute("aria-expanded", "true");
    }
  });
  dropdown.addEventListener("focusout", (event) => {
    if (desktopNavigation.matches && !dropdown.contains(event.relatedTarget) && !menu.classList.contains("show")) {
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});

const siteHeader = document.querySelector(".site-header");
const scrollProgress = document.createElement("div");
scrollProgress.className = "scroll-progress";
scrollProgress.setAttribute("aria-hidden", "true");
document.body.prepend(scrollProgress);
let scrollFrame;
window.addEventListener("scroll", () => {
  cancelAnimationFrame(scrollFrame);
  scrollFrame = requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 40);
  });
}, { passive: true });

window.addEventListener("hashchange", render);
render();
