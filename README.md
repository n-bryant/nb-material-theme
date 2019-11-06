# nb-material-theme

An extendable Material-UI theme

## Installation

`yarn add @n_bryant/nb-material-theme`

## Usage

```
import { createMuiTheme } from '@n_bryant/nb-material-theme';

const theme = createMuiTheme();
```

## Configuration

The default theme properties can be overridden by passing the overrides in the config to a `createMuiTheme` function call:

```
const theme = createMuiTheme({ layout: { header: { height: "50px" }}});
```

Theme spec is based on [Material UI theme](https://material-ui.com/customization/themes/)
