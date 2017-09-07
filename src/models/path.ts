import { Gene } from 'enome';
import * as _ from 'lodash';

export class Path {

  constructor(public d: string = '') { }

  public moveTo(x: number, y: number): Path {
    const d = `M ${x} ${y}`;
    return new Path(`${this.d} ${d}`);
  }

  public curveTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): Path {
    const d = `C ${x1} ${y1} ${x2} ${y2} ${x} ${y}`;
    return new Path(`${this.d} ${d}`);
  }

  public shortCurve(x2: number, y2: number, x: number, y: number): Path {
    const d = `S ${x2} ${y2} ${x} ${y}`;
    return new Path(`${this.d} ${d}`);
  }

  public quadraticCurve(x1: number, y1: number, x: number, y: number): Path {
    const d = `Q ${x1} ${y1} ${x} ${y}`;
    return new Path(`${this.d} ${d}`);
  }

  public shortQuadratic(x: number, y: number): Path {
    const d = `T ${x} ${y}`;
    return new Path(`${this.d} ${d}`);
  }

  public arc(rx: number, ry: number, rotation: number, large: number, sweep: number, x: number, y: number): Path {
    const d = `A ${rx} ${ry} ${rotation} ${large} ${sweep} ${x} ${y}`;
    return new Path(`${this.d} ${d}`);
  }

  public circle(cx: number, cy: number, r: number): Path {
    const d = `M ${cx - r}, ${cy} A ${r}, ${r} 0 1, 0 ${r * 2}, 0 A ${r}, ${r} 0 1, 0 ${-r * 2}, 0 `;
    return new Path(`${this.d} ${d}`);
  }

  public close(): Path {
    const d = `Z`;
    return new Path(`${this.d} ${d}`);
  }

  public random(
    o: {
      length: number,
      x1: number, y1: number,
      x2: number, y2: number,
      rx: number, ry: number,
      cx: number, cy: number, r: number,
      rotation: number, large: number,
      sweep: number, x: number,
      y: number, close: boolean
    }
  ): Path {
    const moved = this.moveTo(o.x, o.y);

    const {
      length, x1, y1,
      x2, y2, rx, ry,
      cx, cy, r,
      rotation, large, sweep,
      x, y, close
    } = o;

    const paths: Path[] = _.range(length)
      .map(i => {
        const g = new Gene();

        return g.element([
          moved.curveTo(x1, y1, x2, y2, x, y),
          moved.shortCurve(x2, y2, x, y),
          moved.quadraticCurve(x1, y1, x, y),
          moved.shortQuadratic(x, y),
          moved.arc(rx, ry, rotation, large, sweep, x, y),
          moved.circle(cx, cy, r)
        ]);
      });

    const path = paths.reduce((p, c) => new Path(`${p.d} ${c.d}`));

    if (close) { return path.close(); }
    else { return path; }
  }
}
