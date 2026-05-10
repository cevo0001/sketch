let bg;

function preload() {
  bg = loadImage("img/maleri.jpeg");
}

let rings = [];
let shards = [];
let fog = [];
let bubbles = [];
let waves = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 3);

  for (let i = 0; i < 8; i++) rings.push(makeRing());
  for (let i = 0; i < 45; i++) shards.push(makeShard());
  for (let i = 0; i < 12; i++) fog.push(makeFog());
  for (let i = 0; i < 34; i++) bubbles.push(makeBubble());
  for (let i = 0; i < 7; i++) waves.push(makeWave());
}

function draw() {
  background(0, 0, 3, 24);

  drawFog();
  drawWaves();
  drawBubbles();
  drawStageRings();
  drawLightShards();
  drawPulseCore();
  drawStrobe();
  drawGrain();
}

function makeRing() {
  return {
    r: random(90, 420),
    speed: random(0.002, 0.007),
    rot: random(TWO_PI),
    sides: floor(random(5, 10)),
    a: random(12, 34)
  };
}

function makeShard() {
  return {
    x: random(width),
    y: random(height),
    len: random(35, 170),
    speed: random(0.12, 0.55),
    a: random(8, 38),
    angle: random(-0.6, 0.6)
  };
}

function makeFog() {
  return {
    x: random(width),
    y: random(height),
    s: random(180, 560),
    a: random(4, 11)
  };
}

function makeBubble() {
  return {
    x: random(width),
    y: random(height),
    r: random(8, 44),
    speed: random(0.08, 0.55),
    drift: random(0.002, 0.009),
    a: random(10, 38)
  };
}

function makeWave() {
  return {
    y: random(height),
    amp: random(35, 95),
    speed: random(0.002, 0.007),
    offset: random(1000),
    weight: random(0.5, 1.4)
  };
}

function drawFog() {
  noStroke();

  for (let f of fog) {
    fill(12, 22, 42, f.a);
    ellipse(
      f.x + sin(frameCount * 0.002 + f.s) * 80,
      f.y + cos(frameCount * 0.002 + f.s) * 50,
      f.s,
      f.s * 0.35
    );
  }
}

function drawWaves() {
  noFill();

  for (let w of waves) {
    let redPulse = sin(frameCount * 0.012 + w.offset);

    if (redPulse > 0.65) stroke(115, 10, 18, 25);
    else stroke(185, 195, 215, 17);

    strokeWeight(w.weight);

    beginShape();
    for (let x = -80; x < width + 80; x += 18) {
      let y =
        w.y +
        sin(x * 0.008 + frameCount * w.speed * 120 + w.offset) * w.amp +
        cos(frameCount * 0.006 + x * 0.002) * 28;

      curveVertex(x, y);
    }
    endShape();
  }
}

function drawBubbles() {
  noFill();

  for (let b of bubbles) {
    b.y -= b.speed;
    b.x += sin(frameCount * b.drift + b.y * 0.01) * 0.35;

    if (b.y < -80) {
      b.y = height + 80;
      b.x = random(width);
    }

    stroke(200, 210, 230, b.a);
    strokeWeight(0.7);
    circle(b.x, b.y, b.r);

    stroke(120, 10, 18, b.a * 0.28);
    strokeWeight(1.2);
    arc(b.x, b.y, b.r * 0.82, b.r * 0.82, PI * 1.15, PI * 1.65);

    noStroke();
    fill(230, 235, 240, b.a * 0.35);
    circle(b.x - b.r * 0.18, b.y - b.r * 0.18, max(1.2, b.r * 0.08));
  }
}

function drawStageRings() {
  push();
  translate(width / 2, height / 2);
  noFill();

  for (let ring of rings) {
    ring.rot += ring.speed;

    push();
    rotate(ring.rot);

    let pulse = sin(frameCount * 0.02 + ring.r) * 18;

    stroke(190, 200, 215, ring.a);
    strokeWeight(0.7);

    beginShape();
    for (let i = 0; i <= ring.sides; i++) {
      let a = TWO_PI * i / ring.sides;
      let wobble = sin(frameCount * 0.015 + i * 2) * 10;
      vertex(
        cos(a) * (ring.r + pulse + wobble),
        sin(a) * (ring.r * 0.45 + pulse * 0.35 + wobble)
      );
    }
    endShape();

    stroke(120, 10, 18, ring.a * 0.55);
    strokeWeight(1.1);
    ellipse(0, 0, ring.r * 1.25, ring.r * 0.5);

    pop();
  }

  pop();
}

function drawLightShards() {
  for (let s of shards) {
    s.y -= s.speed;
    s.x += sin(frameCount * 0.004 + s.y) * 0.3;

    if (s.y < -120) {
      s.y = height + 120;
      s.x = random(width);
    }

    push();
    translate(s.x, s.y);
    rotate(s.angle + sin(frameCount * 0.003) * 0.08);

    stroke(210, 215, 225, s.a);
    strokeWeight(0.7);
    line(0, -s.len / 2, 0, s.len / 2);

    stroke(120, 10, 18, s.a * 0.45);
    strokeWeight(2.1);
    line(3, -s.len / 3, 3, s.len / 3);

    pop();
  }
}

function drawPulseCore() {
  push();
  translate(width / 2, height / 2);
  noStroke();

  for (let i = 0; i < 8; i++) {
    fill(210, 215, 225, 4);
    ellipse(0, 0, 100 + i * 55 + sin(frameCount * 0.025) * 20, 32 + i * 18);
  }

  fill(100, 8, 16, 16);
  ellipse(0, 0, 260 + sin(frameCount * 0.035) * 50, 80);

  fill(230, 235, 240, 50);
  ellipse(0, 0, 8, 8);

  pop();
}

function drawStrobe() {
  if (frameCount % 92 < 4) {
    noStroke();
    fill(220, 225, 235, 12);
    rect(0, 0, width, height);
  }

  if (frameCount % 150 < 6) {
    noStroke();
    fill(110, 5, 14, 10);
    rect(0, 0, width, height);
  }
}

function drawGrain() {
  noStroke();

  for (let i = 0; i < 45; i++) {
    fill(230, 235, 240, random(5, 22));
    rect(random(width), random(height), random(1, 3), random(1, 3));
  }
}

function mouseMoved() {
  rings.push(makeRing());
  waves.push({
    y: mouseY,
    amp: random(20, 80),
    speed: random(0.002, 0.008),
    offset: random(1000),
    weight: random(0.4, 1.3)
  });

  if (rings.length > 13) rings.shift();
  if (waves.length > 10) waves.shift();
}

function mousePressed() {
  for (let i = 0; i < 14; i++) shards.push(makeShard());
  for (let i = 0; i < 10; i++) {
    bubbles.push({
      x: mouseX + random(-80, 80),
      y: mouseY + random(-80, 80),
      r: random(10, 55),
      speed: random(0.15, 0.8),
      drift: random(0.002, 0.009),
      a: random(14, 45)
    });
  }

  if (shards.length > 70) shards.splice(0, shards.length - 70);
  if (bubbles.length > 55) bubbles.splice(0, bubbles.length - 55);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}