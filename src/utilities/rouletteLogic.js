/*
 Contains probability logic for determining whether a trigger pull fires the bullet.
*/


const spinChamber = (maxShots) => {
  return Math.floor(Math.random() * maxShots);
};

const isBulletFired = (shotsTaken, bulletPosition) => {
  return shotsTaken === bulletPosition;
};

export { spinChamber, isBulletFired };