import React from "react";

import Text from "../Text/Text";

import { createStyles } from "./styles";

type ChartTimeProps = {
  topLabel: string;
  middleLabel?: string;
  bottomLabel: string;
};

const ChartMetrics = ({ topLabel, middleLabel, bottomLabel }: ChartTimeProps) => {
  const styles = createStyles();
  return (
    <>
      <Text type="footnote" customStyle={styles.outerNote} color="outline">
        {topLabel}
      </Text>
      {!!middleLabel && <Text type="footnote" customStyle={styles.middleNote} color="outline">
        {middleLabel}
      </Text>}
      <Text type="footnote" customStyle={styles.outerNote} color="outline">
        {bottomLabel}
      </Text>
    </>
  );
};

export default ChartMetrics;
