# NexusCanvas — System Architecture Graph Studio

**Author:** Pooya Goodarzi  
**Live site:** https://pooya-labs.github.io/nexus-canvas/  
**Repository:** [pooya-labs/nexus-canvas](https://github.com/pooya-labs/nexus-canvas)

NexusCanvas is a client-side architecture workspace for sketching service topologies, checking structural risks, and exporting portable starter artifacts.

## Design and inspect
- Create gateways, services, AI workers, databases, and caches directly from the canvas toolbar; move nodes and connect dependencies.
- Switch between an interactive 2D canvas and a mobile-friendly rack view.
- Inspect under-replicated or overloaded services, isolated/unreachable nodes, missing edge endpoints, dependency cycles, and modeled database/cache bottlenecks.
- Compute a longest dependency-path latency only when the graph is acyclic.
- Enable a local 2.2× stress simulation; the exact original throughput and CPU baseline is restored when it is turned off.
- Same-origin browser tabs can synchronize through BroadcastChannel. This is not remote collaboration and does not sync across devices.

## Portable architecture snapshots
- Export the current graph as a versioned `nexus-canvas.graph` JSON snapshot.
- Copy the snapshot or download `nexus-canvas-architecture.json`.
- Import a previously exported snapshot. The importer validates schema version, size limits, unique IDs, node properties, ports, and edge endpoints before replacing the current graph.
- Generate a Docker Compose starter template from an acyclic graph with valid connections and unique service names.

## Deployment boundaries
- Next.js 16 static export on GitHub Pages; no server, WebSocket room, account system, CRDT service, or live infrastructure telemetry is included.
- Throughput, CPU, and latency values are editable illustrative inputs, not measurements from deployed containers.
- Compose output is a starter template. Verify images, secrets, networks, ports, health checks, volumes, and service-specific environment settings before deployment.

## Stack
Next.js 16, React 19, TypeScript, Tailwind CSS, SVG, browser-native BroadcastChannel, and JSON file import/export.


---

## Latest project update — 8 November 2026

The NexusCanvas brand mark and favicon were refreshed, and the project footer now links its owner identity to Pooya Labs. A recent footer build error caused by an undefined language reference was fixed. The repository's latest source update records the Persian README and this handoff; deployment status should be read from the live Actions workflow rather than inferred from the commit alone.

## Project ownership

<p align="center"><a href="https://pooya-labs.github.io/pooya-labs-platform/"><img src="https://raw.githubusercontent.com/pooya-labs/pooya-labs-platform/main/apps/platform/public/brand/pooya-monogram-tile.svg" alt="Pooya Monogram — official owner mark" width="96" /></a></p>

**Project owner and author: Pooya Goodarzi.** The official owner profile and project directory is **[Pooya Labs Platform](https://pooya-labs.github.io/pooya-labs-platform/)**. Select the monogram above to open the platform.

**Use permission:** Pooya Goodarzi grants everyone a non-exclusive, worldwide permission to use, copy, modify, and redistribute this project's original code and documentation, including for commercial purposes. Ownership of the original work remains with Pooya Goodarzi. This permission does not cover third-party materials, which remain subject to their owners' terms.

## راهنمای فارسی

### معرفی

**NexusCanvas** یک محیط تحت وب برای ترسیم و بررسی گراف معماری سیستم‌هاست. می‌توانید اجزای یک سامانه را روی بوم قرار دهید، ارتباط میان آن‌ها را تعریف کنید و ریسک‌های ساختاری را پیش از پیاده‌سازی بررسی کنید.

### امکانات اصلی

- افزودن درگاه‌ها، سرویس‌ها، عامل‌های هوش مصنوعی، پایگاه‌های داده و کش‌ها.
- جابه‌جایی گره‌ها و اتصال وابستگی‌ها در بوم تعاملی دوبعدی.
- نمای Rack سازگار با موبایل در کنار نمای گراف.
- شناسایی سرویس‌های کم‌تکثیر یا پربار، گره‌های جداافتاده، اتصال‌های ناقص، چرخه‌های وابستگی و گلوگاه‌های مدل‌شده.
- محاسبهٔ طولانی‌ترین مسیر وابستگی فقط در گراف‌های بدون چرخه.
- شبیه‌سازی فشار محلی با ضریب ۲٫۲ برابر؛ مقادیر پایه پس از خاموش‌کردن شبیه‌سازی بازگردانده می‌شوند.

### ذخیره‌سازی و خروجی

گراف را می‌توان در قالب فایل JSON نسخه‌دار `nexus-canvas.graph` صادر و دوباره وارد کرد. هنگام ورود، نسخهٔ ساختار، اندازه، شناسه‌های یکتا، ویژگی گره‌ها، درگاه‌ها و دو سر اتصال‌ها اعتبارسنجی می‌شوند. همچنین از گراف معتبر و بدون چرخه می‌توان یک فایل آغازین Docker Compose تولید کرد.

### محدودیت‌های نسخهٔ نمایشی

این پروژه به‌صورت استاتیک روی GitHub Pages اجرا می‌شود و سرور، حساب کاربری، اتاق همکاری آنلاین، همگام‌سازی بین دستگاه‌ها یا اتصال به زیرساخت واقعی ندارد. اعداد توان عملیاتی، CPU و تأخیر، ورودی‌های نمونه و قابل ویرایش‌اند و اندازه‌گیری کانتینرهای مستقرشده نیستند. خروجی Compose نیز یک قالب شروع است و پیش از استفادهٔ واقعی باید تنظیمات سرویس‌ها بازبینی شوند.

### فناوری‌ها

Next.js، React، TypeScript، Tailwind CSS، SVG، قابلیت بومی BroadcastChannel مرورگر و ورود/خروج فایل JSON.

### اجرای محلی

```bash
npm install
npm run dev
```

برای جزئیات بیشتر به بخش‌های انگلیسی همین راهنما و مستندات معماری مخزن مراجعه کنید.

### آخرین تغییرات — ۸ نوامبر ۲۰۲۶

نشان اختصاصی NexusCanvas و آیکون تب مرورگر به‌روزرسانی شدند و پیوند مالکیت در فوتر به پویا لبز متصل شد. خطای اخیر ساخت فوتر که به ارجاع تعریف‌نشدهٔ زبان مربوط بود نیز اصلاح شد. وضعیت انتشار باید از اجرای واقعی GitHub Actions بررسی شود و صرف ثبت commit به معنی انتشار موفق نیست.

### مالکیت پروژه

<p align="center"><a href="https://pooya-labs.github.io/pooya-labs-platform/"><img src="https://raw.githubusercontent.com/pooya-labs/pooya-labs-platform/main/apps/platform/public/brand/pooya-monogram-tile.svg" alt="نشان رسمی مونوگرام پویا" width="96" /></a></p>

**مالک و پدیدآورندهٔ پروژه: پویا گودرزی.** وب‌سایت رسمی معرفی مالک و درگاه نمایش پروژه‌ها، **[پلتفرم پویا لبز](https://pooya-labs.github.io/pooya-labs-platform/)** است. با انتخاب نشان بالا مستقیماً وارد این وب‌سایت می‌شوید.

**اجازهٔ استفاده:** پویا گودرزی به همه اجازه‌ای غیرانحصاری و جهانی برای استفاده، کپی، تغییر و بازنشر کدها و مستندات اصیل این پروژه، از جمله برای مقاصد تجاری، می‌دهد. مالکیت آثار اصیل همچنان متعلق به پویا گودرزی است. این اجازه شامل دارایی‌های اشخاص ثالث نمی‌شود و آن‌ها تابع شرایط صاحبان خود هستند.
