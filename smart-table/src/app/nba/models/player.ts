import { ITeam } from "./team";

export interface IPlayer {
    id: number;
    first_name:string;
    last_name: any;
    height_feet: any;
    height_inches: any;
    position: string;
    weight: any;
    team: ITeam;
}