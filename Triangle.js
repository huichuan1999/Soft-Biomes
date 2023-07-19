// 三角形类
class Triangle {
  // 构造函数定义了三角形的顶点
  constructor(x1, y1, x2, y2, x3, y3) {
    this.a = new VerletParticle2D(x1, y1);
    this.b = new VerletParticle2D(x2, y2);
    this.c = new VerletParticle2D(x3, y3);
    physics.addParticle(this.a);
    physics.addParticle(this.b);
    physics.addParticle(this.c);
    
    // 添加弹簧连接每个顶点
    let springAB = new VerletSpring2D(this.a, this.b, this.a.distanceTo(this.b), 0.001);
let springAC = new VerletSpring2D(this.a, this.c, this.a.distanceTo(this.c), 0.001);
let springBC = new VerletSpring2D(this.b, this.c, this.b.distanceTo(this.c), 0.001);

    physics.addSpring(springAB);
    physics.addSpring(springAC);
    physics.addSpring(springBC);
  }
  
  // 绘制三角形
  draw() {
    stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    line(this.a.x, this.a.y, this.c.x, this.c.y);
    line(this.b.x, this.b.y, this.c.x, this.c.y);
    fill(255,100);
    ellipse(this.a.x, this.a.y,10);
    ellipse(this.b.x, this.b.y,10);
    ellipse(this.c.x, this.c.y,10);
  }
}

// 存储三角形生物的数组
let triangles = [];
