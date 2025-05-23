// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project f667fc580d8d9346 "ApiFlow (copy)", do not edit manually */
import {
  SVGDisplay
} from "./chunk-YVFI7H4N.js";
import {
  className,
  css,
  fonts
} from "./chunk-ZYGL2A5H.js";

// /:https://framerusercontent.com/modules/iqcQczauWSSevBvRS63r/7Az0a6ecdCHWjAiN5nKu/ISnviw8q2.js
import { jsx as _jsx2, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType2, cx, getFonts, getFontsFromSharedStyle, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";

// /:https://framerusercontent.com/modules/ruhvDrg8mUrRrZHrKuEJ/gQf2kVLMf1UuxrxSOz1l/ProgressAnimation.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { addPropertyControls, ControlType } from "unframer";
function ProgressAnimation(props) {
  const { backgroundColor, progressColor, timeAnimation } = props;
  const [width, setWidth] = useState(0);
  useEffect(function() {
    const interval = setInterval(function() {
      setWidth((prevWidth) => prevWidth >= 100 ? 0 : prevWidth + 1);
    }, timeAnimation);
    return function cleanup() {
      clearInterval(interval);
    };
  }, [timeAnimation]);
  const styles = { container: { width: "100%", height: "100%", position: "relative", overflow: "hidden" }, background: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: backgroundColor }, progress: { position: "absolute", top: 0, left: 0, height: "100%", width: `${width}%`, background: progressColor, transition: `width ${timeAnimation}ms linear` } };
  return /* @__PURE__ */ _jsxs("div", { style: styles.container, children: [/* @__PURE__ */ _jsx("div", { style: styles.background }), /* @__PURE__ */ _jsx("div", { style: styles.progress })] });
}
addPropertyControls(ProgressAnimation, { backgroundColor: { title: "Background Color", type: ControlType.Color, defaultValue: "rgba(0, 0, 0, 0.12)" }, progressColor: { title: "Progress Color", type: ControlType.Color, defaultValue: "black" }, timeAnimation: { title: "Animation Time (ms)", type: ControlType.Number, defaultValue: 90, min: 10, max: 1e3, step: 10 } });

// /:https://framerusercontent.com/modules/iqcQczauWSSevBvRS63r/7Az0a6ecdCHWjAiN5nKu/ISnviw8q2.js
var SVGDisplayFonts = getFonts(SVGDisplay);
var ProgressAnimationFonts = getFonts(ProgressAnimation);
var cycleOrder = ["fmCTFeuFp", "IIv28kAHe", "h0XQJLrlb"];
var serializationHash = "framer-dWqIp";
var variantClassNames = { fmCTFeuFp: "framer-v-1le1qma", h0XQJLrlb: "framer-v-1ny2wag", IIv28kAHe: "framer-v-5006y1" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = { "Active - Progress bar": "h0XQJLrlb", Active: "fmCTFeuFp", Inactive: "IIv28kAHe" };
var getProps = ({ click, height, id, sVGCode, title, width, ...props }) => {
  var _ref, _humanReadableVariantMap_props_variant, _ref1, _ref2;
  return { ...props, kg1wL8gqw: (_ref = sVGCode !== null && sVGCode !== void 0 ? sVGCode : props.kg1wL8gqw) !== null && _ref !== void 0 ? _ref : '<path d="M9 21h6v-1H9v1zm3-19C6.48 2 2 6.48 2 12c0 2.85 1.2 5.41 3.11 7.24.38.36.61.88.61 1.42V21c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-.34c0-.54.23-1.06.61-1.42C20.8 17.41 22 14.85 22 12c0-5.52-4.48-10-10-10zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>', variant: (_ref1 = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref1 !== void 0 ? _ref1 : "fmCTFeuFp", Vb218_9bK: (_ref2 = title !== null && title !== void 0 ? title : props.Vb218_9bK) !== null && _ref2 !== void 0 ? _ref2 : "Inbound calls", Wd_uH5B3z: click !== null && click !== void 0 ? click : props.Wd_uH5B3z };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, kg1wL8gqw, Vb218_9bK, Wd_uH5B3z, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "fmCTFeuFp", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTap1aw2ql9 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (Wd_uH5B3z) {
      const res = await Wd_uH5B3z(...args);
      if (res === false) return false;
    }
  });
  const ref1 = React.useRef(null);
  const isDisplayed = () => {
    if (baseVariant === "h0XQJLrlb") return true;
    return false;
  };
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx2(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs2(motion.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-1le1qma", className2, classNames), "data-border": true, "data-framer-name": "Active", "data-highlight": true, layoutDependency, layoutId: "fmCTFeuFp", onTap: onTap1aw2ql9, ref: ref !== null && ref !== void 0 ? ref : ref1, style: { "--border-bottom-width": "1px", "--border-color": "var(--token-1691cb44-c002-4542-9545-8a0801f91af2, rgb(231, 231, 231))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "dotted", "--border-top-width": "1px", backgroundColor: "var(--token-d0fee7ae-ecfd-4d64-b3d9-f38b79d987d7, rgb(255, 243, 237))", ...style }, variants: { h0XQJLrlb: { backgroundColor: "rgba(0, 0, 0, 0)" }, IIv28kAHe: { backgroundColor: "rgba(255, 243, 237, 0)" } }, ...addPropertyOverrides({ h0XQJLrlb: { "data-framer-name": "Active - Progress bar" }, IIv28kAHe: { "data-framer-name": "Inactive" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx2(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx2(motion.div, { className: "framer-1lwsutm-container", layoutDependency, layoutId: "y6lnUJ1v0-container", children: /* @__PURE__ */ _jsx2(SVGDisplay, { color: "var(--token-f5909a4b-54e7-4c08-b63f-44713b4eba16, rgb(237, 36, 9))", height: "100%", id: "y6lnUJ1v0", layoutId: "y6lnUJ1v0", strokeWidth: 0, style: { height: "100%", width: "100%" }, svgCode: kg1wL8gqw, width: "100%", ...addPropertyOverrides({ IIv28kAHe: { color: "var(--token-36bb1a2d-632b-41b6-8e08-ee48dcf29873, rgb(16, 16, 16))" } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { className: "framer-styles-preset-1k8riq", "data-styles-preset": "n4VV4jzz6", children: "Use Cases" }) }), className: "framer-1j8ri", fonts: ["Inter"], layoutDependency, layoutId: "MQlp_X_Gm", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: Vb218_9bK, verticalAlignment: "top", withExternalLayout: true }), isDisplayed() && /* @__PURE__ */ _jsx2(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx2(motion.div, { className: "framer-189thja-container", layoutDependency, layoutId: "xUN6HPZ6J-container", children: /* @__PURE__ */ _jsx2(ProgressAnimation, { backgroundColor: "rgba(0, 0, 0, 0)", height: "100%", id: "xUN6HPZ6J", layoutId: "xUN6HPZ6J", progressColor: "var(--token-d0fee7ae-ecfd-4d64-b3d9-f38b79d987d7, rgb(255, 243, 237))", style: { height: "100%", width: "100%" }, timeAnimation: 100, width: "100%" }) }) })] }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-dWqIp.framer-1v87ral, .framer-dWqIp .framer-1v87ral { display: block; }", ".framer-dWqIp.framer-1le1qma { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 48px; justify-content: center; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; width: min-content; }", ".framer-dWqIp .framer-1lwsutm-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }", ".framer-dWqIp .framer-1j8ri { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-dWqIp .framer-189thja-container { bottom: -1px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-dWqIp.framer-1le1qma { gap: 0px; } .framer-dWqIp.framer-1le1qma > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-dWqIp.framer-1le1qma > :first-child { margin-left: 0px; } .framer-dWqIp.framer-1le1qma > :last-child { margin-right: 0px; } }", ".framer-dWqIp.framer-v-1ny2wag .framer-1lwsutm-container { order: 1; }", ".framer-dWqIp.framer-v-1ny2wag .framer-1j8ri { order: 2; }", ".framer-dWqIp.framer-v-1ny2wag .framer-189thja-container { order: 0; }", ...css, '.framer-dWqIp[data-border="true"]::after, .framer-dWqIp [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerISnviw8q2 = withCSS(Component, css2, "framer-dWqIp");
var stdin_default = FramerISnviw8q2;
FramerISnviw8q2.displayName = "Tabs";
FramerISnviw8q2.defaultProps = { height: 48, width: 189 };
addPropertyControls2(FramerISnviw8q2, { variant: { options: ["fmCTFeuFp", "IIv28kAHe", "h0XQJLrlb"], optionTitles: ["Active", "Inactive", "Active - Progress bar"], title: "Variant", type: ControlType2.Enum }, kg1wL8gqw: { defaultValue: '<path d="M9 21h6v-1H9v1zm3-19C6.48 2 2 6.48 2 12c0 2.85 1.2 5.41 3.11 7.24.38.36.61.88.61 1.42V21c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-.34c0-.54.23-1.06.61-1.42C20.8 17.41 22 14.85 22 12c0-5.52-4.48-10-10-10zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>', placeholder: "Enter your SVG code here...", title: "SVG Code", type: ControlType2.String }, Vb218_9bK: { defaultValue: "Inbound calls", displayTextArea: false, title: "Title", type: ControlType2.String }, Wd_uH5B3z: { title: "Click", type: ControlType2.EventHandler } });
addFonts(FramerISnviw8q2, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...SVGDisplayFonts, ...ProgressAnimationFonts, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });

export {
  stdin_default
};
