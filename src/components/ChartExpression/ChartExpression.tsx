import React, { useMemo } from "react";

import { View } from "react-native";

import ChartExpressionBar from "../ChartExpressionBar/ChartExpressionBar";
import { ExpressionCount } from "../Statistics/types";

import { createStyles } from "./styles";

const ChartExpression = ({
  expressions,
}: {
  expressions: ExpressionCount[];
}) => {
  const styles = createStyles();

  const maxCount = useMemo(
    () => Math.max(...expressions.map(({ count }) => count)),
    [expressions],
  );

  return (
    <View style={styles.chartContainer}>
      {expressions?.map(item => (
        <ChartExpressionBar key={item.expression} {...item} maxCount={maxCount} />
      ))}
    </View>
  );
};

export default ChartExpression;
