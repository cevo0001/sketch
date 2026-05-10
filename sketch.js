let scene = 4;
let marks = [];
let dust = [];

const pages = [
 {
  label: "Erfaring og kompetencer",
  title: "Erfaring og kompetencer",
  text: "Kreativ multimediedesigner med erfaring inden for visuel kommunikation, webdesign, SoMe-content, grafisk design, videoredigering, motion graphics og konceptudvikling. Jeg arbejder i krydsfeltet mellem æstetik, digital formidling og kreative brugeroplevelser med fokus på stemning, identitet og interaktivitet. Jeg har erfaring med projektledelse og gruppefacilitering gennem arbejde med unge, selvstændigt terapeutisk arbejde under navnet Kærlighedsterapeuten, frivilligt arbejde på Amberley House i New Zealand og deltagelse i De Sceneste 0.2 – et kreativt og tværkunstnerisk uddannelsesforløb for unge kulturskabere i Danmark med fokus på samskabelse, projektledelse og kunstnerisk udvikling, herunder opsætning af Hjerteland på Heartland Festival. Jeg har afsluttet praktik hos Dansk Vegetarisk Forening som grafisk designer og illustrator, hvor jeg arbejdede med SoMe-content, visuel identitet, videoredigering, animationer og hjemmesideopdateringer.",
  bullets: [
    "Front-end: HTML, CSS, JavaScript, React, p5.js, Astro, API, JSON, Supabase og Fetch",
    "Design & UX: Figma, Adobe CC, layout, grafik, visuel identitet, UX/UI, designprincipper og bæredygtigt design",
    "Motion & Content: videoredigering, edits, reels, animationer, motion graphics, content creation og kampagneidéer",
    "Tools: VSCode, GitHub, Netlify, Linear, Trello, InDesign, Illustrator, Photoshop, After Effects og Premiere Pro",
    "Samarbejde: projektledelse, Team Canvas, gruppearbejde, gruppefacilitering og kreative processer",
    "LinkedIn: <a href='https://www.linkedin.com/in/celine-sophie-von-christierson-797498386/' target='_blank'>celine-sophie-von-christierson</a>"
  ],
  images: ["img/forside1.jpg", "img/forside2.png" , "img/mig.jpg", "img/malerier.jpg"],
  captions: ["Digitalt design / case", "Proces / visuelt arbejde"]
},
  {
    label: "Uddannelser",
    title: "Uddannelser",
    text: "Min baggrund samler design, kunst, formidling og menneskelig forståelse i én kreativ praksis.",
    bullets: [
      "KEA – Multimediedesign",
      "Johan Borups Højskole – kunstneriske forløb, kunst, teater og musik",
      "De Sceneste - ung iværksætter uddannelse, projektledelse og kunstnerisk udvikling",
      "Gruppeleder kursus gennem Scleroseforeningen",
      "Terapeutisk uddannelse - parterapi, sexolog og selvværdsterapeut",
      "STX",
      "Jobs: Louisiana Museum, Original Coffee og Creative Space – barista og kreativt fællesskab"
    ],
    images: ["img/hjemmeside1.png", "img/hjemmeside2.png", "img/lamper.jpg", "img/aa.png", "img/ds.png", "img/ds1.png", "img/kt.png"],
    captions: ["Uddannelse / proces", "Kreativ udvikling"]
  },
  {
    label: "Events",
    title: "Events",
    text: "Jeg arbejder med stemning, oplevelse og visuel retning i kreative, kulturelle og sociale rum. Gennem De Sceneste har vi afholdt events på Hjerteland på Heartland Festival, hvor vi har lavet en Panini-rampe til børn, og andre kreative legestationer. Vi har afholdt XYZ, som et event vi vi har skabt og afholdt i Basement under Vega, hvor vi har opsøgt kunstnere og værter til talks og debatter til eventet. <br><br> Derudover har vi på Borups Højskole lavet lim-lamper, der skulle udstilles på Heartland, og afholdt tøjbyttemarked i samarbejde med Abaslon og Tuborgfonden med De sceneste. <br><br> Jeg har også lavet noget visuelt content til events på Soho for Ace and the Harmony og Monkey Shoulders. <br><br> Jeg har også været med til at lave noget visuel identitet til cafeen Kismet, også for deres events. <br><br> Som event har jeg også været forsanger i et balleband/partyband kaldet Partybanditterne, hvor vi her er blevet booket til fester og bryllupper rundt i Danmark. Jeg har været med som model og speaker til Samsøe Samsøe's 'Local Love' event i København. <br><br> Jeg er ung musical-elev, så jeg har brugt meget tid på Helsingør Ungdomsskole som ung, og har kendskab til musik og teater udover kunst og design, hvilket også har givet mig erfaring med at arbejde med stemning og oplevelse i events og kreative rum.",
    bullets: [
      "Kulturmiljøer, festival, caféer og kreative fællesskaber",
      "Visuel formidling til events og samarbejder",
      "Æstetik, atmosfære og brugeroplevelse"
    ],
    images: ["img/event1.png", "img/event2.png", "img/event3.png", "img/event4.png", "img/event5.png", "img/event6.png", "img/event7.png", "img/event8.png", "img/event9.png", "img/event10.png", "img/event11.png", "img/event12.png"],
    captions: ["Event / stemning", "Visuelt miljø"]
  },
  {
    label: "SoMe",
    title: "SoMe",
    text: "Jeg skaber digitalt indhold med fokus på æstetik, nærvær, rytme og tydelig visuel identitet. Jeg har været med til at udvikle SoMe-strategi, visuel identitet og content creation for Dansk Vegetarisk Forening, herunder kampagner, reels og grafisk indhold til Instagram og Facebook. Og fået deres følgertal til at stige i perioden under min praktik. Her har jeg også stået for videoredigering og animation fx. timere og visual effects - instagram: @danskvegetariskforening. <br><br> Derudover har jeg været indenover SoMe for De Sceneste 0.2 i perioden vi var på uddannelsen, herunder content creation, reels og visuel identitet til Instagram. Instagram: @desceneste. <br><br> Jeg har også erfaring med SoMe-content og reels i forbindelse med mit terapeutiske arbejde under navnet Kærlighedsterapeuten, herunder udvikling af visuel identitet, content creation og reels til Instagram. Instagram: @kaerlighedsterapeuten. <br><br> Og så har jeg været med til at lave noget visuel identitet til cafeen Kismet, også for deres events. Derudover er jeg blevet bedt om at hjælpe både DVF og Urban13 (spillested) med at bygge en Tiktok op til dem, som jeg skal starte på til sommer. <br><br> Min egen instagram er @celinesophie_von. Under mine eksaminer på min uddannelse, har vi arbejdet med at lære at bygge visuel identitet og branding op til SoMe for forskellige virksomheder og cafeer - og samarbejdet med virksomhederne undervejs, så vi kunne finde frem til det bedste resultat sammen. <br><br> Hos @Aceandtheharmony og @monkeyshoulders, har jeg også her lavet noget visuelt content til deres events på Soho, der kommer op i slutningen af maj. Jeg har også lavet en del content creation og reels i forbindelse med det, både til Instagram og Tiktok, og har fået rigtig god feedback på det arbejde, både fra virksomhederne og fra mine undervisere.",
    bullets: [
      "Reels, captions, kampagner og content-planlægning",
      "Visuel strategi og SoMe-universer",
      "Video, grafik og storytelling"
    ],
    images: ["img/some1.jpg", "img/some2.jpg", "img/some2.png", "img/some3.jpg", "img/some4.jpg", "img/some5.jpg", "img/some6.jpg", "img/some7.png", "img/some8.png", "img/some9.png", "img/some10.png", "img/some11.jpg", "img/kis.png", "img/some12.png", "img/some13.png", "img/some14.JPG", "img/some15.png", "img/some16.JPG", "img/some17.JPG", "img/some18.png", "img/some19.png"],
    captions: ["SoMe content", "Kampagne / reel"]
  },
  {
    label: "Visuals",
    title: "Visuals",
    text: "Et udvalg af mine visuelle eksperimenter og elementer til brug af brand, hjemmeside og SoMe - på tværs af illustration, animation, 3D, digital kunst og grafiske universer.",
    bullets: [
      "3D, animation og motion graphics",
      "Illustration, grafik og digital art",
      "Visuelle identiteter og stemningsuniverser",
      "Adobe Illustrator, After Effects, p5.js, Three.js, Figma, Photoshop, Blender"
    ],
images: [
  "liquid.html",
  "img/monkey-grain.mp4",
  "concert-visual.html",
  "bg-visual.html",
  "img/visuals2.png",
  "img/xyz.png",
  "img/scen3.png",
  "img/kis4.mp4",
  "svg-visual.html",
  "img/maleri.jpeg",
  "img/circ.png",
  "img/scen6.png",
  "img/band1.png"
],
captions: [
  "Interactive liquid metal experiment",
  "Monkey Shoulder 3D animation",
  "Concert visual experiment",
  "Three.js background visual",
  "Blender 3D render",
  "Basement event poster",
   "Basement event poster",
  "Visual til Kismet Café SoMe",
  
  "3D SVG creature experiment",
  "Oliemaleri",
  "Poster til Circular Lab - bæredygtig workshop",
 
  "Basement event poster",
  "Band print design - Creatura Band"
]
  }
];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("art-layer");

  for (let i = 0; i < 1000; i++) {
    dust.push({
      x: random(width),
      y: random(height),
      s: random(0.3, 2),
      a: random(8, 42)
    });
  }

  drawSceneBackground();
  updateContent();
  document.body.className = `scene-${scene}`;
}

function draw() {
  drawSceneBackground();
  drawTexture();
  drawSceneMood();
  drawMouseEffect();
  drawMarks();
}

function drawSceneBackground() {
  if (scene === 0) background(8, 6, 7);
  if (scene === 1) background(3, 5, 20);
  if (scene === 2) background(20, 10, 6);
  if (scene === 3) background(3, 8, 16);
  if (scene === 4) background(14, 10, 6);
}

function setScene(s) {
  scene = s;
  updateContent();
  document.body.className = `scene-${scene}`;

  marks = [];
  drawSceneBackground();

  for (let i = 0; i < 25; i++) {
    marks.push(makeMark(random(width), random(height), true));
  }
}

function updateContent() {
  const page = pages[scene];

  document.getElementById("label").innerText = page.label;
  document.getElementById("section-title").innerText = page.title;
  document.getElementById("section-text").innerHTML = page.text;

  const list = document.getElementById("section-list");
  list.innerHTML = "";

  page.bullets.forEach((bullet) => {
    const li = document.createElement("li");
    li.innerHTML = bullet;
    list.appendChild(li);
  });

  const mediaPanel = document.getElementById("media-panel");
  mediaPanel.innerHTML = "";

  page.images.forEach((src, index) => {
  const figure = document.createElement("figure");
  figure.className = "media-card";
  figure.style.setProperty("--tilt", `${random(-2, 2)}deg`);

  let media;

  if (src.endsWith(".html")) {
    media = document.createElement("iframe");
    media.src = src;
    media.title = page.captions[index] || "Interactive artwork";
    media.setAttribute("loading", "lazy");
  } else if (src.endsWith(".mp4") || src.endsWith(".webm")) {
    media = document.createElement("video");
    media.src = src;
    media.autoplay = true;
    media.muted = true;
    media.loop = true;
    media.playsInline = true;
  } else {
    media = document.createElement("img");
    media.src = src;
    media.alt = page.captions[index] || "Portfolio image";
  }

  const caption = document.createElement("figcaption");
  caption.innerText = page.captions[index] || "";

  figure.appendChild(media);
  figure.appendChild(caption);
  mediaPanel.appendChild(figure);
});
}

function drawTexture() {
  noStroke();

  for (let d of dust) {
    if (scene === 0) fill(120, 90, 100, d.a * 0.3);
    if (scene === 1) fill(210, 225, 255, d.a * 0.22);
    if (scene === 2) fill(180, 95, 55, d.a * 0.38);
    if (scene === 3) fill(70, 140, 210, d.a * 0.35);
    if (scene === 4) fill(230, 190, 110, d.a * 0.32);

    circle(d.x, d.y, d.s);
  }
}

function drawSceneMood() {
  drawVignette();

  if (scene === 0) drawOilTexture();
  if (scene === 1) drawStarField();
  if (scene === 2) drawRustMetal();
  if (scene === 3) drawDigitalNoise();
  if (scene === 4) drawFabricGold();
}

function drawOilTexture() {
  // grumset, rolig baggrund til Erfaring
  for (let i = 0; i < 18; i++) {
    stroke(random(35, 75), random(25, 45), random(45, 75), random(5, 14));
    strokeWeight(random(0.4, 1.6));
    line(random(width), random(height), random(width), random(height));
  }

  // små “mudrede” pletter
  noStroke();
  for (let i = 0; i < 10; i++) {
    fill(85, 55, 75, random(4, 10));
    circle(random(width), random(height), random(80, 180));
  }
}

function drawStarField() {
  noStroke();

  // baggrunds-støv (meget roligt)
  for (let i = 0; i < 60; i++) {
    fill(220, 225, 255, random(8, 25));
    circle(random(width), random(height), random(0.4, 1.2));
  }

  // bløde “glow orbs” der bevæger sig langsomt
  for (let i = 0; i < 10; i++) {
    let x = (frameCount * 0.02 + i * 160) % (width + 200) - 100;
    let y = height * 0.2 + i * 60 + sin(frameCount * 0.003 + i) * 20;

    // outer glow
    fill(240, 240, 255, 10);
    circle(x, y, 40);

    // mid glow
    fill(240, 235, 220, 18);
    circle(x, y, 18);

    // core
    fill(255, 250, 230, 65);
    circle(x, y, 3);
  }
}

function drawRustMetal() {
  // statisk stof/metal-struktur til Events
  for (let y = 0; y < height; y += 9) {
    stroke(120, 65, 42, 22);
    strokeWeight(0.45);
    line(0, y, width, y);
  }

  for (let x = 0; x < width; x += 13) {
    stroke(185, 95, 55, 12);
    strokeWeight(0.35);
    line(x, 0, x, height);
  }

  // dybere rust/metal ridser
  for (let i = 0; i < 45; i++) {
    stroke(random(90, 150), random(45, 75), random(25, 40), random(10, 26));
    strokeWeight(random(0.3, 1.2));
    line(random(width), random(height), random(width), random(height));
  }
}

function drawDigitalNoise() {
  noStroke();

  for (let i = 0; i < 70; i++) {
    fill(70, 140, 220, random(10, 35));
    rect(random(width), random(height), random(8, 120), random(1, 4));
  }
}

function drawFabricGold() {
  for (let i = 0; i < 36; i++) {
    stroke(210, 170, 90, random(6, 20));
    strokeWeight(random(0.2, 0.8));
    line(0, random(height), width, random(height));
  }

  for (let i = 0; i < 18; i++) {
    stroke(245, 220, 150, random(6, 18));
    strokeWeight(random(0.2, 0.5));
    line(random(width), 0, random(width), height);
  }
}

function drawVignette() {
  noFill();

  for (let r = 0; r < 12; r++) {
    stroke(0, 0, 0, 8);
    strokeWeight(28);
    rect(-r * 18, -r * 18, width + r * 36, height + r * 36);
  }
}

function drawMouseEffect() {
  let speed = dist(mouseX, mouseY, pmouseX, pmouseY);

  let amount = scene === 2 || scene === 3
    ? map(speed, 0, 90, 0, 3, true)
    : map(speed, 0, 90, 0, 1, true);

  for (let i = 0; i < amount; i++) {
    marks.push(makeMark(mouseX, mouseY, false));
  }

 if (scene === 0 && speed > 3) {
  stroke(170, 125, 155, 55);
  strokeWeight(0.75);
  line(pmouseX, pmouseY, mouseX, mouseY);

  stroke(80, 55, 75, 28);
  strokeWeight(2.2);
  line(pmouseX + random(-2, 2), pmouseY + random(-2, 2), mouseX, mouseY);
}

  // Uddannelser: rolig stjernemus
  if (scene === 1) {
    drawTinyStar(mouseX, mouseY, 6);
  }

  // Events: gnist
  if (scene === 2 && speed > 8) {
    stroke(220, 110, 60, 55);
    strokeWeight(0.8);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }

  // SoMe: pixel-slæb
  if (scene === 3 && speed > 4) {
    noStroke();
    fill(80, 150, 210, 28);
    rect(mouseX, mouseY, 4, 4);
    rect(mouseX - 10, mouseY + 6, 3, 3);
  }

  // Visuals: blød guldtråd
  if (scene === 4 && speed > 3) {
    noFill();
    stroke(230, 190, 100, 28);
    strokeWeight(0.8);
    bezier(
      pmouseX,
      pmouseY,
      mouseX + 18,
      mouseY - 18,
      pmouseX - 18,
      pmouseY + 18,
      mouseX,
      mouseY
    );
  }
}

function drawTinyStar(x, y, r) {
  push();
  translate(x, y);
  rotate(frameCount * 0.02);
  noStroke();
  fill(245, 225, 170, 95);

  beginShape();
  for (let i = 0; i < 10; i++) {
    let radius = i % 2 === 0 ? r : r * 0.42;
    let angle = TWO_PI * i / 10;
    vertex(cos(angle) * radius, sin(angle) * radius);
  }
  endShape(CLOSE);

  pop();
}

function makeMark(x, y, forceGold) {
  let spread;
  let length;
  let weight;

  if (scene === 0) {
    spread = 8;
    length = 26;
    weight = random(0.15, 0.9);
  } else if (scene === 1) {
    spread = 3;
    length = 5;
    weight = random(0.1, 0.5);
  } else if (scene === 2) {
    spread = 10;
    length = 26;
    weight = random(0.3, 1.4);
  } else if (scene === 3) {
    spread = 4;
    length = 4;
    weight = random(1, 3);
  } else {
    spread = 6;
    length = 20;
    weight = random(0.12, 0.7);
  }

  return {
    x: x + random(-spread, spread),
    y: y + random(-spread, spread),
    px: x + random(-length, length),
    py: y + random(-length, length),
    w: weight,
    a: random(12, 65),
    life: random(40, 130),
    gold: forceGold || random() < 0.12
  };
}

function drawMarks() {
  for (let i = marks.length - 1; i >= 0; i--) {
    let m = marks[i];

    strokeWeight(m.w);

    if (scene === 3) {
      noStroke();
      fill(80, 150, 220, m.a);
      rect(m.x, m.y, random(2, 6), random(2, 6));
    } else {
      if (m.gold) {
        stroke(218, 169, 72, m.a);
      } else if (scene === 0) {
        stroke(random(100, 155), random(70, 95), random(120, 155), m.a);
      } else if (scene === 1) {
        stroke(230, 230, 255, m.a);
      } else if (scene === 2) {
        stroke(random(180, 230), random(80, 120), random(40, 65), m.a);
      } else {
        stroke(230, 190, 100, m.a);
      }

      line(m.px, m.py, m.x, m.y);
    }

    m.life--;
    m.a *= 0.985;

    if (m.life <= 0 || m.a < 3) {
      marks.splice(i, 1);
    }
  }
}

function mousePressed() {
  for (let i = 0; i < 45; i++) {
    marks.push(makeMark(mouseX, mouseY, true));
  }
}

function keyPressed() {
  if (key === "c") {
    marks = [];
    drawSceneBackground();
  }

  if (key === "s") {
    saveCanvas("celine-cv-art", "png");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawSceneBackground();
}