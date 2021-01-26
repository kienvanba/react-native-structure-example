import { useNavigation } from 'react-navigation-hooks';
import { useHistory } from 'react-router-native';

import { AppURLs } from 'src/configs/urls';
import { sideEffect, wait } from 'src/utils';

export default () => {
    const { navigate } = useNavigation();
    const { replace } = useHistory();

    const handleLogin = async () => {
        await sideEffect({ showLoading: true })(() => wait(2000));
        replace(AppURLs.main);
    };

    const handleForgetPassword = () => {
        navigate('ForgetPassword');
    };

    return { handleLogin, handleForgetPassword };
};
