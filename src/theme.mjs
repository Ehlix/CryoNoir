export const THEME_NAME = 'CryoNoir';

export const base = {
  meta: {
    name: THEME_NAME,
    appearance: 'dark',
  },
  colors: {
    fg: '#f1faee',
    text: '#f1faee',
    bg: '#1c2026',
    mute: '#5c667a',
    accent: '#88c0d0',
    func: '#6d88a2',
    info: '#81A1C1',
    type: '#a8dadc',
    warn: '#ebcb8b',
    cursor: '#f1faee',
    hover: '#7c869a',
    border: '#4c566a',
    number: '#4e9dcf',
    vars: '#f1faee',
    attr: '#a8dadc',
    keywords: '#81A1C1',
    string: '#94afc199',
    bool: '#81A1C1',
    err: '#bf616a',
    created: '#a8dadc',
    modified: '#ebcb8b',
    black: '#1c2026',
    brightBlack: '#4c566a',
    dimBlack: '#2E3440',
    red: '#bf616a',
    brightRed: '#D08770',
    dimRed: '#bf616a99',
    green: '#a8dadc',
    brightGreen: '#a8dadc',
    dimGreen: '#a8dadc99',
    yellow: '#ebcb8b',
    brightYellow: '#ebcb8b',
    dimYellow: '#ebcb8b99',
    blue: '#81A1C1',
    brightBlue: '#4e9dcf',
    dimBlue: '#81A1C199',
    magenta: '#5E81AC',
    brightMagenta: '#5E81AC',
    dimMagenta: '#5E81AC99',
    cyan: '#88C0D0',
    brightCyan: '#88C0D0',
    dimCyan: '#88C0D099',
    white: '#eceff4',
    brightWhite: '#f1faee',
    dimWhite: '#e5e9f0',
  },
  styles: {
    fontStyle: 'italic',
  },
};

export const baseNoitalics = {
  ...base,
  styles: { ...base.styles, fontStyle: null },
  meta: { ...base.meta, name: `${THEME_NAME}-noitalics` },
};

export const alt = {
  ...base,
  colors: { ...base.colors, bg: '#000000', mute: '#353535', hover: '#a02227' },
  meta: { ...base.meta, name: `${THEME_NAME}-alt` },
};

export const altNoitalics = {
  ...alt,
  styles: { ...alt.styles, fontStyle: null },
  meta: { ...alt.meta, name: `${THEME_NAME}-alt-noitalics` },
};

export const schema = (themes) => {
  return `{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "name": "${THEME_NAME}",
    "author": "Ehlix",
    "themes": [${themes.map((base) => buildTheme(base)).join(',')}]
  }`;
};

const buildTheme = ({ colors, styles, meta }) => {
  return `{
    "name": "${meta.name}",
    "appearance": "${meta.appearance}",
    "style": {
      "border": "${colors.border}30",
      "border.variant": "${colors.border}30",
      "border.focused": "${colors.bg}",
      "border.selected": "${colors.bg}",
      "border.transparent": "${colors.bg}",
      "border.disabled": "${colors.bg}",
      "elevated_surface.background": "${colors.bg}",
      "surface.background": "${colors.bg}",
      "background": "${colors.bg}",
      "element.background": "${colors.bg}",
      "element.hover": "${colors.hover}10",
      "element.active": "${colors.hover}10",
      "element.selected": "${colors.hover}10",
      "element.disabled": null,
      "drop_target.background": "${colors.hover}10",
      "ghost_element.background": null,
      "ghost_element.hover": "${colors.hover}05",
      "ghost_element.active": null,
      "ghost_element.selected": "${colors.hover}05",
      "ghost_element.disabled": null,
      "text": "${colors.text}",
      "text.muted": "${colors.mute}",
      "text.placeholder": "${colors.mute}",
      "text.disabled": "${colors.mute}",
      "text.accent": "${colors.accent}",
      "icon": null,
      "icon.muted": null,
      "icon.disabled": null,
      "icon.placeholder": null,
      "icon.accent": null,
      "status_bar.background": "${colors.bg}",
      "title_bar.background": "${colors.bg}",
      "toolbar.background": "${colors.bg}",
      "tab_bar.background": "${colors.bg}",
      "tab.inactive_background": "${colors.bg}",
      "tab.active_background": "${colors.bg}",
      "search.match_background": "${colors.hover}30",
      "panel.background": "${colors.bg}",
      "panel.selected_background": "${colors.hover}30",
      "panel.focused_border": null,
      "pane.focused_border": null,
      "scrollbar.thumb.background": "${colors.hover}10",
      "scrollbar.thumb.hover_background": "${colors.hover}10",
      "scrollbar.thumb.border": "${colors.hover}10",
      "scrollbar.track.background": "${colors.bg}",
      "scrollbar.track.border": "${colors.bg}",
      "editor.foreground": "${colors.fg}",
      "editor.background": "${colors.bg}",
      "editor.gutter.background": "${colors.bg}",
      "editor.subheader.background": "${colors.bg}",
      "editor.active_line.background": "${colors.hover}05",
      "editor.highlighted_line.background": null,
      "editor.line_number": "${colors.mute}",
      "editor.active_line_number": "${colors.text}",
      "editor.invisible": null,
      "editor.wrap_guide": "${colors.bg}",
      "editor.active_wrap_guide": "${colors.bg}",
      "editor.document_highlight.read_background": "${colors.hover}00",
      "editor.document_highlight.write_background": "${colors.hover}00",
      "terminal.background": "${colors.bg}",
      "terminal.foreground": "${colors.fg}",
      "terminal.bright_foreground": null,
      "terminal.dim_foreground": "${colors.fg}",
      "terminal.ansi.black": "${colors.black}",
      "terminal.ansi.bright_black": "${colors.brightBlack}",
      "terminal.ansi.dim_black": "${colors.dimBlack}",
      "terminal.ansi.red": "${colors.red}",
      "terminal.ansi.bright_red": "${colors.red}",
      "terminal.ansi.dim_red": "${colors.red}",
      "terminal.ansi.green": "${colors.green}",
      "terminal.ansi.bright_green": "${colors.green}",
      "terminal.ansi.dim_green": "${colors.green}",
      "terminal.ansi.yellow": "${colors.yellow}",
      "terminal.ansi.bright_yellow": "${colors.yellow}",
      "terminal.ansi.dim_yellow": "${colors.yellow}",
      "terminal.ansi.blue": "${colors.blue}80",
      "terminal.ansi.bright_blue": "${colors.blue}",
      "terminal.ansi.dim_blue": "${colors.blue}",
      "terminal.ansi.magenta": "${colors.magenta}",
      "terminal.ansi.bright_magenta": "${colors.brightMagenta}",
      "terminal.ansi.dim_magenta": "${colors.dimMagenta}",
      "terminal.ansi.cyan": "${colors.cyan}",
      "terminal.ansi.bright_cyan": "${colors.brightCyan}",
      "terminal.ansi.dim_cyan": "${colors.dimCyan}",
      "terminal.ansi.white": "${colors.white}",
      "terminal.ansi.bright_white": "${colors.brightWhite}",
      "terminal.ansi.dim_white": "${colors.dimWhite}",
      "link_text.hover": "${colors.cyan}",
      "conflict": "${colors.info}",
      "conflict.background": null,
      "conflict.border": null,
      "created": "${colors.created}",
      "created.background": null,
      "created.border": null,
      "deleted": "${colors.err}",
      "deleted.background": null,
      "deleted.border": null,
      "error": "${colors.err}",
      "error.background": "${colors.bg}",
      "error.border": "${colors.err}",
      "hidden": "${colors.mute}40",
      "hidden.background": null,
      "hidden.border": null,
      "hint": "${colors.mute}",
      "hint.background": "${colors.bg}",
      "hint.border": "${colors.info}",
      "ignored": "${colors.mute}40",
      "ignored.background": null,
      "ignored.border": null,
      "info": "${colors.info}",
      "info.background": "${colors.bg}",
      "info.border": "${colors.info}",
      "modified": "${colors.modified}",
      "modified.background": null,
      "modified.border": null,
      "predictive": null,
      "predictive.background": null,
      "predictive.border": null,
      "renamed": null,
      "renamed.background": null,
      "renamed.border": null,
      "success": null,
      "success.background": null,
      "success.border": null,
      "unreachable": null,
      "unreachable.background": null,
      "unreachable.border": null,
      "warning": "${colors.warn}",
      "warning.background": "${colors.bg}",
      "warning.border": "${colors.warn}",
      "players": [
        {
          "cursor": "${colors.cursor}",
          "background": "${colors.cursor}",
          "selection": "${colors.hover}20"
        },
        {
          "cursor": "${colors.yellow}",
          "background": "${colors.yellow}",
          "selection":"${colors.yellow}10"
        },
        {
          "cursor": "${colors.green}",
          "background": "${colors.green}",
          "selection":"${colors.green}10"
        },
        {
          "cursor": "${colors.blue}",
          "background": "${colors.blue}",
          "selection": "${colors.blue}10"
        },
        {
          "cursor":  "${colors.cyan}",
          "background": "${colors.cyan}",
          "selection": "${colors.cyan}10"
        }
      ],
      "syntax": {
        "attribute": {
          "color": "${colors.attr}",
          "font_style": null,
          "font_weight": null
        },
        "boolean": {
          "color": "${colors.bool}",
          "font_style": null,
          "font_weight": null
        },
        "comment": {
          "color": "${colors.mute}",
          "font_style": "${styles.fontStyle}",
          "font_weight": null
        },
        "comment.doc": {
          "color": "${colors.mute}",
          "font_style": "${styles.fontStyle}",
          "font_weight": null
        },
        "constant": {
          "color": "${colors.vars}",
          "font_style": null,
          "font_weight": null
        },
        "constructor": {
          "color": "${colors.func}",
          "font_style": null,
          "font_weight": null
        },
        "function": {
          "color": "${colors.func}",
          "font_style": null,
          "font_weight": null
        },
        "keyword": {
          "color": "${colors.keywords}",
          "font_style": null,
          "font_weight": null
        },
        "number": {
          "color": "${colors.number}",
          "font_style": null,
          "font_weight": null
        },
        "operator": {
          "font_style": null,
          "font_weight": null
        },
        "preproc": {
          "font_style": null,
          "font_weight": null
        },
        "punctuation": {
          "font_style": null,
          "font_weight": null
        },
        "punctuation.bracket": {
          "font_style": null,
          "font_weight": null
        },
        "punctuation.delimiter": {
          "font_style": null,
          "font_weight": null
        },
        "punctuation.list_marker": {
          "font_style": null,
          "font_weight": null
        },
        "punctuation.special": {
          "font_style": null,
          "font_weight": null
        },
        "string": {
          "color": "${colors.string}",
          "font_style": null,
          "font_weight": null
        },
        "string.escape": {
          "color": "${colors.type}",
          "font_style": null,
          "font_weight": null
        },
        "string.regex": {
          "color": "${colors.type}",
          "font_style": null,
          "font_weight": null
        },
        "string.special": {
          "color": "${colors.accent}",
          "font_style": null,
          "font_weight": null
        },
        "string.special.symbol": {
          "color": "${colors.accent}",
          "font_style": null,
          "font_weight": null
        },
        "tag": {
          "font_style": null,
          "font_weight": null
        },
        "text.literal": {
          "font_style": null,
          "font_weight": null
        },
        "type": {
          "color": "${colors.type}",
          "font_style": "${styles.fontStyle}",
          "font_weight": null
        },
        "variable": {
          "color": "${colors.vars}",
          "font_style": null,
          "font_weight": null
        },
        "variable.special": {
          "color": "${colors.vars}",
          "font_style": null,
          "font_weight": null
        }
      }
    }
  }`;
};

export const svg = ({ colors }) => {
  const clr = Object.values(colors);
  clr.length = 6;
  const rect = (color, i) => `
    <rect
      r="0"
      width="1.5"
      height="17"
      y="0"
      x="${(i && i * 1.5) + 2.2}"
      fill="${color}"
      transform="skewX(-40) scale(4)"
    />
  `;
  return `
  <svg
    width="45"
    height="10"
    viewBox="0 0 95 0"
    xmlns="http://www.w3.org/2000/svg"
  >
    ${clr.map(rect).join('')}
  </svg>
  `;
};
