import type { Schema, Attribute } from '@strapi/strapi';

export interface ReusableAboutTeam extends Schema.Component {
  collectionName: 'components_reusable_about_teams';
  info: {
    displayName: 'AboutTeam';
    description: '';
  };
  attributes: {
    SubTitle: Attribute.String & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Teams: Attribute.Component<'shared.team', true>;
  };
}

export interface ReusableAbout extends Schema.Component {
  collectionName: 'components_reusable_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    SubTitle: Attribute.String & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    ServiceTitle: Attribute.String & Attribute.Required;
    ServiceDescription: Attribute.Text & Attribute.Required;
    ExpertTitle: Attribute.String & Attribute.Required;
    ExpertDescription: Attribute.Text & Attribute.Required;
    MainImage: Attribute.Media<'images'> & Attribute.Required;
    MainImageAlt: Attribute.String & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    ImageAlt: Attribute.String & Attribute.Required;
    AboutItem: Attribute.Component<'shared.list', true>;
    ShowButton: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    ButtonName: Attribute.String;
    ButtonLink: Attribute.String;
  };
}

export interface ReusableBrand extends Schema.Component {
  collectionName: 'components_reusable_brands';
  info: {
    displayName: 'Brand';
  };
  attributes: {
    Image: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
  };
}

export interface ReusableBreadcrumb extends Schema.Component {
  collectionName: 'components_reusable_breadcrumbs';
  info: {
    displayName: 'Breadcrumb';
  };
  attributes: {
    BackgroundImage: Attribute.Media<'images'> & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Home: Attribute.String & Attribute.Required;
    Page: Attribute.String & Attribute.Required;
  };
}

export interface ReusableCta extends Schema.Component {
  collectionName: 'components_reusable_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Phone: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    ShowButton: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    ButtonName: Attribute.String;
    ButtonLink: Attribute.String;
  };
}

export interface ReusableFunFact extends Schema.Component {
  collectionName: 'components_reusable_fun_facts';
  info: {
    displayName: 'FunFact';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    BackgroundImage: Attribute.Media<'images'> & Attribute.Required;
    CompletedTitle: Attribute.String & Attribute.Required;
    CompletedCount: Attribute.BigInteger & Attribute.Required;
    ClientTitle: Attribute.String & Attribute.Required;
    ProjectTitle: Attribute.String & Attribute.Required;
    ProjectCount: Attribute.BigInteger & Attribute.Required;
    EmployeeTitle: Attribute.String & Attribute.Required;
    EmployeeCount: Attribute.BigInteger & Attribute.Required;
    ClientCount: Attribute.BigInteger & Attribute.Required;
  };
}

export interface ReusableHero extends Schema.Component {
  collectionName: 'components_reusable_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    SubTitle: Attribute.String & Attribute.Required;
    Title: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    BackgroundImage: Attribute.Media<'images'> & Attribute.Required;
    ShowButton: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    ButtonName: Attribute.String;
    ButtonLink: Attribute.String;
    ShapeA: Attribute.Media<'images'>;
    ShapeB: Attribute.Media<'images'>;
  };
}

export interface ReusableMenu extends Schema.Component {
  collectionName: 'components_reusable_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface ReusableMission extends Schema.Component {
  collectionName: 'components_reusable_missions';
  info: {
    displayName: 'Mission';
  };
  attributes: {
    Subtitle: Attribute.String & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    SubDescription: Attribute.Text & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    ShowButton: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    ButtonName: Attribute.String;
    ButtonLink: Attribute.String;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
    ImageTitle: Attribute.String & Attribute.Required;
    ShowImageButton: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    ImageButtonName: Attribute.String;
    ImageButtonLink: Attribute.String;
  };
}

export interface ReusableQuality extends Schema.Component {
  collectionName: 'components_reusable_qualities';
  info: {
    displayName: 'Quality';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
  };
}

export interface ReusableServiceCategory extends Schema.Component {
  collectionName: 'components_reusable_service_categories';
  info: {
    displayName: 'ServiceCategory';
  };
  attributes: {
    SubTitle: Attribute.String & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
  };
}

export interface ReusableServicePage extends Schema.Component {
  collectionName: 'components_reusable_service_pages';
  info: {
    displayName: 'ServicePage';
  };
  attributes: {
    SubTitle: Attribute.String & Attribute.Required;
    Title: Attribute.Enumeration<
      [
        'WEBSITE DEVELOPMENT',
        'GRAPHIC DESIGNING',
        'SEO & CONTENT WRITTING',
        'DIGITAL MARKETING'
      ]
    > &
      Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
  };
}

export interface ReusableServiceWhyWe extends Schema.Component {
  collectionName: 'components_reusable_service_why_wes';
  info: {
    displayName: 'ServiceWhyWe';
  };
  attributes: {
    Image: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    SubTitle: Attribute.String & Attribute.Required;
    SubDescription: Attribute.Text & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
  };
}

export interface ReusableServices extends Schema.Component {
  collectionName: 'components_reusable_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    SubTitle: Attribute.String & Attribute.Required;
    Title: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    Description: Attribute.Text & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
    Name: Attribute.String & Attribute.Required;
    Service: Attribute.Component<'shared.service', true> & Attribute.Required;
    BackgroundImage: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ReusableTestomonial extends Schema.Component {
  collectionName: 'components_reusable_testomonials';
  info: {
    displayName: 'Testomonial';
    description: '';
  };
  attributes: {
    SubTitle: Attribute.String & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Reviews: Attribute.Component<'shared.review', true>;
  };
}

export interface ReusableTrust extends Schema.Component {
  collectionName: 'components_reusable_trusts';
  info: {
    displayName: 'Trust';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    BackgroundImage: Attribute.Media<'images'> & Attribute.Required;
    ShowButton: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    ButtonName: Attribute.String;
    ButtonLink: Attribute.String;
  };
}

export interface ReusableVideo extends Schema.Component {
  collectionName: 'components_reusable_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    SubTitle: Attribute.String & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    WatchTitle: Attribute.String & Attribute.Required;
    EstimateTitle: Attribute.String & Attribute.Required;
    Phone: Attribute.String & Attribute.Required;
    YoutubeUrl: Attribute.Text & Attribute.Required;
  };
}

export interface ReusableWhyWe extends Schema.Component {
  collectionName: 'components_reusable_why_wes';
  info: {
    displayName: 'WhyWe';
    description: '';
  };
  attributes: {
    Subtitle: Attribute.String & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    List: Attribute.Component<'shared.list', true>;
    Accordion: Attribute.Component<'shared.accordion', true>;
  };
}

export interface SharedAccordion extends Schema.Component {
  collectionName: 'components_shared_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
  };
}

export interface SharedList extends Schema.Component {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    Item: Attribute.Text & Attribute.Required;
  };
}

export interface SharedReview extends Schema.Component {
  collectionName: 'components_shared_reviews';
  info: {
    displayName: 'Review';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Role: Attribute.String & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Review: Attribute.Text & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
  };
}

export interface SharedService extends Schema.Component {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'Service';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface SharedTeam extends Schema.Component {
  collectionName: 'components_shared_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    Image: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
    Name: Attribute.String & Attribute.Required;
    Position: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'reusable.about-team': ReusableAboutTeam;
      'reusable.about': ReusableAbout;
      'reusable.brand': ReusableBrand;
      'reusable.breadcrumb': ReusableBreadcrumb;
      'reusable.cta': ReusableCta;
      'reusable.fun-fact': ReusableFunFact;
      'reusable.hero': ReusableHero;
      'reusable.menu': ReusableMenu;
      'reusable.mission': ReusableMission;
      'reusable.quality': ReusableQuality;
      'reusable.service-category': ReusableServiceCategory;
      'reusable.service-page': ReusableServicePage;
      'reusable.service-why-we': ReusableServiceWhyWe;
      'reusable.services': ReusableServices;
      'reusable.testomonial': ReusableTestomonial;
      'reusable.trust': ReusableTrust;
      'reusable.video': ReusableVideo;
      'reusable.why-we': ReusableWhyWe;
      'shared.accordion': SharedAccordion;
      'shared.list': SharedList;
      'shared.review': SharedReview;
      'shared.service': SharedService;
      'shared.team': SharedTeam;
    }
  }
}
