const modules = await Promise.all([
    import('./components/contents.js'),
    import('./components/faqs.js'),
    import('./components/tables.js')
]);

modules.forEach(m => m.default());
