import classNames from 'classnames';
import type React from 'react';
import type { PictureProps } from './Picture.types';
import './Picture.css';

export const Picture: React.FC<PictureProps> = ({
  maintainAspectRatio = false,
  modifiers = [],
  size,
  sources,
  src,
  alt,
  backgroundColor,
  lqip,
  loading = 'lazy',
  caption,
}) => {
  const classes = classNames(
    'c-picture',
    modifiers.map((modifier: string) => `c-picture--${modifier}`),
    size?.width && size?.height && maintainAspectRatio && 'c-picture--maintain-ratio',
  );

  const aspectRatio =
    maintainAspectRatio && size?.width && size?.height
      ? `${(size.height / size.width) * 100}%`
      : undefined;

  const pictureStyle = {
    backgroundImage: lqip ? `url(${lqip})` : undefined,
    backgroundColor,
    paddingTop: aspectRatio,
  };

  const Component = caption ? 'figure' : 'div';

  return (
    <Component className={classes}>
      <picture
        style={pictureStyle}
        className="c-picture__picture"
      >
        {sources?.map((source, index) => (
          <source
            key={index}
            srcSet={source.srcset.join(',')}
            type={source.type || ''}
            media={source.media || ''}
          />
        ))}
        <img
          src={src}
          alt={alt}
          width={size?.width || ''}
          height={size?.height || ''}
          className="c-picture__image"
          loading={loading}
        />
      </picture>
      {caption && <figcaption className="c-picture__caption">{caption}</figcaption>}
    </Component>
  );
};

export default Picture;
