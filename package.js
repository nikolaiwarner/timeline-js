Package.describe({
  summary: "Timeline package for meteor, basically just a copy of the timeline that nuknight build but in a mrt package"
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  api.add_files(['/js/storyjs-embed.js', '/js/timeline-min.js', '/js/timeline.css'], ['client']);
});

