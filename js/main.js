/* DIGITECT · ON AIR. (shared by index.html + academy.html) */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const W = 'assets/work/';
  const T = 'assets/team/';
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  const isAr = () => document.documentElement.lang === 'ar';
  const t = (en, ar) => (isAr() ? ar : en);
  const desktop = () => matchMedia('(min-width:761px)').matches;

  /* ---------------- data (real work, team and Vimeo IDs from digitect.com) ---------------- */
  const CAT = {
    campaign: ['Campaign', 'حملة'],
    event: ['Event', 'فعالية'],
    social: ['Social', 'سوشيال'],
    studio: ['Studio', 'استوديو']
  };

  const EPISODES = [
    ['Bentley', 'بنتلي', 'Flying Spur Speed', 'فلاينج سبير سبيد', 'campaign', 'FlyingSpurSpeed-scaled.jpg', '1190887044'],
    ['Porsche', 'بورشه', 'Brand film', 'فيلم العلامة', 'campaign', 'Porsche-scaled.jpg', '1190882890'],
    ['Dongfeng', 'دونغفنغ', '007', '007', 'campaign', 'Dongfeng007.png', '1146164208'],
    ['Škoda', 'سكودا', 'Campaign', 'حملة', 'campaign', 'skoda.jpg', '1162128197'],
    ['Absher', 'أبشر', 'Campaign', 'حملة', 'campaign', 'Absher.jpg', '1180212524'],
    ['Marriott', 'ماريوت', 'Social', 'سوشيال', 'social', 'Mariott-scaled.jpg', '1190886535'],
    ['ASQ', 'ASQ', 'Ramadan Box', 'صندوق رمضان', 'social', 'ASQ-Ramadan-Box-scaled.jpg', '1190887713']
  ];

  const ARCHIVE = [
    ['1191155486', 'Samaco.jpg', 'campaign'], ['1191155402', 'logo-reveal.jpg', 'studio'],
    ['1180212524', 'Absher.jpg', 'campaign'], ['1146164208', 'Dongfeng007.png', 'campaign'],
    ['1162128197', 'skoda.jpg', 'campaign'], ['1190887044', 'FlyingSpurSpeed-scaled.jpg', 'campaign'],
    ['1190882890', 'Porsche-scaled.jpg', 'campaign'], ['1190878893', 'VW-scaled.jpg', 'campaign'],
    ['1190881990', 'Bentley-scaled.jpg', 'campaign'], ['1190886955', 'Bentley1-scaled.jpg', 'campaign'],
    ['1190882319', 'Athar.jpg', 'campaign'], ['1106040627', 'camp3.jpg', 'campaign'],
    ['1146159602', 'lebara.png', 'campaign'], ['1146163697', 'keeta.png', 'campaign'],
    ['940756731', 'event1.jpg', 'event'], ['1133459183', 'event2.jpg', 'event'],
    ['1133460365', 'event3.jpg', 'event'], ['1133457832', 'event.jpg', 'event'],
    ['1115909199', 'event4.jpg', 'event'], ['1115909753', 'event5.jpg', 'event'],
    ['1190883367', 'IDCE3-scaled.jpg', 'event'], ['1190882561', 'IDCE2-scaled.jpg', 'event'],
    ['1145625794', 'mhero.png', 'event'], ['1106073347', 'digi.png', 'event'],
    ['969752018', 'amn.png', 'event'],
    ['1190887859', 'ASQ-December-Reel-scaled.jpg', 'social'], ['1190887713', 'ASQ-Ramadan-Box-scaled.jpg', 'social'],
    ['1190887598', 'ASQSM-scaled.jpg', 'social'], ['1190887400', 'Barzah-scaled.jpg', 'social'],
    ['1190887199', 'FINAL-scaled.jpg', 'social'], ['1190886847', 'Cucina-scaled.jpg', 'social'],
    ['1190886741', 'Manko-scaled.jpg', 'social'], ['1190886643', 'Mariott2-scaled.jpg', 'social'],
    ['1190886535', 'Mariott-scaled.jpg', 'social'], ['1190886393', 'Qamar-scaled.jpg', 'social'],
    ['940719929', 'asala.png', 'social'], ['1105564669', 'gedovia.png', 'social'],
    ['1146163206', 'asq.png', 'social'], ['940733754', 'mashhoor.png', 'social'],
    ['1146160430', 'saudisnd.png', 'social'], ['1146163626', 'pegani.png', 'social'],
    ['1146158407', 'Body-Oud-Bold.jpg', 'studio'], ['1106037498', 'oad.jpg', 'studio'],
    ['1146159532', 'car.jpg', 'studio'], ['1146164240', 'snd.jpg', 'studio'],
    ['1146164399', 'bently.jpg', 'studio'], ['1145344082', 'bottle.jpg', 'studio'],
    ['1135677066', 'motor.jpg', 'studio'], ['1135667218', 'reel1-1.jpg', 'studio'],
    ['1135668121', 'reel2.jpg', 'studio'], ['1135669005', 'reel3.jpg', 'studio'],
    ['1135670193', 'reel4.jpg', 'studio'], ['1135670479', 'reel5.jpg', 'studio'],
    ['1135671077', 'reel6.jpg', 'studio'], ['1135682390', 'reel9.jpg', 'studio'],
    ['1135685067', 'reel10.jpg', 'studio'],
    ['1180212739', 'thumb.jpg', 'studio'], ['1180212867', 'thumb-1.jpg', 'studio'],
    ['1180213281', 'thumb-2-scaled.jpg', 'studio'], ['1180213583', 'thumb-3.jpg', 'studio'],
    ['1180213726', 'thumb-4.jpg', 'studio'], ['1180213878', 'thumb-5.jpg', 'studio'],
    ['1180213994', 'thumb-6.jpg', 'studio'], ['1180214167', 'thumb-7-scaled.jpg', 'studio'],
    ['1180214498', 'thumb-8-scaled.jpg', 'studio'], ['1180215108', 'thumb-9-scaled.jpg', 'studio'],
    ['1180217456', 'thumb-10.jpg', 'studio'], ['1180214937', 'thumb-11-scaled.jpg', 'studio'],
    ['1180236327', 'thumb-12-scaled.jpg', 'studio'], ['1180236618', 'thumb-13.jpg', 'studio'],
    ['1180236896', 'thumb-14-scaled.jpg', 'studio']
  ];

  const CHANNELS = [
    { en: 'Strategy', ar: 'الاستراتيجية', img: 'thumb.jpg',
      items: [['Consumer & cultural research', 'أبحاث المستهلك والثقافة'], ['Brand positioning & architecture', 'تموضع العلامة وهيكلتها'], ['Growth roadmaps', 'خرائط النمو'], ['360 comms planning', 'تخطيط اتصال 360'], ['Data analytics & reporting', 'تحليل البيانات والتقارير']] },
    { en: 'Creative & Design', ar: 'الإبداع والتصميم', img: 'Bentley1-scaled.jpg',
      items: [['Brand & campaign concepts', 'أفكار العلامات والحملات'], ['Copy, art, motion', 'كتابة، تصميم، موشن'], ['Film & photo production', 'إنتاج أفلام وتصوير'], ['2D/3D animation', 'أنيميشن 2D/3D'], ['Packaging & retail design', 'تصميم التغليف ونقاط البيع']] },
    { en: 'Events & Activations', ar: 'الفعاليات والتفعيل', img: 'event1.jpg',
      items: [['Experiential events', 'فعاليات تفاعلية'], ['Interactive screens & AR', 'شاشات تفاعلية وواقع معزز'], ['Retail / shopper marketing', 'تسويق نقاط البيع'], ['Exhibitions & pop-ups', 'معارض ومتاجر مؤقتة'], ['Turn-key production', 'إنتاج متكامل تسليم مفتاح']] },
    { en: 'Social / Digital', ar: 'السوشيال والديجيتال', img: 'ASQSM-scaled.jpg',
      items: [['Content calendars & creation', 'خطط وصناعة المحتوى'], ['Community management', 'إدارة المجتمعات'], ['Social listening & analytics', 'الرصد والتحليل'], ['Influencer programs', 'برامج المؤثرين']] },
    { en: 'Media & PR', ar: 'الميديا والعلاقات العامة', img: 'thumb-3.jpg',
      items: [['Offline & digital buying', 'شراء إعلامي تقليدي ورقمي'], ['Performance & programmatic', 'إعلانات الأداء والبرمجية'], ['Influencer outreach', 'التواصل مع المؤثرين'], ['Real-time dashboards', 'لوحات متابعة لحظية'], ['PR & events coverage', 'علاقات عامة وتغطية فعاليات']] },
    { en: 'Technology', ar: 'التكنولوجيا', img: 'digi.png',
      items: [['CX and UX design', 'تصميم تجربة العميل والمستخدم'], ['Website & apps development', 'تطوير المواقع والتطبيقات'], ['Hosting and maintenance', 'الاستضافة والصيانة'], ['CRM setup and management', 'إعداد وإدارة CRM']] }
  ];

  // team portraits live inside the site's 736×413 "Credentials" slides; we crop each strip with CSS
  const SLIDE = {
    A: '2026_06_Digitect_Credentials-24.png', B: '2026_06_Digitect_Credentials-25.png',
    C: '2026_10_Digitect_Credentials-26.png', D: '2026_02_Digitect_Credentials-24.png'
  };
  const TEAM = [
    ['Anas Alabed', 'أنس العابد', 'Senior Creative Director', 'مدير إبداعي أول', 'Storyteller in chief, turning insights into scroll stoppers.', 'حكّاء أول، بيحوّل الأفكار لمحتوى يوقّف السكرول.', 'A', 541, 120],
    ['Khalid Munshi', 'خالد منشي', 'Senior Communication Director', 'مدير اتصال أول', 'Shapes the message. Amplifies the meaning.', 'يشكّل الرسالة. ويضخّم معناها.', 'B', 53, 137],
    ['Ayoub Safa', 'أيوب صفا', 'Senior Communication Director', 'مدير اتصال أول', 'Bad ads shout. Great ads start conversations.', 'الإعلان السيئ بيزعّق. الإعلان العظيم بيفتح حوار.', 'B', 296, 137],
    ['Amr Al Sakkar', 'عمرو السقار', 'Communication Director', 'مدير اتصال', 'Words shape perception and perception drives everything.', 'الكلمات بتشكّل الانطباع، والانطباع بيحرّك كل حاجة.', 'B', 535, 135],
    ['Donia Kaddo', 'دنيا قدو', 'Communication Director', 'مديرة اتصال', 'You’re not selling a product. You’re selling a story people want to be part of.', 'إنت مش بتبيع منتج. إنت بتبيع حكاية الناس عايزة تبقى جزء منها.', 'D', 534, 121],
    ['Ghina Majzoub', 'غنى مجذوب', 'Social Media Director', 'مديرة السوشيال ميديا', 'Great advertising starts with great listening.', 'الإعلان العظيم بيبدأ بإنصات عظيم.', 'D', 68, 120],
    ['Rahaf Najeeb', 'رهف نجيب', 'Regional Communications Director (Jeddah)', 'مديرة الاتصال الإقليمية (جدة)', 'Orchestrates seamless client creative chemistry.', 'بتدير كيمياء إبداعية سلسة مع العملاء.', 'C', 53, 125],
    ['Mohamed Hubeshi', 'محمد حبيشي', 'Client Services Director (Riyadh)', 'مدير خدمة العملاء (الرياض)', 'Transforms briefs into breakthrough delivery.', 'بيحوّل البريف لتسليم استثنائي.', 'C', 296, 124],
    ['Walid Kassabji', 'وليد قصابجي', 'GM Media', 'المدير العام للميديا', 'If your ad talks to everyone, it speaks to no one.', 'لو إعلانك بيكلّم الكل، يبقى مش بيكلّم حد.', 'C', 528, 125],
    ['Ali Abdulaziz', 'علي عبدالعزيز', 'Head of Production', 'رئيس الإنتاج', 'In advertising, clarity beats cleverness.', 'في الإعلان، الوضوح يغلب الشطارة.', 'D', 305, 120],
    ['Ahmed Bawajeeh', 'أحمد باوجيه', 'HC Manager', 'مدير رأس المال البشري', 'We don’t just hire talent, we build belonging.', 'إحنا مش بس بنوظّف مواهب، إحنا بنبني انتماء.', 'A', 311, 120],
    ['Fadi Dandashi', 'فادي دندشي', 'Group CFO', 'المدير المالي للمجموعة', 'Behind every great decision is a spreadsheet that made sense.', 'ورا كل قرار عظيم شيت أرقام منطقي.', 'A', 77, 119]
  ];
  const CROP_W = 118, CROP_H = 268;

  const TICKER = [
    ['Strategy', 'استراتيجية'], ['Creative & Design', 'إبداع وتصميم'], ['Events & Activations', 'فعاليات وتفعيل'],
    ['Social / Digital', 'سوشيال وديجيتال'], ['Media & PR', 'ميديا وعلاقات عامة'], ['Technology', 'تكنولوجيا'],
    ['Film & Photo', 'أفلام وتصوير'], ['2D / 3D', 'أنيميشن']
  ];
  const NEEDS = [['Strategy', 'استراتيجية'], ['Campaign', 'حملة'], ['Social', 'سوشيال'], ['Event', 'فعالية'], ['Production', 'إنتاج'], ['Website / App', 'موقع / تطبيق']];
  const CITIES = [
    ['Jeddah', 'جدة', 'Asia/Riyadh'], ['Riyadh', 'الرياض', 'Asia/Riyadh'],
    ['Cairo', 'القاهرة', 'Africa/Cairo'], ['London', 'لندن', 'Europe/London']
  ];

  const pad = (n, l = 2) => String(n).padStart(l, '0');
  const tc = ms => { const f = Math.floor(ms / 40) % 25, s = Math.floor(ms / 1000); return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(f)}`; };
  const PLAY = '<svg viewBox="0 0 12 14"><path d="M0 0l12 7-12 7z"/></svg>';

  /* ---------------- brief form: one template, rendered in every slot ---------------- */
  const tpl = $('#briefTpl');
  if (tpl) $$('.brief-slot').forEach(slot => slot.append(tpl.content.cloneNode(true)));

  /* ---------------- keep the dot glued to its word ---------------- */
  $$('.pt').forEach(pt => {
    const prev = pt.previousSibling;
    if (!prev) return;
    const nw = document.createElement('span');
    nw.className = 'nw';
    if (prev.nodeType === 1) { prev.replaceWith(nw); nw.append(prev, pt); return; }
    const m = prev.textContent.match(/(\S+)$/);
    if (!m) return;
    prev.textContent = prev.textContent.slice(0, -m[1].length);
    pt.replaceWith(nw);
    nw.append(m[1], pt);
  });

  /* ---------------- loader ---------------- */
  const loader = $('#loader');
  if (loader) {
    const seen = store.get('dgt-seen');
    const start = performance.now();
    const loaderTc = $('#loaderTc');
    let lt = requestAnimationFrame(function tick() { loaderTc.textContent = tc((performance.now() - start) * 9); lt = requestAnimationFrame(tick); });
    const goLive = () => {
      if (loader.classList.contains('go')) return;
      cancelAnimationFrame(lt);
      loader.classList.add('go');
      setTimeout(() => { loader.classList.add('done'); document.body.classList.add('is-live'); }, seen ? 350 : 650);
      store.set('dgt-seen', '1');
    };
    window.addEventListener('load', () => setTimeout(goLive, seen ? 150 : 600));
    setTimeout(goLive, 1500); // hard cap: flood by 1.5s, fade done by ~2.9s
  } else {
    document.body.classList.add('is-live');
  }

  /* ---------------- hero video + timecodes ---------------- */
  const heroVid = $('#heroVid');
  if (heroVid) {
    const conn = navigator.connection;
    const lowData = conn && (conn.saveData || /2g/.test(conn.effectiveType || ''));
    if (!lowData && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTimeout(() => {
        revealWhenPlaying(heroVid); heroVid.src = heroVid.dataset.src;
      }, 600);
    }
  }
  // background Vimeo films only replace their poster once they are really playing,
  // so a blocked or failed player never shows its error page over the design
  const revealWhenPlaying = frame => {
    const onMsg = e => {
      if (e.source !== frame.contentWindow || !/vimeo\.com$/.test(new URL(e.origin).hostname)) return;
      let d = e.data;
      try { if (typeof d === 'string') d = JSON.parse(d); } catch (err) { return; }
      if (d.event === 'ready') frame.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: 'timeupdate' }), e.origin);
      if (d.event === 'timeupdate' || d.event === 'playProgress') { frame.classList.add('is-on'); window.removeEventListener('message', onMsg); }
    };
    window.addEventListener('message', onMsg);
  };

  // academy reel: muted background loop after the poster, sound version opens in the lightbox
  const reelVid = $('.reel__vid');
  if (reelVid && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setTimeout(() => { revealWhenPlaying(reelVid); reelVid.src = reelVid.dataset.src; }, 800);
  }

  const t0 = Date.now();
  const tcEls = $$('#heroTc, #fdTc');
  if (tcEls.length) setInterval(() => { const v = tc(Date.now() - t0); tcEls.forEach(el => { el.textContent = v; }); }, 40);

  /* ---------------- ticker ---------------- */
  const renderTicker = () => {
    const el = $('#ticker');
    if (!el) return;
    const words = TICKER.map(w => `<span>${t(w[0], w[1])}</span>`).join('');
    el.innerHTML = words + words + words + words;
  };

  /* ---------------- noise flash (channel switch) ---------------- */
  const noise = cv => {
    if (!cv) return;
    const c = cv.getContext('2d'), d = c.createImageData(cv.width, cv.height);
    for (let i = 0; i < d.data.length; i += 4) { const v = Math.random() * 255; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; }
    c.putImageData(d, 0, 0);
    cv.classList.remove('flash'); void cv.offsetWidth; cv.classList.add('flash');
  };

  /* ---------------- episodes ---------------- */
  const epWrap = $('#episodes');
  let epOn = 0;
  const setEp = i => { epOn = i; $$('.epi', epWrap).forEach((b, j) => b.classList.toggle('on', j === i)); };
  const renderEpisodes = () => {
    if (!epWrap) return;
    epWrap.innerHTML = EPISODES.map((e, i) => `<button class="epi${i === epOn ? ' on' : ''}" type="button" data-i="${i}" data-vimeo="${e[6]}" data-title="${e[0]}: ${e[2]}" data-cursor="Play">
      <img src="${W + e[5]}" alt="" loading="lazy">
      <span class="epi__n mono"><span class="rec"></span>EP.${pad(i + 1)}</span>
      <span class="epi__v">${t(e[0], e[1])}</span>
      <span class="epi__body"><span><span class="mono">${t(...CAT[e[4]])} · EP.${pad(i + 1)}</span><h3>${t(e[0], e[1])}<br>${t(e[2], e[3])}</h3></span><span class="epi__play">${PLAY}</span></span>
    </button>`).join('');
  };
  if (epWrap) {
    epWrap.addEventListener('mouseover', e => { const b = e.target.closest('.epi'); if (b && +b.dataset.i !== epOn) setEp(+b.dataset.i); });
    epWrap.addEventListener('focusin', e => { const b = e.target.closest('.epi'); if (b) setEp(+b.dataset.i); });
  }

  /* ---------------- archive tape ---------------- */
  const rail = $('#rail');
  let filter = 'all';
  const updBar = () => {
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    const p = max > 0 ? Math.abs(rail.scrollLeft) / max : 0;
    const w = Math.max(rail.clientWidth / rail.scrollWidth, .08);
    const bar = $('#tapeBar');
    bar.style.width = (w * 100) + '%';
    bar.style.transform = `translateX(${(isAr() ? -1 : 1) * p * (1 / w - 1) * 100}%)`;
  };
  const renderChips = () => {
    if (!rail) return;
    const counts = { all: ARCHIVE.length };
    ARCHIVE.forEach(a => { counts[a[2]] = (counts[a[2]] || 0) + 1; });
    $('#chips').innerHTML = ['all', 'campaign', 'event', 'social', 'studio'].map(k => `<button class="chip${k === filter ? ' on' : ''}" role="tab" aria-selected="${k === filter}" data-f="${k}">${k === 'all' ? t('All', 'الكل') : t(...CAT[k])}<sup>${counts[k]}</sup></button>`).join('');
  };
  const renderRail = () => {
    if (!rail) return;
    const list = ARCHIVE.filter(a => filter === 'all' || a[2] === filter);
    rail.innerHTML = list.map((a, i) => `<button class="clip" type="button" data-vimeo="${a[0]}" data-title="${CAT[a[2]][0]}" data-cursor="Play" style="animation-delay:${Math.min(i, 12) * 30}ms"><img src="${W + a[1]}" alt="" loading="lazy"><span>${t(...CAT[a[2]])} · ${pad(i + 1)}</span></button>`).join('');
    $('#tapeCount').textContent = `${pad(list.length)} ${t('films', 'فيلم')}`;
    rail.scrollLeft = 0; updBar();
  };
  if (rail) {
    $('#chips').addEventListener('click', e => { const b = e.target.closest('.chip'); if (!b) return; filter = b.dataset.f; renderChips(); renderRail(); });
    rail.addEventListener('scroll', updBar, { passive: true });
    let down = false, sx = 0, sl = 0, moved = 0;
    rail.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = 0; sx = e.clientX; sl = rail.scrollLeft; });
    window.addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - sx; moved = Math.max(moved, Math.abs(dx)); if (moved > 4) rail.classList.add('drag'); rail.scrollLeft = sl - dx; });
    window.addEventListener('pointerup', () => { down = false; setTimeout(() => rail.classList.remove('drag'), 0); });
    rail.addEventListener('click', e => { if (moved > 6) { e.stopPropagation(); e.preventDefault(); } }, true);
  }

  /* ---------------- channels ---------------- */
  const tvList = $('#tvList');
  let ch = 0, auto = null;
  const setCh = i => {
    ch = i;
    const c = CHANNELS[i];
    noise($('#tvNoise'));
    $('#tvImg').src = W + c.img;
    $('#tvCh').textContent = 'CH.' + pad(i + 1);
    $('#tvTitle').textContent = t(c.en, c.ar);
    $('#tvItems').innerHTML = c.items.map(it => `<li>${t(it[0], it[1])}</li>`).join('');
    $$('li', tvList).forEach((li, j) => li.classList.toggle('on', j === i));
  };
  const renderTv = () => {
    if (!tvList) return;
    tvList.innerHTML = CHANNELS.map((c, i) => `<li><button type="button" data-i="${i}"><span class="num">CH.${pad(i + 1)}</span><span class="nm">${t(c.en, c.ar)}</span></button></li>`).join('');
    setCh(ch);
  };
  const stopAuto = () => { clearInterval(auto); auto = null; };
  if (tvList) {
    tvList.addEventListener('click', e => { const b = e.target.closest('button'); if (b) { setCh(+b.dataset.i); stopAuto(); $('#channels').dataset.touched = 1; } });
    tvList.addEventListener('mouseover', e => { const b = e.target.closest('button'); if (b && +b.dataset.i !== ch) { setCh(+b.dataset.i); stopAuto(); $('#channels').dataset.touched = 1; } });
    new IntersectionObserver(([en]) => {
      if (en.isIntersecting && !auto && !en.target.dataset.touched) auto = setInterval(() => setCh((ch + 1) % CHANNELS.length), 3800);
      else if (!en.isIntersecting) stopAuto();
    }, { threshold: .4 }).observe($('#channels'));
  }

  /* ---------------- team ---------------- */
  const teamRail = $('#teamRail');
  const renderTeam = () => {
    if (!teamRail) return;
    teamRail.innerHTML = TEAM.map(m => {
      const [, , , , , , s, x, w] = m;
      // every card shows the same 120×268 window, centred on that person's strip
      const cx = x + (w - CROP_W) / 2;
      const style = `aspect-ratio:${CROP_W}/${CROP_H};background-image:url('${T + SLIDE[s]}');background-size:auto ${(413 / CROP_H * 100).toFixed(2)}%;background-position:${(cx / (736 - CROP_W) * 100).toFixed(2)}% 0`;
      return `<article class="mate" tabindex="0"><div class="mate__ph" style="${style}" role="img" aria-label="${m[0]}"><span class="mate__rec mono"><span class="rec"></span>REC</span><p class="mate__q">“${t(m[4], m[5])}”</p></div><h3>${t(m[0], m[1])}</h3><span class="role">${t(m[2], m[3])}</span></article>`;
    }).join('');
  };
  $$('.team__btn').forEach(b => b.addEventListener('click', () => {
    const step = (teamRail.firstElementChild?.offsetWidth || 220) * 2;
    teamRail.scrollBy({ left: +b.dataset.dir * step * (isAr() ? -1 : 1), behavior: 'smooth' });
  }));

  /* ---------------- academy page: departments ---------------- */
  const renderAcademy = () => {
    const grid = $('#acChannels');
    if (grid) grid.innerHTML = CHANNELS.map((c, i) => `<article class="acc"><img src="${W + c.img}" alt="" loading="lazy"><div class="acc__body"><span class="mono"><span class="rec"></span>CH.${pad(i + 1)}</span><h3>${t(c.en, c.ar)}</h3><ul>${c.items.slice(0, 4).map(it => `<li>${t(it[0], it[1])}</li>`).join('')}</ul></div></article>`).join('');
    $$('#acDept, select[data-dept]').forEach(dept => {
      const val = dept.value;
      dept.innerHTML = `<option value="">${t('Choose', 'اختار')}</option>` + CHANNELS.map(c => `<option value="${c.en}">${t(c.en, c.ar)}</option>`).join('') + `<option value="Other">${t('Not sure yet', 'لسه مش متأكد')}</option>`;
      dept.value = val;
    });
  };

  /* ---------------- clients ---------------- */
  $$('[data-logos]').forEach(tr => {
    const imgs = tr.dataset.logos.split(',').map(n => `<img src="assets/logos/${n}-scaled.png" alt="Client logos" loading="lazy">`).join('');
    tr.innerHTML = imgs + imgs + imgs + imgs;
  });

  /* ---------------- partnership film (custom controls) ---------------- */
  const film = $('#ldnFilm');
  if (film) {
    const v = $('video', film), bar = $('.film__track i', film), time = $('.film__time', film), mute = $('.film__mute', film);
    const toggle = () => { if (v.paused) v.play(); else v.pause(); };
    $('.film__big', film).addEventListener('click', () => { film.classList.add('started'); v.play(); });
    $('.film__pp', film).addEventListener('click', toggle);
    v.addEventListener('click', toggle);
    v.addEventListener('play', () => film.classList.add('playing'));
    v.addEventListener('pause', () => film.classList.remove('playing'));
    v.addEventListener('ended', () => film.classList.remove('playing'));
    v.addEventListener('timeupdate', () => {
      if (!v.duration) return;
      bar.style.width = (v.currentTime / v.duration * 100) + '%';
      const s = Math.floor(v.currentTime);
      time.textContent = `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;
    });
    $('.film__track', film).addEventListener('click', e => {
      const r = e.currentTarget.getBoundingClientRect();
      let p = (e.clientX - r.left) / r.width;
      if (isAr()) p = 1 - p;
      if (v.duration) v.currentTime = p * v.duration;
    });
    mute.addEventListener('click', () => { v.muted = !v.muted; mute.classList.toggle('off', v.muted); });
  }

  /* ---------------- brief form + popup ---------------- */
  const renderNeeds = () => $$('.need-chips').forEach(box => {
    const on = $$('.chip[aria-pressed="true"]', box).map(b => +b.dataset.i);
    box.innerHTML = NEEDS.map((n, i) => `<button type="button" class="chip" data-i="${i}" aria-pressed="${on.includes(i)}">${t(n[0], n[1])}</button>`).join('');
  });
  document.addEventListener('click', e => {
    const c = e.target.closest('.need-chips .chip');
    if (c) c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') !== 'true');
  });
  document.addEventListener('submit', e => {
    const f = e.target;
    if (f.classList.contains('brief')) {
      e.preventDefault();
      const needs = $$('.need-chips .chip[aria-pressed="true"]', f).map(b => NEEDS[+b.dataset.i][0]).join(', ');
      if (!f.name.value.trim()) return f.name.focus();
      if (!/.+@.+\..+/.test(f.email.value)) return f.email.focus();
      const body = `Name: ${f.name.value}\nCompany: ${f.company.value}\nEmail: ${f.email.value}\nMobile: ${f.phone.value}\nNeeds: ${needs}\n\n${f.msg.value}`;
      location.href = `mailto:info@digitect.com?subject=${encodeURIComponent('New brief: ' + (f.company.value || f.name.value))}&body=${encodeURIComponent(body)}`;
    }
    if (f.classList.contains('acad-form') && !f.classList.contains('mail-form')) {
      e.preventDefault();
      const req = $$('[required]', f).find(i => !i.value.trim() || (i.type === 'email' && !/.+@.+\..+/.test(i.value)));
      if (req) return req.focus();
      const d = new FormData(f);
      const body = ['name', 'email', 'mobile', 'university', 'department', 'source', 'portfolio', 'note'].map(k => `${k}: ${d.get(k) || ''}`).join('\n') + '\n\n(CV attached to this email)';
      location.href = `mailto:info@digitect.com?subject=${encodeURIComponent('d.academy application: ' + d.get('name'))}&body=${encodeURIComponent(body)}`;
    }
    // any other application form: every named field goes into the email, subject from data-subject
    if (f.classList.contains('mail-form')) {
      e.preventDefault();
      const req = $$('[required]', f).find(i => !i.value.trim() || (i.type === 'email' && !/.+@.+\..+/.test(i.value)));
      if (req) return req.focus();
      const d = new FormData(f);
      const body = [...d.entries()].map(([k, v]) => `${k}: ${v}`).join('\n') + '\n\n(CV attached to this email)';
      location.href = `mailto:info@digitect.com?subject=${encodeURIComponent((f.dataset.subject || 'Application') + ': ' + (d.get('name') || ''))}&body=${encodeURIComponent(body)}`;
    }
  });

  const modal = $('#briefModal');
  let lastFocus = null;
  const openModal = () => {
    lastFocus = document.activeElement;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; document.body.classList.add('overlay-open');
    setTimeout(() => $('input', modal)?.focus(), 350);
  };
  const closeModal = () => { modal.classList.remove('open'); document.body.style.overflow = ''; document.body.classList.remove('overlay-open'); lastFocus?.focus(); };
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-brief]');
    if (b && modal && desktop()) { e.preventDefault(); openModal(); }
  });
  if (modal) {
    modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('[data-close]')) closeModal(); });
  }

  /* ---------------- city clocks ---------------- */
  const tickCities = () => $$('#cities time').forEach(el => {
    el.textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: el.dataset.tz }).format(new Date());
    const h = +new Intl.DateTimeFormat('en-GB', { hour: 'numeric', hour12: false, timeZone: el.dataset.tz }).format(new Date());
    el.parentElement.classList.toggle('live', h >= 9 && h < 19);
  });
  const renderCities = () => {
    const el = $('#cities');
    if (!el) return;
    el.innerHTML = CITIES.map(c => `<div class="city"><b>${t(c[0], c[1])}</b><time data-tz="${c[2]}"></time></div>`).join('');
    tickCities();
  };
  setInterval(tickCities, 1000);

  /* ---------------- lightbox ---------------- */
  const lb = $('#lb'), lbBox = $('#lbBox');
  const openLb = (id, title, vertical) => {
    lbBox.classList.toggle('is-vertical', !!vertical);
    lbBox.innerHTML = `<iframe src="https://player.vimeo.com/video/${id}?autoplay=1&dnt=1&title=0&byline=0&portrait=0&color=EA5D0B" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${title || 'Film'}"></iframe>`;
    $('#lbTitle').textContent = title || t('Now playing', 'يُعرض الآن');
    lb.classList.add('open');
    document.body.style.overflow = 'hidden'; document.body.classList.add('overlay-open');
    $('#lbX').focus();
  };
  const closeLb = () => { lb.classList.remove('open'); document.body.style.overflow = ''; document.body.classList.remove('overlay-open'); setTimeout(() => { lbBox.innerHTML = ''; }, 400); };
  if (lb) {
    document.addEventListener('click', e => {
      const b = e.target.closest('[data-vimeo]');
      if (b) { e.preventDefault(); openLb(b.dataset.vimeo, b.dataset.title, b.dataset.vertical); }
    });
    $('#lbX').addEventListener('click', closeLb);
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  }
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (lb?.classList.contains('open')) closeLb();
    if (modal?.classList.contains('open')) closeModal();
    if (document.body.classList.contains('menu-open')) toggleMenu(false);
  });

  /* ---------------- header ---------------- */
  const hdr = $('#hdr');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = scrollY;
    hdr.classList.toggle('is-solid', y > 60);
    hdr.classList.toggle('is-hidden', y > lastY && y > 500 && !document.body.classList.contains('menu-open'));
    lastY = y;
  }, { passive: true });
  const toggleMenu = on => document.body.classList.toggle('menu-open', on);
  $('#burger').addEventListener('click', () => toggleMenu());
  $$('#menu a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

  /* ---------------- words light up on scroll ---------------- */
  const splitWords = () => $$('[data-words]').forEach(p => {
    if (p.dataset.split) return;
    p.dataset.split = 1;
    [...p.childNodes].forEach(c => {
      if (c.nodeType === 3) {
        const frag = document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach(w => {
          if (!w) return;
          if (/^\s+$/.test(w)) frag.append(w);
          else { const s = document.createElement('span'); s.className = 'mani__word'; s.textContent = w; frag.append(s); }
        });
        c.replaceWith(frag);
      } else if (c.nodeType === 1) {
        c.classList.add('mani__word');
      }
    });
  });
  const lightWords = () => $$('[data-words]').forEach(p => {
    if (!p.offsetParent) return;
    const r = p.getBoundingClientRect(), vh = innerHeight;
    const prog = Math.min(1, Math.max(0, (vh * .85 - r.top) / (r.height + vh * .3)));
    const words = $$('.mani__word', p);
    const n = Math.round(prog * words.length * 1.15);
    words.forEach((w, i) => w.classList.toggle('lit', i < n));
  });
  window.addEventListener('scroll', lightWords, { passive: true });

  /* ---------------- reveal ---------------- */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
  $$('.rv').forEach(el => io.observe(el));

  /* ---------------- cursor ---------------- */
  const cur$ = $('#cursor'), lab = $('#cursorLabel');
  if (cur$ && matchMedia('(hover:hover) and (pointer:fine)').matches) {
    document.body.classList.add('has-cursor');
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
    window.addEventListener('pointermove', e => { x = e.clientX; y = e.clientY; }, { passive: true });
    (function loop() { cx += (x - cx) * .22; cy += (y - cy) * .22; cur$.style.transform = `translate(${cx}px,${cy}px)`; requestAnimationFrame(loop); })();
    document.addEventListener('pointerover', e => {
      const el = e.target.closest('[data-cursor]');
      cur$.classList.toggle('is-big', !!el);
      if (el) lab.textContent = isAr() ? 'شغّل' : el.dataset.cursor;
      cur$.classList.toggle('on-dot', !!e.target.closest('.mani,.car,.ticker,.btn--dot,.menu,.fd,.epi__play,.ac-hero__dot'));
    });
  }

  /* ---------------- language ---------------- */
  const applyLang = lang => {
    const html = document.documentElement;
    html.lang = lang; html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-ar]').forEach(el => {
      if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
      el.innerHTML = lang === 'ar' ? el.dataset.ar : el.dataset.en;
    });
    $$('[data-ph-ar]').forEach(el => {
      if (el.dataset.phEn === undefined) el.dataset.phEn = el.placeholder;
      el.placeholder = lang === 'ar' ? el.dataset.phAr : el.dataset.phEn;
    });
    const lb$ = $('#langBtn');
    lb$.textContent = lang === 'ar' ? 'EN' : 'عربي';
    lb$.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل للعربية');
    renderTicker(); renderEpisodes(); renderChips(); renderRail(); renderTv(); renderTeam(); renderAcademy(); renderNeeds(); renderCities();
    splitWords(); lightWords();
    store.set('dgt-lang', lang);
  };
  $('#langBtn').addEventListener('click', () => applyLang(isAr() ? 'en' : 'ar'));
  applyLang(store.get('dgt-lang') === 'ar' ? 'ar' : 'en');
})();
