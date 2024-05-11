import { Coach } from "./Coach";

export class GolfCoach implements Coach {
    getDailyWorkOut(): string {
    return "Practice Golf five hours Daily";
    }
}