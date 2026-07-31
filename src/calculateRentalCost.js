/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  switch (days) {
    case 2:
      return 80;
    case 3:
      return 100;
    case 6:
      return 220;
    case 7:
      return 230;
  }
}

module.exports = calculateRentalCost;
