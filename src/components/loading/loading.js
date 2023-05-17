import { View, Modal, ActivityIndicator } from 'react-native'

const loading = ({ visible }) => {
    return (
        <Modal transparent visible={visible}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'rgba(10,23,55,0.5)', opacity:0.5}}>
                <ActivityIndicator
                    size='large'
                    color={'blue'}
                    animating={true}
                    style={{ alignSelf: 'center', justifyContent: 'center', position: 'absolute' }}
                />
            </View>
        </Modal>
    )
}

export default loading