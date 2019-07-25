declare namespace getLogName {
	/**
	 * Options to pass to the main function
	 */
	export interface Options {
		/**
		 * Prefix of the log file name.
		 *
		 * @default 'app'
		 */
		basename?: string,
		/**
		 * Delimiter used to separate each date "component".
		 *
		 * @default '-''
		 */
		dateDelimiter?: string,
		/**
		 * Log file extension (including the first '.').
		 *
		 * @default '.log'
		 */
		extension?: string,
		/**
		 * In the date section of the file name, include the time segments (hours, minutes and seconds).
		 *
		 * @default true
		 */
		includeTime?: boolean,
		/**
		 * Delimiter used between 'basename' and the date section.
		 *
		 * @default '.'
		 */
		nameDelimiter?: string
	}

}

/**
 * Get a log file name. This function throws if the date argument cannot be parsed into a date.
 *
 * This function does not create the file for you!
 * @param date Optional date to use in the log name. Defaults to `now`.
 * @param options Optional parameters to configure this function's behaviour.
 */
declare function getLogName(date?: Date | number, options?: getLogName.Options): string;

export = getLogName;
