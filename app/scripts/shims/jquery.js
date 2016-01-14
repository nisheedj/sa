/*This file is required so that the main app bundle remains small
and the module jquery is still available for import*/
export default window.jQuery || {};