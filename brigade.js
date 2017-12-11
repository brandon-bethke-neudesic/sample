const { events, Job } = require("brigadier")

events.on("timu", () => {
  var job = new Job("do-nothing", "alpine:3.4")
  job.tasks = [
    "cd /src",
    "ls -al",
    "echo Hello",
    "echo Timu"
  ]

  job.run()
})
