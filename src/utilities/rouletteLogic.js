/*
spinChamber
Returns a random bullet position in a 6-slot revolver
*/

function spinChamber() {
  return Math.floor(Math.random() * 6) + 1;
}

/*
isBulletFired
Checks if the current shot fires the bullet
*/

function isBulletFired(shotNumber, bulletPosition) {
  return shotNumber === bulletPosition;
}

export { spinChamber, isBulletFired };

