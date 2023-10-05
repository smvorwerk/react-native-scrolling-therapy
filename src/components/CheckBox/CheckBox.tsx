import React, { FC } from "react";

import { TouchableOpacity } from "react-native";

import { useTheme } from "@react-navigation/native";

import { Icon } from "~/assets/icons";
import { IconsEnum } from "~/enums";

import { createStyles } from "./styles";
import { moderateScale } from "react-native-size-matters";

type CheckBoxType = {
  handleCheck: () => void;
  userHasAcceptedTAC: boolean;
};

const CheckBox: FC<CheckBoxType> = ({ handleCheck, userHasAcceptedTAC }) => {
  const theme = useTheme();
  const styles = createStyles({ theme });
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={handleCheck}>
      {userHasAcceptedTAC && (
        <Icon
          width={moderateScale(40)}
          height={moderateScale(40)}
          name={IconsEnum.CheckList}
        />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
