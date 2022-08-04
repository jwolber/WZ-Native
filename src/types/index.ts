export interface MatchResult {
  status: string;
  data: Data;
}

export interface Data {
  summary: Summary;
  matches: Match[];
}

export interface Summary {
  all: All;
  'br_rebirth_playlist_wz340/fortkeep_res_duos': BrRebirthPlaylistWz340FortkeepResDuos;
  br_rebirth_rbrthquad: BrRebirthRbrthquad;
  br_brquads: BrBrquads;
  br_brduos: BrBrduos;
  'br_rebirth_playlist_wz340/fortkeep_res_quad': BrRebirthPlaylistWz340FortkeepResQuad;
}

export interface All {
  kills: number;
  objectiveTeamWiped: number;
  objectiveLastStandKill: number;
  wallBangs: number;
  avgLifeTime: number;
  score: number;
  headshots: number;
  assists: number;
  killsPerGame: number;
  scorePerMinute: number;
  distanceTraveled: number;
  deaths: number;
  objectiveBrLootChopperBoxOpen: number;
  objectiveMunitionsBoxTeammateUsed: number;
  objectiveBrDownEnemyCircle4: number;
  objectiveBrDownEnemyCircle3: number;
  objectiveBrDownEnemyCircle2: number;
  kdRatio: number;
  objectiveBrDownEnemyCircle1: number;
  objectiveBrMissionPickupTablet: number;
  objectiveReviver: number;
  objectiveBrKioskBuy: number;
  gulagDeaths: number;
  timePlayed: number;
  headshotPercentage: number;
  executions: number;
  objectiveEmpedPlayer: number;
  matchesPlayed: number;
  gulagKills: number;
  nearmisses: number;
  objectiveBrCacheOpen: number;
  damageDone: number;
  damageTaken: number;
}

export interface BrRebirthPlaylistWz340FortkeepResDuos {
  kills: number;
  objectiveTeamWiped: number;
  objectiveLastStandKill: number;
  wallBangs: number;
  avgLifeTime: number;
  score: number;
  headshots: number;
  assists: number;
  killsPerGame: number;
  scorePerMinute: number;
  distanceTraveled: number;
  deaths: number;
  objectiveMunitionsBoxTeammateUsed: number;
  objectiveBrDownEnemyCircle2: number;
  kdRatio: number;
  objectiveBrDownEnemyCircle1: number;
  objectiveBrMissionPickupTablet: number;
  objectiveReviver: number;
  scorePerGame: number;
  objectiveBrKioskBuy: number;
  gulagDeaths: number;
  timePlayed: number;
  headshotPercentage: number;
  executions: number;
  matchesPlayed: number;
  gulagKills: number;
  nearmisses: number;
  objectiveBrCacheOpen: number;
  damageDone: number;
  damageTaken: number;
}

export interface BrRebirthRbrthquad {
  kills: number;
  objectiveTeamWiped: number;
  objectiveLastStandKill: number;
  wallBangs: number;
  avgLifeTime: number;
  score: number;
  headshots: number;
  assists: number;
  killsPerGame: number;
  scorePerMinute: number;
  distanceTraveled: number;
  deaths: number;
  objectiveMunitionsBoxTeammateUsed: number;
  objectiveBrDownEnemyCircle4: number;
  objectiveBrDownEnemyCircle3: number;
  objectiveBrDownEnemyCircle2: number;
  kdRatio: number;
  objectiveBrDownEnemyCircle1: number;
  objectiveBrMissionPickupTablet: number;
  scorePerGame: number;
  objectiveBrKioskBuy: number;
  gulagDeaths: number;
  timePlayed: number;
  headshotPercentage: number;
  executions: number;
  matchesPlayed: number;
  gulagKills: number;
  nearmisses: number;
  objectiveBrCacheOpen: number;
  damageDone: number;
  damageTaken: number;
}

export interface BrBrquads {
  kills: number;
  objectiveLastStandKill: number;
  wallBangs: number;
  avgLifeTime: number;
  score: number;
  headshots: number;
  assists: number;
  killsPerGame: number;
  scorePerMinute: number;
  distanceTraveled: number;
  deaths: number;
  objectiveBrLootChopperBoxOpen: number;
  objectiveBrDownEnemyCircle2: number;
  kdRatio: number;
  objectiveBrDownEnemyCircle1: number;
  objectiveBrMissionPickupTablet: number;
  objectiveReviver: number;
  scorePerGame: number;
  objectiveBrKioskBuy: number;
  gulagDeaths: number;
  timePlayed: number;
  headshotPercentage: number;
  executions: number;
  matchesPlayed: number;
  gulagKills: number;
  nearmisses: number;
  objectiveBrCacheOpen: number;
  damageDone: number;
  damageTaken: number;
}

export interface BrBrduos {
  kills: number;
  objectiveTeamWiped: number;
  objectiveLastStandKill: number;
  wallBangs: number;
  avgLifeTime: number;
  score: number;
  headshots: number;
  assists: number;
  killsPerGame: number;
  scorePerMinute: number;
  distanceTraveled: number;
  deaths: number;
  kdRatio: number;
  objectiveBrDownEnemyCircle1: number;
  objectiveBrMissionPickupTablet: number;
  objectiveReviver: number;
  scorePerGame: number;
  objectiveBrKioskBuy: number;
  gulagDeaths: number;
  timePlayed: number;
  headshotPercentage: number;
  executions: number;
  objectiveEmpedPlayer: number;
  matchesPlayed: number;
  gulagKills: number;
  nearmisses: number;
  objectiveBrCacheOpen: number;
  damageDone: number;
  damageTaken: number;
}

export interface BrRebirthPlaylistWz340FortkeepResQuad {
  kills: number;
  objectiveLastStandKill: number;
  wallBangs: number;
  avgLifeTime: number;
  score: number;
  headshots: number;
  assists: number;
  killsPerGame: number;
  scorePerMinute: number;
  distanceTraveled: number;
  deaths: number;
  objectiveMunitionsBoxTeammateUsed: number;
  objectiveBrDownEnemyCircle2: number;
  kdRatio: number;
  objectiveBrDownEnemyCircle1: number;
  objectiveBrMissionPickupTablet: number;
  scorePerGame: number;
  gulagDeaths: number;
  timePlayed: number;
  headshotPercentage: number;
  executions: number;
  objectiveEmpedPlayer: number;
  matchesPlayed: number;
  gulagKills: number;
  nearmisses: number;
  objectiveBrCacheOpen: number;
  damageDone: number;
  damageTaken: number;
}

export interface Match {
  utcStartSeconds: number;
  utcEndSeconds: number;
  map: string;
  mode: string;
  matchID: string;
  duration: number;
  playlistName: any;
  version: number;
  gameType: string;
  playerCount: number;
  playerStats: PlayerStats;
  player: Player;
  teamCount: number;
  rankedTeams: any;
  draw: boolean;
  privateMatch: boolean;
}

export interface PlayerStats {
  kills: number;
  medalXp: number;
  objectiveLastStandKill?: number;
  matchXp: number;
  scoreXp: number;
  wallBangs: number;
  score: number;
  totalXp: number;
  headshots: number;
  assists: number;
  challengeXp: number;
  rank: number;
  scorePerMinute: number;
  distanceTraveled: number;
  teamSurvivalTime: number;
  deaths: number;
  kdRatio: number;
  objectiveBrDownEnemyCircle1?: number;
  objectiveBrMissionPickupTablet?: number;
  bonusXp: number;
  gulagDeaths: number;
  timePlayed: number;
  executions: number;
  gulagKills: number;
  nearmisses: number;
  objectiveBrCacheOpen?: number;
  percentTimeMoving: number;
  miscXp: number;
  longestStreak: number;
  teamPlacement: number;
  damageDone: number;
  damageTaken: number;
  objectiveBrLootChopperBoxOpen?: number;
  objectiveReviver?: number;
  objectiveBrKioskBuy?: number;
  objectiveBrDownEnemyCircle2?: number;
  objectiveTeamWiped?: number;
  objectiveMunitionsBoxTeammateUsed?: number;
  objectiveEmpedPlayer?: number;
  objectiveBrDownEnemyCircle4?: number;
  objectiveBrDownEnemyCircle3?: number;
}

export interface Player {
  team: string;
  rank: number;
  awards: Awards;
  username: string;
  uno: string;
  clantag: string;
  loadouts: Loadout[];
  brMissionStats: BrMissionStats;
  loadout: Loadout2[];
}

export interface Awards {
  mode_x_eliminate?: number;
  longshot?: number;
  low_health_kill?: number;
  headshot?: number;
  streak_5?: number;
  throwingknife_kill?: number;
  double?: number;
  one_shot_two_kills?: number;
  one_shot_kill?: number;
  revenge?: number;
  save_teammate?: number;
  avenger?: number;
  gun_butt?: number;
}

export interface Loadout {
  primaryWeapon: PrimaryWeapon;
  secondaryWeapon: SecondaryWeapon;
  perks: Perk[];
  extraPerks: ExtraPerk[];
  killstreaks: Killstreak[];
  tactical: Tactical;
  lethal: Lethal;
}

export interface PrimaryWeapon {
  name: string;
  label: any;
  imageLoot: any;
  imageIcon: any;
  variant: string;
  attachments: Attachment[];
}

export interface Attachment {
  name: string;
  label: any;
  image: any;
  category: any;
}

export interface SecondaryWeapon {
  name: string;
  label: any;
  imageLoot: any;
  imageIcon: any;
  variant: string;
  attachments: Attachment2[];
}

export interface Attachment2 {
  name: string;
  label: any;
  image: any;
  category: any;
}

export interface Perk {
  name: string;
  label: any;
  image: any;
  imageMainUi: any;
  imageProgression: any;
}

export interface ExtraPerk {
  name: string;
  label: any;
  image: any;
  imageMainUi: any;
  imageProgression: any;
}

export interface Killstreak {
  name: string;
  label: any;
}

export interface Tactical {
  name: string;
  label: any;
  image: any;
  imageLarge: any;
  progressionImage: any;
}

export interface Lethal {
  name: string;
  label: any;
  image: any;
  imageLarge: any;
  progressionImage: any;
}

export interface BrMissionStats {
  missionsComplete: number;
  totalMissionXpEarned: number;
  totalMissionWeaponXpEarned: number;
  missionStatsByType: MissionStatsByType;
}

export interface MissionStatsByType {
  assassination?: Assassination;
  timedrun?: Timedrun;
  supply?: Supply;
  scavenger?: Scavenger;
}

export interface Assassination {
  weaponXp: number;
  xp: number;
  count: number;
}

export interface Timedrun {
  weaponXp: number;
  xp: number;
  count: number;
}

export interface Supply {
  weaponXp: number;
  xp: number;
  count: number;
}

export interface Scavenger {
  weaponXp: number;
  xp: number;
  count: number;
}

export interface Loadout2 {
  primaryWeapon: PrimaryWeapon2;
  secondaryWeapon: SecondaryWeapon2;
  perks: Perk2[];
  extraPerks: ExtraPerk2[];
  killstreaks: Killstreak2[];
  tactical: Tactical2;
  lethal: Lethal2;
}

export interface PrimaryWeapon2 {
  name: string;
  label: any;
  imageLoot: any;
  imageIcon: any;
  variant: string;
  attachments: Attachment3[];
}

export interface Attachment3 {
  name: string;
  label: any;
  image: any;
  category: any;
}

export interface SecondaryWeapon2 {
  name: string;
  label: any;
  imageLoot: any;
  imageIcon: any;
  variant: string;
  attachments: Attachment4[];
}

export interface Attachment4 {
  name: string;
  label: any;
  image: any;
  category: any;
}

export interface Perk2 {
  name: string;
  label: any;
  image: any;
  imageMainUi: any;
  imageProgression: any;
}

export interface ExtraPerk2 {
  name: string;
  label: any;
  image: any;
  imageMainUi: any;
  imageProgression: any;
}

export interface Killstreak2 {
  name: string;
  label: any;
}

export interface Tactical2 {
  name: string;
  label: any;
  image: any;
  imageLarge: any;
  progressionImage: any;
}

export interface Lethal2 {
  name: string;
  label: any;
  image: any;
  imageLarge: any;
  progressionImage: any;
}
