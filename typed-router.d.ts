/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  RouterLinkPropsTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router/types'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    '$error': RouteRecordInfo<'$error', '/:error(.*)', { error: ParamValue<true> }, { error: ParamValue<false> }>,
    'access-control': RouteRecordInfo<'access-control', '/access-control', Record<never, never>, Record<never, never>>,
    'application': RouteRecordInfo<'application', '/application', Record<never, never>, Record<never, never>>,
    'application-course-details': RouteRecordInfo<'application-course-details', '/application/course-details', Record<never, never>, Record<never, never>>,
    'application-details': RouteRecordInfo<'application-details', '/application/details', Record<never, never>, Record<never, never>>,
    'application-details-document': RouteRecordInfo<'application-details-document', '/application/details-document', Record<never, never>, Record<never, never>>,
    'application-new': RouteRecordInfo<'application-new', '/application/new', Record<never, never>, Record<never, never>>,
    'application-student-information': RouteRecordInfo<'application-student-information', '/application/student-information', Record<never, never>, Record<never, never>>,
    'application-upload-document': RouteRecordInfo<'application-upload-document', '/application/upload-document', Record<never, never>, Record<never, never>>,
    'application-india': RouteRecordInfo<'application-india', '/application-india', Record<never, never>, Record<never, never>>,
    'application-india-course-details': RouteRecordInfo<'application-india-course-details', '/application-india/course-details', Record<never, never>, Record<never, never>>,
    'application-india-details': RouteRecordInfo<'application-india-details', '/application-india/details', Record<never, never>, Record<never, never>>,
    'application-india-details-document': RouteRecordInfo<'application-india-details-document', '/application-india/details-document', Record<never, never>, Record<never, never>>,
    'application-india-new': RouteRecordInfo<'application-india-new', '/application-india/new', Record<never, never>, Record<never, never>>,
    'application-india-student-information': RouteRecordInfo<'application-india-student-information', '/application-india/student-information', Record<never, never>, Record<never, never>>,
    'application-india-upload-document': RouteRecordInfo<'application-india-upload-document', '/application-india/upload-document', Record<never, never>, Record<never, never>>,
    'application-request': RouteRecordInfo<'application-request', '/application-request', Record<never, never>, Record<never, never>>,
    'branch-list': RouteRecordInfo<'branch-list', '/branch-list', Record<never, never>, Record<never, never>>,
    'branch-list-add': RouteRecordInfo<'branch-list-add', '/branch-list/add', Record<never, never>, Record<never, never>>,
    'branch-list-edit': RouteRecordInfo<'branch-list-edit', '/branch-list/edit', Record<never, never>, Record<never, never>>,
    'compliance-request': RouteRecordInfo<'compliance-request', '/compliance-request', Record<never, never>, Record<never, never>>,
    'country-list': RouteRecordInfo<'country-list', '/country-list', Record<never, never>, Record<never, never>>,
    'country-list-add': RouteRecordInfo<'country-list-add', '/country-list/add', Record<never, never>, Record<never, never>>,
    'country-list-edit': RouteRecordInfo<'country-list-edit', '/country-list/edit', Record<never, never>, Record<never, never>>,
    'course': RouteRecordInfo<'course', '/course', Record<never, never>, Record<never, never>>,
    'course-request': RouteRecordInfo<'course-request', '/course-request', Record<never, never>, Record<never, never>>,
    'course-request-list': RouteRecordInfo<'course-request-list', '/course-request-list', Record<never, never>, Record<never, never>>,
    'dashboard': RouteRecordInfo<'dashboard', '/dashboard', Record<never, never>, Record<never, never>>,
    'email': RouteRecordInfo<'email', '/email', Record<never, never>, Record<never, never>>,
    'forgot-password': RouteRecordInfo<'forgot-password', '/forgot-password', Record<never, never>, Record<never, never>>,
    'login': RouteRecordInfo<'login', '/login', Record<never, never>, Record<never, never>>,
    'nigeria': RouteRecordInfo<'nigeria', '/nigeria', Record<never, never>, Record<never, never>>,
    'not-authorized': RouteRecordInfo<'not-authorized', '/not-authorized', Record<never, never>, Record<never, never>>,
    'notifications': RouteRecordInfo<'notifications', '/notifications', Record<never, never>, Record<never, never>>,
    'permissions': RouteRecordInfo<'permissions', '/permissions', Record<never, never>, Record<never, never>>,
    'profile': RouteRecordInfo<'profile', '/profile', Record<never, never>, Record<never, never>>,
    'record': RouteRecordInfo<'record', '/record', Record<never, never>, Record<never, never>>,
    'record-add': RouteRecordInfo<'record-add', '/record/add', Record<never, never>, Record<never, never>>,
    'record-intake': RouteRecordInfo<'record-intake', '/record/intake', Record<never, never>, Record<never, never>>,
    'record-intake-add': RouteRecordInfo<'record-intake-add', '/record/intake/add', Record<never, never>, Record<never, never>>,
    'record-intake-edit': RouteRecordInfo<'record-intake-edit', '/record/intake/edit', Record<never, never>, Record<never, never>>,
    'record-university': RouteRecordInfo<'record-university', '/record/university', Record<never, never>, Record<never, never>>,
    'record-university-add': RouteRecordInfo<'record-university-add', '/record/university/add', Record<never, never>, Record<never, never>>,
    'record-university-edit': RouteRecordInfo<'record-university-edit', '/record/university/edit', Record<never, never>, Record<never, never>>,
    'register': RouteRecordInfo<'register', '/register', Record<never, never>, Record<never, never>>,
    'roles': RouteRecordInfo<'roles', '/roles', Record<never, never>, Record<never, never>>,
    'university-list': RouteRecordInfo<'university-list', '/university-list', Record<never, never>, Record<never, never>>,
    'user': RouteRecordInfo<'user', '/user', Record<never, never>, Record<never, never>>,
    'user-add-add-new-user-drawer': RouteRecordInfo<'user-add-add-new-user-drawer', '/user/add/AddNewUserDrawer', Record<never, never>, Record<never, never>>,
    'user-add-edit-new-user-drawer': RouteRecordInfo<'user-add-edit-new-user-drawer', '/user/add/EditNewUserDrawer', Record<never, never>, Record<never, never>>,
    'user-user-bio-panel': RouteRecordInfo<'user-user-bio-panel', '/user/UserBioPanel', Record<never, never>, Record<never, never>>,
    'user-view-id': RouteRecordInfo<'user-view-id', '/user/view/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  export const RouterLink: RouterLinkTyped<RouteNamedMap>
  export const RouterLinkProps: RouterLinkPropsTyped<RouteNamedMap>

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
