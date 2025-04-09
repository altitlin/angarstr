import { WORKS } from '../config/works';

export const useWorks = () => {
  return WORKS;
}

export const useWorkImages = () => {
  return WORKS.reduce((allImages, { images }) => ([...allImages, ...images]), [] as string[]);
}
