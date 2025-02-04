/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit-element';
import { boolean, select } from '@storybook/addon-knobs';
import on from 'carbon-components/es/globals/js/misc/on';
import ifNonNull from 'carbon-web-components/es/globals/directives/if-non-null.js';
import inPercy from '@percy-io/in-percy';
import textNullable from '../../../../.storybook/knob-text-nullable';
import DDSLeftNav from '../left-nav';
import '../masthead-container';
import styles from './masthead.stories.scss';
import { mastheadLinks as links, customLinks, l1Data, logoData } from './links';
import { UNAUTHENTICATED_STATUS } from '../../../internal/vendor/@carbon/ibmdotcom-services-store/types/profileAPI';
import { authenticatedProfileItems, unauthenticatedProfileItems } from './profile-items';
import { DDS_CUSTOM_PROFILE_LOGIN } from '../../../globals/internal/feature-flags';
import readme from './README.stories.mdx';

const userStatuses = {
  authenticated: 'test.user@ibm.com',
  unauthenticated: UNAUTHENTICATED_STATUS,
};

/**
 * platform knob data
 */
const platformData = {
  name: 'IBM Cloud',
  url: 'https://www.ibm.com/cloud',
};

const urlObject = {
  'en-US': {
    url: 'https://www.example.com/us-en',
  },
  'fr-FR': {
    url: 'https://www.example.com/fr-fr/sample',
  },
  'es-MX': {
    url: 'https://www.example.com/ibm/es-mx/sample',
  },
};

export const Default = ({ parameters }) => {
  const { customProfileLogin, platform, hasProfile, hasSearch, selectedMenuItem, searchPlaceholder, userStatus, navLinks } =
    parameters?.props?.MastheadComposite ?? {};
  const { useMock } = parameters?.props?.Other ?? {};
  return html`
    <style>
      ${styles}
    </style>
    ${useMock
      ? html`
          <dds-masthead-composite
            platform="${ifNonNull(platform)}"
            .platformUrl="${ifNonNull(platformData.url)}"
            selected-menu-item="${ifNonNull(selectedMenuItem)}"
            user-status="${ifNonNull(userStatus)}"
            searchPlaceholder="${ifNonNull(searchPlaceholder)}"
            .authenticatedProfileItems="${ifNonNull(authenticatedProfileItems)}"
            ?has-profile="${hasProfile}"
            ?has-search="${hasSearch}"
            .navLinks="${navLinks}"
            .unauthenticatedProfileItems="${ifNonNull(unauthenticatedProfileItems)}"
            custom-profile-login="${customProfileLogin}"
          ></dds-masthead-composite>
        `
      : html`
          <dds-masthead-container
            platform="${ifNonNull(platform)}"
            .platformUrl="${ifNonNull(platformData.url)}"
            selected-menu-item="${ifNonNull(selectedMenuItem)}"
            user-status="${ifNonNull(userStatus)}"
            searchPlaceholder="${ifNonNull(searchPlaceholder)}"
            .navLinks="${navLinks}"
            ?has-profile="${hasProfile}"
            ?has-search="${hasSearch}"
            custom-profile-login="${customProfileLogin}"
          ></dds-masthead-container>
        `}
  `;
};

export const WithCustomNavigation = ({ parameters }) => {
  const { customProfileLogin, platform, selectedMenuItem, userStatus, searchPlaceholder, hasProfile, hasSearch } =
    parameters?.props?.MastheadComposite ?? {};
  return html`
    <style>
      ${styles}
    </style>
    <dds-masthead-composite
      platform="${ifNonNull(platform)}"
      .platformUrl="${ifNonNull(platformData.url)}"
      selected-menu-item="${ifNonNull(selectedMenuItem)}"
      user-status="${ifNonNull(userStatus)}"
      searchPlaceholder="${ifNonNull(searchPlaceholder)}"
      .authenticatedProfileItems="${ifNonNull(authenticatedProfileItems)}"
      .navLinks="${customLinks}"
      ?has-profile="${hasProfile}"
      ?has-search="${hasSearch}"
      .unauthenticatedProfileItems="${ifNonNull(unauthenticatedProfileItems)}"
      custom-profile-login="${customProfileLogin}"
    ></dds-masthead-composite>
  `;
};

export const searchOpenOnload = ({ parameters }) => {
  const { customProfileLogin, platform, selectedMenuItem, userStatus, searchPlaceholder, hasProfile, hasSearch, navLinks } =
    parameters?.props?.MastheadComposite ?? {};
  const { useMock } = parameters?.props?.Other ?? {};
  return html`
    <style>
      ${styles}
    </style>
    ${useMock
      ? html`
          <dds-masthead-composite
            activate-search="true"
            platform="${ifNonNull(platformData.name)}"
            .platformUrl="${ifNonNull(platformData.url)}"
            selected-menu-item="${ifNonNull(selectedMenuItem)}"
            user-status="${ifNonNull(userStatus)}"
            searchPlaceholder="${ifNonNull(searchPlaceholder)}"
            .authenticatedProfileItems="${ifNonNull(authenticatedProfileItems)}"
            .navLinks="${navLinks}"
            ?has-profile="${hasProfile}"
            ?has-search="${hasSearch}"
            .unauthenticatedProfileItems="${ifNonNull(unauthenticatedProfileItems)}"
            custom-profile-login="${customProfileLogin}"
          ></dds-masthead-composite>
        `
      : html`
          <dds-masthead-container
            activate-search="true"
            platform="${ifNonNull(platform)}"
            .platformUrl="${ifNonNull(platformData.url)}"
            selected-menu-item="${ifNonNull(selectedMenuItem)}"
            user-status="${ifNonNull(userStatus)}"
            searchPlaceholder="${ifNonNull(searchPlaceholder)}"
            .navLinks="${navLinks}"
            ?has-profile="${hasProfile}"
            ?has-search="${hasSearch}"
            custom-profile-login="${customProfileLogin}"
          ></dds-masthead-container>
        `}
  `;
};

export const withPlatform = ({ parameters }) => {
  const { selectedMenuItem, userStatus, navLinks, hasProfile, hasSearch, searchPlaceholder } =
    parameters?.props?.MastheadComposite ?? {};
  const { useMock } = parameters?.props?.Other ?? {};
  return html`
    <style>
      ${styles}
    </style>
    ${useMock
      ? html`
          <dds-masthead-composite
            platform="${ifNonNull(platformData.name)}"
            .platformUrl="${ifNonNull(urlObject)}"
            selected-menu-item="${ifNonNull(selectedMenuItem)}"
            user-status="${ifNonNull(userStatus)}"
            searchPlaceholder="${ifNonNull(searchPlaceholder)}"
            .authenticatedProfileItems="${ifNonNull(authenticatedProfileItems)}"
            .navLinks="${navLinks}"
            ?has-profile="${hasProfile}"
            ?has-search="${hasSearch}"
            .unauthenticatedProfileItems="${ifNonNull(unauthenticatedProfileItems)}"
          ></dds-masthead-composite>
        `
      : html`
          <dds-masthead-container
            platform="${ifNonNull(platformData.name)}"
            .platformUrl="${ifNonNull(platformData.url)}"
            selected-menu-item="${ifNonNull(selectedMenuItem)}"
            user-status="${ifNonNull(userStatus)}"
            searchPlaceholder="${ifNonNull(searchPlaceholder)}"
            .navLinks="${navLinks}"
            ?has-profile="${hasProfile}"
            ?has-search="${hasSearch}"
          ></dds-masthead-container>
        `}
  `;
};

withPlatform.story = {
  parameters: {
    knobs: {
      MastheadComposite: ({ groupId }) => ({
        hasProfile: boolean('show the profile functionality (has-profile)', true, groupId),
        hasSearch: boolean('show the search functionality (has-search)', true, groupId),
        searchPlaceholder: textNullable('search placeholder (searchPlaceholder)', inPercy() ? '' : 'Search all of IBM', groupId),
        selectedMenuItem: textNullable('selected menu item (selected-menu-item)', 'Services & Consulting', groupId),
        userStatus: select('The user authenticated status (user-status)', userStatuses, userStatuses.unauthenticated, groupId),
      }),
    },
  },
};

export const withL1 = ({ parameters }) => {
  const { selectedMenuItem, userStatus, navLinks, hasProfile, hasSearch, searchPlaceholder } =
    parameters?.props?.MastheadComposite ?? {};
  const { useMock } = parameters?.props?.Other ?? {};
  return html`
    <style>
      ${styles}
    </style>
    ${useMock
      ? html`
          <dds-masthead-composite
            selected-menu-item="${ifNonNull(selectedMenuItem)}"
            searchPlaceholder="${ifNonNull(searchPlaceholder)}"
            user-status="${ifNonNull(userStatus)}"
            .authenticatedProfileItems="${ifNonNull(authenticatedProfileItems)}"
            ?has-profile="${hasProfile}"
            ?has-search="${hasSearch}"
            .l1Data="${l1Data}"
            .navLinks="${navLinks}"
            .unauthenticatedProfileItems="${ifNonNull(unauthenticatedProfileItems)}"
          ></dds-masthead-composite>
        `
      : html`
          <dds-masthead-container
            selected-menu-item="${ifNonNull(selectedMenuItem)}"
            user-status="${ifNonNull(userStatus)}"
            ?has-profile="${hasProfile}"
            ?has-search="${hasSearch}"
            .l1Data="${l1Data}"
            .navLinks="${navLinks}"
          ></dds-masthead-container>
        `}
  `;
};

withL1.story = {
  parameters: {
    knobs: {
      MastheadComposite: ({ groupId }) => ({
        hasProfile: boolean('show the profile functionality (has-profile)', true, groupId),
        hasSearch: boolean('show the search functionality (has-search)', true, groupId),
        searchPlaceholder: textNullable('search placeholder (searchPlaceholder)', inPercy() ? '' : 'Search all of IBM', groupId),
        selectedMenuItem: textNullable('selected menu item (selected-menu-item)', 'Services & Consulting', groupId),
        userStatus: select('The user authenticated status (user-status)', userStatuses, userStatuses.unauthenticated, groupId),
      }),
    },
  },
};

export const withAlternateLogoAndTooltip = ({ parameters }) => {
  const { platform, selectedMenuItem, userStatus, navLinks, hasProfile, hasSearch, searchPlaceholder, mastheadLogo } =
    parameters?.props?.MastheadComposite ?? {};
  const { useMock } = parameters?.props?.Other ?? {};
  return html`
    <style>
      ${styles}
    </style>
    ${useMock
      ? html`
          <dds-masthead-composite
            platform="${ifNonNull(platform)}"
            .platformUrl="${ifNonNull(platformData.url)}"
            selected-menu-item="${ifNonNull(selectedMenuItem)}"
            user-status="${ifNonNull(userStatus)}"
            searchPlaceholder="${ifNonNull(searchPlaceholder)}"
            .authenticatedProfileItems="${ifNonNull(authenticatedProfileItems)}"
            ?has-profile="${hasProfile}"
            ?has-search="${hasSearch}"
            .navLinks="${navLinks}"
            .logoData="${mastheadLogo === 'alternateWithTooltip' ? logoData : null}"
            .unauthenticatedProfileItems="${ifNonNull(unauthenticatedProfileItems)}"
          ></dds-masthead-composite>
        `
      : html`
          <dds-masthead-container
            platform="${ifNonNull(platform)}"
            .platformUrl="${ifNonNull(platformData.url)}"
            selected-menu-item="${ifNonNull(selectedMenuItem)}"
            user-status="${ifNonNull(userStatus)}"
            searchPlaceholder="${ifNonNull(searchPlaceholder)}"
            .navLinks="${navLinks}"
            .logoData="${mastheadLogo === 'alternateWithTooltip' ? logoData : null}"
            ?has-profile="${hasProfile}"
            ?has-search="${hasSearch}"
          ></dds-masthead-container>
        `}
  `;
};

withAlternateLogoAndTooltip.story = {
  parameters: {
    knobs: {
      MastheadComposite: ({ groupId }) => ({
        platform: select('Platform (platform)', { none: null, platform: platformData.name }, null, groupId),
        hasProfile: boolean('show the profile functionality (has-profile)', true, groupId),
        hasSearch: boolean('show the search functionality (has-search)', true, groupId),
        searchPlaceholder: textNullable('search placeholder (searchPlaceholder)', 'Search all of IBM', groupId),
        selectedMenuItem: textNullable('selected menu item (selected-menu-item)', 'Services & Consulting', groupId),
        mastheadLogo: select(
          'masthead logo data (logoData)',
          { defaultWithNoTooltip: null, alternateWithTooltip: 'alternateWithTooltip' },
          'alternateWithTooltip',
          groupId
        ),
        userStatus: select('The user authenticated status (user-status)', userStatuses, userStatuses.unauthenticated, groupId),
      }),
    },
  },
};

export default {
  title: 'Components/Masthead',
  decorators: [
    story => {
      if (!(window as any)._hPageShow) {
        (window as any)._hPageShow = on(window, 'pageshow', () => {
          const leftNav = document.querySelector('dds-left-nav');
          if (leftNav) {
            (leftNav as DDSLeftNav).expanded = false;
          }
        });
      }
      return story();
    },
  ],
  parameters: {
    ...readme.parameters,
    knobs: {
      escapeHTML: false,
      MastheadComposite: ({ groupId }) => ({
        platform: select('Platform (platform)', { none: null, platform: platformData.name }, null, groupId),
        hasProfile: boolean('show the profile functionality (has-profile)', true, groupId),
        hasSearch: boolean('show the search functionality (has-search)', true, groupId),
        searchPlaceholder: textNullable('search placeholder (searchPlaceholder)', 'Search all of IBM', groupId),
        selectedMenuItem: textNullable('selected menu item (selected-menu-item)', 'Services & Consulting', groupId),
        userStatus: select('The user authenticated status (user-status)', userStatuses, userStatuses.unauthenticated, groupId),
        customProfileLogin:
          DDS_CUSTOM_PROFILE_LOGIN &&
          textNullable('custom profile login url (customProfileLogin)', 'https://www.example.com/', groupId),
      }),
    },
    props: (() => {
      // Lets `<dds-masthead-container>` load the nav links
      const useMock = inPercy() || new URLSearchParams(window.location.search).has('mock');
      return {
        MastheadComposite: {
          navLinks: !useMock ? undefined : links,
        },
        Other: {
          useMock,
        },
      };
    })(),
  },
};
