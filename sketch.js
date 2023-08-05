let physics;

function setup() {
  // ...初始化physics等
  createCanvas(windowWidth, windowHeight);
  physics = new VerletPhysics2D();
//   gb = new GravityBehavior(new Vec2D(0, -0.01));
//   physics.addBehavior(gb);
  
  physics.setWorldBounds(new Rect(0, 0, width, height));

  attraction = new AttractionBehavior(new Vec2D(mouseX, mouseY), 500, 0.1);
  physics.addBehavior(attraction);

  physics.setDrag(0.01);

  // 创建三角形生物
  for (let i = 0; i < 50; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = x1 + random(-30, 20);
    let y2 = y1 + random(-20, 30);
    let x3 = x1 + random(-30, 20);
    let y3 = y1 + random(-20, 30);
    let tri = new Triangle(x1, y1, x2, y2, x3, y3);
    triangles.push(tri);
  }
}

function draw() {
  // 更新物理世界
  physics.update();
  background(0);
  
  // 更新吸引行为的中心
  attraction.setAttractor(new Vec2D(mouseX, mouseY));

  // 绘制每个三角形生物
  for (let tri of triangles) {
    tri.draw();
  }
  
}

function mousePressed() {
  // 创建新的三角形
  let x1 = mouseX;
  let y1 = mouseY;
  let x2 = x1 + random(-20, 20);
  let y2 = y1 + random(-20, 20);
  let x3 = x1 + random(-20, 20);
  let y3 = y1 + random(-20, 20);
  let tri = new Triangle(x1, y1, x2, y2, x3, y3);
  triangles.push(tri);

  // 创建排斥行为
  // let repulsion = new AttractionBehavior(new Vec2D(mouseX, mouseY), 100, -0.01);
  // physics.addBehavior(repulsion);
}

