/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedUserList } from '../models/PaginatedUserList';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedUserList
     * @throws ApiError
     */
    public static usersList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedUserList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this user.
     * @returns User
     * @throws ApiError
     */
    public static usersRetrieve(
        id: number,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
