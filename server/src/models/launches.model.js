const launches = new Map();

let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: "",
  rocket: "",
  launchDate: new Date(),
  target: "",
  customer: [],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunches(launch) {
  latestFlightNumber++;
  launches.set(
    launch.flightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customer: ["ZTM", "NASA"],
      upcoming: true,
      success: true,
    })
  );
}

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}

function abortLaunchWithId(launchId) {
  return launches.delete(launchId);
}
module.exports = {
  getAllLaunches,
  addNewLaunches,
  existsLaunchWithId,
  abortLaunchWithId,
};
