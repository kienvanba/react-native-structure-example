import { StyleSheet } from 'react-native';
import { Colors, Layout, Sizes } from 'styles';

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.secondary,
        borderRadius: Layout.defaultRadius,
        minHeight: Sizes.x,
        paddingRight: Sizes.small,
        paddingLeft: Sizes.small,
        borderColor: Colors.transparent,
    },
    buttonDisable: {
        backgroundColor: Colors.gray,
    },
    text: {
        color: Colors.white,
    },
    default: {
        width: Layout.defaultWidth,
    },
    full: {
        alignSelf: 'stretch',
    },
    clearRadius: {
        borderRadius: 0,
    },
});

export default styles;
