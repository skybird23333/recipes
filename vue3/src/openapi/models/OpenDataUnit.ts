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
import type { OpenDataUnitVersion } from './OpenDataUnitVersion';
import {
    OpenDataUnitVersionFromJSON,
    OpenDataUnitVersionFromJSONTyped,
    OpenDataUnitVersionToJSON,
} from './OpenDataUnitVersion';

/**
 * 
 * @export
 * @interface OpenDataUnit
 */
export interface OpenDataUnit {
    /**
     * 
     * @type {number}
     * @memberof OpenDataUnit
     */
    readonly id?: number;
    /**
     * 
     * @type {OpenDataUnitVersion}
     * @memberof OpenDataUnit
     */
    version: OpenDataUnitVersion;
    /**
     * 
     * @type {string}
     * @memberof OpenDataUnit
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataUnit
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataUnit
     */
    pluralName?: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataUnit
     */
    baseUnit?: OpenDataUnitBaseUnitEnum;
    /**
     * 
     * @type {string}
     * @memberof OpenDataUnit
     */
    type: OpenDataUnitTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof OpenDataUnit
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataUnit
     */
    readonly createdBy?: string;
}


/**
 * @export
 */
export const OpenDataUnitBaseUnitEnum = {
    G: 'G',
    Kg: 'KG',
    Ml: 'ML',
    L: 'L',
    Ounce: 'OUNCE',
    Pound: 'POUND',
    FluidOunce: 'FLUID_OUNCE',
    Tsp: 'TSP',
    Tbsp: 'TBSP',
    Cup: 'CUP',
    Pint: 'PINT',
    Quart: 'QUART',
    Gallon: 'GALLON',
    ImperialFluidOunce: 'IMPERIAL_FLUID_OUNCE',
    ImperialPint: 'IMPERIAL_PINT',
    ImperialQuart: 'IMPERIAL_QUART',
    ImperialGallon: 'IMPERIAL_GALLON'
} as const;
export type OpenDataUnitBaseUnitEnum = typeof OpenDataUnitBaseUnitEnum[keyof typeof OpenDataUnitBaseUnitEnum];

/**
 * @export
 */
export const OpenDataUnitTypeEnum = {
    Weight: 'WEIGHT',
    Volume: 'VOLUME',
    Other: 'OTHER'
} as const;
export type OpenDataUnitTypeEnum = typeof OpenDataUnitTypeEnum[keyof typeof OpenDataUnitTypeEnum];


/**
 * Check if a given object implements the OpenDataUnit interface.
 */
export function instanceOfOpenDataUnit(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "slug" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function OpenDataUnitFromJSON(json: any): OpenDataUnit {
    return OpenDataUnitFromJSONTyped(json, false);
}

export function OpenDataUnitFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpenDataUnit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'version': OpenDataUnitVersionFromJSON(json['version']),
        'slug': json['slug'],
        'name': json['name'],
        'pluralName': !exists(json, 'plural_name') ? undefined : json['plural_name'],
        'baseUnit': !exists(json, 'base_unit') ? undefined : json['base_unit'],
        'type': json['type'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
    };
}

export function OpenDataUnitToJSON(value?: OpenDataUnit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': OpenDataUnitVersionToJSON(value.version),
        'slug': value.slug,
        'name': value.name,
        'plural_name': value.pluralName,
        'base_unit': value.baseUnit,
        'type': value.type,
        'comment': value.comment,
    };
}

