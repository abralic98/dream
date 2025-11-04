/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginInput } from '../models/LoginInput';
import type { LoginOutput } from '../models/LoginOutput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LoginService {
    /**
     * Log in the user. The returned token must be used in all requests to authenticated endpoints in
     * the Authentication HTTP header with the "Bearer" prefix.
     *
     * e.g. <code>Authorization: Bearer 5f6f928c76b99aeb78d5f17d97336747898b3103</code>
     * @param requestBody
     * @returns LoginOutput
     * @throws ApiError
     */
    public static loginCreate(
        requestBody: LoginInput,
    ): CancelablePromise<LoginOutput> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/login/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
