import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./expense.style.js";

const Expense = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onClick(0)}>
      <View style={styles.expense}>
        <View style={styles.containerIcon}>
          <Image
            style={styles.expenseIcon}
            source={{uri: props.icon}}
          />
        </View>

        <View style={styles.containerCategory}>
          <Text style={styles.expenseCategory}>{props.category}</Text>
          <Text style={styles.expenseDescription}>{props.description}</Text>
        </View>

        <View style={styles.containerValue}>
          <Text style={styles.expenseValue}>
            {props.value.toLocaleString("pt-BR", {minimumFractionDigits: 2})}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Expense;
