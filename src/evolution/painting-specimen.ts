import { Specimen, IGenomeOptions, Genome } from 'enome';
import { Painting } from '../models/painting';

import * as _ from 'lodash';
import { PaintingGenOptions } from './painting-gen-options';
import { Path } from '../models/path';

export class PaintingSpecimen extends Specimen<PaintingGenOptions, Painting> {

  public createPhenotype(genotype: Genome<PaintingGenOptions>): Painting {
    const g = genotype;
    const o = g.options;

    const paths = _.range(g.g.int(o.minPaths, o.maxPaths))
      .map(i => {
        return new Path().random({
          length: g.g.float(o.minLength, o.maxLength),
          x1: g.g.float(o.minX, o.maxX),
          y1: g.g.float(o.minY, o.maxY),
          x2: g.g.float(o.minX, o.maxX),
          y2: g.g.float(o.minY, o.maxY),
          rx: g.g.float(o.minXRadius, o.maxXRadius),
          ry: g.g.float(o.minYRadius, o.maxYRadius),
          cx: g.g.float(o.minX, o.maxX),
          cy: g.g.float(o.minY, o.maxY),
          r: g.g.float(o.minRadius, o.maxRadius),
          rotation: g.g.float(o.minRotation, o.maxRotation),
          large: g.g.int(o.minLarge, o.maxLarge),
          sweep: g.g.int(o.minSweep, o.maxSweep),
          x: g.g.float(o.minX, o.maxX),
          y: g.g.float(o.minY, o.maxY),
          close: g.g.bool()
        });
      });

    return new Painting(o.width, o.height, paths);
  }

}
