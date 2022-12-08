import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Actions from '../../components/Actions';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';


const Home = () => {
  const list = [
    {
      id: 1,
      label: 'Boleto conta luz',
      value: '300,90',
      date: '14/09/2022',
      type: 0 // despesas
    },
    {
      id: 2,
      label: 'Pix Client X',
      value: '2.500,00',
      date: '21/09/2022',
      type: 1 // entradas
    },
    {
      id: 3,
      label: 'Salário',
      value: '7.200,00',
      date: '28/09/2022',
      type: 1 // entradas
    }
  ]

  return (
    <View style={styles.container} >
      <Header name="Daiana Lins" />
      <Balance gastos='527,75' saldo='2.500,00' />

      <Actions />

      <StatusBar style="auto" />

      <Text style={styles.title} >Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={Object(item)} />}
      />
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
