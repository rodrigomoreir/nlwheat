import React, {
    // useEffect 
} from 'react';

import {
    View,
    Text
} from 'react-native';
// import Animated, {
//     useSharedValue,
//     useAnimatedStyle,
//     withTiming,
//     Easing,
//     interpolate,
//     Extrapolate
// } from 'react-native-reanimated';
import { MotiView } from 'moti';
import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

export type MessageProps = {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

type Props = {
    data: MessageProps
}

export function Message({ data }: Props) {
    // useSharedValue é o mesmo que o animatedValue de antes
    // useSharedValue ele armazena o valor de uma animação
    // Para fazer o elemento se mover, geralmente usa-se o Translation para evitar
    // mexer em outros elementos

    // useAnimatedStyle é para criar o style do elemento a partir do valor da animação
    // ou seja, nesse caso cria-se um estilo apartir do -50

    // withTiming muda o valor de uma propriedade ao londe de um tempo determinado

    // easing é uma forma de falar como animação irá fluir na tela, exemplo o liniear
    // que irá se mover a mesma quantidade durante todo o tempo de animação.

    // const messagePosition = useSharedValue(-50)
    // const messageOpacity = useSharedValue(0)

    // const messageStyle = useAnimatedStyle(() => {
    //     return {
    //         transform: [
    //             { translateY: messagePosition.value }
    //         ],
    //         // opacity: messageOpacity.value,
    //         opacity: interpolate(
    //             messagePosition.value,
    //             [-50, 0],
    //             [0, 1],
    //             Extrapolate.CLAMP,
    //         )
    //     }
    // })

    // useEffect(() => {
    //     messagePosition.value = withTiming(0, {
    //         duration: 700,
    //         // easing: Easing.bounce
    //     })
    //     // messageOpacity.value = withTiming(1, {
    //     //     duration: 1000,
    //     //     easing: Easing.bounce
    //     // })
    // }, [])

    return (
        <MotiView
            from={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 700 }}
            style={styles.container}
        >
            <Text style={styles.message}>{data?.text}</Text>
            <View style={styles.footer}>
                <UserPhoto imageUri={data?.user.avatar_url} sizes='SMALL' />
                <Text style={styles.userName}>{data?.user.name}</Text>
            </View>
        </MotiView>

        // <Animated.View
        //     // from={{ opacity: 0, translateY: -50 }}
        //     // animate={{ opacity: 1, translateY: 0 }}
        //     // transition={{ type: 'timing', duration: 700 }}
        //     style={[styles.container, messageStyle]}
        // >
        //     <Text style={styles.message}>{data.text}</Text>
        //     <View style={styles.footer}>
        //         <UserPhoto imageUri={data.user.avatar_url} sizes='SMALL' />
        //         <Text style={styles.userName}>{data.user.name}</Text>
        //     </View>
        // </Animated.View>

    );
}