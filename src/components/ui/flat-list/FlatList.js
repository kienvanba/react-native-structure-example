import React from 'react';
import { View, FlatList as FlatListRN, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import styles from './FlatList.styles';
import useHandlers from './FlatList.handlers';
import { Colors } from 'styles';

const FlatList = ({ onLoadMore, onRefreshData, ...props }) => {
    const {
        loading,
        refreshing,
        handleLoadMore,
        handleRefreshData,
    } = useHandlers(onLoadMore, onRefreshData);

    const renderFooter = () => {
        if (loading)
            return (
                <ActivityIndicator
                    color={Colors.black}
                    size="small"
                    style={styles.indicator}
                />
            );
        return null;
    };

    const renderSeparator = () => <View style={styles.separator} />;

    return (
        <FlatListRN
            refreshing={refreshing}
            onRefresh={handleRefreshData}
            ListFooterComponent={renderFooter}
            ItemSeparatorComponent={renderSeparator}
            onEndReachedThreshold={0.4}
            onEndReached={handleLoadMore}
            {...props}
        />
    );
};

FlatList.propTypes = {
    onLoadMore: PropTypes.func,
    onRefreshData: PropTypes.func,
};

FlatList.defaultProps = {
    onLoadMore: async () => {},
    onRefreshData: async () => {},
};

export default FlatList;
