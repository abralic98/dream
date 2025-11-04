/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegisterInput } from '../models/RegisterInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RegisterService {
    /**
     * Create a new user with the given username and password.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public static registerCreate(
        requestBody: RegisterInput,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/register/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
