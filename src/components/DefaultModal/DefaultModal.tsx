import React, { FC, ReactNode } from "react";

import { Modal, ModalProps, View } from "react-native";

import { useTheme } from "@react-navigation/native";

import Button from "../Button/Button";

import { createStyles } from "./styles";

export interface DefaultModalProps extends ModalProps {
  buttonLabel?: string;
  onPress?: () => void;
  children?: ReactNode;
}

const DefaultModal: FC<DefaultModalProps> = ({
  buttonLabel,
  onPress,
  children,
  ...props
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <Modal animationType="slide" transparent {...props}>
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          {children}
          {buttonLabel && (
            <View style={styles.buttonBox}>
              <Button
                onPress={onPress}
                label={buttonLabel}
                customLabelStyle={styles.label}
                style={styles.continueButton}
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default DefaultModal;
