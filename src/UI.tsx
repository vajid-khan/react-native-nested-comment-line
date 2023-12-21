import React, { ReactNode } from "react";
import { Image, Text, View } from "react-native";

import Svg, { Path } from "react-native-svg";

export const Container = ({
  children,
  nested,
}: {
  children: ReactNode;
  nested: number;
}) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "column",
        marginLeft: [1, 2].includes(nested) ? 12 : 22,
        marginRight: 22,
      }}
    >
      {children}
    </View>
  );
};

export const CommentContent = ({ children }: { children: ReactNode }) => {
  return <Text>{children}</Text>;
};

export const Avatar = (props: { source: string }) => {
  return (
    <View
      style={{
        height: 28,
        width: 28,
        marginRight: 8,
        borderRadius: 50,
        overflow: "hidden",
        backgroundColor: "grey",
      }}
    >
      <Image
        resizeMode="cover"
        style={{
          backgroundColor: "grey",
          borderRadius: 50,
          height: 28,
          marginRight: 8,
          overflow: "hidden",
          width: 28,
        }}
        source={{ uri: props.source }}
      />
    </View>
  );
};

export const TopRowWrapper = ({
  children,
  nested,
  hasChildren,
}: {
  children: ReactNode;
  nested: number;
  hasChildren: boolean;
}) => {
  const marginLeft =
    nested === 0 && !hasChildren
      ? 0
      : hasChildren && nested === 0
      ? 0
      : hasChildren && nested === 1
      ? 38
      : !hasChildren && nested === 1
      ? 38
      : !hasChildren && nested === 2
      ? 66
      : 0;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        marginTop: 12,
        justifyContent: "space-between",
        marginLeft,
      }}
    >
      {children}
    </View>
  );
};

export const Content = ({
  children,
  nested,
  hasChildren,
}: {
  children: ReactNode;
  nested: number;
  hasChildren: boolean;
}) => {
  const marginLeft =
    nested === 0 && !hasChildren
      ? 0
      : hasChildren && nested === 0
      ? 28
      : hasChildren && nested === 1
      ? 66
      : !hasChildren && nested === 1
      ? 68
      : !hasChildren && nested === 2
      ? 94
      : 0;
  return (
    <View
      style={{
        marginLeft,
        padding: 10,
        borderRadius: 10,
        paddingBottom: 20,
        backgroundColor: "#ccc",
      }}
    >
      {children}
    </View>
  );
};

export const ActionRowLeftBorderInnerSVG = ({
  nested,
  hasChildren,
}: {
  nested: number;
  hasChildren: boolean;
}) => {
  return (
    <Svg
      height="140%"
      width={2}
      style={{
        backgroundColor: "#d9d9d9",
        position: "absolute",
        left:
          nested === 0 && !hasChildren
            ? 0
            : hasChildren && nested === 0
            ? 12
            : hasChildren && nested === 1
            ? 50
            : !hasChildren && nested === 1
            ? 22
            : !hasChildren && nested === 2
            ? 50
            : 0,
      }}
    />
  );
};

export const ActionRowLeftBorderOuterSVG = ({
  nested,
  hasChildren,
}: {
  nested: number;
  hasChildren: boolean;
}) => {
  return (
    <Svg
      height="108%"
      width={2}
      style={{
        backgroundColor: "#d9d9d9",
        position: "absolute",
        left:
          nested === 0 && !hasChildren
            ? 0
            : hasChildren && nested === 0
            ? 12
            : hasChildren && nested === 1
            ? 22
            : !hasChildren && nested === 1
            ? 22
            : !hasChildren && nested === 2
            ? 22
            : 0,
      }}
    />
  );
};

export const ContentLeftBorderInnerSVG = ({
  nested,
  hasChildren,
}: {
  nested: number;
  hasChildren: boolean;
}) => {
  return (
    <Svg
      height="110%"
      width={2}
      style={{
        backgroundColor: "#d9d9d9",
        position: "absolute",
        left:
          nested === 0 && !hasChildren
            ? 0
            : hasChildren && nested === 0
            ? 12
            : hasChildren && nested === 1
            ? 50
            : !hasChildren && nested === 1
            ? 22
            : !hasChildren && nested === 2
            ? 50
            : 0,
      }}
    />
  );
};

export const ContentLeftBorderOuterSVG = ({
  nested,
  hasChildren,
}: {
  nested: number;
  hasChildren: boolean;
}) => {
  return (
    <Svg
      height="108%"
      width={2}
      style={{
        backgroundColor: "#d9d9d9",
        position: "absolute",
        left:
          nested === 0 && !hasChildren
            ? 0
            : hasChildren && nested === 0
            ? 12
            : hasChildren && nested === 1
            ? 22
            : !hasChildren && nested === 1
            ? 22
            : !hasChildren && nested === 2
            ? 22
            : 0,
      }}
    />
  );
};

export const TopRowLeftBorderInnerSVG = ({
  nested,
  hasChildren,
  isLast,
  isParent,
  isLastParent,
}: {
  nested: number;
  hasChildren: boolean;
  isLast: boolean;
  isParent: boolean | undefined;
  isLastParent: boolean | undefined;
}) => {
  return (
    <Svg
      height={
        isLastParent
          ? "30%"
          : !isParent && nested === 1
          ? "100%"
          : !isLast
          ? "100%"
          : "50%"
      }
      width={2}
      style={{
        backgroundColor: "#d9d9d9",
        position: "absolute",
        left:
          nested === 0 && !hasChildren
            ? 0
            : hasChildren && nested === 0
            ? 12
            : hasChildren && nested === 1
            ? 22
            : !hasChildren && nested === 1
            ? 22
            : !hasChildren && nested === 2
            ? 50
            : 0,
      }}
    />
  );
};

export const TopRowLeftBorderOuterSVG = ({
  nested,
  hasChildren,
  isLast,
  isLastParent,
}: {
  nested: number;
  hasChildren: boolean;
  isLast: boolean;
  isLastParent: boolean;
}) => {
  return (
    <Svg
      height={isLast && nested !== 0 ? "100%" : !isLastParent ? "100%" : "50%"}
      width={2}
      style={{
        backgroundColor: "#d9d9d9",
        position: "absolute",
        left:
          nested === 0 && !hasChildren
            ? 0
            : hasChildren && nested === 0
            ? 12
            : hasChildren && nested === 1
            ? 22
            : !hasChildren && nested === 1
            ? 22
            : !hasChildren && nested === 2
            ? 22
            : 0,
      }}
    />
  );
};

export const HorizontalTierSVG = ({ nested }: { nested: number }) => {
  const radius = 28;
  return (
    <Svg
      height={radius}
      width={radius}
      style={{
        position: "absolute",
        left: nested === 1 ? 22 : 50,
        top: 10, //nested !== 1 ? 26 : 24
      }}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >
      {/* Draw the curve */}
      <Path
        d={`M${radius},${
          radius
        } a${radius},${radius} 0 0,1 -${radius},-${radius}`}
        stroke="#d9d9d9"
        strokeWidth="4"
        fill="transparent"
      />
    </Svg>
  );
};
