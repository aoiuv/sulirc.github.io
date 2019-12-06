import React from 'react';
import { Draft } from '../../lib';
import style from './style.css';

class DraftCanvas extends React.Component {
  private canvas: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    this.initCanvas();
  }

  initCanvas() {
    const canvas: unknown = this.canvas.current;
    let params = { width: 285, height: 200 };
    let draft = new Draft(params).appendTo(canvas as HTMLElement);

    let circle = draft.makeCircle(72, 100, 50);
    let rect = draft.makeRectangle(213, 100, 100, 100);

    // console.log('[draft]', draft);
    // console.log('[circle]', circle);
    // console.log('[rect]', rect);

    circle.fill = '#FF8000';
    circle.stroke = 'orangered';
    circle.linewidth = 5;

    rect.fill = 'rgb(0, 200, 255)';
    rect.opacity = 0.75;
    rect.noStroke();

    draft.update();
  }

  render() {
    return (
      <div className="suri__draft-canvas">
        <div ref={this.canvas} />
      </div>
    );
  }
}

export default DraftCanvas;
