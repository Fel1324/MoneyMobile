import { useEffect, useState } from "react";
import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import icons from "../../constants/icons.js";
import { styles } from "./home.style.js";
import Expense from "../../components/expense/expense.jsx";

const Home = (props) => {
  const [total, setTotal] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const OpenExpense = (id) => {
    props.navigation.navigate("expense");
  }

  const ListExpenses = () => {
    // Simule API access...
    const data = [
      {id: 1, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-carro.png", category: "Carro", description: "Pagamento IPVA", value: 2500},
      {id: 2, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-casa.png", category: "Casa", description: "Condomínio", value: 620},
      {id: 3, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-lazer.png", category: "Lazer", description: "Sorvete no parque", value: 17.50},
      {id: 4, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", category: "Mercado", description: "Compras Walmart", value: 375},
      {id: 5, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-treinamento.png", category: "Educação", description: "Faculdade", value: 490},
      {id: 6, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", category: "Viagem", description: "Passagem Aérea", value: 610},
      {id: 7, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", category: "Mercado", description: "Compras Churrasco", value: 144.30},
      {id: 8, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", category: "Viagem", description: "Hotel", value: 330}
    ];

    // let sum = 0;
    // for(let i = 0; i < data.length; i++)
    //   sum = sum + data[i].value;

    // calculate expenses sum...
    const sum = data.reduce((prev, current) => {
      return prev + current.value;
    }, 0);

    setTotal(sum);
    setExpenses(data);
  }

  useEffect(() => {
    ListExpenses();
  }, []);

  return(
    <View style={styles.container}>
      <Image source={icons.logo} style={styles.logo} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.dashboard}>
          <View>
            <Text style={styles.dashboardValue}>
              R$ {total.toLocaleString("pt-BR", {minimumFractionDigits: 2})}
            </Text>
            <Text style={styles.dashboardText}>Total de Gastos</Text>
          </View>
          <Image style={styles.dashboardImg} source={icons.money}/>
        </View>

        <View>
          <Text style={styles.expenseTitle}>Despesas</Text>

          {
            expenses.map((expen) => {
              return (
                <Expense
                  key={expen.id}
                  id={expen.id}
                  icon={expen.icon}
                  category={expen.category}
                  description={expen.description}
                  value={expen.value}
                  onClick={OpenExpense}
                />
              )
            })
          }
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.btnAdd} onPress={() => {OpenExpense(0)}}>
        <Image source={icons.add} style={styles.btnAddImage} />
      </TouchableOpacity>
    </View>
  )
}

export default Home;
