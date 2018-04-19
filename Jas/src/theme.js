//import './assets/font/Quicksand-Bold/styles.css';
module.exports = () => {

    return {
        // The prefix to use on all css classes from ant.
        'ant-prefix': 'ant',

        // -------- Colors -----------
        'primary-color': '#14bad6',
        'info-color': '#666666',
        'success-color': '#12a2ba',
        'processing-color': '#404694',
        'error-color': '#f3483d',
        'highlight-color': '#2e336d',
        'warning-color': '#f3483d',
        'normal-color': '#515763',
        // Layout

        'layout-body-background': '#fff',
        'layout-header-background': '#404694',
        'layout-footer-background': '@layout-body-background',
        'layout-header-height': 'auto',
        'layout-header-padding': '10px 0',
        'layout-footer-padding': '24px 50px',
        'layout-sider-background': '#eeeeee',
        'layout-trigger-height': '48px',
        'layout-trigger-background': '#002140',
        'layout-trigger-color': '#fff',
        'layout-zero-trigger-width': '36px',
        'layout-zero-trigger-height': '42px',

        // Background color for `<body>`
        'body-background': '#fff',

        // Base background color for most components
        'component-background': '#fff',
        'font-family-no-number': '"Quicksand", "Roboto", sans-serif',
        'font-family': '"Quicksand", "Roboto", "Helvetica Neue For Number", @font-family-no-number',
        'code-family': 'Consolas, Menlo, Courier, monospace',
        'heading-color': '#515763',
        'text-color': '#515763',
        'text-color-secondary': 'fade(#000, 45%)',
        'heading-color-dark': 'fade(#fff, 100%)',
        'text-color-dark': 'fade(#fff,85%)',
        'text-color-secondary-dark': 'fade(#fff, 65%)',
        'font-size-base': '14px',
        'font-size-lg': '@font-size-base + 2px',
        'font-size-sm': '12px',
        'line-height-base': 1.5,
        'border-radius-base': '3px',
        'border-radius-sm': '2px',

        // Media queries breakpoints
        // Extra small screen / phone
        'screen-xs': '480px',
        'screen-xs-min': '@screen-xs',

        // Small screen / tablet
        'screen-sm': '576px',
        'screen-sm-min': '@screen-sm',

        // Medium screen / desktop
        'screen-md': '768px',
        'screen-md-min': '@screen-md',

        // Large screen / wide desktop
        'screen-lg': '1076px',
        'screen-lg-min': '@screen-lg',

        // Extra large screen / full hd
        'screen-xl': '1200px',
        'screen-xl-min': '@screen-xl',

        // Extra extra large screen / large descktop
        'screen-xxl': '1600px',
        'screen-xxl-min': '@screen-xxl',

        // Grid system
        'grid-columns': 24,
        'grid-gutter-width': '16px',

        // vertical paddings
        'padding-lg': '24px', // containers
        'padding-md': '16px', // small containers and buttons
        'padding-sm': '12px', // Form controls and items
        'padding-xs': '8px',  // small items

        // LINK
        'link-color': '@primary-color',
        'link-hover-color': '#12a2ba',
        'link-active-color': '#12a2ba',
        'link-decoration': 'none',
        'link-hover-decoration': 'none',

        // Buttons
        'btn-font-weight': 400,
        'btn-border-radius-base': '@border-radius-base',
        'btn-border-radius-sm': '@border-radius-base',

        'btn-primary-color': '#fff',
        'btn-primary-bg': '@primary-color',

        'btn-default-color': '@text-color',
        'btn-default-bg': '#fff',
        'btn-default-border': '@border-color-base',

        'btn-danger-color': '@error-color',
        'btn-danger-bg': '@background-color-base',
        'btn-danger-border': '@border-color-base',

        'btn-disable-color': '@disabled-color',
        'btn-disable-bg': '@disabled-bg',
        'btn-disable-border': '@border-color-base',

        'btn-padding-base': '0px',
        'btn-font-size-lg': '@font-size-base',
        'btn-font-size-sm': '@font-size-base',
        'btn-padding-lg': '@btn-padding-base',
        'btn-padding-sm': '@btn-padding-base',

        'btn-height-base': '48px',
        'btn-height-lg': '48px',
        'btn-height-sm': '48px',

        'btn-circle-size': '@btn-height-base',
        'btn-circle-size-lg': '@btn-height-lg',
        'btn-circle-size-sm': '@btn-height-sm',

        'btn-group-border': '@primary-5',

        // Checkbox
        'checkbox-size': '29px',
        'checkbox-color': '#f6f6f6',

        // Radio
        'radio-size': '16px',

        // Radio buttons
        'radio-button-bg': '@btn-default-bg',
        'radio-button-color': 'btn-default-color',

        // Input

        'input-height-base': '48px',
        'input-height-lg': '48px',
        'input-height-sm': '48px',
        'input-padding-horizontal': '22px',
        'input-padding-horizontal-base': '22px',
        'input-padding-horizontal-sm': '22px',
        'input-padding-horizontal-lg': '22px',
        'input-padding-vertical-base': '10px',
        'input-padding-vertical-sm': '10px',
        'input-padding-vertical-lg': '10px',
        'input-placeholder-color': '#999999',
        'input-color': '@text-color',
        'input-border-color': '#bfbfbf',
        'input-bg': '#fff',
        'input-addon-bg': '@background-color-light',
        'input-hover-border-color': '#666666',
        'input-disabled-bg': '@disabled-bg',

        // Table

        'table-header-bg': '#fff',
        'table-header-sort-bg': '@background-color-base',
        'table-row-hover-bg': '@primary-1',
        'table-selected-row-bg': '#fafafa',
        'table-padding-vertical': '16px',
        'table-padding-horizontal': '16px',
    }};