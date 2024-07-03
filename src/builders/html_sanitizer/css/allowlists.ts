/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Allowlists for the CSS sanitizer.
 */

/**
 * Allowlist of CSS properties.
 */
export const CSS_PROPERTY_ALLOWLIST = new Set<string>([
  'accent-color',
  // 'additive-symbols', -> only valid in @counter-style, which we disallow
  'align-content',
  'align-items',
  'align-self',
  'alignment-baseline',
  'all',
  'appearance',
  // 'ascent-override', -> only valid in @font-face, which we disallow
  'aspect-ratio',
  'backdrop-filter',
  'backface-visibility',
  'background',
  'background-attachment',
  'background-blend-mode',
  'background-clip',
  'background-color',
  'background-image',
  'background-origin',
  'background-position',
  'background-position-x',
  'background-position-y',
  'background-repeat',
  'background-size',
  // 'base-palette', -> only valid in @font-palette-values, which we disallow
  // 'baseline-shift',
  'block-size',
  'border',
  'border-block',
  'border-block-color',
  'border-block-end',
  'border-block-end-color',
  'border-block-end-style',
  'border-block-end-width',
  'border-block-start',
  'border-block-start-color',
  'border-block-start-style',
  'border-block-start-width',
  'border-block-style',
  'border-block-width',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-bottom-style',
  'border-bottom-width',
  'border-collapse',
  'border-color',
  'border-end-end-radius',
  'border-end-start-radius',
  'border-image',
  'border-image-outset',
  'border-image-repeat',
  'border-image-slice',
  'border-image-source',
  'border-image-width',
  'border-inline',
  'border-inline-color',
  'border-inline-end',
  'border-inline-end-color',
  'border-inline-end-style',
  'border-inline-end-width',
  'border-inline-start',
  'border-inline-start-color',
  'border-inline-start-style',
  'border-inline-start-width',
  'border-inline-style',
  'border-inline-width',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-radius',
  'border-right',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-spacing',
  'border-start-end-radius',
  'border-start-start-radius',
  'border-style',
  'border-top',
  'border-top-color',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-top-style',
  'border-top-width',
  'border-width',
  'bottom',
  'box-shadow',
  'box-sizing',
  // 'break-after', -> all break-* properties can affect printing.
  // 'break-before',
  // 'break-inside',
  'caption-side',
  'caret-color',
  'clear',
  'clip',
  'clip-path',
  'clip-rule',
  'color',
  'color-interpolation',
  'color-interpolation-filters',
  'color-scheme',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'columns',
  'contain',
  'contain-intrinsic-block-size',
  'contain-intrinsic-height',
  'contain-intrinsic-inline-size',
  'contain-intrinsic-size',
  'contain-intrinsic-width',
  // 'container', -> container-* are valid with @container, which we disallow
  // 'container-name',
  // 'container-type',
  'content',
  'content-visibility',
  'counter-increment',
  'counter-reset',
  'counter-set',
  // 'cursor', -> allows setting the cursor
  'cx',
  'cy',
  'd',
  // 'descent-override', -> only valid in @font-face, which we disallow
  'display',
  'dominant-baseline',
  'empty-cells',
  // 'fallback', -> only valid in at-rules
  'field-sizing',
  'fill',
  'fill-opacity',
  'fill-rule',
  'filter',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'float',
  'flood-color',
  'flood-opacity',
  'font',
  // 'font-display', -> only valid in @font-face, which we disallow
  'font-family',
  'font-feature-settings',
  'font-kerning',
  'font-optical-sizing',
  'font-palette',
  'font-size',
  'font-size-adjust',
  'font-stretch',
  'font-style',
  'font-synthesis',
  'font-synthesis-small-caps',
  'font-synthesis-style',
  'font-synthesis-weight',
  'font-variant',
  'font-variant-alternates',
  'font-variant-caps',
  'font-variant-east-asian',
  'font-variant-emoji',
  'font-variant-ligatures',
  'font-variant-numeric',
  'font-variant-position',
  'font-variation-settings',
  'font-weight',
  'forced-color-adjust',
  'gap',
  'grid',
  'grid-area',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-auto-rows',
  'grid-column',
  'grid-column-end',
  'grid-column-gap',
  'grid-column-start',
  'grid-gap',
  'grid-row',
  'grid-row-end',
  'grid-row-gap',
  'grid-row-start',
  'grid-template',
  'grid-template-areas',
  'grid-template-columns',
  'grid-template-rows',
  'height',
  'hyphenate-character',
  'hyphenate-limit-chars',
  'hyphens',
  'image-orientation',
  'image-rendering',
  // 'inherits', -> only valid in @property, which we disallow
  // 'initial-letter', -> experimental
  // 'initial-value', -> experimental
  'inline-size',
  'inset',
  'inset-area',
  'inset-block',
  'inset-block-end',
  'inset-block-start',
  'inset-inline',
  'inset-inline-end',
  'inset-inline-start',
  'isolation',
  'justify-content',
  'justify-items',
  'justify-self',
  'left',
  'letter-spacing',
  'lighting-color',
  'line-break',
  'line-clamp',
  'line-gap-override',
  'line-height',
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',
  'margin',
  'margin-block',
  'margin-block-end',
  'margin-block-start',
  'margin-bottom',
  'margin-inline',
  'margin-inline-end',
  'margin-inline-start',
  'margin-left',
  'margin-right',
  'margin-top',
  'marker',
  'marker-end',
  'marker-mid',
  'marker-start',
  'mask',
  'mask-clip',
  'mask-composite',
  'mask-image',
  'mask-mode',
  'mask-origin',
  'mask-position',
  'mask-repeat',
  'mask-size',
  'mask-type',
  // 'math-depth', -> only relevant for MathML elements
  // 'math-shift', -> only relevant for MathML elements
  // 'math-style', -> only relevant for MathML elements
  'max-block-size',
  'max-height',
  'max-inline-size',
  'max-width',
  'min-block-size',
  'min-height',
  'min-inline-size',
  'min-width',
  'mix-blend-mode',
  // 'navigation', -> experimental
  // 'negative', -> only valid in @counter-style, which we disallow
  'object-fit',
  'object-position',
  'object-view-box',
  'opacity',
  'order',
  'orphans',
  'outline',
  'outline-color',
  'outline-offset',
  'outline-style',
  'outline-width',
  'overflow',
  'overflow-anchor',
  'overflow-block',
  'overflow-clip-margin',
  'overflow-inline',
  'overflow-wrap',
  'overflow-x',
  'overflow-y',
  // 'overlay', -> experimental
  // 'override-colors', -> only valid in @font-palette-values, which we disallow
  // 'overscroll-behavior', -> can affect scrolling
  // 'overscroll-behavior-block', -> can affect scrolling
  // 'overscroll-behavior-inline', -> can affect scrolling
  // 'overscroll-behavior-x', -> can affect scrolling
  // 'overscroll-behavior-y', -> can affect scrolling
  // 'pad', -> only valid in @counter-style, which we disallow
  'padding',
  'padding-block',
  'padding-block-end',
  'padding-block-start',
  'padding-bottom',
  'padding-inline',
  'padding-inline-end',
  'padding-inline-start',
  'padding-left',
  'padding-right',
  'padding-top',
  // 'page', -> only valid with @page, which we disallow
  // 'page-break-after', -> too powerful, affects page breaks
  // 'page-break-before', -> too powerful, affects page breaks
  // 'page-break-inside', -> too powerful, affects page breaks
  // 'page-orientation', -> only valid in @page, which we disallow
  'paint-order',
  'perspective',
  'perspective-origin',
  'place-content',
  'place-items',
  'place-self',
  // 'pointer-events', -> too powerful, can disable pointer events
  // 'popover-hide-delay', -> we don't want to allow popovers
  // 'popover-show-delay', -> we don't want to allow popovers
  'position',
  // 'position-anchor', -> experimental
  // 'position-try', -> experimental
  // 'position-try-options', -> experimental
  // 'position-try-order', -> experimental
  // 'position-visibility', -> experimental
  // 'prefix', -> only valid in @counter-style, which we disallow
  'quotes',
  'r',
  // 'range', -> only valid in @counter-style, which we disallow
  // 'reading-order-items', -> experimental
  'resize',
  'right',
  'rotate',
  'row-gap',
  'ruby-align',
  'ruby-position',
  'rx',
  'ry',
  'scale',
  // all scroll properties are too powerful for a CSS sanitizer and disallowed
  // 'scroll-behavior',
  'shape-image-threshold',
  'shape-margin',
  'shape-outside',
  'shape-rendering',
  // 'size', -> only valid in @page, which we disallow
  // 'size-adjust', -> only valid in @font-face, which we disallow
  // 'src', -> only valid in @font-face, which we disallow
  'stop-color',
  'stop-opacity',
  'stroke',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-width',
  // 'suffix', -> only valid in @counter-style, which we disallow
  // 'symbols', -> only valid in @counter-style, which we disallow
  // 'syntax', -> only valid in @property, which we disallow
  // 'system', -> only valid in @counter-style, which we disallow
  'tab-size',
  'table-layout',
  'text-align',
  'text-align-last',
  'text-anchor',
  'text-autospace',
  'text-box-edge',
  'text-box-trim',
  'text-combine-upright',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-skip-ink',
  'text-decoration-style',
  'text-decoration-thickness',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-position',
  'text-emphasis-style',
  'text-indent',
  'text-orientation',
  'text-overflow',
  'text-rendering',
  'text-shadow',
  'text-size-adjust',
  'text-spacing',
  'text-spacing-trim',
  'text-transform',
  'text-underline-offset',
  'text-underline-position',
  'text-wrap',
  // 'timeline-scope', -> experimental
  'top',
  // 'touch-action', -> affects behavior
  'transform',
  'transform-box',
  'transform-origin',
  'transform-style',
  'translate',
  'unicode-bidi',
  // 'unicode-range', -> only valid in @font-face, which we disallow
  // 'user-select', -> too powerful, can disable user selection
  'vector-effect',
  'vertical-align',
  // 'view-timeline', -> experimental
  // 'view-timeline-axis', -> experimental
  // 'view-timeline-inset', -> experimental
  // 'view-timeline-name', -> experimental
  // 'view-transition-class', -> view-transitions are too powerful for CSS sanitizer
  // 'view-transition-name',
  'visibility',
  'white-space',
  'white-space-collapse',
  'widows',
  'width',
  'will-change',
  'word-break',
  'word-spacing',
  'word-wrap',
  'writing-mode',
  'x',
  'y',
  'z-index',
  'zoom',

  // Animation properties
  // go/keep-sorted start
  'animation',
  'animation-composition',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-fill-mode',
  'animation-iteration-count',
  'animation-name',
  'animation-play-state',
  'animation-range',
  'animation-range-end',
  'animation-range-start',
  'animation-timeline',
  'animation-timing-function',
  'offset',
  'offset-anchor',
  'offset-distance',
  'offset-path',
  'offset-position',
  'offset-rotate',
  // go/keep-sorted end

  // Transition properties
  // go/keep-sorted start
  'transition',
  'transition-behavior',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
  // go/keep-sorted end
]);

/**
 * Allowlist of CSS functions.
 */
export const CSS_FUNCTION_ALLOWLIST = new Set<string>([
  // go/keep-sorted start
  'alpha',
  'cubic-bezier',
  'linear-gradient',
  'matrix',
  'perspective',
  'radial-gradient',
  'rect',
  'repeating-linear-gradient',
  'repeating-radial-gradient',
  'rgb',
  'rgba',
  'rotate',
  'rotate3d',
  'rotatex',
  'rotatey',
  'rotatez',
  'scale',
  'scale3d',
  'scalex',
  'scaley',
  'scalez',
  'skew',
  'skewx',
  'skewy',
  'steps',
  'translate',
  'translate3d',
  'translatex',
  'translatey',
  'translatez',
  'url',
  // go/keep-sorted end
]);
