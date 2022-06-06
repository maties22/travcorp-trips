import React, { ForwardedRef, forwardRef, SVGProps } from "react";
import * as icons from "../icons";

type IconsType = keyof typeof icons;
type SpanRef = ForwardedRef<HTMLSpanElement>;

type IconProps = {
  type: IconsType;
  color?: string;
};

const Icon = forwardRef(
  ({ type, color, ...restProps }: IconProps, ref: SpanRef) => {
    const IconElement = icons[type] as React.FC<
      Pick<IconProps, "color"> & SVGProps<SVGElement>
    >;

    return <IconElement color={color} {...restProps} />;
  }
);

export { Icon };
