import { Pressable, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { formatNow, HistoryItem } from './types';
import { colors } from '../../theme/colors';
import QRIcon from '../../assets/icons/QR.svg';
import DeleteIcon from '../../assets/icons/delete.svg';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { fonts } from '../../theme/fonts';
import { fontSize, spacing } from '../../theme/typography';
import QRCode from 'react-native-qrcode-svg';

type HistoryCardProps = {
  item: HistoryItem;
  onDelete: (id: string) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
};

const HistoryCard = ({
  item,
  onDelete,
  isExpanded,
  onToggleExpand,
}: HistoryCardProps) => {
  const translateX = useSharedValue(0);
  const cardWidth = useSharedValue(0);
  const isDeleteOpen = useSharedValue(false);
  const expandProgress = useSharedValue(0);

  useEffect(() => {
    expandProgress.value = withTiming(isExpanded ? 1 : 0, { duration: 300 });
  }, [isExpanded, expandProgress]);

  const handleDeletePress = () => {
    onDelete(item.id);
  };

  const panGesture = Gesture.Pan()
    .activeOffsetX([-25, 25])
    .onUpdate(e => {
      translateX.value = e.translationX < 0 ? e.translationX : 0;
    })
    .onEnd(() => {
      const threshold = -cardWidth.value * 0.2;

      if (translateX.value < threshold) {
        isDeleteOpen.value = true;
        translateX.value = withTiming(threshold);
      } else {
        isDeleteOpen.value = false;
        translateX.value = withSpring(0);
      }
    });

  const tapGesture = Gesture.Tap()
    .maxDuration(250)
    .runOnJS(true)
    .onEnd((_event, success) => {
      if (success) {
        if (translateX.value !== 0) {
          translateX.value = withSpring(0);
        } else {
          onToggleExpand();
        }
      }
    });

  const gesture = Gesture.Exclusive(panGesture, tapGesture);

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const expansionStyle = useAnimatedStyle(() => ({
    height: expandProgress.value * 160,
    opacity: expandProgress.value,
    overflow: 'hidden',
    marginTop: expandProgress.value * spacing.sm,
  }));

  const deleteStyle = useAnimatedStyle(() => {
    const threshold = cardWidth.value * 0.2;
    const progress =
      cardWidth.value === 0
        ? 0
        : Math.min(Math.abs(translateX.value) / threshold, 1);

    return {
      opacity: progress,
      transform: [{ scale: 0.7 + progress * 0.4 }],
    };
  });

  const deletePointerStyle = useAnimatedStyle(() => {
    return {
      pointerEvents: translateX.value < -10 ? 'auto' : 'none',
    };
  });

  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={[styles.deleteContainer, deleteStyle, deletePointerStyle]}
      >
        <Pressable
          onPress={handleDeletePress}
          hitSlop={{ left: 10, right: 10 }}
        >
          <DeleteIcon height={30} width={30} />
        </Pressable>
      </Animated.View>

      <GestureDetector gesture={gesture}>
        <Animated.View
          onLayout={e => {
            cardWidth.value = e.nativeEvent.layout.width;
          }}
          style={cardStyle}
        >
          <LinearGradient
            colors={[colors.white, colors.primary]}
            angle={180}
            useAngle
            style={styles.gradientBorder}
          >
            <View style={styles.container}>
              <QRIcon height={45} width={45} />
              <View style={styles.textContainer}>
                <Text
                  style={[
                    styles.text,
                    { fontFamily: fonts.bold, fontSize: fontSize.md },
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item.value}
                </Text>
                {item.type === 'create' && (
                  <Text style={[styles.text, { fontSize: fontSize.sm }]}>
                    {item.category}
                  </Text>
                )}
              </View>
              <View style={styles.time}>
                <Text style={styles.timeText}>{formatNow(item.createdAt)}</Text>
              </View>
            </View>
            <Animated.View style={[styles.expandableSection, expansionStyle]}>
              <View style={styles.qrContainer}>
                <QRCode
                  value={item.type === 'create' ? item.value : item.value}
                  size={120}
                  color={colors.black}
                  backgroundColor={colors.white}
                />
              </View>
            </Animated.View>
          </LinearGradient>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default HistoryCard;
