import { RenderSpan } from "./render-span";

export class RenderPanel {
  // a 2D panel that will be rendered
  // onto the screen
  // every line is represented by a renderspan
  _panel: RenderSpan[];

  constructor() {
    this._panel = [];
  }

  // TODO
  diffRender() {}

  // TODO
  forceRender() {}
}
