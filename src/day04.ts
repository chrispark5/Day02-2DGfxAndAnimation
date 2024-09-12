/** CSci-4611 Example Code
 * Copyright 2023+ Regents of the University of Minnesota
 * Please do not distribute beyond the CSci-4611 course
 */

import * as gfx from "gophergfx";

export class Day04 extends gfx.GfxApp {
  // --- Create the ExampleApp class ---
  constructor() {
    // initialize the base class gfx.GfxApp
    super();
  }
  helloRect: gfx.Mesh2 = new gfx.Mesh2();
  newLetters: gfx.Mesh2[] = [];
  // --- Initialize the graphics scene ---
  createScene(): void {
    this.helloRect = gfx.Geometry2Factory.createRect(0.8, 0.1);
    // this.scene.add(this.helloRect);
    this.helloRect.position.set(0, 0);
    // helloRect.material.color = gfx.Color.RED;

    const helloTexture = new gfx.Text(
      "Hexagon",
      256,
      32,
      "32px monospace",
      gfx.Color.WHITE
    );
    // this.helloRect.material.texture = helloTexture;

    const hexGeom = new gfx.Line2(gfx.LineMode2.LINE_LOOP);
    const hexVerts: number[] = [];
    const nSlice = 4;
    for (let x = 0; x < nSlice; x++) {
      const angle = (x * Math.PI) / (nSlice / 2);
      const radius = 0.5;
      const xCoord = +radius * Math.cos(angle);
      const yCoord = radius * Math.sin(angle);
      hexVerts.push(xCoord, yCoord);
    }
    hexGeom.setVertices(hexVerts);
    this.scene.add(hexGeom);

    const mesh = new gfx.Mesh2();
    mesh.material.drawMode = this.renderer.gl.TRIANGLES;
    const vertices: gfx.Vector2[] = [];
    vertices.push(new gfx.Vector2(0.3, 0.75));
    vertices.push(new gfx.Vector2(0.4, 0.2));
    vertices.push(new gfx.Vector2(0.5, 0.75));
    vertices.push(new gfx.Vector2(0.6, 0.2));
    vertices.push(new gfx.Vector2(0.8, 0.2));
    vertices.push(new gfx.Vector2(0.7, 0.75));
    //FIXME: Needs to be counter clockwise
    mesh.setVertices(vertices);
    this.scene.add(mesh);
    const circle = new gfx.Mesh2();
    circle.material.drawMode = this.renderer.gl.TRIANGLE_FAN;
    const verts: gfx.Vector2[] = [];
    verts.push(new gfx.Vector2(0, 0));
    const nSlices = 10;
    for (let n = 0; n <= nSlices; n++) {
      const angle = (n * (2 * Math.PI)) / nSlices;
      let radius = 0.5;
      if (n % 2 == 0) {
        radius = 0.1;
      }
      verts.push(
        new gfx.Vector2(radius * Math.cos(angle), radius * Math.sin(angle))
      );
    }
    circle.setVertices(verts);
    this.scene.add(circle);
  }
  timeAccumulator = 0;
  updateInterval = 0.2;
  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  // --- Update is called once each frame by the main graphics loop ---
  update(deltaTime: number): void {
    this.timeAccumulator += deltaTime;
    // this.helloRect.position.y -= 0.001;
    if (this.timeAccumulator >= this.updateInterval * Math.random() * 50) {
      this.timeAccumulator = 0;
      const newLetter = gfx.Geometry2Factory.createRect(0.1, 0.1);
      newLetter.position.x = Math.random() * 2 - 1;
      newLetter.position.y = 1;
      // Math.random();
      newLetter.position.y += 0.001;
      this.newLetters.push(newLetter);
      const randomLetter =
        this.letters[Math.floor(Math.random() * this.letters.length)];

      const helloTexture = new gfx.Text(
        randomLetter,
        20,
        20,
        "12px monospace",
        gfx.Color.WHITE
      );
      newLetter.material.texture = helloTexture;
      this.scene.add(newLetter);
    }
    for (let i = 0; i < this.newLetters.length; i++) {
      this.newLetters[i].position.y -= 0.01;
    }
  }
}
