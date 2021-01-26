import { ScrollView } from 'react-native';
import { ScrollIntoView, wrapScrollView } from 'react-native-scroll-into-view';

const scrollIntoViewOptions = {
    align: 'auto',
    animated: true,
    immediate: false,
    insets: {
        top: 0,
        bottom: 0,
    },
};

const CustomScrollView = wrapScrollView(ScrollView);

export { CustomScrollView, ScrollIntoView, scrollIntoViewOptions };
