import imageKlichino1 from 'app/assets/images/klichino-1.webp';
import imageKlichino2 from 'app/assets/images/klichino-2.webp';
import imageKlichino3 from 'app/assets/images/klichino-3.webp';
import imageKlichino4 from 'app/assets/images/klichino-4.webp';
import imageKlichino5 from 'app/assets/images/klichino-5.webp';
import imageKlichino6 from 'app/assets/images/klichino-6.webp';
import imageKlichino7 from 'app/assets/images/klichino-7.webp';

import imageKrugliki1 from 'app/assets/images/krugliki-1.webp';
import imageKrugliki2 from 'app/assets/images/krugliki-2.webp';

import imageKulikovo1 from 'app/assets/images/kulikovo-1.webp';
import imageKulikovo2 from 'app/assets/images/kulikovo-2.webp';

import imageOldBaturino1 from 'app/assets/images/old-baturino-1.webp';
import imageOldBaturino2 from 'app/assets/images/old-baturino-2.webp';
import imageOldBaturino3 from 'app/assets/images/old-baturino-3.webp';
import imageOldBaturino4 from 'app/assets/images/old-baturino-4.webp';
import imageOldBaturino5 from 'app/assets/images/old-baturino-5.webp';

import imageTver1 from 'app/assets/images/tver-1.webp';
import imageTver2 from 'app/assets/images/tver-2.webp';
import imageTver3 from 'app/assets/images/tver-3.webp';
import imageTver4 from 'app/assets/images/tver-4.webp';

import { Work } from '../model/types';

export const WORKS_ALL: Work[] = [
  {
    id: 'klichino-1',
    images: [imageKlichino1],
    title: 'Ангар для хранения зерна с подпорной стенкой, площадью 1500м² в д. Кличено Липецкая область',
  },
  {
    id: 'klichino-2',
    images: [imageKlichino4, imageKlichino5, imageKlichino6, imageKlichino7, imageKlichino2, imageKlichino3],
    title: 'Гараж для хранения сельскохозяйственной техники с боковыми воротами, площадью 1200м² в д. Кличено Липецкая область',
  },
  {
    id: 'krugliki-1',
    images: [imageKrugliki1, imageKrugliki2],
    title: 'Ангар для хранения зерна с подпорной стенкой, площадью 700м² в д. Круглики Тульская область',
  },
  {
    id: 'kulikovo-1',
    images: [imageKulikovo1, imageKulikovo2],
    title: 'Ангар для хранения зерна, площадью 1400м² в д. Куликово Республика Мордовия',
  },
  {
    id: 'old-baturino-1',
    images: [imageOldBaturino1, imageOldBaturino2, imageOldBaturino3, imageOldBaturino4, imageOldBaturino5],
    title: 'Ангар утепленный под овощехранилище, площадью 500м² в д. Старое Батурино Рязанская область',
  },
  {
    id: 'tver-1',
    images: [imageTver1, imageTver2, imageTver3, imageTver4],
    title: 'Ангар утепленный под производственное помещение, площадью 700м² в г. Тверь',
  },
];
