# AutoFill for DataTables 

This is the distribution package for the [AutoFill extension](https://datatables.net/extensions/autofill) for [DataTables](https://datatables.net/). Only the core software for this library is contained in this package - to be correctly styled, a styling package for AutoFill must also be included. Please see the [npm installation documentation on the DataTables site](https://datatables.net/manual/installation#Node.js-/-NPM) for full details.

AutoFill adds an Excel like data fill option to DataTables, allowing click and drag over cells, filling in information and incrementing numbers as needed.


## Installation

### Browser

To use DataTables with a simple `<script>` tag, rather than using this package, it is recommended that you use the [DataTables download builder](//datatables.net/download) which can create CDN or locally hosted packages for you, will all dependencies satisfied.

### npm

For installation via npm, yarn and other similar package managers, install this package with your package manager - e.g.:

```
npm install datatables.net
npm install datatables.net-autofill
```

Then, to load and initialise DataTables and AutoFill in your code use:

```
import DataTable from 'datatables.net';
import 'datatables.net-autofill'

new DataTable('#myTable', {
    // initialisation options
});
```


## Documentation

Full documentation and examples for AutoFill can be found [on the DataTables website](https://datatables.net/extensions/autofill).

## Bug / Support

Support for DataTables is available through the [DataTables forums](//datatables.net/forums) and [commercial support options](//datatables.net/support) are available.

### Contributing

If you are thinking of contributing code to DataTables, first of all, thank you! All fixes, patches and enhancements to DataTables are very warmly welcomed. This repository is a distribution repo, so patches and issues sent to this repo will not be accepted. Instead, please direct pull requests to the [DataTables/AutoFill](http://github.com/DataTables/AutoFill). For issues / bugs, please direct your questions to the [DataTables forums](//datatables.net/forums).


## License

This software is released under the [MIT license](//datatables.net/license). You are free to use, modify and distribute this software, but all copyright information must remain.
