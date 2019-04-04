/*
 * @package    theme_ncmboost
 * @copyright  2018 Nicolas Jourdain
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
/**
 * @module themencmboost
 */
/* jshint unused:false */
define(['jquery'], function($) {
  return {
    init: function() {
      $(document).ready(function() {

        var elStep1 = document.getElementById("step1");
        var elStep2Saml = document.getElementById("step2-saml");
        var elStep2Manual = document.getElementById("step2-manual");
        var elStep2Navitas = document.getElementById("step2-navitas");
        var elStepHelp = document.getElementById("step-help");
        var elStepRestart = document.getElementById("step-restart");

        var domains = [
          { domain: 'navitas.com', next: 'step2-saml' },
          { domain: 'acap.edu.au', next: 'step2-saml' },
          { domain: 'sydney.edu.au', next: 'step2-navitas' },
          { domain: 'ncps.edu.au', next: 'step2-saml' },
          { domain: 'sae.edu', next: 'step2-navitas' },
          { domain: 'saedubai.com', next: 'step2-navitas' },
          { domain: 'sae.com', next: 'step2-navitas' },
          { domain: 'navitasventures', next: 'step2-saml' },
          { domain: 'acbt.lk', next: 'step2-navitas' },
          { domain: 'curtincollege.edu.au', next: 'step2-navitas' },
          { domain: 'study.curtincollege.edu.au', next: 'step2-navitas' },
          { domain: 'sydney.curtin.edu.au', next: 'step2-navitas' },
          { domain: 'cbs.curtin.edu.au', next: 'step2-navitas' },
          { domain: 'curtin.edu.au', next: 'step2-navitas' },
          { domain: 'learning.cic.wa.edu.au', next: 'step2-navitas' },
          { domain: 'curtin.edu.sg', next: 'step2-navitas' },
          { domain: 'learning.curtin.edu.sg', next: 'step2-navitas' },
          { domain: 'deakin.edu.au', next: 'step2-navitas' },
          { domain: 'deakincollege.edu.au', next: 'step2-navitas' },
          { domain: 'learning.deakincollege.edu.au', next: 'step2-navitas' },
          { domain: 'pibt.wa.edu.au', next: 'step2-navitas' },
          { domain: 'edithcowancollege.edu.au', next: 'step2-navitas' },
          { domain: 'student.pibt.wa.edu.au', next: 'step2-navitas' },
          { domain: 'ecu.edu.au', next: 'step2-navitas' },
          { domain: 'our.ecu.edu.au', next: 'step2-navitas' },
          { domain: 'cdu.edu.au', next: 'step2-navitas' },
          { domain: 'westernsydney.edu.au', next: 'step2-navitas' },
          { domain: 'insearch.edu.au', next: 'step2-navitas' },
          { domain: 'eynesbury.sa.edu.au', next: 'step2-navitas' },
          { domain: 'griffithcollege.edu.au', next: 'step2-navitas' },
          { domain: 'staff.griffithcollege.edu.au', next: 'step2-navitas' },
          { domain: 'portal.griffithcollege.edu.au', next: 'step2-navitas' },
          { domain: 'staff.qibt.qld.edu.au', next: 'step2-navitas' },
          { domain: 'griffithuni.edu.au', next: 'step2-navitas' },
          { domain: 'griffith.edu.au', next: 'step2-navitas' },
          { domain: 'hawthornenglish.vic.edu.au', next: 'step2-navitas' },
          { domain: 'learning.latrobemelbourne.edu.au', next: 'step2-navitas' },
          { domain: 'latrobemelbourne.edu.au', next: 'step2-navitas' },
          { domain: 'latrobe.edu.au', next: 'step2-navitas' },
          { domain: 'sydney-campus.com', next: 'step2-navitas' },
          { domain: 'learning.auscampus.net', next: 'step2-navitas' },
          { domain: 'auscampus.net', next: 'step2-navitas' },
          // { domain: 'newcastle.edu.au', next: '?' },
          // { domain: 'nic.nsw.edu.au', next: '?' },
          { domain: 'unisa.edu.au ', next: 'step2-navitas' },
          { domain: 'sibt.nsw.edu.au', next: 'step2-navitas' },
          { domain: 'learning.sibt.nsw.edu.au', next: 'step2-navitas' },
          { domain: 'mq.edu.au', next: 'step2-navitas' },
          { domain: 'sydney.curtin.edu.au', next: 'step2-navitas' },
          { domain: 'city.mq.edu.au', next: 'step2-navitas' },
          { domain: 'canberra.edu.au', next: 'step2-navitas' },
          { domain: 'ucic.ac.nz', next: 'step2-navitas' },
          { domain: 'city.westernsydney.edu.au', next: 'step2-navitas' },
          { domain: 'westernsydney.edu.au', next: 'step2-navitas' },
          { domain: 'bcuic.bcu.ac.uk', next: 'step2-navitas' },
          { domain: 'learning.bcuic.navitas.com', next: 'step2-navitas' },
          { domain: 'learning.cric-uk.co.uk', next: 'step2-navitas' },
          { domain: 'cric.anglia.ac.uk', next: 'step2-navitas' },
          { domain: 'learning.eic.navitas.com', next: 'step2-navitas' },
          { domain: 'eic.napier.ac.uk', next: 'step2-navitas' },
          { domain: 'herts.ac.uk', next: 'step2-navitas' },
          { domain: 'learning.hibt-uk.co.uk', next: 'step2-navitas' },
          { domain: 'hic.navitas.com', next: 'step2-navitas' },
          { domain: 'westherts.ac.uk', next: 'step2-navitas' },
          { domain: 'richmond.ac.uk', next: 'step2-navitas' },
          { domain: 'port.ac.uk', next: 'step2-navitas' },
          { domain: 'icp.port.ac.uk', next: 'step2-navitas' },
          { domain: 'learning.icpl-uk.co.uk', next: 'step2-navitas' },
          { domain: 'myport.ac.uk', next: 'step2-navitas' },
          { domain: 'icws.swansea.ac.uk', next: 'step2-navitas' },
          { domain: 'swansea.ac.uk', next: 'step2-navitas' },
          { domain: 'swan.ac.uk', next: 'step2-navitas' },
          { domain: 'ic.rgu.ac.uk', next: 'step2-navitas' },
          { domain: 'learning.icrgu.navitas.com', next: 'step2-navitas' },
          { domain: 'learning.libt.navitas.com', next: 'step2-navitas' },
          { domain: 'lbic.brunel.ac.uk', next: 'step2-navitas' },
          { domain: 'learning.pdic-uk.co.uk', next: 'step2-navitas' },
          { domain: 'puic.plymouth.ac.uk', next: 'step2-navitas' },
          { domain: 'northampton.ac.uk', next: 'step2-navitas' },
          { domain: 'fauglobal.com', next: 'step2-manual' },
          { domain: 'fau.edu', next: 'step2-manual' },
          { domain: 'fraseric.ca', next: 'step2-saml' },
          { domain: 'learning.fraseric.ca', next: 'step2-saml' },
          { domain: 'icmantioba.ca', next: 'step2-saml' },
          { domain: 'learning.icmanitoba.ca', next: 'step2-saml' },
          { domain: 'uidahoglobal.com', next: 'step2-manual' },
          { domain: 'uidaho.edu', next: 'step2-manual' },
          { domain: 'rbc.edu', next: 'step2-manual' },
          { domain: 'rbcglobal.com', next: 'step2-manual' },
          { domain: 'umb.edu', next: 'step2-manual' },
          { domain: 'internationalumb.com', next: 'step2-manual' },
          { domain: 'umassdglobal.com', next: 'step2-manual' },
          { domain: 'uml.edu', next: 'step2-uml.edu' },
          { domain: 'unhgssp.com', next: 'step2-manual' },
          { domain: 'unh.edu', next: 'step2-manual' },
          { domain: 'vcugssp.com', next: 'step2-manual' },
          // { domain: 'example.com', next:'step-help' },
        ];

        $('button#submit-step1').click(
          function() {
            window.console.log('Ref', $('#username1'));
            window.console.log('Value', $("#username1").val());

            var email = $("#username1").val();
            // var name = email.substring(0, email.lastIndexOf("@"));
            var domain = email.substring(email.lastIndexOf("@") + 1);

            // Determine what Auth to use based on the domain.
            var nextstep = 'step-help';
            for (var i = 0; i < domains.length; i++) {
              if (domains[i].domain === domain) {
                nextstep = domains[i].next;
              }
            }

            window.console.log('nextstep', nextstep);

            // Hide Step 1.
            elStep1.style.display = "none";

            // Show Step2 - SAML.
            if (nextstep === 'step2-saml') {
              elStep2Saml.style.display = "block";
            }

            // Show Step2 - Manual.
            if (nextstep === 'step2-manual') {
              elStep2Manual.style.display = "block";
            }

            // Show Step2 - Navitas.
            if (nextstep === 'step2-navitas') {
              elStep2Navitas.style.display = "block";
            }

            // Show Step2 - Help.
            if (nextstep === 'step-help') {
              elStepHelp.style.display = "block";
            }

            elStepRestart.style.display = "block";
          });

        // Click on NAVITAS Login.
        $('button#btn-navitas-section').click(
          function() {
            elStep2Saml.style.display = "block";
            elStep2Manual.style.display = "none";
            elStep2Navitas.style.display = 'none';
            elStepRestart.style.display = "block";
            elStepHelp.style.display = "none";
            elStep1.style.display = "none";
          }
        );
        // Click on MANUAL Login.
        $('button#btn-manual-section').click(
          function() {
            elStep2Saml.style.display = "none";
            elStep2Manual.style.display = "block";
            elStep2Navitas.style.display = "none";
            elStepRestart.style.display = "block";
            elStepHelp.style.display = "none";
            elStep1.style.display = "none";
          }
        );
        // Click on Reset button.
        $('button#btn-login-reset').click(
          function() {
            elStep2Saml.style.display = "none";
            elStep2Manual.style.display = "none";
            elStep2Navitas.style.display = "none";
            elStepRestart.style.display = "block";
            elStepHelp.style.display = "none";
            elStep1.style.display = "block";
          }
        );

        // Button for HELP Section.
        $('button#btn-help-section').click(
          function() {
            elStep2Saml.style.display = "none";
            elStep2Manual.style.display = "none";
            elStep2Navitas.style.display = "none";
            elStepRestart.style.display = "block";
            elStepHelp.style.display = "block";
            elStep1.style.display = "none";
          }
        );

        // Button to submit fore-navitas section.
        $('button#submit-step2-navitas').click(
          function() {
            elStep2Saml.style.display = "block";
            elStep2Manual.style.display = "none";
            elStep2Navitas.style.display = "none";
            elStepRestart.style.display = "block";
            elStepHelp.style.display = "none";
            elStep1.style.display = "none";
          }
        );
        // Put whatever you like here. $ is available
        // to you as normal.
      });
    }
  };
});
