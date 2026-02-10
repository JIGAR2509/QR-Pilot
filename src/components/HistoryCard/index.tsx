import { Pressable, Text, View } from 'react-native';
import React from 'react';
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
import { fontSize } from '../../theme/typography';

type HistoryCardProps = {
  item: HistoryItem;
  onDelete: (id: string) => void;
};

const HistoryCard = ({ item, onDelete }: HistoryCardProps) => {
  const translateX = useSharedValue(0);
  const cardWidth = useSharedValue(0);
  const isDeleteOpen = useSharedValue(false);

  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10])
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

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
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

  const handleDeletePress = () => {
    onDelete(item.id);
  };

  const handleCloseCard = () => {
    translateX.value = withSpring(0);
  };

  return (
    <Pressable style={styles.wrapper}>
      <Animated.View style={[styles.deleteContainer, deleteStyle]}>
        <Pressable
          onPress={handleDeletePress}
          hitSlop={{ left: 10, right: 10 }}
        >
          <DeleteIcon height={30} width={30} />
        </Pressable>
      </Animated.View>

      <GestureDetector gesture={panGesture}>
        <Pressable onPress={handleCloseCard}>
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
                  <Text style={styles.timeText}>
                    {formatNow(item.createdAt)}
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </Animated.View>
        </Pressable>
      </GestureDetector>
    </Pressable>
  );
};

export default HistoryCard;
