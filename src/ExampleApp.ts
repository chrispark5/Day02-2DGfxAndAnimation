/** CSci-4611 Example Code
 * Copyright 2023+ Regents of the University of Minnesota
 * Please do not distribute beyond the CSci-4611 course
 */

import * as gfx from "gophergfx";

export class ExampleApp extends gfx.GfxApp {
  // --- Create the ExampleApp class ---
  constructor() {
    // initialize the base class gfx.GfxApp
    super();
  }
  bgColor: gfx.Color = new gfx.Color(15, 128, 15, 1);
  bgColor2 = gfx.Color.GREEN;
  myRectangle: gfx.Mesh2 | null = null;
  myRectangle2: gfx.Mesh2 | null = null;
  elapsedTime = 0.0;
  // --- Initialize the graphics scene ---
  createScene(): void {
    this.renderer.background = this.bgColor;
    this.renderer.background = this.bgColor2;

    this.myRectangle = gfx.Geometry2Factory.createRect(0.6, 0.6);
    this.myRectangle.position.x = 0.6;
    this.myRectangle.position.y = 0.5;
    this.myRectangle.material.color = gfx.Color.BLACK;
    this.scene.add(this.myRectangle);

    this.myRectangle2 = gfx.Geometry2Factory.createRect(0.6, 0.6);
    this.myRectangle2.position.x = -0.6;
    this.myRectangle2.position.y = 0.5;
    this.myRectangle2.setColors([
      gfx.Color.BLACK,
      gfx.Color.BLACK,
      gfx.Color.BLACK,
      gfx.Color.BLACK,
    ]);
    this.scene.add(this.myRectangle2);

    const myRect3 = gfx.Geometry2Factory.createRect(0.6, 0.3);
    myRect3.position.x = -0;
    myRect3.position.y = 0;
    myRect3.setColors([
      gfx.Color.BLACK,
      gfx.Color.BLACK,
      gfx.Color.BLACK,
      gfx.Color.BLACK,
    ]);
    this.scene.add(myRect3);

    const myRect5 = gfx.Geometry2Factory.createRect(1.25, 0.6);
    myRect5.position.x = -0;
    myRect5.position.y = -0.4;
    myRect5.material.color = gfx.Color.BLACK;
    this.scene.add(myRect5);

    const myRect4 = gfx.Geometry2Factory.createRect(0.5, 1);
    myRect4.position.x = -0.5;
    myRect4.position.y = -0.5;
    myRect4.position = new gfx.Vector2(-0.5, -0.5);
    myRect4.setColors([
      gfx.Color.BLACK,
      gfx.Color.BLACK,
      gfx.Color.BLACK,
      gfx.Color.BLACK,
    ]);
    this.scene.add(myRect4);

    const myRect6 = gfx.Geometry2Factory.createRect(0.5, 1);
    myRect6.position.x = 0.5;
    myRect6.position.y = -0.5;
    myRect6.setColors([
      gfx.Color.BLACK,
      gfx.Color.BLACK,
      gfx.Color.BLACK,
      gfx.Color.BLACK,
    ]);
    this.scene.add(myRect6);
  }

  // --- Update is called once each frame by the main graphics loop ---
  update(deltaTime: number): void {
    this.elapsedTime += deltaTime + 0.05;
    // this.bgColor.r +=0.001;
    // this.renderer.background = this.bgColor;
    const yScale = Math.abs(Math.sin(this.elapsedTime));
    if (this.myRectangle instanceof gfx.Mesh2) {
      //   this.myRectangle.position.x += 0.001;
      //   this.myRectangle.position.y -= 0.001;
      this.myRectangle.scale = new gfx.Vector2(1, yScale);
    }
    if (this.myRectangle2 instanceof gfx.Mesh2) {
      //   this.myRectangle2.position.x -= 0.001;

      this.myRectangle2.scale = new gfx.Vector2(1, yScale);
    }
  }
}
