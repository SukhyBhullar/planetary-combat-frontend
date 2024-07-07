var pbjs = require("protobufjs-cli/pbjs"); // or require("protobufjs-cli").pbjs / .pbts
var pbts = require("protobufjs-cli/pbts"); // or require("protobufjs-cli").pbjs / .pbts

pbjs.main(
  [
    "--target",
    "static-module",
    "-w",
    "commonjs",
    "-o",
    "proto/compiled.js",
    "proto/game.proto",
  ],
  function (err, output) {
    if (err) throw err;
    // do something with output
    //pbjs -t static-module -w commonjs -o compiled.js file1.proto file2.proto
    //pbts -o compiled.d.ts compiled.js
    pbts.main(
      ["-o", "proto/compiled.d.ts", "proto/compiled.js"],
      function (err, output) {}
    );
  }
);
