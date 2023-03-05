import classNames from 'classnames';
import type { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import type { MediaFileFragmentResponse } from '../../../../graphql/fragments';
import { getMediaType } from '../../../../utils/get_media_type';
import { DeviceType } from '../../../foundation/GetDeviceType';
import { Image } from '../../../foundation/Image';

import * as styles from './MediaItemPreiewer.styles';

type Props = {
  file: MediaFileFragmentResponse;
};

export const MediaItemPreviewer: FC<Props> = ({ file }) => {
  const type = getMediaType(file.filename);
  const deviceType: DeviceType = useMediaQuery({ minWidth: 1024 })?DeviceType.DESKTOP:DeviceType.MOBILE;

  return (
    <div className={styles.container()}>
      {type === 'image' && <Image fill src={file.filename} />}
      {type === 'video' && (
        <>
            <video
              autoPlay
              controls
              muted
              playsInline
              className={classNames(styles.video(), {
                [styles.video__desktop()]: deviceType === DeviceType.DESKTOP,
                [styles.video__mobile()]: deviceType === DeviceType.MOBILE,
              })}
              src={file.filename}
            />
        </>
      )}
    </div>
  );
};
