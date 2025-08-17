// This file is used to initialize the Netlify CMS
console.log('Netlify CMS loaded!');

// Initialize Netlify CMS
if (typeof window !== 'undefined') {
  window.CMS_MANUAL_INIT = true;
  const CMS = window.CMS;
  
  // Initialize the CMS object
  CMS.init();
  
  // Load the config from the config.yml file
  CMS.registerPreviewStyle('/admin/cms.css');
}
