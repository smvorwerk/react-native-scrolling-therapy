import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { View } from "react-native";

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  useDrawerStatus,
} from "@react-navigation/drawer";
import { useTheme } from "@react-navigation/native";
import analytics from "@react-native-firebase/analytics";

import { Button, MenuIcon, MenuItem, Text } from "~/components";
import { configs } from "~/constants";
import { useHeader } from "~/contexts/HeaderContext";
import { useSocialRoute } from "~/contexts/SocialRouteContext";
import { EventsEnum, IconsEnum, ScreenNamesEnum } from "~/enums";

import { createStyles } from "./styles";
import { useData } from "./useData";

const CustomDrawer = (props: DrawerContentComponentProps): JSX.Element => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const isDrawerOpen = useDrawerStatus();
  const { setIsDrawerOpen } = useHeader();
  const { social, setSocial } = useSocialRoute();
  const { t: translate, i18n } = useTranslation();
  const { menuIcons, menuItems } = useData();

  useEffect(() => {
    setIsDrawerOpen(isDrawerOpen === "open");
  }, [isDrawerOpen]);

  const buttonProps = useMemo(() => {
    const otherSocial = configs.SOCIALS.find(
      each => each.title !== social?.title,
    );

    if (otherSocial)
      return {
        iconName: IconsEnum[otherSocial.title],
        label: translate("shared.connect_with", {
          socialMedia: otherSocial.title,
        }),
        onPress: async () => {
          setSocial(otherSocial);
          await analytics().logEvent(EventsEnum.SelectSocial, {
            social: otherSocial.title,
          });
          props.navigation.navigate(ScreenNamesEnum.Social);
        },
      };
    return {
      iconName: IconsEnum.Facebook,
      label: translate("menu.connect_with_facebook"),
      onPress: async () => {
        setSocial(social);
        await analytics().logEvent(EventsEnum.SelectSocial, {
          social: social.title,
        });
        props.navigation.navigate(ScreenNamesEnum.Social);
      },
    };
  }, [social, i18n.language]);

  const navigateTo = ({ route }: { route?: ScreenNamesEnum }) => {
    if (route) {
      props.navigation.navigate(route);
    }
  };

  return (
    <DrawerContentScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.contentContainer}
      {...props}>
      <Text type="header" customStyle={styles.title}>
        {translate("menu.title")}
      </Text>
      <View style={styles.iconsView}>
        {menuIcons.map(item => (
          <MenuIcon key={item.id} {...item} />
        ))}
      </View>

      <View style={styles.content}>
        <Text type="buttonLabel" customStyle={styles.subtitle}>
          {translate("menu.switch_accounts")}
        </Text>
        <Button style={styles.button} {...buttonProps} />
        {menuItems.map(item => (
          <MenuItem
            key={item.id}
            onPress={() => navigateTo({ route: item?.route })}
            {...item}
          />
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
