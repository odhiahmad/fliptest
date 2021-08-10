import React,{useState,useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, Text, style, FlatList, TouchableOpacity, Image } from 'react-native';
import COLORS from '../varibelTemp/colors';
import LoaderModal from '../components/Loader';

import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';



export default function Beranda({ navigation }) {
    const [data, setData] = useState({
        data: [],
        loading: false,
        isRefreshing: false,

    });

    const getData = async () => {
        try{
           setData({
            ...data,
          
            loading:true
        })
    
        let response = await fetch('https://nextar.flip.id/frontend-test');
        let dataTemp = await response.json();
       
        setData({
            ...data,
            data:dataTemp,
            loading:false
        })

        console.log(data.data)
    
        }catch(error){
            console.log(error)
        }
        
    }

    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        getData()

    }, []);

    const CartCard = ({ item }) => {
        return (
            <TouchableOpacity
                underlayColor={COLORS.white}
                activeOpacity={0.9}
                >
                <View style={styles.listSetting}>
                   
                    <View style={{ width: '70%', flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: '600' }}>{item.beneficiary_bank}</Text>
                        <Text style={{ fontSize: 12 }}>{item.beneficiary_name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
          <LoaderModal
                loading={data.loading} />
            <View style={styles.header}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Beranda</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                data={data.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <CartCard item={item} />}
            />
        </SafeAreaView>
    );

};
const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    listSetting: {
        marginBottom: 10,
        elevation: 2,
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        marginHorizontal: 20, height: 80,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    }
});

