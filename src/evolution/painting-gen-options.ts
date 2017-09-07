
import { IGenomeOptions } from 'enome';

export interface PaintingGenOptions extends IGenomeOptions {

    // min and max coordinates
    minX: number;
    maxX: number;

    minY: number;
    maxY: number;

    // number of paths
    minPaths: number;
    maxPaths: number;

    // number of segments in path
    minLength: number;
    maxLength: number;

    // arcs
    minXRadius: number;
    maxXRadius: number;

    minYRadius: number;
    maxYRadius: number;

    minXRotation: number;
    maxXRotation: number;

    minLarge: number;
    maxLarge: number;

    minSweep: number;
    maxSweep: number;


}
