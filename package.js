Package.describe({
  summary: "Timeline package for meteor, basically just a copy of the timeline that nuknight build but in a mrt package"
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  api.add_files(['js/storyjs-embed.js',
        'js/timeline.js',
        'js/timeline-min.js',
        'css/timeline.css',
        'css/loading.gif',
        'css/timeline.png',
        'css/timeline@2x.png'], ['client']);
});

