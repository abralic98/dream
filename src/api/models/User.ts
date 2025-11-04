/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type User = {
    readonly id: number;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     */
    readonly username: string;
    game_count: number;
    win_rate: number;
};

