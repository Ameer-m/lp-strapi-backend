import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutNavBar extends Schema.Component {
  collectionName: 'components_layout_nav_bars';
  info: {
    displayName: 'Nav Bar';
    icon: 'layout';
  };
  attributes: {
    Logolink: Attribute.Component<'elements.logo-link'>;
    Logo: Attribute.Component<'elements.logo', true>;
  };
}

export interface LayoutLocation extends Schema.Component {
  collectionName: 'components_layout_locations';
  info: {
    displayName: 'location';
  };
  attributes: {
    description: Attribute.Blocks & Attribute.Required;
    map: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    near_to_places: Attribute.Component<'elements.near-places', true>;
  };
}

export interface LayoutHero1 extends Schema.Component {
  collectionName: 'components_layout_hero_1s';
  info: {
    displayName: 'Hero 1';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    background_image_desktop: Attribute.Media<'images'> & Attribute.Required;
    background_image_mobile: Attribute.Media<'images'> & Attribute.Required;
    List: Attribute.Component<'elements.test-list', true>;
    selling_points: Attribute.Component<'elements.test-list', true>;
    starting_price: Attribute.String & Attribute.Required;
    cta_button: Attribute.Component<'elements.cta-button'>;
    project_highlight: Attribute.String;
  };
}

export interface LayoutDownloadBrochure extends Schema.Component {
  collectionName: 'components_layout_download_brochures';
  info: {
    displayName: 'Download Brochure';
  };
  attributes: {
    title: Attribute.String;
    brochure_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface LayoutAbout extends Schema.Component {
  collectionName: 'components_layout_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks & Attribute.Required;
    icon_box: Attribute.Component<'elements.icon-box', true>;
  };
}

export interface ElementsTestList extends Schema.Component {
  collectionName: 'components_elements_test_lists';
  info: {
    displayName: 'Test List';
  };
  attributes: {
    Subheading: Attribute.String & Attribute.Required;
  };
}

export interface ElementsNearPlaces extends Schema.Component {
  collectionName: 'components_elements_near_places';
  info: {
    displayName: 'near_places';
  };
  attributes: {
    subheading: Attribute.String & Attribute.Required;
    heading: Attribute.String;
  };
}

export interface ElementsLogo extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
    icon: 'link';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    href: Attribute.Text & Attribute.Required;
    External: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ElementsLogoLink extends Schema.Component {
  collectionName: 'components_elements_logo_links';
  info: {
    displayName: 'Logo Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    href: Attribute.Text & Attribute.Required;
  };
}

export interface ElementsIconBox extends Schema.Component {
  collectionName: 'components_elements_icon_boxes';
  info: {
    displayName: 'icon_box';
  };
  attributes: {
    text: Attribute.String;
    icon: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ElementsCtaButton extends Schema.Component {
  collectionName: 'components_elements_cta_buttons';
  info: {
    displayName: 'cta_button';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    image_url: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.nav-bar': LayoutNavBar;
      'layout.location': LayoutLocation;
      'layout.hero-1': LayoutHero1;
      'layout.download-brochure': LayoutDownloadBrochure;
      'layout.about': LayoutAbout;
      'elements.test-list': ElementsTestList;
      'elements.near-places': ElementsNearPlaces;
      'elements.logo': ElementsLogo;
      'elements.logo-link': ElementsLogoLink;
      'elements.icon-box': ElementsIconBox;
      'elements.cta-button': ElementsCtaButton;
    }
  }
}
