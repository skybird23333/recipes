/* tslint:disable */
/* eslint-disable */
/**
 * Django Recipes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ShoppingListSupermarketCategoryToSupermarketInner } from './ShoppingListSupermarketCategoryToSupermarketInner';
import {
    ShoppingListSupermarketCategoryToSupermarketInnerFromJSON,
    ShoppingListSupermarketCategoryToSupermarketInnerFromJSONTyped,
    ShoppingListSupermarketCategoryToSupermarketInnerToJSON,
} from './ShoppingListSupermarketCategoryToSupermarketInner';

/**
 * 
 * @export
 * @interface Supermarket
 */
export interface Supermarket {
    /**
     * 
     * @type {number}
     * @memberof Supermarket
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof Supermarket
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Supermarket
     */
    description?: string | null;
    /**
     * 
     * @type {Array<ShoppingListSupermarketCategoryToSupermarketInner>}
     * @memberof Supermarket
     */
    readonly categoryToSupermarket?: Array<ShoppingListSupermarketCategoryToSupermarketInner>;
    /**
     * 
     * @type {string}
     * @memberof Supermarket
     */
    openDataSlug?: string | null;
}

/**
 * Check if a given object implements the Supermarket interface.
 */
export function instanceOfSupermarket(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function SupermarketFromJSON(json: any): Supermarket {
    return SupermarketFromJSONTyped(json, false);
}

export function SupermarketFromJSONTyped(json: any, ignoreDiscriminator: boolean): Supermarket {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'categoryToSupermarket': !exists(json, 'category_to_supermarket') ? undefined : ((json['category_to_supermarket'] as Array<any>).map(ShoppingListSupermarketCategoryToSupermarketInnerFromJSON)),
        'openDataSlug': !exists(json, 'open_data_slug') ? undefined : json['open_data_slug'],
    };
}

export function SupermarketToJSON(value?: Supermarket | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'open_data_slug': value.openDataSlug,
    };
}

