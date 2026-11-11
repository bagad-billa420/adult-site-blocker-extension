(function () {
  // Pixel map of the hand: "#" = white pixel, "." = black.
  // Rows 0-8 are the raised middle finger, rows 9-23 are the palm and thumb.
  const MAP = [
    "........##........",
    ".......#..#.......",
    ".......#..#.......",
    ".......#..#.......",
    ".......#..#.......",
    ".......#..#.......",
    ".......#..#.......",
    ".......#..#.......",
    ".....###..###.....",
    "....#..#..#..#....",
    "....#..#..#..##...",
    "#####..#..#..##...",
    "#.............#...",
    ".#............#...",
    "..#...........#...",
    "...#..........#...",
    "...#....#..#..#...",
    "....#...#..#..#...",
    "....#...#..#..#...",
    ".....#........#...",
    ".....#.......#....",
    ".....#.......#....",
    ".....#.......#....",
    ".....#########...."
  ];

  const B = 16;           // size of one pixel on screen
  const PAD = 3;          // empty border so motion never clips
  const FINGER_ROWS = 9;  // rows 0-8 belong to the finger
  const W = MAP[0].length;
  const H = MAP.length;

  const canvas = document.getElementById('c');
  const ctx = canvas.getContext('2d');
  canvas.width = (W + PAD * 2) * B;
  canvas.height = (H + PAD * 2) * B;

  function block(x, y) {
    ctx.fillStyle = '#fff';
    ctx.fillRect(x * B, y * B, B, B);
  }

  function frame(now) {
    const t = now / 1000;

    // Motion, all in whole-pixel steps
    const bob  = Math.round(Math.sin(t * 2) * 1);                 // hand bounces
    const sway = Math.round(Math.sin(t * 1.3) * 1);               // hand sways
    const pump = Math.floor(Math.max(0, Math.sin(t * 3)) * 3.99); // finger rises 0-3 px

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        if (MAP[y][x] !== '#') continue;

        if (y < FINGER_ROWS) {
          block(x + PAD + sway, y + PAD + bob - pump); // finger pumps up
        } else {
          block(x + PAD + sway, y + PAD + bob);        // palm and thumb bob
        }
      }
    }

    // Fill the gap that opens between the finger and palm when it pumps up
    for (let y = FINGER_ROWS - pump; y < FINGER_ROWS; y++) {
      block(7 + PAD + sway, y + PAD + bob);
      block(10 + PAD + sway, y + PAD + bob);
    }

    // Occasional glitch: shift a horizontal slice sideways
    if (Math.random() < 0.04) {
      const y = Math.floor(Math.random() * canvas.height);
      const h = B * (1 + Math.floor(Math.random() * 2));
      const dx = (Math.random() < 0.5 ? -1 : 1) * B * (1 + Math.floor(Math.random() * 2));
      ctx.drawImage(canvas, 0, y, canvas.width, h, dx, y, canvas.width, h);
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
})();