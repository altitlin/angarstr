import imageKlichino1 from 'app/assets/images/klichino-1.webp';
import imageKlichino2 from 'app/assets/images/klichino-2.webp';
import imageKlichino3 from 'app/assets/images/klichino-3.webp';

import imageKrugliki1 from 'app/assets/images/krugliki-1.webp';
import imageKrugliki2 from 'app/assets/images/krugliki-2.webp';

import imageKulikovo1 from 'app/assets/images/kulikovo-1.webp';
import imageKulikovo2 from 'app/assets/images/kulikovo-2.webp';

import imageOldBaturino1 from 'app/assets/images/old-baturino-1.webp';
import imageOldBaturino2 from 'app/assets/images/old-baturino-2.webp';
import imageOldBaturino3 from 'app/assets/images/old-baturino-3.webp';
import imageOldBaturino4 from 'app/assets/images/old-baturino-4.webp';

import { Work } from '../model/types';

export const WORKS: Work[] = [
  {
    id: 'klichino',
    images: [imageKlichino1, imageKlichino2, imageKlichino3],
    title: 'Кличино',
    description: 'Здесь будет какое-то краткое описание',
  },
  {
    id: 'krugliki',
    images: [imageKrugliki1, imageKrugliki2],
    title: 'Круглики',
    description: 'Здесь будет какое-то краткое описание',
  },
  {
    id: 'kulikovo',
    images: [imageKulikovo1, imageKulikovo2],
    title: 'Куликово',
    description: 'Здесь будет какое-то краткое описание',
  },
  {
    id: 'old-baturino',
    images: [imageOldBaturino1, imageOldBaturino2, imageOldBaturino3, imageOldBaturino4],
    title: 'Старое батурино',
    description: 'Здесь будет какое-то краткое описание',
  },
];
