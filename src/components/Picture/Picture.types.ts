export interface PictureSize {
  width: number;
  height: number;
}

export interface PictureSource {
  srcset: Array<string>;
  media?: string;
  type?: string;
}

export interface PictureProps {
  _id?: string;
  alt: string;
  backgroundColor?: string;
  caption?: string;
  lqip?: string;
  loading?: 'lazy' | 'eager';
  maintainAspectRatio?: boolean;
  modifiers?: string[];
  sources?: PictureSource[];
  size?: PictureSize;
  src: string;
}
