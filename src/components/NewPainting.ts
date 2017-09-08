import { Vue, Component, Prop } from 'vue-property-decorator';

import {
  QIcon,
  QLayout,
  QList,
  QListHeader,
  QItem,
  QItemMain,
  QItemSide,
  QToolbar,
  QToolbarTitle,
} from 'quasar';

import PaintingComponent from './Painting';
import { PaintingSpecimen } from '../evolution/painting-specimen';
import { PaintingGenOptions } from '../evolution/painting-gen-options';
import { Genome } from 'enome';

@Component({
  name: 'Home',
  components: {
    QIcon,
    QLayout,
    QList,
    QListHeader,
    QItem,
    QItemMain,
    QItemSide,
    QToolbar,
    QToolbarTitle,
    PaintingComponent,
  }
})
export default class NewPainting extends Vue {

  specimen = new PaintingSpecimen(new Genome({
    genomeLength: 1000,
    geneLength: 3,
    width: 1920,
    height: 1080,
    minX: 0,
    maxX: 1920,
    minY: 0,
    maxY: 1080,
    minPaths: 10,
    maxPaths: 1000,
    minLength: 1,
    maxLength: 3,
    minXRadius: 5,
    maxXRadius: 50,
    minYRadius: 5,
    maxYRadius: 50,
    minRotation: 0,
    maxRotation: 360,
    minLarge: 0,
    maxLarge: 1,
    minSweep: 0,
    maxSweep: 1,
    minRadius: 5,
    maxRadius: 50
  }));

  painting = this.specimen.phenotype;

}
