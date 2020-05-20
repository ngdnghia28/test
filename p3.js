const priceUnit = 5;
function calculateParkingFee(timeIn) {
  return priceUnit * getTotalDays(timeIn, new Date());
}

function getTotalDays(fromTime, toTime) {
  if (fromTime >= toTime) {
    throw new Error(`${toTime} should be greater than ${fromTime}`);
  }

  const days = (toTime - fromTime) / (86400 * 1000);

  return Math.ceil(days);
}

module.exports = calculateParkingFee;
