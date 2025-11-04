/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Game } from '../models/Game';
import type { MakeMove } from '../models/MakeMove';
import type { PaginatedGameList } from '../models/PaginatedGameList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GamesService {
    /**
     * @param after
     * @param before
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param status
     * @returns PaginatedGameList
     * @throws ApiError
     */
    public static gamesList(
        after?: string,
        before?: string,
        limit?: number,
        offset?: number,
        status?: 'finished' | 'open' | 'progress',
    ): CancelablePromise<PaginatedGameList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/',
            query: {
                'after': after,
                'before': before,
                'limit': limit,
                'offset': offset,
                'status': status,
            },
        });
    }
    /**
     * Create a new open game with the current user as the first player.
     * @returns Game
     * @throws ApiError
     */
    public static gamesCreate(): CancelablePromise<Game> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/games/',
        });
    }
    /**
     * @param id A unique integer value identifying this game.
     * @returns Game
     * @throws ApiError
     */
    public static gamesRetrieve(
        id: number,
    ): CancelablePromise<Game> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Join an open game as the second player.
     * @param id A unique integer value identifying this game.
     * @param requestBody
     * @returns Game
     * @throws ApiError
     */
    public static gamesJoinCreate(
        id: number,
        requestBody: Game,
    ): CancelablePromise<Game> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/games/{id}/join/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Make a move. Row and column indices are zero-based.
     * @param id A unique integer value identifying this game.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public static gamesMoveCreate(
        id: number,
        requestBody: MakeMove,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/games/{id}/move/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
