/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  LinkOrderByInput: { // input type
    createdAt?: NexusGenEnums['Sort'] | null; // Sort
    description?: NexusGenEnums['Sort'] | null; // Sort
    url?: NexusGenEnums['Sort'] | null; // Sort
  }
}

export interface NexusGenEnums {
  Sort: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Feed: { // root type
    count: number; // Int!
    id?: string | null; // ID
    links: NexusGenRootTypes['Link'][]; // [Link!]!
  }
  Link: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: string; // String!
    url: string; // String!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    id: string; // String!
    name: string; // String!
  }
  Vote: { // root type
    link: NexusGenRootTypes['Link']; // Link!
    user: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Feed: { // field return type
    count: number; // Int!
    id: string | null; // ID
    links: NexusGenRootTypes['Link'][]; // [Link!]!
  }
  Link: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: string; // String!
    postedBy: NexusGenRootTypes['User'] | null; // User
    url: string; // String!
    voters: NexusGenRootTypes['User'][] | null; // [User!]
  }
  Mutation: { // field return type
    deleteLink: NexusGenRootTypes['Link']; // Link!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    post: NexusGenRootTypes['Link']; // Link!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateLink: NexusGenRootTypes['Link']; // Link!
    vote: NexusGenRootTypes['Vote']; // Vote!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Feed']; // Feed!
    link: NexusGenRootTypes['Link'] | null; // Link
  }
  User: { // field return type
    email: string; // String!
    id: string; // String!
    links: NexusGenRootTypes['Link'][] | null; // [Link!]
    name: string; // String!
    votes: NexusGenRootTypes['Link'][] | null; // [Link!]
  }
  Vote: { // field return type
    link: NexusGenRootTypes['Link']; // Link!
    user: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Feed: { // field return type name
    count: 'Int'
    id: 'ID'
    links: 'Link'
  }
  Link: { // field return type name
    createdAt: 'DateTime'
    description: 'String'
    id: 'String'
    postedBy: 'User'
    url: 'String'
    voters: 'User'
  }
  Mutation: { // field return type name
    deleteLink: 'Link'
    login: 'AuthPayload'
    post: 'Link'
    signup: 'AuthPayload'
    updateLink: 'Link'
    vote: 'Vote'
  }
  Query: { // field return type name
    feed: 'Feed'
    link: 'Link'
  }
  User: { // field return type name
    email: 'String'
    id: 'String'
    links: 'Link'
    name: 'String'
    votes: 'Link'
  }
  Vote: { // field return type name
    link: 'Link'
    user: 'User'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    deleteLink: { // args
      id: string; // ID!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    post: { // args
      description: string; // String!
      url: string; // String!
    }
    signup: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
    }
    updateLink: { // args
      description?: string | null; // String
      id: string; // ID!
      url?: string | null; // String
    }
    vote: { // args
      linkId: string; // String!
    }
  }
  Query: {
    feed: { // args
      filter?: string | null; // String
      orderBy?: NexusGenInputs['LinkOrderByInput'][] | null; // [LinkOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
    }
    link: { // args
      id: string; // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}