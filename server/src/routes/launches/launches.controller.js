const {
  getAllLaunches,
  addNewLaunches,
  existsLaunchWithId,
  abortLaunchWithId,
} = require("../../models/launches.model");
function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunches(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({ error: "Missing Required launch property" });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({ error: "Invalid Launch Date" });
  }
  addNewLaunches(launch);
  return res.status(201).json();
}

function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);
  if (!existsLaunchWithId(launchId)) {
    return res.status(404).json({ error: "Launch not found" });
  } else {
    const aborted = abortLaunchWithId(launchId);
    return res.status(200).json(aborted);
  }
}
module.exports = { httpGetAllLaunches, httpAddNewLaunches, httpAbortLaunch };
