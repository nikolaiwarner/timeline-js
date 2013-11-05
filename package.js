Package.describe({
  summary: "Timeline package for meteor"
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  api.add_files(['/js/storyjs-embed.js', '/js/timeline-min.js', '/js/timeline.css'], ['client']);
});

