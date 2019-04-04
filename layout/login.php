<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Theme TEN - Layout file.
 *
 * @package   theme_ten
 * @copyright 2018 Nicolas Jourdain
 * @copyright based on code from theme_boost by Damyon Wiese
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$bodyattributes = $OUTPUT->body_attributes();

$templatecontext = [
    'sitename' => format_string($SITE->shortname, true, ['context' => context_course::instance(SITEID), "escape" => false]),
    'output' => $OUTPUT,
    'bodyattributes' => $bodyattributes
];


echo $OUTPUT->render_from_template('theme_ten/login', $templatecontext);
$PAGE->requires->js_call_amd('theme_ten/ncmlogin', 'init');
// MOFIFICATION START.
// Include own layout file for the footnote region.
// The theme_boost/login template already renders the standard footer.
// The footer blocks and the image area are currently not shown on the login page.
// Here, we will add the footnote only.
// Get footnote config.
$footnote = get_config('theme_ncmboost', 'footnote');
if (!empty($footnote)) {
    // Add footnote layout file.
    require_once(__DIR__ . '/../ncmboost/includes/footnote.php');
}
// MODIFICATION END.
