/* =====================================================================
   MORE THAN COUNSELLING · EVENTS
   This one file runs the banner at the top of every page AND the cards
   on events.html. To add, change or remove an event, edit the list below.

   Booking: put the Splose booking page code in embed. Its form
   appears in the "Book your place" section on events.html.

   One-off event:   give it start and end ("2026-11-01T10:00").
   Monthly event:   give it monthly:{weekday, nth, start, end}.
                    weekday 0 = Sunday ... 5 = Friday. nth 1 = first.

   Past events disappear on their own. The banner always shows the
   soonest upcoming event that has banner:true.
   ===================================================================== */
var MTC_EVENTS = [
  {
    id: "grief-garden",
    title: "The Grief Garden",
    kicker: "A two-hour mini retreat",
    start: "2026-11-01T10:00",
    end: "2026-11-01T12:00",
    place: "House of Habits studio, Hervey Bay",
    price: "$20 · proceeds to our local hospice",
    blurb: "A gentle space to tend your grief through yoga, breath and rest. Whatever your loss, and however long ago, you are welcome here. No yoga experience needed, and no pressure to talk or share.",
    extras: [
      "Take home an eye pillow and a little notebook for your reflections",
      "Limited to 20 places"
    ],
    image: "images/grief-garden-hands.jpg",
    imageAlt: "Hands resting gently in a lap during a quiet moment",
    embed: "0d0882b6-79dd-407c-867c-73751ddba4ab",
    bookLabel: "Book your place",
    more: "grief-garden.html",
    banner: true
  },
  {
    id: "restorative",
    title: "Restorative Yoga",
    kicker: "First Friday of every month",
    monthly: { weekday: 5, nth: 1, start: "18:00", end: "19:00" },
    place: "@pilates 24/7, Hervey Bay",
    price: "$20",
    blurb: "An hour of deep, supported rest to close the working week. Long, held shapes softened with bolsters and blankets, slow breath, and time for your nervous system to settle all the way down. We finish with a hot drink and nibbles together.",
    extras: [
      "Includes an eye pillow to take home",
      "Bring a pillow and a blanket for your comfort, and a yoga bolster if you have one"
    ],
    image: "images/restorative.jpg",
    imageAlt: "A woman lying on a yoga mat, one hand resting on her chest and one on her belly",
    embed: "2c9e926b-9679-42cc-89fb-c05c5ac4a364",
    bookLabel: "Book your place",
    more: "events.html#restorative",
    banner: true
  }
];

(function () {
  "use strict";
  var TZ = "+10:00"; /* Queensland, no daylight saving */
  var DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  function at(dateStr, timeStr) { return new Date(dateStr + "T" + timeStr + ":00" + TZ); }
  /* Brisbane calendar parts of a Date */
  function bne(d) { var b = new Date(d.getTime() + 10 * 3600e3);
    return { y: b.getUTCFullYear(), m: b.getUTCMonth(), d: b.getUTCDate(), wd: b.getUTCDay(), h: b.getUTCHours(), mi: b.getUTCMinutes() }; }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function time(d) { var p = bne(d), h = p.h % 12 || 12;
    return h + (p.mi ? ":" + pad(p.mi) : "") + (p.h < 12 ? "am" : "pm"); }
  function range(s, e) { var a = time(s), b = time(e);
    if (a.slice(-2) === b.slice(-2)) a = a.slice(0, -2); return a + " to " + b; }
  function day(d) { var p = bne(d); return DAYS[p.wd] + " " + p.d + " " + MONTHS[p.m]; }

  /* next occurrence of a monthly event that hasn't finished yet */
  function nextMonthly(ev, now) {
    var p = bne(now), y = p.y, m = p.m;
    for (var i = 0; i < 24; i++) {
      var first = new Date(Date.UTC(y, m, 1)).getUTCDay();
      var dd = 1 + ((ev.monthly.weekday - first + 7) % 7) + 7 * (ev.monthly.nth - 1);
      var ds = y + "-" + pad(m + 1) + "-" + pad(dd);
      var e = at(ds, ev.monthly.end);
      if (e > now) return { start: at(ds, ev.monthly.start), end: e };
      m++; if (m > 11) { m = 0; y++; }
    }
    return null;
  }

  function upcoming(now) {
    var list = [];
    MTC_EVENTS.forEach(function (ev) {
      var o = ev.monthly ? nextMonthly(ev, now)
        : { start: new Date(ev.start + ":00" + TZ), end: new Date(ev.end + ":00" + TZ) };
      if (o && o.end > now) list.push({ ev: ev, start: o.start, end: o.end });
    });
    return list.sort(function (a, b) { return a.start - b.start; });
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  var page = location.pathname.split("/").pop() || "index.html";
  if (page.indexOf(".") < 0) page += ".html"; /* extensionless URLs */
  function here(u) { return page === "events.html" || u.split("#")[0] === page; }

  var now = new Date(), list = upcoming(now);

  /* ---------- banner, top of every page ---------- */
  var css = ".evbar{background:#F0DCCE;color:#2C2825;font-family:'Jost',sans-serif;font-size:.8rem;letter-spacing:.06em;" +
    "position:sticky;top:0;z-index:70;padding:.6rem 3rem;text-align:center;line-height:1.5}" +
    ".evbar .lbl{text-transform:uppercase;letter-spacing:.16em;color:#B77E63;margin-right:.5rem}" +
    ".evbar .ttl{font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:500;font-size:1.25em;letter-spacing:.01em;color:#2A4A5E}" +
    ".evbar a.go{color:#2A4A5E;text-decoration:none;border-bottom:1px solid rgba(42,74,94,.45);margin-left:.6rem;white-space:nowrap}" +
    ".evbar a.go:hover{border-bottom-color:#2A4A5E}" +
    ".evbar .x{position:absolute;right:.8rem;top:50%;transform:translateY(-50%);background:none;border:0;cursor:pointer;" +
    "color:#2A4A5E;font-size:1.2rem;line-height:1;padding:.4rem;opacity:.6}.evbar .x:hover{opacity:1}" +
    ".ibar{top:var(--evbar,0px)}[id]{scroll-margin-top:calc(96px + var(--evbar,0px))}" +
    "@media(max-width:640px){.evbar{padding:.55rem 2.6rem .55rem 1rem;font-size:.76rem}.evbar .when2{display:none}}";

  function dismissed(id) { try { return sessionStorage.getItem("mtc-ev-x") === id; } catch (e) { return false; } }

  var pick = null;
  for (var i = 0; i < list.length; i++) {
    if (list[i].ev.banner && !here(list[i].ev.more) && !dismissed(list[i].ev.id)) { pick = list[i]; break; }
  }
  if (pick) {
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    var bar = document.createElement("div");
    bar.className = "evbar"; bar.setAttribute("role", "region"); bar.setAttribute("aria-label", "Upcoming event");
    bar.innerHTML = '<span class="lbl">Coming up</span><span class="ttl">' + esc(pick.ev.title) + "</span> &middot; " +
      esc(day(pick.start)) + '<span class="when2">, ' + esc(range(pick.start, pick.end)) + "</span>" +
      '<a class="go" href="' + esc(pick.ev.more) + '">Find out more</a>' +
      '<button class="x" type="button" aria-label="Hide this notice">&times;</button>';
    document.body.insertBefore(bar, document.body.firstChild);
    var fit = function () { document.documentElement.style.setProperty("--evbar", bar.offsetHeight + "px"); };
    fit(); window.addEventListener("resize", fit);
    bar.querySelector(".x").addEventListener("click", function () {
      try { sessionStorage.setItem("mtc-ev-x", pick.ev.id); } catch (e) {}
      bar.parentNode.removeChild(bar); document.documentElement.style.setProperty("--evbar", "0px");
    });
  }

  /* ---------- homepage "Coming up" line ---------- */
  var line = document.getElementById("coming-up");
  if (line && list.length) {
    var n = list[0];
    line.innerHTML = 'Coming up: <a href="' + esc(n.ev.more) + '" style="color:var(--terracotta)">' + esc(n.ev.title) +
      "</a>, " + esc(day(n.start)) + ' &middot; <a href="events.html" style="color:var(--terracotta)">see all events</a>';
  }

  /* ---------- cards on events.html ---------- */
  var box = document.getElementById("event-list");
  if (box) {
    if (!list.length) {
      box.innerHTML = '<p class="evempty">Nothing on the calendar just now. New workshops are on their way, so check back soon or <a href="contact.html">ask to hear about the next one</a>.</p>';
    } else {
      box.innerHTML = list.map(function (o, k) {
        var ev = o.ev, p = bne(o.start);
        var when = ev.monthly ? "Next class " + day(o.start) : day(o.start) + " " + p.y;
        return '<article class="evcard' + (k % 2 ? " flip" : "") + '" id="' + esc(ev.id) + '">' +
          '<div class="evimg"><img loading="lazy" decoding="async" src="' + esc(ev.image) + '" alt="' + esc(ev.imageAlt) + '"></div>' +
          '<div class="evtxt">' +
            '<div class="evdate"><span class="dd">' + p.d + '</span><span class="mm">' + MONTHS[p.m].slice(0, 3) + "</span></div>" +
            '<p class="kick">' + esc(ev.kicker) + "</p>" +
            "<h2>" + esc(ev.title) + "</h2>" +
            '<p class="when">' + esc(when) + " &middot; " + esc(range(o.start, o.end)) + "<br>" + esc(ev.place) + " &middot; " + esc(ev.price) + "</p>" +
            "<p>" + esc(ev.blurb) + "</p>" +
            '<ul class="morelist">' + ev.extras.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
            '<div class="evbtns"><a class="btn" href="#book-' + esc(ev.id) + '">' + esc(ev.bookLabel) + "</a>" +
              (ev.more.indexOf("events.html") === 0 ? "" : '<a class="btn ghost dark" href="' + esc(ev.more) + '">More info</a>') + "</div>" +
          "</div></article>";
      }).join("");

      /* one Splose booking form per upcoming event */
      var bk = document.getElementById("event-booking");
      if (bk) {
        bk.innerHTML = list.filter(function (o) { return o.ev.embed; }).map(function (o) {
          var u = esc(o.ev.embed);
          return '<div class="bkblock" id="book-' + esc(o.ev.id) + '">' +
            '<h3>' + esc(o.ev.title) + '</h3><p class="when">' + esc(o.ev.monthly ? "First Friday of every month" : day(o.start)) +
            " &middot; " + esc(range(o.start, o.end)) + '</p>' +
            '<div class="bkframe"><iframe class="splose-booking" src="https://mtc.splose.com/online-booking/' + u + '?embedVersion=v2" title="Book ' + esc(o.ev.title) + '" scrolling="auto" width="100%" height="700" loading="lazy" frameborder="0" style="display:block;transition:height 0.3s ease"></iframe></div></div>';
        }).join("");
        window.addEventListener("message", function (e) {
          if (e.origin !== "https://mtc.splose.com" || !e.data || !e.data.type) return;
          var f = null;
          [].forEach.call(document.querySelectorAll("iframe.splose-booking"), function (x) { if (x.contentWindow === e.source) f = x; });
          if (!f) return;
          if (e.data.type === "sploseIframeResize") { var h = e.data.height; if (typeof h === "number" && isFinite(h) && h >= 0) f.style.height = h + "px"; }
          if (e.data.type === "sploseIframeScrollToTop") f.scrollIntoView({ behavior: "smooth", block: "start" });
          if (e.data.type === "sploseBookingConfirmed") { var p = e.data.payload || {}; window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ event: "splose_booking_confirmed", booking_page_uuid: String(p.booking_page_uuid), booking_page_name: String(p.booking_page_name),
              service_name: String(p.service_name), location_name: String(p.location_name), service_price: Number(p.service_price) }); }
        });
      }

      /* structured data so Google can show these as events */
      var ld = document.createElement("script"); ld.type = "application/ld+json";
      ld.textContent = JSON.stringify(list.map(function (o) {
        var iso = function (d) { var b = bne(d); return b.y + "-" + pad(b.m + 1) + "-" + pad(b.d) + "T" + pad(b.h) + ":" + pad(b.mi) + ":00" + TZ; };
        return { "@context": "https://schema.org", "@type": "Event", "name": o.ev.title,
          "startDate": iso(o.start), "endDate": iso(o.end),
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode", "eventStatus": "https://schema.org/EventScheduled",
          "location": { "@type": "Place", "name": o.ev.place, "address": { "@type": "PostalAddress", "addressLocality": "Hervey Bay", "addressRegion": "QLD", "addressCountry": "AU" } },
          "image": "https://www.morethancounselling.com/" + o.ev.image, "description": o.ev.blurb,
          "organizer": { "@type": "Organization", "name": "More Than Counselling", "url": "https://www.morethancounselling.com/" },
          "performer": { "@type": "Person", "name": "Fionna Findley" } };
      }));
      document.head.appendChild(ld);

      if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
    }
  }
})();
