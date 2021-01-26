import { StyleSheet } from 'react-native';
import { Colors, Sizes } from 'styles';

const styles = StyleSheet.create({
    indicator: {
        color: Colors.primary,
        padding: Sizes.x,
    },
    separator: {
        backgroundColor: Colors.blackSecondary,
        width: '100%',
        height: 0.5,
    },
});

export default styles;
