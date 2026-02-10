import React, { forwardRef, RefObject } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import styles from './styles';

import BottomSheet from '../BottomSheet';

type ConfirmationSheetProps = {
  onConfirm: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
};

const ConfirmationSheet = forwardRef<BottomSheetModal, ConfirmationSheetProps>(
  ({ onConfirm, title, description, confirmText, cancelText }, ref) => {
    return (
      <BottomSheet ref={ref} snapPoints={['25%']}>
        <BottomSheetView style={styles.contentContainer}>
          {title && <Text style={styles.title}>{title}</Text>}
          <Text style={styles.description}>{description}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() =>
                (ref as RefObject<BottomSheetModal>).current?.dismiss()
              }
            >
              <Text style={styles.buttonText}>{cancelText}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={onConfirm}
            >
              <Text style={styles.buttonText}>{confirmText}</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    );
  },
);

export default ConfirmationSheet;
