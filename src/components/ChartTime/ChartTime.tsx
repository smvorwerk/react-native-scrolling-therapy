import React from "react";

import { FlatList, ListRenderItemInfo, View } from "react-native";

import ChartTimeBar from "../ChartTimeBar/ChartTimeBar";
import { DailyUsage } from "../Statistics/types";

import { createStyles } from "./styles";

const ChartTime = ({ history }: { history: DailyUsage[] }) => {
  const styles = createStyles();

  const renderItem = ({ item, index }: ListRenderItemInfo<DailyUsage>) => (
    <ChartTimeBar {...item} index={index} />
  );

  return (
    <View style={styles.chartContainer}>
      <FlatList
        horizontal
        data={history}
        renderItem={renderItem}
        scrollEnabled={false}
        contentContainerStyle={styles.barListContainer}
      />
    </View>
  );
};

export default ChartTime;
