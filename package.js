Package.describe({
  summary: "Timeline package for meteor"
});

Package.on_use(function (api, where) {
  api.add_files('/js/storyjs-embed.js', ['client']);
  api.add_files('/js/timeline-min.js', ['client']);
  api.add_files('/js/timeline.css', ['client']);
});

