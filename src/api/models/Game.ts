/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReducedUser } from './ReducedUser';
import type { StatusEnum } from './StatusEnum';
export type Game = {
    readonly id: number;
    readonly board: Array<Array<number>>;
    winner: ReducedUser;
    first_player: ReducedUser;
    second_player: ReducedUser;
    readonly created: string;
    readonly status: StatusEnum;
};

