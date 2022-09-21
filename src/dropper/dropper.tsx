import React, { FC, useEffect } from "react";
import {dropper} from './dropper.style';
import { useCustomEyeDropper } from "./hooks/useCustomEyeDropper";
import { isBrowserEyeDropper } from "../util/isBrowserSupportEyeDropper";
import { HSVA } from "../types";
import { ColorModel } from "../colorModel";

interface DropperInterface {
  onChange: (hsva: HSVA) => void;
}

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
    const hex = ColorModel.toColorSet(color).hex;
    closeDropper();
    onChange(ColorModel.toColorSet(hex).hsv);
  }, [color]);

  return (
    <button onClick={handleOpenDropper} className={dropper}>
      {/* <img src={dropperIcon} alt="" /> */}
<svg x="0px" y="0px" viewBox="0 0 489.49 489.49">
<g>
	<path d="M473.407,16.084c-21.445-21.446-56.338-21.444-77.781,0L328.45,83.259l-3.536-3.536
		c-10.357-10.356-24.169-16.06-38.891-16.06c-14.723,0-28.534,5.704-38.891,16.06l-38.893,38.891l42.427,42.427L95.105,316.604
		c-21.444,21.444-21.444,56.337,0,77.781c10.722,10.722,24.807,16.083,38.891,16.083s28.169-5.361,38.891-16.083L328.45,238.822
		l42.427,42.427l38.891-38.891c10.357-10.357,16.062-24.168,16.062-38.891s-5.704-28.534-16.062-38.891l-3.536-3.536l67.176-67.175
		C494.851,72.421,494.851,37.528,473.407,16.084z M151.673,373.173c-9.748,9.747-25.607,9.747-35.355,0
		c-9.747-9.748-9.747-25.608,0-35.355l155.563-155.563l35.356,35.356L151.673,373.173z M388.554,221.145l-17.678,17.677
		L250.668,118.614l17.678-17.678c4.69-4.69,10.969-7.273,17.678-7.273s12.987,2.583,17.678,7.273l84.853,84.854
		c4.69,4.69,7.274,10.968,7.274,17.677S393.244,216.454,388.554,221.145z M452.194,72.653l-67.175,67.175l-35.355-35.356
		l67.175-67.175c9.748-9.747,25.607-9.747,35.355,0C461.941,47.044,461.941,62.905,452.194,72.653z"/>
	<path d="M10.252,429.741C3.642,436.351,0,445.141,0,454.49c0,9.349,3.641,18.138,10.252,24.749
		c6.61,6.611,15.399,10.251,24.748,10.251c9.35,0,18.139-3.641,24.749-10.251c9.674-9.673,15.611-35.688,18.29-50.334l3.907-21.361
		l-21.361,3.907C45.94,414.129,19.925,420.068,10.252,429.741z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

    </button>
  );
};
