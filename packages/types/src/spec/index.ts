import { OverrideBundleType } from '@polkadot/types/types';
import { derive as bifrostDerives } from '@bifrost-finance/api-derive';
import v31 from './v31';
import v38 from './v38';
import v41 from './v41';
import v45 from './v45';

// Support archival
const typesBundle: OverrideBundleType = {
  spec: {
    'bifrost': {
      alias: {
        voting: { Tally: 'VotingTally' },
      },
      derives: {
        ...bifrostDerives
      },
      types: [
        {    // 3.0.1
          minmax: [0, 32],
          types: v31.types,
        }, { // 3.0.8
          minmax: [32, 39],
          types: v38.types,
        }, { // 3.1.0
          minmax: [39, 42],
          types: v41.types,
        }, { // 3.2.0
          minmax: [42, 46],
          types: v45.types,
        },
      ]
    }
  }
}

export default {
  typesBundle
};
