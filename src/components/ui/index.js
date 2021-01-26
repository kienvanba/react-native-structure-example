/**
 * ShoutemUI
 * Documents: https://shoutem.github.io/docs/ui-toolkit/components/typography
 */

import {
    StyleSheet,
    TouchableWithoutFeedback,
    Platform,
    // FlatList,
    ScrollView,
} from 'react-native';

import {
    // Typography
    Heading,
    Title,
    Subtitle,
    // Text,
    Caption,
    Divider,

    // Layout
    View,
    Screen,
    HorizontalPager,
    Card,
    // ScrollView,
    ListView,
    GridRow,
    Overlay,
    Row,
    Tile,
    Lightbox,
    FormGroup,

    // Touchable
    TouchableOpacity,
    TouchableNativeFeedback,
    Touchable,

    // Media
    Video,
    // Image,
    ImageBackground,
    ImagePreview,
    ImageGallery,
    InlineGallery,
    ImageGalleryOverlay,
    RichMedia,

    //
    // TextInput,
    Switch,
    ShareButton,
    // Button,
    Icon,

    // Navigation
    NavigationBar,
    NavigationBarAnimations,

    // DropDown
    DropDownMenu,
    DropDownModal,

    //
    createIcon,

    //
    Spinner,
    LoadingIndicator,
    PageIndicators,

    // HTML
    Html,
    SimpleHtml,

    // Misc
    Examples,
    Device,
    IPHONE_X_HOME_INDICATOR_PADDING,
    IPHONE_X_NOTCH_PADDING,
    NAVIGATION_HEADER_HEIGHT,
    IPHONE_X_LONG_SIDE,
} from '@shoutem/ui';

/**
 * Customized component
 */

import Text from './text';
import Button from './button';
import TextInput from './text-input';
import Image from './image';
import FlatList from './flat-list';
import Toast from 'components/popup/toast';

import {
    CustomScrollView,
    ScrollIntoView,
    scrollIntoViewOptions,
} from './scroll-into-view';
// import Select from './select';
import KeyboardAvoidingView from './keyboard-avoiding-view';

export {
    StyleSheet,
    TouchableWithoutFeedback,
    Platform,
    KeyboardAvoidingView,
    View,
    FlatList,
    Screen,
    NavigationBar,
    NavigationBarAnimations,
    DropDownMenu,
    DropDownModal,
    Overlay,
    ScrollView,
    CustomScrollView,
    ScrollIntoView,
    scrollIntoViewOptions,
    ListView,
    GridRow,
    TouchableOpacity,
    TouchableNativeFeedback,
    Touchable,
    Button,
    Icon,
    createIcon,
    FormGroup,
    // Select,
    TextInput,
    Toast,
    Spinner,
    Switch,
    Video,
    Image,
    ImageBackground,
    ImagePreview,
    ImageGallery,
    InlineGallery,
    ImageGalleryOverlay,
    HorizontalPager,
    LoadingIndicator,
    PageIndicators,
    RichMedia,
    Html,
    SimpleHtml,
    ShareButton,
    Heading,
    Title,
    Subtitle,
    Text,
    Caption,
    Divider,
    Card,
    Row,
    Tile,
    Lightbox,
    Examples,
    Device,
    IPHONE_X_HOME_INDICATOR_PADDING,
    IPHONE_X_NOTCH_PADDING,
    NAVIGATION_HEADER_HEIGHT,
    IPHONE_X_LONG_SIDE,
};
