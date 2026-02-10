import React, { ComponentProps, forwardRef, useMemo } from 'react';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import styles from './styles';
import Gradient from '../Gradient';
import { colors } from '../../theme/colors';

type BottomSheetProps = {
  children: React.ReactNode;
  snapPoints?: string[];
  onDismiss?: () => void;
};

const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(
  ({ children, snapPoints: customSnapPoints, onDismiss }, ref) => {
    const snapPoints = useMemo(
      () => customSnapPoints || ['40%'],
      [customSnapPoints],
    );

    const renderBackdrop = (
      props: ComponentProps<typeof BottomSheetBackdrop>,
    ) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    );

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onDismiss={onDismiss}
        style={styles.background}
        handleIndicatorStyle={styles.indicator}
        backgroundComponent={props => (
          <Gradient
            {...props}
            colors={[colors.primary, colors.white]}
            angle={180}
            style={[props.style, styles.gradientBackground]}
          />
        )}
      >
        <BottomSheetView style={styles.content}>{children}</BottomSheetView>
      </BottomSheetModal>
    );
  },
);

export default BottomSheet;
