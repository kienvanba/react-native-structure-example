import { useNavigation } from 'react-navigation-hooks';

export default () => {
    const { navigate } = useNavigation();

    const handleToDetail = () => {
        navigate('Detail');
    };

    return { handleToDetail };
};
