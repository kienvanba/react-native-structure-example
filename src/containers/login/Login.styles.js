import { StyleSheet } from 'react-native';
import { Colors, Sizes } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: Sizes.x2,
        backgroundColor: Colors.primary,
    },
});

export default styles;
