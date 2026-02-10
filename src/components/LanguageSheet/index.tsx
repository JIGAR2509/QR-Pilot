/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import styles from './styles';

import BottomSheet from '../BottomSheet';

type LanguageSheetProps = {
  selectedLanguage: string;
  onSelect: (lang: string) => void;
  title: string;
};

const LANGUAGES = [
  { label: 'English', value: 'en' },
  { label: 'Hindi (हिंदी)', value: 'hn' },
  { label: 'Gujarati (ગુજરાતી)', value: 'gj' },
];

const LanguageSheet = forwardRef<BottomSheetModal, LanguageSheetProps>(
  ({ selectedLanguage, onSelect, title }, ref) => {
    return (
      <BottomSheet ref={ref} snapPoints={['40%']}>
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          {LANGUAGES.map(lang => (
            <TouchableOpacity
              key={lang.value}
              style={[
                styles.option,
                selectedLanguage === lang.value && styles.optionSelected,
              ]}
              onPress={() => onSelect(lang.value)}
              disabled={selectedLanguage === lang.value}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedLanguage === lang.value && styles.optionTextSelected,
                ]}
              >
                {lang.label}
              </Text>
            </TouchableOpacity>
          ))}
        </BottomSheetView>
      </BottomSheet>
    );
  },
);

export default LanguageSheet;
