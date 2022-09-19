import { FC, useEffect } from "react";
import { css } from "@emotion/css";
import { CgColorPicker } from "react-icons/cg";
import { useCustomEyeDropper } from "./hooks/useCustomEyeDropper";
import { isBrowserEyeDropper } from "../util/isBrowserSupportEyeDropper";
import { HSVA } from "../types";
import tinycolor from "tinycolor2";
import { ColorModel } from "../colorModel";

interface DropperInterface {
  onChange: (hsva: HSVA) => void;
}

const dropper = css`
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  cursor: pointer;
  border-radius: 4px;
  background-color: white;

  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border-radius: 4px;
`;

export const Dropper: FC<DropperInterface> = (props) => {
  const { onChange } = props;
  const { openDropper, color, closeDropper } = useCustomEyeDropper();

  const handleOpenDropper = async (e: React.MouseEvent) => {
    if (isBrowserEyeDropper()) {
      // @ts-ignore
      const eyeDropper = new EyeDropper();
      eyeDropper
        .open()
        // @ts-ignore
        .then((res) => onChange(ColorModel.toColorSet(res.sRGBHex).hsv));
    } else {
      openDropper(e);
    }
  };

  useEffect(() => {
    if (!color) return;
    const hex = tinycolor(color).toHex();
    closeDropper();
    onChange(ColorModel.toColorSet(hex).hsv);
  }, [color]);

  return (
    <button onClick={handleOpenDropper} className={dropper}>
      <CgColorPicker></CgColorPicker>
    </button>
  );
};