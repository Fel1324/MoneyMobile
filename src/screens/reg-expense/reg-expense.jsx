import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./reg-expense.style.js";
import icons from "../../constants/icons.js";
import {Picker} from '@react-native-picker/picker';
import { useState } from "react";

const RegExpense = (props) => {
  const [id, setId] = useState(0);
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleToSave = () => {
    // Save expense in API...

    props.navigation.navigate("home");
  }

  const handleToDelete = () => {
    // delete expense in API...

    props.navigation.navigate("home");
  }

  return(
    <View style={styles.container}>
      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Valor</Text>
        <TextInput
          style={styles.inputValue}
          placeholder="0,00"
          defaultValue=""
          keyboardType="decimal-pad"
        />
      </View>

      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Descrição</Text>
        <TextInput style={styles.inputText} placeholder="Ex: Aluguel" defaultValue="" />
      </View>

      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Categoria</Text>
        <View style={styles.inputPicker}>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) => {
              setCategory(itemValue);
            }}
          >
            <Picker.Item label="Carro" value="Carro" />
            <Picker.Item label="Casa" value="Casa" />
            <Picker.Item label="Lazer" value="Lazer" />
            <Picker.Item label="Mercado" value="Mercado" />
            <Picker.Item label="Educação" value="Educação" />
            <Picker.Item label="Viagem" value="Viagem" />
          </Picker>
        </View>
      </View>

      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.btn} onPress={handleToSave}>
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerDelete}>
        <TouchableOpacity onPress={handleToDelete}>
          <Image source={icons.remove} style={styles.btnDelete} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RegExpense;
