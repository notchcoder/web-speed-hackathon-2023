import _ from 'lodash';
import type { FC } from 'react';
import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';

import type { FeatureSectionFragmentResponse } from '../../../graphql/fragments';
import { DeviceType } from '../../foundation/GetDeviceType';
import { ProductGridList } from '../ProductGridList';
import { ProductListSlider } from '../ProductListSlider';

type Props = {
  featureSection: FeatureSectionFragmentResponse;
};

export const ProductList: FC<Props> = memo(({ featureSection }) => {
  const deviceType: DeviceType = useMediaQuery({ minWidth: 1024 })?DeviceType.DESKTOP:DeviceType.MOBILE;
  return (
    <>
      {deviceType === DeviceType.DESKTOP ? (
        <ProductListSlider featureSection={featureSection} />
      ) : (
        <ProductGridList featureSection={featureSection} />
      )}
    </>
  );
}, _.isEqual);

ProductList.displayName = 'ProductList';
