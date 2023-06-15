import { TNTGamesStats } from "../services/hypixel/tntgames";

export interface Minecraft {
  mojangCacheUntil: Date;
  hypixelCacheUntil: Date;
  uuid: string;
  username: string;
  skin: { url: string; id: string };
  cape: { url: string; id: string };
  newPackageRank?: string; // ? because hypixel api is weird
  monthlyPackageRank?: string; // ? because hypixel api is weird
  rankPlusColor?: string; // ? because hypixel api is weird
  monthlyRankColor?: string; // ? because hypixel api is weird
  rank?: string; // ? because hypixel api is weird
  prefix?: string; // ? because hypixel api is weird
  firstLogin?: number; // ? because hypixel api is weird
  lastLogin?: number; // ? because hypixel api is weird
  achievementPoints?: number; // ? because hypixel api is weird
  totalRewards?: number; // ? because hypixel api is weird
  totalDailyRewards?: number; // ? because hypixel api is weird
  rewardStreak?: number; // ? because hypixel api is weird
  rewardScore?: number; // ? because hypixel api is weird
  level: number;
  expToNextLevel: number;
  levelExpFloor: number;
  levelProgress: number;
  games: {
    tntGames?: TNTGamesStats;
  };
}