import { StyleSheet } from 'react-native';
import { Colors, Sizes } from 'styles';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinnerContainer: {
        paddingTop: Sizes.x4,
        paddingBottom: Sizes.x3,
        paddingLeft: Sizes.x5,
        paddingRight: Sizes.x5,
        alignItems: 'center',
        borderRadius: Sizes.x,
        backgroundColor: Colors.blackSecondary,
    },
    spinner: {
        color: Colors.white,
    },
});

export default styles;
