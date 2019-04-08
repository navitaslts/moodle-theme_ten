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
 * @package   theme_ten
 * @copyright 2019 Nicolas Jourdain
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

// This line protects the file from being accessed by a URL directly.
defined('MOODLE_INTERNAL') || die();

// This is used for performance, we don't need to know about these settings on every page in Moodle, only when
// we are looking at the admin settings pages.
if ($ADMIN->fulltree) {

    // Boost provides a nice setting page which splits settings onto separate tabs. We want to use it here.
    $settings = new theme_boost_admin_settingspage_tabs('themesettingten', get_string('configtitle', 'theme_ten'));

    // Each page is a tab - the first is the "General" tab.
    $page = new admin_settingpage('theme_ten_general', get_string('generalsettings', 'theme_ten'));

    // Login Page Type Heading.
    $name = 'theme_ten/loginpagetypeheading';
    $title = get_string('loginpagetypeheading', 'theme_ten', null, true);
    $description = get_string('loginpagetype_desc', 'theme_ten', null, true);
    $setting = new admin_setting_heading($name, $title, $description);
    $page->add($setting);

    $options = array(
        'CORE' => get_string('core', 'theme_ten'),
        'CLASSIC' => get_string('classic', 'theme_ten'),
        'SAMLAUTHFIRST' => get_string('samlauthfirst', 'theme_ten'),
        'TEN' => get_string('tenlogin', 'theme_ten'),
    );

    $setting = new admin_setting_configselect('theme_ten/loginpagetype',
        get_string('loginpagetype', 'theme_ten'),
        null,
        'C',
        $options
    );
    $page->add($setting);

    // Must add the page after defining all the settings!
    $settings->add($page);
}
