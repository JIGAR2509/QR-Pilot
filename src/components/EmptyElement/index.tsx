import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Images } from '../../assets/images/types'
import { fontSize, spacing } from '../../theme/typography'
import { fonts } from '../../theme/fonts'
import { colors } from '../../theme/colors'

const EmptyElement = () => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <Image source={Images.EMPTY_LIST} style={styles.emptyList} />
            <Text style={styles.emptyText}>{t('history.empty')}</Text>
        </View>
    )
}

export default EmptyElement

const styles = StyleSheet.create({
    container: {
        marginTop: spacing.giant * 2
    },
    emptyList: {
        height: 200,
        width: '100%',
    },
    emptyText: {
        fontSize: fontSize.display,
        color: colors.white,
        fontFamily: fonts.medium,
        textAlign: 'center',
    }
})