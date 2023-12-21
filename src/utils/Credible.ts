export const credibleConfig = {
 supervision: {
   style_component: '#supervision-component {padding-top: 40px} #e-supervision-button {background: #bbbbbb ; border: 1px solid black; border-radius: 4px; color: white; cursor: pointer}',
   main_screen_selector: 'body',
   menu_element_selector: 'td:has(ul#tab_nav)',
   button_to_clone_selector: 'li.tabs',
   main_screen_selector_context: 'frame[name=\'main\']',
   menu_element_selector_context: 'frame[name=\'banner\']',
 },
 feature_flags: {
   use_note_discrepancy: true,
 },
 hide_launcher: true,
 progress_note: {
   page_id: '',
   report_fields: {},
   submit_button: 'input[name=\'Complete\']',
   parent_selector: ' ',
 },
 progress_notes: [
   {
     type: 'OpenheartsReport',
     context: 'div.toolHead:has(h1:contains(\'Counseling/Therapy Note.tsx\'))',
     category: 'notes',
     report_fields: {},
     submit_button: 'input[name=\'Complete\']',
     parent_selector: 'div.toolHead:has(h1:contains(\'Counseling/Therapy Note.tsx\'))',
   },
 ],
 note_types_regex: '.*',
 session_analytics: {
   parent_selector: 'div.toolHead:has(h1)',
 },
};
