import { View, FlatList, Text } from "react-native";

import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({ expenses }) {
  function renderExpenseItem(itemData) {
    return <ExpenseItem {...itemData.item} />;
  }

  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
