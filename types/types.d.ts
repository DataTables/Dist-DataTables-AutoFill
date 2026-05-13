import DataTables__default, { ColumnSelector, Api, ApiCellMethods, CellIdxWithVisible, Dom, Context } from 'datatables.net';
export * from 'datatables.net';
export { default } from 'datatables.net';

interface Classes {
    btn: string;
    close: string;
    closeable: string;
}
interface Defaults {
    /** Ask user what they want to do, even for a single option */
    alwaysAsk: boolean;
    /** Show a "Close" button in the list of options */
    closeButton: boolean;
    /** What will trigger a focus */
    focus: 'click' | 'focus' | 'hover' | null;
    /** Columns to provide auto fill for */
    columns: ColumnSelector;
    /** Enable AutoFill on load */
    enable: boolean;
    /** Update the cells after a drag */
    update: boolean;
    /** Editor instance for automatic submission */
    editor: any;
    /** Enable vertical fill */
    vertical: boolean;
    /** Enable horizontal fill */
    horizontal: boolean;
}
interface Action {
    available(dt: Api, cells: SelectedCells[][]): boolean;
    option(dt: Api, cells: SelectedCells[][]): string;
    execute(dt: Api, cells: SelectedCells[][], node: Dom | null): void | false;
}
interface SelectedCells {
    cell: ApiCellMethods<any>;
    data: any;
    index: CellIdxWithVisible;
    label: string;
    set?: any;
}

/*! AutoFill for DataTables
 * Copyright (c) SpryMedia Ltd - datatables.net/license
 */

declare class AutoFill {
    /**
     * AutoFill actions. The options here determine how AutoFill will fill the
     * data in the table when the user has selected a range of cells. Please see
     * the documentation on the DataTables site for full details on how to
     * create plug- ins.
     */
    static actions: Record<string, Action>;
    /** Class names used by AutoFill for customisation */
    static classes: Classes;
    /** Defaults */
    static defaults: Defaults;
    /** AutoFill version */
    static version: string;
    enabled(): boolean;
    enable(flag?: boolean): this;
    disable(): this;
    private c;
    private dom;
    private s;
    constructor(dt: Api | Context, opts?: Partial<Defaults>);
    /**
     * Initialise the RowReorder instance
     */
    private _init;
    /**
     * Display the AutoFill drag handle by appending it to a table cell. This is
     * the opposite of the _detach method.
     *
     * @param node Cell to insert the handle into
     */
    private _attach;
    /**
     * Determine can the fill type should be. This can be automatic, or ask the
     * end user.
     *
     * @param cells Information about the selected cells from the key up
     *   function
     */
    private _actionSelector;
    /**
     * Remove the AutoFill handle from the document
     */
    private _detach;
    /**
     * Draw the selection outline by calculating the range between the start
     * and end cells, then placing the highlighting elements to draw a rectangle
     *
     * @param target End cell
     * @param e Originating event
     * @private
     */
    private _drawSelection;
    /**
     * Use the Editor API to perform an update based on the new data for the
     * cells
     *
     * @param cells Information about the selected cells from the key up
     *   function
     */
    private _editor;
    /**
     * Emit an event on the DataTable for listeners
     *
     * @param name Event name
     * @param args Event arguments
     */
    private _emitEvent;
    /**
     * Attach suitable listeners (based on the configuration) that will attach
     * and detach the AutoFill handle in the document.
     */
    private _focusListener;
    /**
     * Clean up the event listeners
     */
    private _focusListenerRemove;
    /**
     * Get the position of a node, relative to another, including any scrolling
     * offsets.
     *
     * @param node Node to get the position of
     * @param targetHost Node to use as the parent
     * @return Offset calculation
     */
    private _getPosition;
    /**
     * Start mouse drag - selects the start cell
     *
     * @param e Mouse down event
     */
    private _mousedown;
    /**
     * Mouse drag - selects the end cell and update the selection display for
     * the end user
     *
     * @param e Mouse move event
     */
    private _mousemove;
    /**
     * End mouse drag - perform the update actions
     *
     * @param e Mouse up event
     * @private
     */
    private _mouseup;
    /**
     * Create an array with a range of numbers defined by the start and end
     * parameters passed in (inclusive!).
     *
     * @param start Start
     * @param end End
     */
    private _range;
    /**
     * Move the window and DataTables scrolling during a drag to scroll new
     * content into view. This is done by proximity to the edge of the scrolling
     * container of the mouse - for example near the top edge of the window
     * should scroll up. This is a little complicated as there are two elements
     * that can be scrolled - the window and the DataTables scrolling view port
     * (if scrollX and / or scrollY is enabled).
     *
     * @param e Mouse move event object
     */
    private _shiftScroll;
    /**
     * Update the DataTable after the user has selected what they want to do
     *
     * @param result Return from the `execute` method - can be false internally
     *   to do nothing. This is not documented for plug-ins and is used only by
     *   the cancel option.
     * @param cells Information about the selected cells from the key up
     *   function, augmented with the set values
     */
    private _update;
}

// Type definitions for DataTables AutoFill



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * DataTables' types integration
 */
declare module 'datatables.net' {
	interface Config {
		/**
		 * autoFill extension options
		 */
		autoFill?: boolean | Partial<Defaults>;
	}

	interface ConfigLanguage {
		/**
		 * AutoFill language options
		 */
		autoFill?: ConfigAutoFillLanguage;
	}

	interface Api<T> {
		/**
		 * AutoFill methods container
		 *
		 * @returns Api for chaining with the additional autoFill methods
		 */
		autoFill: ApiAutoFill<T>;
	}

	interface DataTablesStatic {
		/**
		 * AutoFill class
		 */
		AutoFill: AutoFill;
	}
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Options
 */

interface ConfigAutoFillLanguage {
	/**
	 * Multi-fill selector button text
	 */
	button?: string;

	/**
	 * Multi-fill selector cancel option message
	 */
	cancel?: string;

	/**
	 * Multi-fill selector message for the _full fill_ fill type
	 */
	fill?: string;

	/**
	 * Multi-fill selector message for the _horizontal fill_ fill type
	 */
	fillHorizontal?: string;

	/**
	 * Multi-fill selector message for the _vertical fill_ fill type
	 */
	fillVertical?: string;

	/**
	 * Multi-fill selector message for the _increment_ fill type
	 */
	increment?: string;

	/**
	 * Information message shown at the top of the fill type selector
	 */
	info?: string;
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * API
 */

interface ApiAutoFill<T> {
	(): ApiAutoFillMethods<T>;
}

interface ApiAutoFillMethods<T> extends Api<T> {
	/**
	 * Disable AutoFill. Please note that this disallows future interactions with the table (until re-enabled).
	 *
	 * @returns DataTables Api instance
	 */
	disable(): Api<T>;

	/**
	 * Enable end user and API modification of the focused cells in the DataTable. Differing levels of enablement are available via the optional parameter.
	 *
	 * @param flag can be true or false to signify whether to enable or disable
	 * @returns DataTables Api instance
	 */
	enable(flag?: string | boolean): Api<T>;

	/**
	 * This method will return a boolean value indicating if AutoFill is enabled or not on the selected table.
	 *
	 * @returns boolean signifying if autofill is enables
	 */
	enabled(): boolean;
}
