# Presentation Template — SingleInterface × Beta · GBP Proposal
> Trích xuất từ `beta.html` v3.6 (BYD Việt Nam, 16-06-2026) · **18 slides**
> Khi tái sử dụng cho khách hàng khác, thay thế các **[PLACEHOLDER]** và giữ nguyên cấu trúc.

---

## QUYẾT ĐỊNH THIẾT KẾ BẤT BIẾN

Những điểm này đã được test và chuẩn hoá — không thay đổi giữa các client:

1. **18 slides** — số lượng cố định, đã trimmed từ 27→18 qua nhiều vòng review. Không thêm slide mới trừ khi có lý do rất mạnh.
2. **Mỗi slide có 1 takeaway** — khối `.takeaway` (amber bar + bold key phrase) ở cuối. Không bỏ bất kỳ slide nào.
3. **Vị trí dark/light đã cố định** — slides 1, 5, 13, 16, 18 là dark. Giữ nhịp này.
4. **Footer trên mọi slide** — `.foot` với wordmark trái, tên client · chủ đề phải.
5. **Kicker + slide counter** — format `NN / 18` — cập nhật nếu đổi tổng số.
6. **Không dùng emoji** — tất cả icon đều là SVG stroke. Đây là quyết định đã chuẩn hoá từ v1.2.
7. **Nguồn dẫn data** — mọi stat phải có nguồn inline (font-size 16px, color `--ink-3`).
8. **Ảnh thực tế** — 2 file: `loc.png` (không gian/showroom) và `man.png` (nhân viên). Dùng `data-bg-name` để auto-detect png/jpg.

---

## TOÀN BỘ 18 SLIDES — NỘI DUNG & LƯU Ý

---

### SLIDE 01 — Title / Hook
**Class:** `section.dark` | **Layout:** `.frame.center` | **Kicker:** `Đề xuất chiến lược · [Chủ đề dịch vụ]`

**Headline (`.h.h-xl`, max-width 1500px):**
```
Hàng nghìn người tìm "[từ khoá search của người dùng cuối]".
[Tên công ty khách hàng] có xuất hiện không?
```
- Hook **luôn là câu hỏi**. Câu hỏi phải chứa từ khoá thực tế người dùng gõ trên Google.
- Phần highlight trong `.accent`: cụm từ search (ví dụ: `"xe điện gần đây"`).

**Sub (font-size: 30px):** Giải pháp + tên công ty + định vị ngành (ví dụ: `Hãng xe điện #1 thế giới`).

**Wordmark block:**
```html
<span class="wm">SingleInterface<span class="x">×</span>Beta</span>
| [DD · MM · YYYY]
```

**Foot:** `SingleInterface × Beta` | `Đề xuất gửi [TÊN KHÁCH HÀNG]`

---

### SLIDE 02 — 2 Big Stats
**Class:** `section` (light) | **Layout:** `.split` trong `.midfill`
**Kicker:** `Khoảnh khắc quyết định` | **Counter:** `02 / 18`

**Headline (`.h.h-md`, max-width 1500px, dùng `.hl` highlight):**
```
[Stat chính] tổng click rơi vào [N kết quả đầu] trên [Nền tảng].
Ai đang chiếm [N vị trí đó] [khu vực khách hàng]?
```

**2 Cards (`.split`, padding 40px 38px, `align-items: stretch`):**

**Card trái (blue tint — `border-color: rgba(43,108,176,.3)`, `background: rgba(43,108,176,.04)`):**
- Icon SVG map-pin màu `--blue`
- Label ALLCAPS IBM Plex Mono, màu `--blue`
- `.bigstat` font-size **120px**, màu `--blue` — con số thị trường (ví dụ: `42%`)
- Tên metric bold + mô tả
- Nguồn data (font-size 16px, ink-3)

**Card phải (green tint — `border-color: rgba(47,143,107,.3)`, `background: rgba(47,143,107,.04)`):**
- Icon SVG info màu `--good`
- Label ALLCAPS IBM Plex Mono, màu `--good`
- `.bigstat` font-size **88px**, màu `--good` — con số về client (ví dụ: `2.26M`)
- Tên metric + phụ đề
- Mô tả vị thế thị trường
- Nguồn data

> **Tension quan trọng:** Card phải PHẢI kể câu chuyện "#1 thế giới nhưng chưa là #1 tại địa phương". Đây là lý do tồn tại của toàn bộ pitch.

**Takeaway:** Kết nối stat thị trường với tổn thất cụ thể nếu không hành động. Nêu tên đối thủ cụ thể.

---

### SLIDE 03 — Storytelling / Persona
**Class:** `section` (light) | **Layout:** `.flow` 4 steps trong `.midfill`
**Kicker:** `Vấn đề` | **Counter:** `03 / 18`

**Headline (`.h.h-md`):**
```
Hãy gặp [Tên nhân vật] — [mô tả: "một khách hàng X chưa bao giờ có"]
```
- Dùng tên phổ biến của thị trường. Tên phải tạo sự nhận diện cho audience.

**4 Flow Steps** (`.flow` → `.step` + `.arr`):

| Step | Style | Nội dung | Badge |
|------|-------|----------|-------|
| 1 | neutral | Nhu cầu khách hàng (icon: user, màu blue) | `.num-badge` navy |
| 2 | neutral | Search Google Maps (icon: search, màu blue) | `.num-badge` navy |
| 3 | **bad** (red tint) | Maps hiện N kết quả — không có [Brand] | `.num-badge` navy |
| 4 | **bad** (red tint) | Đến showroom đối thủ | `.num-badge` background `--bad` |

- Steps 3-4: `border-color: rgba(192,73,47,.3)`, `background: rgba(192,73,47,.04)`
- Step 4 badge: `background: var(--bad)` (đỏ)
- Tên đối thủ phải cụ thể (VinFast, Hyundai, Tesla…)

**Takeaway:** Kết luận nhân văn — không phải lỗi của khách, họ chỉ không tìm thấy. Nêu scale: "hàng nghìn [tên nhân vật] như vậy mỗi ngày".

---

### SLIDE 04 — Maps vs Website
**Class:** `section` (light) | **Layout:** `.split` (50/50) trong `.midfill`
**Kicker:** `Thực tế` | **Counter:** `04 / 18`

**Headline (`.h.h-sm`):**
```
[Kênh mới] xuất hiện TRƯỚC [kênh cũ] — [1 action ngắn] vs [N-M bước]
```
Dùng `.hl` (yellow highlight) cho cụm hành động ngắn (ví dụ: `1 tap`).

**Cột trái — `.mapbg`** (map grid background):
- Pill header amber (Map Pack) + "42% CLICK" label màu blue
- `.mp` mockup 3 kết quả:
  - Slot 1: `.res.win` (amber highlight) — **đối thủ #1** với rating cao
  - Slot 2: `.res` — đối thủ #2
  - Slot 3: `.res` — đối thủ #3
  - Dòng đỏ cuối: "[BRAND] KHÔNG CÓ TRONG DANH SÁCH"

> **Lưu ý:** Slot 1 là đối thủ, không phải client — đây là "before state". Tạo nỗi đau tối đa.

**Cột phải — `.card` + `.ctab`:**
Bảng so sánh 5 hành động (Maps vs Website):

| Hành động | Maps | Kênh cũ |
|-----------|------|---------|
| Gọi | **1 tap** | 5+ bước |
| Đường đi | **1 tap** | Copy → paste |
| Reviews | **Thấy ngay** | Không có |
| Book [hành động] | **1 tap** | Form → chờ 24h |
| Xem [sản phẩm/dịch vụ] | **Products tab** | Navigate nhiều |

- Cột Maps: class `new col-new`, `<b>` text
- Cột cũ: class `old` (muted)

**Takeaway:** Khách LUÔN chọn con đường ngắn nhất. Nêu giá trị sản phẩm (ví dụ: "xe 500M-2.4 tỷ").

---

### SLIDE 05 — 7 Cơ Hội Bỏ Lỡ
**Class:** `section.dark` | **Layout:** `.grid` 3 cột trong `.midfill`
**Kicker:** `Cơ hội` | **Counter:** `05 / 18`

**Headline (`.h.h-sm`, màu `#fff`):**
```
7 cơ hội [Tên Brand] đang bỏ lỡ mỗi ngày
```

**7 Cards + 1 Highlight** (grid 3×3, card cuối `grid-column: span 2`):

| # | Grid pos | Tiêu đề (gợi ý) | Mô tả |
|---|----------|-----------------|-------|
| 1 | (1,1) | [N] [địa điểm] — chỉ 1 GBP mỗi nơi | Chưa tách dept → lãng phí slots miễn phí |
| 2 | (1,2) | [Nhân viên] chưa có GBP cá nhân | Khách tìm [chức danh + khu vực] không thấy |
| 3 | (1,3) | [Tài sản đặc thù ngành] chưa có GBP | Ví dụ: trạm sạc, ATM, phòng khám... |
| 4 | (2,1) | Chưa book [hành động chính] trên Maps | Dẫn xuống website → rơi rớt leads |
| 5 | (2,2) | Thương hiệu mới, ít reviews | So với đối thủ lâu năm |
| 6 | (2,3) | Thông tin bị sửa đổi trái phép | Đối thủ/vandal đổi giờ/số điện thoại |
| 7 | (3,1) | Không đo lường hiệu quả | Quote: "Không đo được = không quản lý được" |
| 7× | (3,2-3) | **Highlight amber** | `font-size: 42px` bold: "7×" + "mỗi ngày, mỗi [đơn vị], cùng một lúc." |

- Mỗi card dark: icon SVG màu amber + title `font-size: 21px` bold white + desc màu `--blue-100`
- Highlight card: `background: var(--amber)`, `color: var(--navy-900)`, `grid-column: span 2`

> **Lưu ý ngôn ngữ:** Dùng "cơ hội bỏ lỡ" — KHÔNG dùng "vấn đề" hay "lỗi". Framing tích cực: client là winner, chỉ cần công cụ thêm.

**Takeaway:** Không cơ hội nào tự mất. Nếu bỏ qua, đối thủ tận dụng trước.

---

### SLIDE 06 — GBP Là Gì
**Class:** `section` (light) | **Layout:** `.split.tilt` (1.05fr / 0.95fr), `align-items: center`
**Kicker:** `Giải thích` | **Counter:** `06 / 18`

**Headline (`.h.h-sm`):**
```
[Tên nền tảng] = "Tấm danh thiếp thông minh" trên [Nền tảng Maps]
```

**Cột trái:**
- Sub (font-size 20px): giải thích 1 câu, nhấn **miễn phí**
- Grid 2 cột, **10 `.chip9`** (icon blue + label):
  1. Tên [đơn vị] + department
  2. Đánh giá từ khách thật
  3. Địa chỉ + Chỉ đường 1 tap
  4. Giờ mở cửa chính xác
  5. Số tổng đài + Gọi 1 tap
  6. Ảnh [đơn vị] + virtual tour
  7. Products: [N] models + giá
  8. Đặt lịch [hành động] 1 tap
  9. Bài viết: [sản phẩm mới], ưu đãi
  10. Q&A: "[Câu hỏi thường gặp ngành]"

**Cột phải — `.gbp` mockup** (max-width 480px, justify-self center):
- `.photo` — ảnh `loc.png` với `data-bg-name="loc"`, `aspect-ratio: 16/9`
- `.name`: `[Brand] [Địa điểm] — [Dept]`
- `.cat`: `[Primary Category] · [Secondary Category]`
- `.rate`: 4.8★ + stars + review count
- `.rows`: 3 rows (địa chỉ, giờ, phone tổng đài)
- `.actions`: 4 buttons (Gọi / Đường đi / [Hành động ngành] / Website)

> **Tên GBP chuẩn:** Format `[Brand] [Địa điểm] — [Department]`. Dấu `—` (em dash) là chuẩn, không dùng dấu `-`.
> **Action button thứ 3** đổi theo ngành: Lái thử → Đặt lịch → Đặt bàn → Tư vấn...

**Takeaway:** Google tự động hiển thị MIỄN PHÍ — nhưng nếu không tối ưu thì Google hiển thị đối thủ.

---

### SLIDE 07 — Department Domination
**Class:** `section` (light) | **Layout:** 2 rows grid (5 cols + 3 cols)
**Kicker:** `Đặc quyền ngành [tên ngành]` | **Counter:** `07 / 18`

**Headline (`.h.h-sm`):**
```
1 [Địa điểm] [Brand] = [N] GBP + [Nhân viên] + [Tài sản đặc thù] — Đặc quyền chỉ ngành [X]!
```

**Row 1 — `grid-template-columns: repeat(5,1fr)`:**

Mỗi department card (`.card`, `padding: 16px`, `border-left: 4px solid [màu]`):
| Dept | Border/Icon colour | GBP Name | Google Category |
|------|--------------------|----------|----------------|
| Sales | amber | [Brand] Sales | Car Dealer |
| Service | blue | [Brand] Service | Auto Repair Shop |
| Parts | green | [Brand] Parts | Auto Parts Store |
| [Đặc thù ngành] | #9b59b6 | [Brand] [Đặc thù] | [Category] |
| Stat card | paper-2 bg, no border-left | `1 → 4+` (font-weight 800, font-size 36px) | "1 địa chỉ" |

**Row 2 — `grid-template-columns: 1fr 1fr 1fr`:**

Left: Map Pack mockup — 3 slots trong `.mp`:
- Slot 1: `.res.win` — [Brand] Showroom → Sales
- Slot 2: `.res.win` — [Nhân viên] [Brand] → Sales Profile
- Slot 3: `.res` (neutral) — Đối thủ chỉ còn 1 slot

Right (span 2): 2 metric cards + 1 competitive card

Hoặc: 2 nhân viên profile cards + 1 "blue ocean" advantage card như trong BYD.

> **Lưu ý slide quan trọng nhất:** Cần nêu rõ đây là đặc quyền duy nhất của ngành. Câu so sánh: "Ngân hàng không tách dept. Bảo hiểm không tách dept. Chỉ [ngành X] mới có!"

**Takeaway:** Department Domination → chiếm 3-4 slots Map Pack. Nêu "blue ocean" và "chưa ai ở VN làm".

---

### SLIDE 08 — Before → After (Tối Ưu Đơn Vị)
**Class:** `section` (light) | **Layout:** `grid-template-columns: 1fr 1fr .8fr` trong `.midfill`
**Kicker:** `Giải pháp #1` | **Counter:** `08 / 18`

**Headline (`.h.h-sm`):**
```
Tối ưu [Đơn vị kinh doanh] + Tách Department — Trước vs Sau
```

**Cột 1 — "Trước" card** (`.card`, `border-color: rgba(192,73,47,.3)`):
- Header: pill `bad` + label "Profile bị bỏ rơi"
- 10 `.ba` rows:

| Field | Before |
|-------|--------|
| Tên | "[Brand]" (chung chung) |
| Số GBP | 1 GBP duy nhất |
| Danh mục | [Category] (1 danh mục) |
| Mô tả | Trống hoặc copy từ website |
| Ảnh | 0-10 ảnh chung |
| Đánh giá | < 4.0★, ít reviews |
| Products | Không liệt kê |
| Bài đăng | Không có |
| Q&A | Không có |
| [Đặc thù ngành] | Không có |

**Cột 2 — "Sau" card** (`.card`, `border-color: var(--blue)`):
- Header: pill `blue` + label "Chiến lược nội dung bài bản"
- 10 `.ba.good` rows:

| Field | After |
|-------|-------|
| Tên | "[Brand] [Địa điểm] — [Dept]" |
| Số GBP | **3-4 GBP**: [Dept1] + [Dept2] + [Dept3] |
| Danh mục | [Cat1] + [Cat2] + [Cat3] + [Cat4] |
| Mô tả | 750 ký tự: [sản phẩm] + [ưu đãi] + [USP] |
| Ảnh | **100+** ảnh: mỗi [sản phẩm] + không gian + trải nghiệm |
| Đánh giá | **≥ 4.7★**, phản hồi 100% trong 24h |
| Products | [Sản phẩm 1, 2, 3...] + giá + ảnh |
| Bài đăng | 2-4 bài/tuần: [chủ đề 1], [chủ đề 2] |
| Q&A | 15+: "[Câu hỏi thường gặp ngành]" |
| [Đặc thù ngành] | [Đặc tính ngành — ví dụ: 360° virtual tour] |

**Cột 3 — Service GBP Mockup** (`.gbp`, `font-size: 13px` — mini version):
- Ảnh thực tế `service.png` (không dùng `data-bg-name`, dùng trực tiếp background-image)
- Rating 4.9★, hours T2-T7
- Actions: 3 nút (Gọi / Đường đi / Đặt lịch)

> **Lưu ý:** Cột 3 là mini GBP preview, không cần đầy đủ như cột 6. Font-size 13px-14px toàn cột. Ảnh `service.png` không qua auto-detect.

**Takeaway:** "Đầy đủ 10 thành phần chuẩn hóa và đồng bộ — nền tảng để tăng Relevance và Prominence."

---

### SLIDE 09 — Sales Profile (Breakthrough)
**Class:** `section` (light) | **Layout:** `.split.tilt` (1.05fr / 0.95fr), `gap: 60px`, `align-items: center`
**Kicker:** `Giải pháp #2 · Sales Profile` | **Counter:** `09 / 18`

**Headline (`.h.h-md` — to hơn các slides khác):**
```
Biến mỗi [Chức danh] thành "[chuyên gia X] trên Google Maps".
```
Không có khoảng cách sau dấu `.` — dấu chấm kết thúc headline là intentional.

**Sub (font-size 27px default, margin-top 22px):**
```
Khi khách tìm "[từ khoá]", họ thấy cả showroom [Brand]
và [chức danh] của [Brand] — chiếm 2/3 Map Pack.
```
Dùng `<b>và</b>` in đậm.

**Map Pack demo (trong `.card`, `border-radius: 16px`, overflow hidden):**
- Header label: `SEARCH: "[từ khoá tìm kiếm]"` (IBM Plex Mono, ink-3)
- 3 kết quả trong `.mp` (border: 0, border-radius: 0):
  - Slot 1: `.res.win` — [Brand] Showroom + Sales
  - Slot 2: `.res.win` — [Nhân viên] — [Brand] [Khu vực]
  - Slot 3: `.res` (neutral) — Đối thủ (màu `--ink-3`)

**Cột phải — `.gbp` mockup** (max-width 440px, justify-self center):
- Ảnh `man.png` với `data-bg-name="man"`, `background-position: center top`
- `.name`: `[Họ Tên] — [Brand] [Khu vực]`
- `.cat`: `Tư vấn bán hàng · Xe điện` (hoặc tương đương ngành)
- `.rate`: 5.0★, 80 reviews
- `.rows`: 3 rows:
  1. Địa chỉ icon: "Phục vụ: [Khu vực 1], [Khu vực 2]..." (SAB — không địa chỉ cụ thể)
  2. Giờ làm việc
  3. Số tổng đài (KHÔNG số cá nhân)
- `.actions`: 4 nút (Gọi / Nhắn tin / Đường đi / Chi tiết) — 4 nút thay vì 4 nút thông thường

- `.pill.amber` dưới GBP card: "Chưa [chức danh] [ngành] nào ở VN có GBP cá nhân → [Brand] là đầu tiên"

> **Quy tắc SAB (Service Area Business):** Nhân viên GBP là SAB — không hiển thị địa chỉ nhà/văn phòng, chỉ hiển thị "Phục vụ: [khu vực]". Bắt buộc dùng số tổng đài — không dùng số cá nhân.
> **h-md thay vì h-sm:** Slide này intentionally có headline lớn hơn để tạo impact. Không sửa về h-sm.

**Takeaway:** "Sales Profile là **blue ocean**: chưa một hãng [ngành] Việt Nam nào làm. [Brand] có thể là người đầu tiên."

---

### SLIDE 10 — Booking Flow (6 Steps)
**Class:** `section` (light) | **Layout:** 2 rows + L-shaped connector trong `.midfill`
**Kicker:** `Giải pháp #3 — Đột phá` | **Counter:** `10 / 18`

**Headline (`.h.h-sm`):**
```
[Action1] → Book → [Experience] → Buy — 1 tap đặt lịch [hành động]
```

**Layout đặc biệt:** 2 rows cards nằm ngang + connector hình L nối row 1→2:
```
[1 Search] → [2 Maps] → [3 Book]
                              ↓ (L-connector)
              [4 OMS] → [5 Experience] → [6 Buy+★]
```

**Row 1 — 3 cards** (`display: flex`, `gap: 16px`):
- Card 1 (neutral): num-badge navy, Search icon blue, mô tả [từ khoá tìm kiếm]
- Arrow `.arr`
- Card 2 (neutral): num-badge navy, pin icon bad, mô tả "hiển thị top 3 Map Pack"
- Arrow `.arr`
- Card 3 (**blue tint**, `border-color: rgba(43,108,176,.3)`): num-badge `--blue`, Calendar icon blue, **"1 tap đặt lịch [hành động]"**

**L-connector** (`position: relative`, `height: 40px`, `margin: 0 40px`):
- 3 absolute div lines: vertical từ card 3 xuống → horizontal trái → vertical xuống card 4
- Arrow SVG `chevron-down` ở điểm kết
- Màu `var(--ink-4)` (chú ý: biến này không định nghĩa trong CSS — thực ra render thành màu mặc định ink)

**Row 2 — 3 cards** (`display: flex`, `gap: 16px`):
- Card 4 (neutral): num-badge navy, Clock icon good, mô tả "tự động phân bổ cho [nhân viên] gần nhất"
- Arrow `.arr`
- Card 5 (neutral): num-badge navy, [icon ngành] blue, mô tả "[Trải nghiệm] tại [địa điểm]"
- Arrow `.arr`
- Card 6 (**green tint**, `border-color: rgba(47,143,107,.3)`): num-badge `--good`, Check icon good + Star icon amber fill, **"Mua + auto review 48h"**

**Takeaway:** Nêu công thức: "1 [booking] ≈ [X]% chuyển đổi = **[giá trị tiền]** tiềm năng."

---

### SLIDE 11 — 7 Foundation Solutions
**Class:** `section` (light) | **Layout:** `.grid` 4 cột trong `.midfill`
**Kicker:** `Giải pháp #4-10` | **Counter:** `11 / 18`

> **Lưu ý số giải pháp:** Kicker ghi "Giải pháp #4-10" (không phải #5-11 như version cũ). Phải đồng nhất với numbering từ slides trước.

**Headline (`.h.h-sm`):**
```
7 giải pháp nền tảng — Bảo vệ + Kết nối + Tự động
```

**7 Cards** (`grid-template-columns: repeat(4,1fr)`, card cuối `grid-column: span 2`):

| # | Tiêu đề | Icon màu | Mô tả mẫu |
|---|---------|----------|-----------|
| 1 | Protection 24/7 | blue (shield) | Quét **15 phút**, ai sửa → tự động hoàn tác |
| 2 | Tổng đài [N]-Channel | blue (phone) | [Dept1/2/3] tự chuyển. NV nghỉ → 0 mất leads |
| 3 | [Tài sản đặc thù] GBP | amber (icon ngành) | Mỗi [tài sản] = 1 GBP riêng = **billboard miễn phí** |
| 4 | [Product/Stock] Gallery | blue (car) | Auto-sync [sản phẩm]. Hết → remove. Mới → add. |
| 5 | [Hậu mãi] Reminder | blue (wrench) | [N tháng] → auto nhắc → book → review |
| 6 | AI Search (GEO) | blue (globe) | [Brand] trên **ChatGPT, Google AI, Perplexity** |
| 7 (span 2) | Competitor Price Alert | bad (search) | Monitor [Đối thủ 1, 2, 3] — giảm giá → alert → auto-response. **React nhanh hơn thị trường.** |

- Padding: 18px 20px, `display: flex; flex-direction: column; gap: 10px`
- Tiêu đề: `font-size: 18px; font-weight: 700; display: flex; align-items: center; gap: 6px`

**Takeaway:** "Bảo vệ an toàn thông tin, không thất thoát leads, tự động hoá → chiếm Map Pack tại mọi khu vực."

---

### SLIDE 12 — SI × Beta Overview (Giới Thiệu Giải Pháp)
**Class:** `section` (light) | **Layout:** Flow diagram + 3 cards
**Kicker:** `Giới thiệu giải pháp` | **Counter:** `12 / 18`

**Headline (`.h.h-md`, dùng `.wm` class cho wordmark):**
```html
<span class="wm">SingleInterface <span class="x" style="color:var(--amber-700)">×</span> Beta</span> — Nền tảng + Dịch vụ.
```
Dấu chấm cuối headline là intentional.

**Flow diagram** (`display: flex; align-items: stretch; gap: 20px`):

- **Node 1** (navy-800 bg, `.node`, flex `.8`): Icon + tên client + sub
- **Arrow**
- **Node 2** (flex 1.5, column gap 14px):
  - Node trên (`border-color: --blue`, blue bg): pill `Platform` + tên `SingleInterface` + mô tả features
  - Node dưới (`border-color: --amber-700`, amber bg): pill `SERVICES` + tên `Dịch vụ mở rộng` + mô tả features
- **Arrow**
- **Node GBP** (neutral `.node`, flex `.85`): Map pin icon + "Google Business Profile" + sub
- **Arrow**
- **Node Khách hàng** (`background: --good`, green, `.node`, flex `.8`): User icon + "Khách hàng" + "Thấy [Brand] đầu tiên"

**3 Comparison Cards** (`grid-template-columns: 1fr 1fr 1.1fr`):
1. **CHỈ Platform**: = Nền tảng + nội dung + bảo vệ + tối ưu + hỗ trợ AI Search
2. **CHỈ Services**: = Tổng đài + [Staff] Profile + CRM — nhưng thiếu nền tảng scale
3. **KẾT HỢP · 1+1=3** (navy-800 bg, amber label): = Nền tảng + Protection + Tổng đài + [Staff] Profile + CRM + [Booking] OMS

> **Lưu ý layout:** Flow diagram ở trên + 3 cards ở dưới, cả hai trong `.midfill`. Không cần `.split` cho slide này.

**Takeaway:** "**Công nghệ quản lý + Dịch vụ tối ưu = Kết quả đo lường được.** Một bên không đủ — sức mạnh nằm ở sự kết hợp."

---

### SLIDE 13 — 5R Methodology
**Class:** `section.dark` | **Layout:** `.split` 50/50, `align-items: center`
**Kicker:** `Phương pháp tối ưu` | **Counter:** `13 / 18`

**Headline (`.h.h-sm`, màu `#fff`):**
```
3 yếu tố Google xếp hạng & Phương pháp tối ưu 5R
```

**Cột trái — Google Algorithm** (label amber uppercase IBM Plex Mono):
3 `.card` (vertical stack, gap 14px), mỗi card (padding 18px 20px):
1. **1. Relevance** (icon: search, màu blue) — "[Đơn vị] có đúng loại [sản phẩm] khách cần?"
2. **2. Distance** (icon: map-pin, màu bad) — "[Đơn vị] có gần vị trí khách?"
3. **3. Prominence** (icon: shield, màu amber) — "[Đơn vị] có uy tín (đánh giá, nội dung, ảnh)?"

**Cột phải — 5R Grid** (`grid-template-columns: 1fr 1fr`, 5 `.r5` cells):
1. **Radius** `↔ Distance` (icon: pin bad, red) — Tối ưu khu vực phục vụ
2. **Relevance** `↔ Relevance` (icon: search blue) — Danh mục + mô tả + Q&A
3. **Reviews** `↔ Prominence` (icon: star amber fill) — Thu reviews sau mua + hậu mãi
4. **Recency** `↔ Prominence` (icon: clock blue) — Posts [sự kiện/sản phẩm] hàng tuần
5. **Ratings** `↔ Prominence` (icon: star amber, `grid-column: span 2`) — Nâng điểm trung bình

- `.r5h` label: `<b>` tên + `.map` class (IBM Plex Mono, amber, `↔ [algo]`)
- `.r5 p`: mô tả ngắn (màu `--blue-100`)

**Takeaway:** Quote bất biến: **"Không đo lường được thì không quản lý & tối ưu được."** Mọi chỉ số 5R hiển thị real-time trên Dashboard.

---

### SLIDE 14 — KPI Commitment
**Class:** `section` (light) | **Layout:** `.card` + `.ctab`
**Kicker:** `Đo lường` | **Counter:** `14 / 18`

**Headline (`.h.h-sm`):**
```
Chúng tôi cam kết tăng trưởng đo lường được
```
**Sub (font-size 20px):** Quote: "Không đo lường được thì không quản lý & tối ưu được."

**Table (`.ctab`)** — 5 KPIs (không nhiều hơn, vừa 1 card):

| Chỉ số | Hiện tại | Cam kết 6 tháng |
|--------|----------|-----------------|
| [Đơn vị] xuất hiện top 3 Maps | Không xác định | **Xuất hiện trong top 3** |
| Cuộc gọi inbound từ Maps / tháng | Baseline 12 tháng gần nhất | **+20%** |
| Lượt chỉ đường đến [đơn vị] / tháng | Baseline 12 tháng gần nhất | **+20%** |
| Đánh giá trung bình [đơn vị] | Baseline 12 tháng gần nhất | **≥ 4.0★** |
| Phản hồi đánh giá | Baseline 12 tháng gần nhất | **100%** trong 24h |

- Header: `Chỉ số` / `Hiện tại` / `Cam kết 6 tháng` (`.hi` class = navy-800 bg)
- Cột hiện tại: class `old` (muted)
- Cột cam kết: class `new col-new`, dùng `.kpibig` cho số

> **Thay đổi so với version cũ:** Không dùng con số tuyệt đối (300+, 800+...) — dùng % baseline thực tế (+20%) và tier (top 3, ≥4.0★). Phù hợp khi chưa biết baseline của client.

**Takeaway:** "Mọi cam kết đo bằng dữ liệu thực tế. Baseline đo từ 12 tháng gần nhất trước triển khai."

---

### SLIDE 15 — Channel Comparison
**Class:** `section` (light) | **Layout:** `.card` + `.ctab.cmp`
**Kicker:** `So sánh` | **Counter:** `15 / 18`

**Headline (`.h.h-sm`):**
```
Không kênh nào kết hợp được TẤT CẢ như [Tên giải pháp]
```

**Table (`.ctab.cmp`)** — 4 kênh × 8 features:

| Feature | Website | [Kênh trả phí] | [Portal/Partner] | **[Brand] GBP** |
|---------|---------|--------------|----------------|-----------------|
| Xuất hiện Map Pack | ✗ | ✗ | ✗ | **✓** |
| Click-to-Call miễn phí | ✗ | ✓ (tốn tiền) | ✗ | **✓** |
| Chỉ đường 1 tap | ✗ | ✗ | ✗ | **✓** |
| Đánh giá khách thật | ✗ | ✗ | ! (portal giữ data) | **✓** |
| Đặt [hành động] 1 tap | ✗ | ✗ | ✗ | **✓** |
| After-sales (Service GBP) | ✗ | ✗ | ✗ | **✓** |
| [Staff] profile cá nhân | ✗ | ✗ | ✗ | **✓** |
| Chi phí per lead | Cao | Tốn/click | Hoa hồng | **Thấp (fixed)** |

- Cột `[Brand] GBP`: header `class="hi"` (navy-800), cells `class="hi"`
- Ký hiệu: `✗` → class `x` (muted), `✓` → class `y` (green), `✓ điều kiện` → class `part` (amber)
- Row "Chi phí per lead": cells `class="old"` cho 3 kênh cũ, `class="y2"` cho GBP

> **Quy tắc:** Cột GBP luôn là ✓ MỌI ROW. Không có exception — nếu không thì không nên đưa feature đó vào table.

**Takeaway:** GBP không thay thế — nó chiếm "khoảng trống duy nhất": khoảnh khắc khách **ĐANG CẦN ngay lập tức**.

---

### SLIDE 16 — Dashboard
**Class:** `section.dark` | **Layout:** Browser mockup + grid panels
**Kicker:** `Dashboard` | **Counter:** `16 / 18`

**Headline (`.h.h-sm`, màu `#fff`):**
```
Toàn bộ mạng lưới [đơn vị] — Trong 1 màn hình
```

**Browser mockup** (`background: #fff; border-radius: 18px; box-shadow: 0 30px 70px -30px rgba(0,0,0,.8)`):

Titlebar (navy-800, padding 16px 24px):
- Traffic lights: 3 circles (#ff5f56 / #ffbd2e / #27c93f)
- Icon + "Dashboard · SingleInterface × Beta"
- "● REAL-TIME · [N] [ĐƠN VỊ]" (IBM Plex Mono, blue-300, margin-left: auto)

**Grid panels** (`grid-template-columns: repeat(4,1fr)`, `gap: 1px`, `background: --line`):

| Panel | Grid pos | Label | Nội dung |
|-------|----------|-------|----------|
| OVERVIEW | span 2 | Dashboard icon | 4 `.dnum` stats: Gọi / Chỉ đường / [Booking] / Reviews |
| [ĐƠN VỊ] RANKING | 1 col | Star icon | Top 3 địa điểm theo rating (`.drow`) |
| [NHÂN VIÊN] PERFORMANCE | 1 col | User icon | Top 3 nhân viên theo metric (`.drow`) |
| REVIEW ALERTS | 1 col | Warning icon (bad) | 2 reviews < 3★ cần xử lý |
| PROTECTION LOG | 1 col | Shield icon (good) | 2 lần hoàn tác thành công |
| SERVICE TRACKER | 1 col | Wrench icon | Số lượng cần nhắc + đã book |
| COMPETITOR INTELLIGENCE | 1 col | Search icon | Alerts của các đối thủ (ALERT/OK) |

- `.dpanel`: `background: #fff; padding: 22px 24px`
- `.dph`: IBM Plex Mono, uppercase, ink-3, 16px
- `.dnum`: `font-size: 34px; font-weight: 800; color: --ink`
- `.dlab`: `font-size: 15px; color: --ink-3; margin-top: 3px`
- `.drow` alerts: `color: --bad` cho negative, `color: --good` cho resolved
- `.drow` competitor: dùng `color: --amber` cho ALERT, `color: --good` cho OK

**Takeaway:** "Real-time. Mọi [đơn vị]. Mọi [nhân viên]. Từ một dashboard duy nhất."

---

### SLIDE 17 — 6 Q&A (Objection Handling)
**Class:** `section` (light) | **Layout:** `.grid` 2 cột, 6 `.qa` cards
**Kicker:** `Giải đáp` | **Counter:** `17 / 18`

**Headline (`.h.h-sm`):**
```
6 băn khoăn thường gặp — và câu trả lời
```

**6 Q&A Cards** (`.qa`, padding 20px 22px, `grid-template-columns: 1fr 1fr`):

Mỗi card: `.qmark` (navy-800, 38×38px, "Q") + `.qq` (question, 20px) + `.qa-line` + `.qans` (answer, 17px)

| Q | Nguyên tắc trả lời |
|---|-------------------|
| "Đã có [kênh cũ], cần gì [giải pháp mới]?" | [Kênh mới] trên cùng, [kênh cũ] bên dưới. Khách không cần vào. |
| "[Nền tảng] miễn phí, tại sao trả phí?" | [Nền tảng] = đất trống. Chúng tôi = kiến trúc sư + vận hành toàn bộ. |
| "Khách [ngành] ít review?" | [Ngành] có [N] touchpoints. Auto-request cả [N] lần. Gấp đôi [ngành so sánh]. |
| "[Nhân viên] nghỉ mất data?" | Tổng đài tập trung. GBP chuyển giao 24h. Zero risk. |
| "Đối thủ sẽ copy?" | First-mover. Reviews tích lũy. Đối thủ mất 6-12 tháng bắt kịp. |
| "Bao lâu thấy kết quả?" | Tuần 1-2: profile xong. Tháng 1-2: Map Pack. Tháng 3-6: ROI rõ ràng. |

> **6 nhóm objection cố định:** (1) internal channel conflict, (2) cost justification, (3) industry specifics, (4) staff turnover risk, (5) competitive moat, (6) timeline. Đổi nội dung nhưng giữ 6 nhóm.

**Takeaway:** "Mọi rủi ro có lời giải được chứng minh. Mọi rủi ro được triệt tiêu bằng quy trình tự động và bảo vệ 24/7."

---

### SLIDE 18 — CTA Close
**Class:** `section.dark` | **Layout:** 3 `.cta-step` + commit pills + CTA amber box
**Kicker:** `Bước tiếp theo` | **Counter:** `18 / 18`

**Headline (`.h.h-md`, màu `#fff`):**
```
Bắt đầu với Demo Live — Thấy cơ hội trước khi quyết định
```

**3 CTA Steps** (`display: flex; gap: 16px`):

| Step | Class | `.cs-ic` | Tiêu đề | Sub | Mô tả |
|------|-------|----------|---------|-----|-------|
| 1 | `.cta-step.active` | Arrow SVG | Hôm nay | Demo + Audit | Demo live: search "[từ khoá]" → thấy cơ hội. Audit miễn phí → báo cáo chi tiết |
| 2 | `.cta-step` | "2" | Pilot | [N] GBP đầu tiên | [Tính năng cốt lõi], đo KPIs, báo cáo ROI bằng số thật |
| 3 | `.cta-step` | "3" | Scale | Toàn bộ hệ thống | Mở rộng toàn mạng lưới nếu pilot thành công. Full [Chiến lược] toàn quốc. |

- Step 1 `.active`: `background: rgba(246,173,85,.1)`, `border-color: --amber`
- `.cs-ic.active`: `background: --amber`, `color: --navy-900`

**9 Commit Pills** (`.commit`, `display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px`):
```
KPI rõ ràng | Báo cáo minh bạch | [Tên chiến lược]
Không mất data khi NV nghỉ | Bảo vệ 24/7 | Account Manager riêng
First-mover advantage | [Đặc thù ngành] | Moat: chỉ [địa điểm thật]
```
- `.commit`: border-radius 999px, border `--line-dark`, text màu `#eaf1fa`
- Prefix: `✓` màu `--good` (via `::before`)

**CTA Amber Box** (`display: flex; background: --amber; border-radius: 18px; padding: 28px 38px`):
- Label: IBM Plex Mono, navy-900, 70% opacity, uppercase: "CÂU HỎI DUY NHẤT"
- Question: `font-size: 32px; font-weight: 800; color: --navy-900`:
  ```
  Chúng ta sẽ pilot với [Số A] hay [Số B] GBP?
  ```
- Arrow SVG phải (navy-900, 52×52px)

> **Kết thúc bằng câu hỏi đóng:** Không hỏi "Có muốn thử không?" — hỏi "Pilot với 50 hay 100?" Buộc client phải chọn trong framework của mình, không phải chọn có/không.

---

## CHECKLIST THÍCH ỨNG CHO CLIENT MỚI

### Thay thế bắt buộc
- [ ] Tên thương hiệu (toàn file, tìm "BYD")
- [ ] Tên đối thủ cụ thể (VinFast, Hyundai → đối thủ ngành client)
- [ ] Từ khoá tìm kiếm người dùng cuối
- [ ] Số lượng địa điểm / nhân viên / sản phẩm (37 showrooms, 9 models...)
- [ ] Tên Department (Sales/Service/Parts → tương đương ngành)
- [ ] Tên Booking action (lái thử → đặt lịch / đặt bàn / khám...)
- [ ] KPI baseline và targets (giữ +20% nếu chưa biết baseline)
- [ ] Ngày tháng trên slide 1
- [ ] `loc.png` — ảnh không gian/địa điểm
- [ ] `man.png` — ảnh nhân viên
- [ ] `service.png` — ảnh dịch vụ hậu mãi (dùng cho cột 3 slide 08)

### Điều chỉnh theo ngành
| Slide | Cần đổi |
|-------|---------|
| S03 | Tên nhân vật storytelling phù hợp thị trường |
| S05 | Item #3 = tài sản đặc thù ngành |
| S06 | Item #7-8 trong chip9 (Products/Booking action) |
| S07 | Tên 4 departments + màu accent |
| S08 | Cột 3 — Service GBP (tên/ảnh/actions) |
| S09 | Headline, SAB area service, action buttons |
| S10 | Tên 6 steps theo flow ngành |
| S11 | Item #3 tài sản đặc thù, item #5 hậu mãi |
| S12 | Features của Platform và Services |
| S14 | 5 KPIs phù hợp ngành |
| S15 | Tên kênh so sánh (Portal xe → Portal Y) |
| S16 | Labels trong dashboard panels |
| S17 | Q#3 về đặc thù review ngành |
| S18 | Số A/B trong câu hỏi CTA cuối |

### Không thay đổi
- Toàn bộ CSS — không override inline trừ khi cần thiết
- SVG icon paths (đã chuẩn hoá)
- Animation classes (`anim`, `d1`, `d2`, `d3`)
- `deck-stage.js` web component
- 5R methodology (Radius/Relevance/Reviews/Recency/Ratings) — đây là framework SI
- Câu quote "Không đo lường được thì không quản lý & tối ưu được"
- Footer pattern, takeaway pattern
- 3-step CTA structure (Demo → Pilot → Scale)

---

## SPEAKER NOTES — FRAMEWORK 18 SLIDES

| Slide | Vai trò trong narrative |
|-------|------------------------|
| S01 | Open với câu hỏi — không giới thiệu. Tạo 1 câu hỏi trong đầu audience. |
| S02 | 2 con số tạo tension. "[Brand] #1 thế giới nhưng chưa là #1 local." |
| S03 | Câu chuyện cụ thể. Nhân vật = khách hàng của client. Không generalise. |
| S04 | Kỹ thuật: Maps trước website. Tập trung vào UX gap. |
| S05 | Liệt kê 7 cơ hội — dùng tone "cơ hội bỏ lỡ", không phải "lỗi". |
| S06 | Giải thích GBP đơn giản nhất. Analogy: "danh thiếp thông minh". |
| S07 | Slide quan trọng nhất về strategy. "Chỉ ngành [X] mới có đặc quyền này." |
| S08 | Trước/sau cụ thể. Show, don't tell. |
| S09 | Breakthrough moment. "Blue ocean — chưa ai làm." |
| S10 | ROI tức thì: 1 booking = [X]M tiềm năng. |
| S11 | 7 giải pháp automation — nhanh, không drill down mỗi item. |
| S12 | Tại sao cần cả 2 bên. "1+1=3." |
| S13 | Methodology phía sau. Google algorithm + cách chúng tôi address từng yếu tố. |
| S14 | Cam kết bằng số. Không lời hứa mơ hồ. |
| S15 | GBP không cạnh tranh kênh khác — chiếm khoảng trống. |
| S16 | Real-time visibility. Show the dashboard live nếu có thể. |
| S17 | Pre-empt objections. Đừng chờ khách hỏi. |
| S18 | Close với câu hỏi đóng. "50 hay 100?" — không "có hay không?" |
