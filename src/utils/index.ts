import wzMappings from '../assets/game-modes.json';
import perkMappings from '../assets/perks.json';
import weaponMappings from '../assets/weapon-ids.json';
import equipMappings from '../assets/equipment.json';

export const cleanGameMode = (mode: string): string => {
  //@ts-ignore
  const foundMode: string = wzMappings.modes[mode];
  if (!foundMode) {
    return mode;
  }
  return foundMode;
};

export const cleanPerk = (perk: string): string => {
  //@ts-ignore
  const foundPerk: string = perkMappings[perk];
  if (!foundPerk) {
    return perk;
  }
  return foundPerk;
};

export const cleanWeapon = (weapon: string): string => {
  //@ts-ignore
  const foundWeapon: string = weaponMappings[weapon];
  if (!foundWeapon) {
    return weapon;
  }
  return foundWeapon.replace('_', ' - ');
};

export const cleanEquip = (equipment: string): string => {
  //@ts-ignore
  const foundEquip: string = equipMappings[equipment];
  if (!foundEquip) {
    return equipment;
  }
  return foundEquip;
};
