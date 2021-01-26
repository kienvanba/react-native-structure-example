import { StyleSheet } from 'react-native';
import { Colors, Sizes, Layout } from '../../../configs/styles';

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: Sizes.x,
        paddingLeft: Sizes.x,
        paddingRight: Sizes.x,
        paddingTop: 0,
        paddingBottom: 0,
        width: Layout.defaultWidth,
        height: Sizes.x5,
    },
});

export default styles;
