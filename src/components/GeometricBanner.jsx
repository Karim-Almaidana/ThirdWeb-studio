import { useEffect, useRef } from "react";

export default function GeometricBanner() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // نستهدف العناصر داخل الـ groups فقط
    const items = el.querySelectorAll("g line, g path, g rect");

    items.forEach((item, i) => {
      // حساب الطول بدقة لكل نوع عنصر
      let len;
      if (item.tagName === "line") {
        const x1 = item.getAttribute("x1");
        const x2 = item.getAttribute("x2");
        const y1 = item.getAttribute("y1");
        const y2 = item.getAttribute("y2");
        len = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      } else if (item.tagName === "rect") {
        len = (item.getAttribute("width") * 2) + (item.getAttribute("height") * 2);
      } else {
        len = item.getTotalLength();
      }

      item.style.setProperty("--len", len);
      item.style.transitionDelay = `${i * 0.03}s`; // سرعة تتابع الأنميشن
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
  }, []);

  return (
    <div
      ref={ref}
      className="w-screen max-h-[404px] bg-black flex items-center justify-center"
    >
      <svg
        viewBox="0 0 667 270"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* المربع الخلفي - بدون أنميشن */}
        <rect width="667" height="270" fill="black" />

        <g
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1"
          fill="none"
          shapeRendering="geometricPrecision"
        >
          <line x1="0" y1="137" x2="667" y2="137" />
          <line x1="188" y1="229" x2="279" y2="229" />
          <line x1="279" y1="229" x2="348" y2="229" />
          <line x1="652" y1="44" x2="667" y2="44" />
          <line x1="93" y1="45" x2="93" y2="137" />
          <line x1="1" y1="45" x2="93" y2="45" />
          <line x1="94" y1="137" x2="188" y2="45" />
          <line x1="188" y1="45" x2="188" y2="137" />
          <line x1="280" y1="45" x2="280" y2="229" />
          <line x1="188" y1="137" x2="188" y2="229" />
          <path d="M188 137 A92 92 0 0 1 280 45" />
          <path d="M188 137 A92 92 0 0 1 280 229" />
          <line x1="280" y1="45" x2="374" y2="137" />
          <line x1="374" y1="137" x2="374" y2="229" />
          <rect x="374" y="45" width="93" height="92" />
          <line x1="467" y1="137" x2="467" y2="91" />
          <path d="M467 91 A46 46 0 0 1 559 91" />
          <line x1="559" y1="91" x2="559" y2="137" />
          <line x1="559" y1="137" x2="559" y2="229" />
          <line x1="467" y1="229" x2="559" y2="229" />
          <path d="M467 229 A92 92 0 0 1 559 137" />
          <line x1="559" y1="137" x2="613" y2="44" />
          <line x1="613" y1="44" x2="652" y2="137" />
          <line x1="559" y1="137" x2="652" y2="229" />
          <line x1="652" y1="137" x2="652" y2="229" />
          <line x1="652" y1="44" x2="652" y2="112" />
        </g>

        <g
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          shapeRendering="geometricPrecision"
        >
          <line x1="374" y1="137" x2="421" y2="137" />
          <line x1="374" y1="137" x2="374" y2="160" />
          <line x1="374" y1="197" x2="374" y2="229" />
          <line x1="340" y1="229" x2="374" y2="229" />
          <line x1="595" y1="76" x2="613" y2="44" />
          <line x1="613" y1="44" x2="626" y2="76" />
          <line x1="642" y1="112" x2="652" y2="137" />
          <line x1="571" y1="117" x2="559" y2="137" />
          <line x1="559" y1="137" x2="515" y2="137" />
          <line x1="652" y1="112" x2="652" y2="137" />
          <line x1="0" y1="137" x2="53" y2="137" />
          <line x1="140" y1="137" x2="188" y2="137" />
          <line x1="188" y1="137" x2="188" y2="160" />
          <line x1="188" y1="197" x2="188" y2="229" />
          <line x1="188" y1="229" x2="222" y2="229" />
          <line x1="652" y1="44" x2="686" y2="44" />
          <line x1="652" y1="44" x2="652" y2="76" />
        </g>
      </svg>
    </div>
  );
}