import { useState } from 'react';

const useHandlers = (onLoad, onRefresh) => {
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const handleLoadMore = async () => {
        setLoading(true);
        await onLoad();
        setLoading(false);
    };

    const handleRefreshData = async () => {
        setRefreshing(true);
        await onRefresh();
        setRefreshing(false);
    };

    return { loading, refreshing, handleLoadMore, handleRefreshData };
};

export default useHandlers;
