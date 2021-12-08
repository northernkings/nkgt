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
  loading?: string;
  maintainAspectRatio?: boolean;
  modifiers?: Array<string>;
  sources?: Array<PictureSource>;
  size?: PictureSize;
  src: string;
}

export interface Picture extends PictureProps {
  aspectRatio?: string;
  classes: string;
}
