function aveSpd(upTime, upSpd, downSpd) {
  // Convert inputs to numbers
  upTime = Number(upTime);
  upSpd = Number(upSpd);
  downSpd = Number(downSpd);

  // Time uphill in hours
  const upTimeHr = upTime / 60;

  // Distance uphill (same as downhill)
  const distance = upSpd * upTimeHr;

  // Time downhill in hours
  const downTimeHr = distance / downSpd;

  // Total distance and total time
  const totalDistance = distance * 2;
  const totalTime = upTimeHr + downTimeHr;

  // Average speed
  return totalDistance / totalTime;
}

// Do not change the code below
const upTime = prompt("Enter upTime: ");
const downTime = prompt("Enter downTime: ");
const downSpd = prompt("Enter downSpd: ");

alert(aveSpd(upTime, downTime, downSpd));
