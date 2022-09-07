import React from "react";

export type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

export type ClickEvent =
  | React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  | React.TouchEvent<HTMLButtonElement | HTMLDivElement>;

export type OnClick = (
  event:
    | React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    | React.TouchEvent<HTMLButtonElement | HTMLDivElement>
) => void;
