import { Specimen, IGenomeOptions, Genome } from 'enome';

export class PaintingSpecimen<Gen extends IGenomeOptions, Pheno> extends Specimen<Gen, Pheno> {
  createPhenotype(genotype: Genome<Gen>): Pheno {
    throw new Error('Method not implemented.');
  }

}
