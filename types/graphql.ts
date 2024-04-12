export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Long: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  headerscripts?: Maybe<ComponentSharedSeo>;
  hero: UploadFileEntityResponse;
  published?: Maybe<Scalars['Date']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readTime?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  teaser?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  writtenBy?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  headerscripts?: InputMaybe<ComponentSharedSeoFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  published?: InputMaybe<DateFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  readTime?: InputMaybe<IntFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  teaser?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  writtenBy?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type ArticleInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  headerscripts?: InputMaybe<ComponentSharedSeoInput>;
  hero?: InputMaybe<Scalars['ID']['input']>;
  published?: InputMaybe<Scalars['Date']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readTime?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  teaser?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  writtenBy?: InputMaybe<Scalars['ID']['input']>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  data: Array<ArticleEntity>;
};

export type Blogrequest = {
  __typename?: 'Blogrequest';
  blogAbout?: Maybe<Scalars['String']['output']>;
  blogGoal?: Maybe<Scalars['String']['output']>;
  businessName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  lengthContent?: Maybe<Scalars['JSON']['output']>;
  peopleOffer?: Maybe<Scalars['String']['output']>;
  pictureOrStuff: Scalars['Boolean']['output'];
  productOrServiceOffer?: Maybe<Scalars['String']['output']>;
  typeBlog?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
  yourCustomer?: Maybe<Scalars['String']['output']>;
};

export type BlogrequestEntity = {
  __typename?: 'BlogrequestEntity';
  attributes?: Maybe<Blogrequest>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BlogrequestEntityResponse = {
  __typename?: 'BlogrequestEntityResponse';
  data?: Maybe<BlogrequestEntity>;
};

export type BlogrequestEntityResponseCollection = {
  __typename?: 'BlogrequestEntityResponseCollection';
  data: Array<BlogrequestEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogrequestFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogrequestFiltersInput>>>;
  blogAbout?: InputMaybe<StringFilterInput>;
  blogGoal?: InputMaybe<StringFilterInput>;
  businessName?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  fullname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lengthContent?: InputMaybe<JsonFilterInput>;
  not?: InputMaybe<BlogrequestFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogrequestFiltersInput>>>;
  peopleOffer?: InputMaybe<StringFilterInput>;
  pictureOrStuff?: InputMaybe<BooleanFilterInput>;
  productOrServiceOffer?: InputMaybe<StringFilterInput>;
  typeBlog?: InputMaybe<JsonFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  websiteUrl?: InputMaybe<StringFilterInput>;
  yourCustomer?: InputMaybe<StringFilterInput>;
};

export type BlogrequestInput = {
  blogAbout?: InputMaybe<Scalars['String']['input']>;
  blogGoal?: InputMaybe<Scalars['String']['input']>;
  businessName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  lengthContent?: InputMaybe<Scalars['JSON']['input']>;
  peopleOffer?: InputMaybe<Scalars['String']['input']>;
  pictureOrStuff?: InputMaybe<Scalars['Boolean']['input']>;
  productOrServiceOffer?: InputMaybe<Scalars['String']['input']>;
  typeBlog?: InputMaybe<Scalars['JSON']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
  yourCustomer?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CaseStudy = {
  __typename?: 'CaseStudy';
  approach?: Maybe<Scalars['String']['output']>;
  clientTechnology?: Maybe<Enum_Casestudy_Clienttechnology>;
  cms?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  highlight?: Maybe<Scalars['String']['output']>;
  highlightImage?: Maybe<UploadFileEntityResponse>;
  impact?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  objective?: Maybe<Scalars['String']['output']>;
  projectSummary?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  serverTechnology?: Maybe<Enum_Casestudy_Servertechnology>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type CaseStudyUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudyEntity = {
  __typename?: 'CaseStudyEntity';
  attributes?: Maybe<CaseStudy>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CaseStudyEntityResponse = {
  __typename?: 'CaseStudyEntityResponse';
  data?: Maybe<CaseStudyEntity>;
};

export type CaseStudyEntityResponseCollection = {
  __typename?: 'CaseStudyEntityResponseCollection';
  data: Array<CaseStudyEntity>;
  meta: ResponseCollectionMeta;
};

export type CaseStudyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CaseStudyFiltersInput>>>;
  approach?: InputMaybe<StringFilterInput>;
  clientTechnology?: InputMaybe<StringFilterInput>;
  cms?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  highlight?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  impact?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CaseStudyFiltersInput>;
  objective?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<CaseStudyFiltersInput>>>;
  projectSummary?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  serverTechnology?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type CaseStudyInput = {
  approach?: InputMaybe<Scalars['String']['input']>;
  clientTechnology?: InputMaybe<Enum_Casestudy_Clienttechnology>;
  cms?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  highlight?: InputMaybe<Scalars['String']['input']>;
  highlightImage?: InputMaybe<Scalars['ID']['input']>;
  impact?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  objective?: InputMaybe<Scalars['String']['input']>;
  projectSummary?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  serverTechnology?: InputMaybe<Enum_Casestudy_Servertechnology>;
  slug?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type CaseStudyRelationResponseCollection = {
  __typename?: 'CaseStudyRelationResponseCollection';
  data: Array<CaseStudyEntity>;
};

export type ComponentHomepageCardWhatWeDo = {
  __typename?: 'ComponentHomepageCardWhatWeDo';
  id: Scalars['ID']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentHomepageWhatWeDo = {
  __typename?: 'ComponentHomepageWhatWeDo';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentHomepageWhoWeAre = {
  __typename?: 'ComponentHomepageWhoWeAre';
  content?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  our_clients?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentHomepageWhoWeAreOur_ClientsArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHomepageWhoWeAreInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  our_clients?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentMoleculesButton = {
  __typename?: 'ComponentMoleculesButton';
  class_name?: Maybe<Scalars['String']['output']>;
  full_width?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Enum_Componentmoleculesbutton_Type>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentMoleculesButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMoleculesButtonFiltersInput>>>;
  class_name?: InputMaybe<StringFilterInput>;
  full_width?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentMoleculesButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMoleculesButtonFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentMoleculesButtonInput = {
  class_name?: InputMaybe<Scalars['String']['input']>;
  full_width?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Componentmoleculesbutton_Type>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPageHeadPageMeta = {
  __typename?: 'ComponentPageHeadPageMeta';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ComponentPageHeadScript = {
  __typename?: 'ComponentPageHeadScript';
  async?: Maybe<Scalars['Boolean']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  crossorigin?: Maybe<Scalars['String']['output']>;
  defer?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  integrity?: Maybe<Scalars['String']['output']>;
  referrerpolicy?: Maybe<Enum_Componentpageheadscript_Referrerpolicy>;
  src?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Enum_Componentpageheadscript_Strategy>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ComponentPageHeadScriptFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPageHeadScriptFiltersInput>>>;
  async?: InputMaybe<BooleanFilterInput>;
  body?: InputMaybe<StringFilterInput>;
  crossorigin?: InputMaybe<StringFilterInput>;
  defer?: InputMaybe<BooleanFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  integrity?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPageHeadScriptFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPageHeadScriptFiltersInput>>>;
  referrerpolicy?: InputMaybe<StringFilterInput>;
  src?: InputMaybe<StringFilterInput>;
  strategy?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ComponentPageHeadScriptInput = {
  async?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  crossorigin?: InputMaybe<Scalars['String']['input']>;
  defer?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  integrity?: InputMaybe<Scalars['String']['input']>;
  referrerpolicy?: InputMaybe<Enum_Componentpageheadscript_Referrerpolicy>;
  src?: InputMaybe<Scalars['String']['input']>;
  strategy?: InputMaybe<Enum_Componentpageheadscript_Strategy>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String']['output'];
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription: Scalars['String']['output'];
  metaImage?: Maybe<UploadFileEntityResponse>;
  metaRobots?: Maybe<Scalars['String']['output']>;
  metaTitle: Scalars['String']['output'];
  metaViewport?: Maybe<Scalars['String']['output']>;
  ogType?: Maybe<Scalars['String']['output']>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
  twitterCardType?: Maybe<Enum_Componentsharedseo_Twittercardtype>;
  twitterCreatorHandle?: Maybe<Scalars['String']['output']>;
  twitterDescription?: Maybe<Scalars['String']['output']>;
  twitterImage?: Maybe<UploadFileEntityResponse>;
  twitterSiteHandle?: Maybe<Scalars['String']['output']>;
  twitterTitle?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  metaViewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  ogType?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  structuredData?: InputMaybe<JsonFilterInput>;
  twitterCardType?: InputMaybe<StringFilterInput>;
  twitterCreatorHandle?: InputMaybe<StringFilterInput>;
  twitterDescription?: InputMaybe<StringFilterInput>;
  twitterSiteHandle?: InputMaybe<StringFilterInput>;
  twitterTitle?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['ID']['input']>;
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaViewport?: InputMaybe<Scalars['String']['input']>;
  ogType?: InputMaybe<Scalars['String']['input']>;
  structuredData?: InputMaybe<Scalars['JSON']['input']>;
  twitterCardType?: InputMaybe<Enum_Componentsharedseo_Twittercardtype>;
  twitterCreatorHandle?: InputMaybe<Scalars['String']['input']>;
  twitterDescription?: InputMaybe<Scalars['String']['input']>;
  twitterImage?: InputMaybe<Scalars['ID']['input']>;
  twitterSiteHandle?: InputMaybe<Scalars['String']['input']>;
  twitterTitle?: InputMaybe<Scalars['String']['input']>;
};

export type Contactpage = {
  __typename?: 'Contactpage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  headerscripts?: Maybe<ComponentSharedSeo>;
  lastname?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['Long']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContactpageEntity = {
  __typename?: 'ContactpageEntity';
  attributes?: Maybe<Contactpage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContactpageEntityResponse = {
  __typename?: 'ContactpageEntityResponse';
  data?: Maybe<ContactpageEntity>;
};

export type ContactpageInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  headerscripts?: InputMaybe<ComponentSharedSeoInput>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['Long']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Casestudy_Clienttechnology {
  Astro = 'ASTRO',
  Html = 'HTML',
  Javascript = 'JAVASCRIPT',
  Next = 'NEXT',
  React = 'REACT',
  Wordpress = 'WORDPRESS'
}

export enum Enum_Casestudy_Servertechnology {
  Apollo = 'APOLLO',
  Aws = 'AWS',
  Graphql = 'GRAPHQL',
  Java = 'JAVA',
  Lambda = 'LAMBDA',
  Node = 'NODE',
  Python = 'PYTHON',
  Rust = 'RUST'
}

export enum Enum_Componentmoleculesbutton_Type {
  Outline = 'OUTLINE',
  Primary = 'PRIMARY',
  Text = 'TEXT',
  White = 'WHITE'
}

export enum Enum_Componentpageheadscript_Referrerpolicy {
  NoReferrer = 'no_referrer',
  NoReferrerWhenDowngrade = 'no_referrer_when_downgrade',
  Origin = 'origin',
  OriginWhenCrossOrigin = 'origin_when_cross_origin',
  SameOrigin = 'same_origin',
  StrictOrigin = 'strict_origin',
  StrictOriginWhenCrossOrigin = 'strict_origin_when_cross_origin',
  UnsafeUrl = 'unsafe_url'
}

export enum Enum_Componentpageheadscript_Strategy {
  AfterInteractive = 'afterInteractive',
  BeforeInteractive = 'beforeInteractive',
  LazyOnload = 'lazyOnload',
  Worker = 'worker'
}

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export enum Enum_Componentsharedseo_Twittercardtype {
  App = 'app',
  Player = 'player',
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image'
}

export enum Enum_Service_Hero_Icon_Name {
  AcademicCap = 'AcademicCap',
  AcademicCapOutline = 'AcademicCapOutline',
  Adjustments = 'Adjustments',
  AdjustmentsOutline = 'AdjustmentsOutline',
  Annotation = 'Annotation',
  AnnotationOutline = 'AnnotationOutline',
  Archive = 'Archive',
  ArchiveOutline = 'ArchiveOutline',
  ArrowCircleDown = 'ArrowCircleDown',
  ArrowCircleDownOutline = 'ArrowCircleDownOutline',
  ArrowCircleLeft = 'ArrowCircleLeft',
  ArrowCircleLeftOutline = 'ArrowCircleLeftOutline',
  ArrowCircleRight = 'ArrowCircleRight',
  ArrowCircleRightOutline = 'ArrowCircleRightOutline',
  ArrowCircleUp = 'ArrowCircleUp',
  ArrowCircleUpOutline = 'ArrowCircleUpOutline',
  ArrowDown = 'ArrowDown',
  ArrowDownOutline = 'ArrowDownOutline',
  ArrowLeft = 'ArrowLeft',
  ArrowLeftOutline = 'ArrowLeftOutline',
  ArrowNarrowDown = 'ArrowNarrowDown',
  ArrowNarrowDownOutline = 'ArrowNarrowDownOutline',
  ArrowNarrowLeft = 'ArrowNarrowLeft',
  ArrowNarrowLeftOutline = 'ArrowNarrowLeftOutline',
  ArrowNarrowRight = 'ArrowNarrowRight',
  ArrowNarrowRightOutline = 'ArrowNarrowRightOutline',
  ArrowNarrowUp = 'ArrowNarrowUp',
  ArrowNarrowUpOutline = 'ArrowNarrowUpOutline',
  ArrowRight = 'ArrowRight',
  ArrowRightOutline = 'ArrowRightOutline',
  ArrowSmDown = 'ArrowSmDown',
  ArrowSmDownOutline = 'ArrowSmDownOutline',
  ArrowSmLeft = 'ArrowSmLeft',
  ArrowSmLeftOutline = 'ArrowSmLeftOutline',
  ArrowSmRight = 'ArrowSmRight',
  ArrowSmRightOutline = 'ArrowSmRightOutline',
  ArrowSmUp = 'ArrowSmUp',
  ArrowSmUpOutline = 'ArrowSmUpOutline',
  ArrowUp = 'ArrowUp',
  ArrowUpOutline = 'ArrowUpOutline',
  ArrowsExpand = 'ArrowsExpand',
  ArrowsExpandOutline = 'ArrowsExpandOutline',
  AtSymbol = 'AtSymbol',
  AtSymbolOutline = 'AtSymbolOutline',
  Backspace = 'Backspace',
  BackspaceOutline = 'BackspaceOutline',
  BadgeCheck = 'BadgeCheck',
  BadgeCheckOutline = 'BadgeCheckOutline',
  Ban = 'Ban',
  BanOutline = 'BanOutline',
  Beaker = 'Beaker',
  BeakerOutline = 'BeakerOutline',
  Bell = 'Bell',
  BellOutline = 'BellOutline',
  BookOpen = 'BookOpen',
  BookOpenOutline = 'BookOpenOutline',
  Bookmark = 'Bookmark',
  BookmarkAlt = 'BookmarkAlt',
  BookmarkAltOutline = 'BookmarkAltOutline',
  BookmarkOutline = 'BookmarkOutline',
  Briefcase = 'Briefcase',
  BriefcaseOutline = 'BriefcaseOutline',
  Cake = 'Cake',
  CakeOutline = 'CakeOutline',
  Calculator = 'Calculator',
  CalculatorOutline = 'CalculatorOutline',
  Calendar = 'Calendar',
  CalendarOutline = 'CalendarOutline',
  Camera = 'Camera',
  CameraOutline = 'CameraOutline',
  Cash = 'Cash',
  CashOutline = 'CashOutline',
  ChartBar = 'ChartBar',
  ChartBarOutline = 'ChartBarOutline',
  ChartPie = 'ChartPie',
  ChartPieOutline = 'ChartPieOutline',
  ChartSquareBar = 'ChartSquareBar',
  ChartSquareBarOutline = 'ChartSquareBarOutline',
  Chat = 'Chat',
  ChatAlt = 'ChatAlt',
  ChatAlt2 = 'ChatAlt2',
  ChatAlt2Outline = 'ChatAlt2Outline',
  ChatAltOutline = 'ChatAltOutline',
  ChatOutline = 'ChatOutline',
  Check = 'Check',
  CheckCircle = 'CheckCircle',
  CheckCircleOutline = 'CheckCircleOutline',
  CheckOutline = 'CheckOutline',
  ChevronDoubleDown = 'ChevronDoubleDown',
  ChevronDoubleDownOutline = 'ChevronDoubleDownOutline',
  ChevronDoubleLeft = 'ChevronDoubleLeft',
  ChevronDoubleLeftOutline = 'ChevronDoubleLeftOutline',
  ChevronDoubleRight = 'ChevronDoubleRight',
  ChevronDoubleRightOutline = 'ChevronDoubleRightOutline',
  ChevronDoubleUp = 'ChevronDoubleUp',
  ChevronDoubleUpOutline = 'ChevronDoubleUpOutline',
  ChevronDown = 'ChevronDown',
  ChevronDownOutline = 'ChevronDownOutline',
  ChevronLeft = 'ChevronLeft',
  ChevronLeftOutline = 'ChevronLeftOutline',
  ChevronRight = 'ChevronRight',
  ChevronRightOutline = 'ChevronRightOutline',
  ChevronUp = 'ChevronUp',
  ChevronUpOutline = 'ChevronUpOutline',
  Chip = 'Chip',
  ChipOutline = 'ChipOutline',
  Clipboard = 'Clipboard',
  ClipboardCheck = 'ClipboardCheck',
  ClipboardCheckOutline = 'ClipboardCheckOutline',
  ClipboardCopy = 'ClipboardCopy',
  ClipboardCopyOutline = 'ClipboardCopyOutline',
  ClipboardList = 'ClipboardList',
  ClipboardListOutline = 'ClipboardListOutline',
  ClipboardOutline = 'ClipboardOutline',
  Clock = 'Clock',
  ClockOutline = 'ClockOutline',
  Cloud = 'Cloud',
  CloudDownload = 'CloudDownload',
  CloudDownloadOutline = 'CloudDownloadOutline',
  CloudOutline = 'CloudOutline',
  CloudUpload = 'CloudUpload',
  CloudUploadOutline = 'CloudUploadOutline',
  Code = 'Code',
  CodeOutline = 'CodeOutline',
  Cog = 'Cog',
  CogOutline = 'CogOutline',
  Collection = 'Collection',
  CollectionOutline = 'CollectionOutline',
  ColorSwatch = 'ColorSwatch',
  ColorSwatchOutline = 'ColorSwatchOutline',
  CreditCard = 'CreditCard',
  CreditCardOutline = 'CreditCardOutline',
  Cube = 'Cube',
  CubeOutline = 'CubeOutline',
  CubeTransparent = 'CubeTransparent',
  CubeTransparentOutline = 'CubeTransparentOutline',
  CurrencyBangladeshi = 'CurrencyBangladeshi',
  CurrencyBangladeshiOutline = 'CurrencyBangladeshiOutline',
  CurrencyDollar = 'CurrencyDollar',
  CurrencyDollarOutline = 'CurrencyDollarOutline',
  CurrencyEuro = 'CurrencyEuro',
  CurrencyEuroOutline = 'CurrencyEuroOutline',
  CurrencyPound = 'CurrencyPound',
  CurrencyPoundOutline = 'CurrencyPoundOutline',
  CurrencyRupee = 'CurrencyRupee',
  CurrencyRupeeOutline = 'CurrencyRupeeOutline',
  CurrencyYen = 'CurrencyYen',
  CurrencyYenOutline = 'CurrencyYenOutline',
  CursorClick = 'CursorClick',
  CursorClickOutline = 'CursorClickOutline',
  Database = 'Database',
  DatabaseOutline = 'DatabaseOutline',
  DesktopComputer = 'DesktopComputer',
  DesktopComputerOutline = 'DesktopComputerOutline',
  DeviceMobile = 'DeviceMobile',
  DeviceMobileOutline = 'DeviceMobileOutline',
  DeviceTablet = 'DeviceTablet',
  DeviceTabletOutline = 'DeviceTabletOutline',
  Document = 'Document',
  DocumentAdd = 'DocumentAdd',
  DocumentAddOutline = 'DocumentAddOutline',
  DocumentDownload = 'DocumentDownload',
  DocumentDownloadOutline = 'DocumentDownloadOutline',
  DocumentDuplicate = 'DocumentDuplicate',
  DocumentDuplicateOutline = 'DocumentDuplicateOutline',
  DocumentOutline = 'DocumentOutline',
  DocumentRemove = 'DocumentRemove',
  DocumentRemoveOutline = 'DocumentRemoveOutline',
  DocumentReport = 'DocumentReport',
  DocumentReportOutline = 'DocumentReportOutline',
  DocumentSearch = 'DocumentSearch',
  DocumentSearchOutline = 'DocumentSearchOutline',
  DocumentText = 'DocumentText',
  DocumentTextOutline = 'DocumentTextOutline',
  DotsCircleHorizontal = 'DotsCircleHorizontal',
  DotsCircleHorizontalOutline = 'DotsCircleHorizontalOutline',
  DotsHorizontal = 'DotsHorizontal',
  DotsHorizontalOutline = 'DotsHorizontalOutline',
  DotsVertical = 'DotsVertical',
  DotsVerticalOutline = 'DotsVerticalOutline',
  Download = 'Download',
  DownloadOutline = 'DownloadOutline',
  Duplicate = 'Duplicate',
  DuplicateOutline = 'DuplicateOutline',
  EmojiHappy = 'EmojiHappy',
  EmojiHappyOutline = 'EmojiHappyOutline',
  EmojiSad = 'EmojiSad',
  EmojiSadOutline = 'EmojiSadOutline',
  Exclamation = 'Exclamation',
  ExclamationCircle = 'ExclamationCircle',
  ExclamationCircleOutline = 'ExclamationCircleOutline',
  ExclamationOutline = 'ExclamationOutline',
  ExternalLink = 'ExternalLink',
  ExternalLinkOutline = 'ExternalLinkOutline',
  Eye = 'Eye',
  EyeOff = 'EyeOff',
  EyeOffOutline = 'EyeOffOutline',
  EyeOutline = 'EyeOutline',
  FastForward = 'FastForward',
  FastForwardOutline = 'FastForwardOutline',
  Film = 'Film',
  FilmOutline = 'FilmOutline',
  Filter = 'Filter',
  FilterOutline = 'FilterOutline',
  FingerPrint = 'FingerPrint',
  FingerPrintOutline = 'FingerPrintOutline',
  Fire = 'Fire',
  FireOutline = 'FireOutline',
  Flag = 'Flag',
  FlagOutline = 'FlagOutline',
  Folder = 'Folder',
  FolderAdd = 'FolderAdd',
  FolderAddOutline = 'FolderAddOutline',
  FolderDownload = 'FolderDownload',
  FolderDownloadOutline = 'FolderDownloadOutline',
  FolderOpen = 'FolderOpen',
  FolderOpenOutline = 'FolderOpenOutline',
  FolderOutline = 'FolderOutline',
  FolderRemove = 'FolderRemove',
  FolderRemoveOutline = 'FolderRemoveOutline',
  Gift = 'Gift',
  GiftOutline = 'GiftOutline',
  Globe = 'Globe',
  GlobeAlt = 'GlobeAlt',
  GlobeAltOutline = 'GlobeAltOutline',
  GlobeOutline = 'GlobeOutline',
  Hand = 'Hand',
  HandOutline = 'HandOutline',
  Hashtag = 'Hashtag',
  HashtagOutline = 'HashtagOutline',
  Heart = 'Heart',
  HeartOutline = 'HeartOutline',
  Home = 'Home',
  HomeOutline = 'HomeOutline',
  Identification = 'Identification',
  IdentificationOutline = 'IdentificationOutline',
  Inbox = 'Inbox',
  InboxIn = 'InboxIn',
  InboxInOutline = 'InboxInOutline',
  InboxOutline = 'InboxOutline',
  InformationCircle = 'InformationCircle',
  InformationCircleOutline = 'InformationCircleOutline',
  Key = 'Key',
  KeyOutline = 'KeyOutline',
  Library = 'Library',
  LibraryOutline = 'LibraryOutline',
  LightBulb = 'LightBulb',
  LightBulbOutline = 'LightBulbOutline',
  LightningBolt = 'LightningBolt',
  LightningBoltOutline = 'LightningBoltOutline',
  Link = 'Link',
  LinkOutline = 'LinkOutline',
  LocationMarker = 'LocationMarker',
  LocationMarkerOutline = 'LocationMarkerOutline',
  LockClosed = 'LockClosed',
  LockClosedOutline = 'LockClosedOutline',
  LockOpen = 'LockOpen',
  LockOpenOutline = 'LockOpenOutline',
  Login = 'Login',
  LoginOutline = 'LoginOutline',
  Logout = 'Logout',
  LogoutOutline = 'LogoutOutline',
  Mail = 'Mail',
  MailOpen = 'MailOpen',
  MailOpenOutline = 'MailOpenOutline',
  MailOutline = 'MailOutline',
  Map = 'Map',
  MapOutline = 'MapOutline',
  Menu = 'Menu',
  MenuAlt1 = 'MenuAlt1',
  MenuAlt1Outline = 'MenuAlt1Outline',
  MenuAlt2 = 'MenuAlt2',
  MenuAlt2Outline = 'MenuAlt2Outline',
  MenuAlt3 = 'MenuAlt3',
  MenuAlt3Outline = 'MenuAlt3Outline',
  MenuAlt4 = 'MenuAlt4',
  MenuAlt4Outline = 'MenuAlt4Outline',
  MenuOutline = 'MenuOutline',
  Microphone = 'Microphone',
  MicrophoneOutline = 'MicrophoneOutline',
  Minus = 'Minus',
  MinusCircle = 'MinusCircle',
  MinusCircleOutline = 'MinusCircleOutline',
  MinusOutline = 'MinusOutline',
  MinusSm = 'MinusSm',
  MinusSmOutline = 'MinusSmOutline',
  Moon = 'Moon',
  MoonOutline = 'MoonOutline',
  MusicNote = 'MusicNote',
  MusicNoteOutline = 'MusicNoteOutline',
  Newspaper = 'Newspaper',
  NewspaperOutline = 'NewspaperOutline',
  OfficeBuilding = 'OfficeBuilding',
  OfficeBuildingOutline = 'OfficeBuildingOutline',
  PaperAirplane = 'PaperAirplane',
  PaperAirplaneOutline = 'PaperAirplaneOutline',
  PaperClip = 'PaperClip',
  PaperClipOutline = 'PaperClipOutline',
  Pause = 'Pause',
  PauseOutline = 'PauseOutline',
  Pencil = 'Pencil',
  PencilAlt = 'PencilAlt',
  PencilAltOutline = 'PencilAltOutline',
  PencilOutline = 'PencilOutline',
  Phone = 'Phone',
  PhoneIncoming = 'PhoneIncoming',
  PhoneIncomingOutline = 'PhoneIncomingOutline',
  PhoneMissedCall = 'PhoneMissedCall',
  PhoneMissedCallOutline = 'PhoneMissedCallOutline',
  PhoneOutgoing = 'PhoneOutgoing',
  PhoneOutgoingOutline = 'PhoneOutgoingOutline',
  PhoneOutline = 'PhoneOutline',
  Photograph = 'Photograph',
  PhotographOutline = 'PhotographOutline',
  Play = 'Play',
  PlayOutline = 'PlayOutline',
  Plus = 'Plus',
  PlusCircle = 'PlusCircle',
  PlusCircleOutline = 'PlusCircleOutline',
  PlusOutline = 'PlusOutline',
  PlusSm = 'PlusSm',
  PlusSmOutline = 'PlusSmOutline',
  PresentationChartBar = 'PresentationChartBar',
  PresentationChartBarOutline = 'PresentationChartBarOutline',
  PresentationChartLine = 'PresentationChartLine',
  PresentationChartLineOutline = 'PresentationChartLineOutline',
  Printer = 'Printer',
  PrinterOutline = 'PrinterOutline',
  Puzzle = 'Puzzle',
  PuzzleOutline = 'PuzzleOutline',
  Qrcode = 'Qrcode',
  QrcodeOutline = 'QrcodeOutline',
  QuestionMarkCircle = 'QuestionMarkCircle',
  QuestionMarkCircleOutline = 'QuestionMarkCircleOutline',
  ReceiptRefund = 'ReceiptRefund',
  ReceiptRefundOutline = 'ReceiptRefundOutline',
  ReceiptTax = 'ReceiptTax',
  ReceiptTaxOutline = 'ReceiptTaxOutline',
  Refresh = 'Refresh',
  RefreshOutline = 'RefreshOutline',
  Reply = 'Reply',
  ReplyOutline = 'ReplyOutline',
  Rewind = 'Rewind',
  RewindOutline = 'RewindOutline',
  Rss = 'Rss',
  RssOutline = 'RssOutline',
  Save = 'Save',
  SaveAs = 'SaveAs',
  SaveAsOutline = 'SaveAsOutline',
  SaveOutline = 'SaveOutline',
  Scale = 'Scale',
  ScaleOutline = 'ScaleOutline',
  Scissors = 'Scissors',
  ScissorsOutline = 'ScissorsOutline',
  Search = 'Search',
  SearchCircle = 'SearchCircle',
  SearchCircleOutline = 'SearchCircleOutline',
  SearchOutline = 'SearchOutline',
  Selector = 'Selector',
  SelectorOutline = 'SelectorOutline',
  Server = 'Server',
  ServerOutline = 'ServerOutline',
  Share = 'Share',
  ShareOutline = 'ShareOutline',
  ShieldCheck = 'ShieldCheck',
  ShieldCheckOutline = 'ShieldCheckOutline',
  ShieldExclamation = 'ShieldExclamation',
  ShieldExclamationOutline = 'ShieldExclamationOutline',
  ShoppingBag = 'ShoppingBag',
  ShoppingBagOutline = 'ShoppingBagOutline',
  ShoppingCart = 'ShoppingCart',
  ShoppingCartOutline = 'ShoppingCartOutline',
  SortAscending = 'SortAscending',
  SortAscendingOutline = 'SortAscendingOutline',
  SortDescending = 'SortDescending',
  SortDescendingOutline = 'SortDescendingOutline',
  Sparkles = 'Sparkles',
  SparklesOutline = 'SparklesOutline',
  Speakerphone = 'Speakerphone',
  SpeakerphoneOutline = 'SpeakerphoneOutline',
  Star = 'Star',
  StarOutline = 'StarOutline',
  StatusOffline = 'StatusOffline',
  StatusOfflineOutline = 'StatusOfflineOutline',
  StatusOnline = 'StatusOnline',
  StatusOnlineOutline = 'StatusOnlineOutline',
  Stop = 'Stop',
  StopOutline = 'StopOutline',
  Sun = 'Sun',
  SunOutline = 'SunOutline',
  Support = 'Support',
  SupportOutline = 'SupportOutline',
  SwitchHorizontal = 'SwitchHorizontal',
  SwitchHorizontalOutline = 'SwitchHorizontalOutline',
  SwitchVertical = 'SwitchVertical',
  SwitchVerticalOutline = 'SwitchVerticalOutline',
  Table = 'Table',
  TableOutline = 'TableOutline',
  Tag = 'Tag',
  TagOutline = 'TagOutline',
  Template = 'Template',
  TemplateOutline = 'TemplateOutline',
  Terminal = 'Terminal',
  TerminalOutline = 'TerminalOutline',
  ThumbDown = 'ThumbDown',
  ThumbDownOutline = 'ThumbDownOutline',
  ThumbUp = 'ThumbUp',
  ThumbUpOutline = 'ThumbUpOutline',
  Ticket = 'Ticket',
  TicketOutline = 'TicketOutline',
  Translate = 'Translate',
  TranslateOutline = 'TranslateOutline',
  Trash = 'Trash',
  TrashOutline = 'TrashOutline',
  TrendingDown = 'TrendingDown',
  TrendingDownOutline = 'TrendingDownOutline',
  TrendingUp = 'TrendingUp',
  TrendingUpOutline = 'TrendingUpOutline',
  Truck = 'Truck',
  TruckOutline = 'TruckOutline',
  Upload = 'Upload',
  UploadOutline = 'UploadOutline',
  User = 'User',
  UserAdd = 'UserAdd',
  UserAddOutline = 'UserAddOutline',
  UserCircle = 'UserCircle',
  UserCircleOutline = 'UserCircleOutline',
  UserGroup = 'UserGroup',
  UserGroupOutline = 'UserGroupOutline',
  UserOutline = 'UserOutline',
  UserRemove = 'UserRemove',
  UserRemoveOutline = 'UserRemoveOutline',
  Users = 'Users',
  UsersOutline = 'UsersOutline',
  Variable = 'Variable',
  VariableOutline = 'VariableOutline',
  VideoCamera = 'VideoCamera',
  VideoCameraOutline = 'VideoCameraOutline',
  ViewBoards = 'ViewBoards',
  ViewBoardsOutline = 'ViewBoardsOutline',
  ViewGrid = 'ViewGrid',
  ViewGridAdd = 'ViewGridAdd',
  ViewGridAddOutline = 'ViewGridAddOutline',
  ViewGridOutline = 'ViewGridOutline',
  ViewList = 'ViewList',
  ViewListOutline = 'ViewListOutline',
  VolumeOff = 'VolumeOff',
  VolumeOffOutline = 'VolumeOffOutline',
  VolumeUp = 'VolumeUp',
  VolumeUpOutline = 'VolumeUpOutline',
  Wifi = 'Wifi',
  WifiOutline = 'WifiOutline',
  X = 'X',
  XCircle = 'XCircle',
  XCircleOutline = 'XCircleOutline',
  XOutline = 'XOutline',
  ZoomIn = 'ZoomIn',
  ZoomInOutline = 'ZoomInOutline',
  ZoomOut = 'ZoomOut',
  ZoomOutOutline = 'ZoomOutOutline'
}

export enum Enum_Webqualityandperformancescore_Cta_Tech {
  Astro = 'ASTRO',
  Html = 'HTML',
  Javascript = 'JAVASCRIPT',
  Next = 'NEXT',
  React = 'REACT',
  Wordpress = 'WORDPRESS'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Article | Blogrequest | CaseStudy | ComponentHomepageCardWhatWeDo | ComponentHomepageWhatWeDo | ComponentHomepageWhoWeAre | ComponentMoleculesButton | ComponentPageHeadPageMeta | ComponentPageHeadScript | ComponentSharedMetaSocial | ComponentSharedSeo | Contactpage | Global | Homepage | I18NLocale | Offering | Service | Sitepage | Testimonial | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | VoyagerArticle | WebQualityAndPerformanceScore | WebsiteOrder;

export type Global = {
  __typename?: 'Global';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  headscripts?: Maybe<Array<Maybe<ComponentPageHeadScript>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type GlobalHeadscriptsArgs = {
  filters?: InputMaybe<ComponentPageHeadScriptFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GlobalEntity = {
  __typename?: 'GlobalEntity';
  attributes?: Maybe<Global>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type GlobalEntityResponse = {
  __typename?: 'GlobalEntityResponse';
  data?: Maybe<GlobalEntity>;
};

export type GlobalInput = {
  headscripts?: InputMaybe<Array<InputMaybe<ComponentPageHeadScriptInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Homepage = {
  __typename?: 'Homepage';
  about_us?: Maybe<Scalars['String']['output']>;
  case_studies_description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  googleAnalytics?: Maybe<Scalars['String']['output']>;
  headscripts?: Maybe<Array<Maybe<ComponentPageHeadScript>>>;
  offerings?: Maybe<OfferingRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  what_we_do_content?: Maybe<Scalars['String']['output']>;
  whoweare?: Maybe<ComponentHomepageWhoWeAre>;
};


export type HomepageHeadscriptsArgs = {
  filters?: InputMaybe<ComponentPageHeadScriptFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HomepageOfferingsArgs = {
  filters?: InputMaybe<OfferingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomepageEntity = {
  __typename?: 'HomepageEntity';
  attributes?: Maybe<Homepage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse';
  data?: Maybe<HomepageEntity>;
};

export type HomepageInput = {
  about_us?: InputMaybe<Scalars['String']['input']>;
  case_studies_description?: InputMaybe<Scalars['String']['input']>;
  googleAnalytics?: InputMaybe<Scalars['String']['input']>;
  headscripts?: InputMaybe<Array<InputMaybe<ComponentPageHeadScriptInput>>>;
  offerings?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  what_we_do_content?: InputMaybe<Scalars['String']['input']>;
  whoweare?: InputMaybe<ComponentHomepageWhoWeAreInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createArticle?: Maybe<ArticleEntityResponse>;
  createBlogrequest?: Maybe<BlogrequestEntityResponse>;
  createCaseStudy?: Maybe<CaseStudyEntityResponse>;
  createOffering?: Maybe<OfferingEntityResponse>;
  createService?: Maybe<ServiceEntityResponse>;
  createTestimonial?: Maybe<TestimonialEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVoyagerArticle?: Maybe<VoyagerArticleEntityResponse>;
  createWebQualityAndPerformanceScore?: Maybe<WebQualityAndPerformanceScoreEntityResponse>;
  createWebsiteOrder?: Maybe<WebsiteOrderEntityResponse>;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteBlogrequest?: Maybe<BlogrequestEntityResponse>;
  deleteCaseStudy?: Maybe<CaseStudyEntityResponse>;
  deleteContactpage?: Maybe<ContactpageEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deleteOffering?: Maybe<OfferingEntityResponse>;
  deleteService?: Maybe<ServiceEntityResponse>;
  deleteSitepage?: Maybe<SitepageEntityResponse>;
  deleteTestimonial?: Maybe<TestimonialEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVoyagerArticle?: Maybe<VoyagerArticleEntityResponse>;
  deleteWebQualityAndPerformanceScore?: Maybe<WebQualityAndPerformanceScoreEntityResponse>;
  deleteWebsiteOrder?: Maybe<WebsiteOrderEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateBlogrequest?: Maybe<BlogrequestEntityResponse>;
  updateCaseStudy?: Maybe<CaseStudyEntityResponse>;
  updateContactpage?: Maybe<ContactpageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGlobal?: Maybe<GlobalEntityResponse>;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  updateOffering?: Maybe<OfferingEntityResponse>;
  updateService?: Maybe<ServiceEntityResponse>;
  updateSitepage?: Maybe<SitepageEntityResponse>;
  updateTestimonial?: Maybe<TestimonialEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVoyagerArticle?: Maybe<VoyagerArticleEntityResponse>;
  updateWebQualityAndPerformanceScore?: Maybe<WebQualityAndPerformanceScoreEntityResponse>;
  updateWebsiteOrder?: Maybe<WebsiteOrderEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
};


export type MutationCreateBlogrequestArgs = {
  data: BlogrequestInput;
};


export type MutationCreateCaseStudyArgs = {
  data: CaseStudyInput;
};


export type MutationCreateOfferingArgs = {
  data: OfferingInput;
};


export type MutationCreateServiceArgs = {
  data: ServiceInput;
};


export type MutationCreateTestimonialArgs = {
  data: TestimonialInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateVoyagerArticleArgs = {
  data: VoyagerArticleInput;
};


export type MutationCreateWebQualityAndPerformanceScoreArgs = {
  data: WebQualityAndPerformanceScoreInput;
};


export type MutationCreateWebsiteOrderArgs = {
  data: WebsiteOrderInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBlogrequestArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCaseStudyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOfferingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteServiceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTestimonialArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVoyagerArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWebQualityAndPerformanceScoreArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWebsiteOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBlogrequestArgs = {
  data: BlogrequestInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCaseStudyArgs = {
  data: CaseStudyInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContactpageArgs = {
  data: ContactpageInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
};


export type MutationUpdateHomepageArgs = {
  data: HomepageInput;
};


export type MutationUpdateOfferingArgs = {
  data: OfferingInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSitepageArgs = {
  data: SitepageInput;
};


export type MutationUpdateTestimonialArgs = {
  data: TestimonialInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateVoyagerArticleArgs = {
  data: VoyagerArticleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWebQualityAndPerformanceScoreArgs = {
  data: WebQualityAndPerformanceScoreInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWebsiteOrderArgs = {
  data: WebsiteOrderInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Offering = {
  __typename?: 'Offering';
  button?: Maybe<ComponentMoleculesButton>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OfferingEntity = {
  __typename?: 'OfferingEntity';
  attributes?: Maybe<Offering>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type OfferingEntityResponse = {
  __typename?: 'OfferingEntityResponse';
  data?: Maybe<OfferingEntity>;
};

export type OfferingEntityResponseCollection = {
  __typename?: 'OfferingEntityResponseCollection';
  data: Array<OfferingEntity>;
  meta: ResponseCollectionMeta;
};

export type OfferingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OfferingFiltersInput>>>;
  button?: InputMaybe<ComponentMoleculesButtonFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OfferingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OfferingFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OfferingInput = {
  button?: InputMaybe<ComponentMoleculesButtonInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type OfferingRelationResponseCollection = {
  __typename?: 'OfferingRelationResponseCollection';
  data: Array<OfferingEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  blogrequest?: Maybe<BlogrequestEntityResponse>;
  blogrequests?: Maybe<BlogrequestEntityResponseCollection>;
  caseStudies?: Maybe<CaseStudyEntityResponseCollection>;
  caseStudy?: Maybe<CaseStudyEntityResponse>;
  contactpage?: Maybe<ContactpageEntityResponse>;
  global?: Maybe<GlobalEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  offering?: Maybe<OfferingEntityResponse>;
  offerings?: Maybe<OfferingEntityResponseCollection>;
  service?: Maybe<ServiceEntityResponse>;
  services?: Maybe<ServiceEntityResponseCollection>;
  sitepage?: Maybe<SitepageEntityResponse>;
  testimonial?: Maybe<TestimonialEntityResponse>;
  testimonials?: Maybe<TestimonialEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  voyagerArticle?: Maybe<VoyagerArticleEntityResponse>;
  voyagerArticles?: Maybe<VoyagerArticleEntityResponseCollection>;
  webQualityAndPerformanceScore?: Maybe<WebQualityAndPerformanceScoreEntityResponse>;
  webQualityAndPerformanceScores?: Maybe<WebQualityAndPerformanceScoreEntityResponseCollection>;
  websiteOrder?: Maybe<WebsiteOrderEntityResponse>;
  websiteOrders?: Maybe<WebsiteOrderEntityResponseCollection>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlogrequestArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBlogrequestsArgs = {
  filters?: InputMaybe<BlogrequestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCaseStudiesArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCaseStudyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContactpageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryGlobalArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomepageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOfferingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOfferingsArgs = {
  filters?: InputMaybe<OfferingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySitepageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTestimonialArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTestimonialsArgs = {
  filters?: InputMaybe<TestimonialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryVoyagerArticleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryVoyagerArticlesArgs = {
  filters?: InputMaybe<VoyagerArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWebQualityAndPerformanceScoreArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWebQualityAndPerformanceScoresArgs = {
  filters?: InputMaybe<WebQualityAndPerformanceScoreFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWebsiteOrderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWebsiteOrdersArgs = {
  filters?: InputMaybe<WebsiteOrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Service = {
  __typename?: 'Service';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  headerscripts?: Maybe<ComponentSharedSeo>;
  hero_icon_name?: Maybe<Enum_Service_Hero_Icon_Name>;
  name?: Maybe<Scalars['String']['output']>;
  providers?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ServiceProvidersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ServiceEntity = {
  __typename?: 'ServiceEntity';
  attributes?: Maybe<Service>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ServiceEntityResponse = {
  __typename?: 'ServiceEntityResponse';
  data?: Maybe<ServiceEntity>;
};

export type ServiceEntityResponseCollection = {
  __typename?: 'ServiceEntityResponseCollection';
  data: Array<ServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type ServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  headerscripts?: InputMaybe<ComponentSharedSeoFiltersInput>;
  hero_icon_name?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  providers?: InputMaybe<UsersPermissionsUserFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ServiceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  headerscripts?: InputMaybe<ComponentSharedSeoInput>;
  hero_icon_name?: InputMaybe<Enum_Service_Hero_Icon_Name>;
  name?: InputMaybe<Scalars['String']['input']>;
  providers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ServiceRelationResponseCollection = {
  __typename?: 'ServiceRelationResponseCollection';
  data: Array<ServiceEntity>;
};

export type Sitepage = {
  __typename?: 'Sitepage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  header_image_left_side?: Maybe<UploadFileEntityResponse>;
  header_image_right_side?: Maybe<UploadFileEntityResponse>;
  header_title_left_side?: Maybe<Scalars['String']['output']>;
  header_title_right_side?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  video_analysis_description?: Maybe<Scalars['String']['output']>;
  video_analysis_video?: Maybe<UploadFileEntityResponse>;
  video_analysis_video_title?: Maybe<Scalars['String']['output']>;
  video_analysis_video_url?: Maybe<Scalars['String']['output']>;
  web_quality_and_performance_scores?: Maybe<WebQualityAndPerformanceScoreRelationResponseCollection>;
};


export type SitepageWeb_Quality_And_Performance_ScoresArgs = {
  filters?: InputMaybe<WebQualityAndPerformanceScoreFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SitepageEntity = {
  __typename?: 'SitepageEntity';
  attributes?: Maybe<Sitepage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SitepageEntityResponse = {
  __typename?: 'SitepageEntityResponse';
  data?: Maybe<SitepageEntity>;
};

export type SitepageInput = {
  header_image_left_side?: InputMaybe<Scalars['ID']['input']>;
  header_image_right_side?: InputMaybe<Scalars['ID']['input']>;
  header_title_left_side?: InputMaybe<Scalars['String']['input']>;
  header_title_right_side?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video_analysis_description?: InputMaybe<Scalars['String']['input']>;
  video_analysis_video?: InputMaybe<Scalars['ID']['input']>;
  video_analysis_video_title?: InputMaybe<Scalars['String']['input']>;
  video_analysis_video_url?: InputMaybe<Scalars['String']['input']>;
  web_quality_and_performance_scores?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Testimonial = {
  __typename?: 'Testimonial';
  author?: Maybe<Scalars['String']['output']>;
  best_practices_score?: Maybe<Scalars['Float']['output']>;
  button_text?: Maybe<Scalars['String']['output']>;
  button_url?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  mobile_screenshot?: Maybe<UploadFileEntityResponse>;
  performance_score?: Maybe<Scalars['Float']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quote?: Maybe<Scalars['String']['output']>;
  quote_author?: Maybe<UsersPermissionsUserEntityResponse>;
  screenshot?: Maybe<UploadFileEntityResponse>;
  seo_score?: Maybe<Scalars['Float']['output']>;
  testimonial?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TestimonialEntity = {
  __typename?: 'TestimonialEntity';
  attributes?: Maybe<Testimonial>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TestimonialEntityResponse = {
  __typename?: 'TestimonialEntityResponse';
  data?: Maybe<TestimonialEntity>;
};

export type TestimonialEntityResponseCollection = {
  __typename?: 'TestimonialEntityResponseCollection';
  data: Array<TestimonialEntity>;
  meta: ResponseCollectionMeta;
};

export type TestimonialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TestimonialFiltersInput>>>;
  author?: InputMaybe<StringFilterInput>;
  best_practices_score?: InputMaybe<FloatFilterInput>;
  button_text?: InputMaybe<StringFilterInput>;
  button_url?: InputMaybe<StringFilterInput>;
  company?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TestimonialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TestimonialFiltersInput>>>;
  performance_score?: InputMaybe<FloatFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quote?: InputMaybe<StringFilterInput>;
  quote_author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  seo_score?: InputMaybe<FloatFilterInput>;
  testimonial?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TestimonialInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  best_practices_score?: InputMaybe<Scalars['Float']['input']>;
  button_text?: InputMaybe<Scalars['String']['input']>;
  button_url?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  mobile_screenshot?: InputMaybe<Scalars['ID']['input']>;
  performance_score?: InputMaybe<Scalars['Float']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quote?: InputMaybe<Scalars['String']['input']>;
  quote_author?: InputMaybe<Scalars['ID']['input']>;
  screenshot?: InputMaybe<Scalars['ID']['input']>;
  seo_score?: InputMaybe<Scalars['Float']['input']>;
  testimonial?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  articles?: Maybe<ArticleRelationResponseCollection>;
  bio?: Maybe<Scalars['String']['output']>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  case_studies?: Maybe<CaseStudyRelationResponseCollection>;
  case_studies_description: Scalars['String']['output'];
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  headerscripts?: Maybe<ComponentSharedSeo>;
  image?: Maybe<UploadFileEntityResponse>;
  job_title?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  meet_description: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  services?: Maybe<ServiceRelationResponseCollection>;
  showOnSite: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsUserArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserCase_StudiesArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  bio?: InputMaybe<StringFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  case_studies?: InputMaybe<CaseStudyFiltersInput>;
  case_studies_description?: InputMaybe<StringFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  headerscripts?: InputMaybe<ComponentSharedSeoFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  job_title?: InputMaybe<StringFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  meet_description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  services?: InputMaybe<ServiceFiltersInput>;
  showOnSite?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsUserInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  bio?: InputMaybe<Scalars['String']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  case_studies?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  case_studies_description?: InputMaybe<Scalars['String']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  headerscripts?: InputMaybe<ComponentSharedSeoInput>;
  image?: InputMaybe<Scalars['ID']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  meet_description?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  services?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  showOnSite?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type VoyagerArticle = {
  __typename?: 'VoyagerArticle';
  article?: Maybe<Scalars['String']['output']>;
  author?: Maybe<UsersPermissionsUserEntityResponse>;
  blog_image?: Maybe<UploadFileEntityResponse>;
  blog_type?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  minutes_read?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VoyagerArticleEntity = {
  __typename?: 'VoyagerArticleEntity';
  attributes?: Maybe<VoyagerArticle>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type VoyagerArticleEntityResponse = {
  __typename?: 'VoyagerArticleEntityResponse';
  data?: Maybe<VoyagerArticleEntity>;
};

export type VoyagerArticleEntityResponseCollection = {
  __typename?: 'VoyagerArticleEntityResponseCollection';
  data: Array<VoyagerArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type VoyagerArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VoyagerArticleFiltersInput>>>;
  article?: InputMaybe<StringFilterInput>;
  author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  blog_type?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  minutes_read?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<VoyagerArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VoyagerArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type VoyagerArticleInput = {
  article?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['ID']['input']>;
  blog_image?: InputMaybe<Scalars['ID']['input']>;
  blog_type?: InputMaybe<Scalars['String']['input']>;
  minutes_read?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type WebQualityAndPerformanceScore = {
  __typename?: 'WebQualityAndPerformanceScore';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cta_tech?: Maybe<Enum_Webqualityandperformancescore_Cta_Tech>;
  cta_text: Scalars['String']['output'];
  cta_url: Scalars['String']['output'];
  frame_0_percent?: Maybe<UploadFileEntityResponse>;
  frame_20_percent?: Maybe<UploadFileEntityResponse>;
  frame_40_percent?: Maybe<UploadFileEntityResponse>;
  frame_60_percent?: Maybe<UploadFileEntityResponse>;
  frame_80_percent?: Maybe<UploadFileEntityResponse>;
  frame_100_percent?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  web_improvements?: Maybe<Scalars['Int']['output']>;
  web_issues?: Maybe<Scalars['Int']['output']>;
  web_score?: Maybe<Scalars['Float']['output']>;
  web_success?: Maybe<Scalars['Int']['output']>;
  web_title?: Maybe<Scalars['String']['output']>;
  web_url?: Maybe<Scalars['String']['output']>;
};

export type WebQualityAndPerformanceScoreEntity = {
  __typename?: 'WebQualityAndPerformanceScoreEntity';
  attributes?: Maybe<WebQualityAndPerformanceScore>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WebQualityAndPerformanceScoreEntityResponse = {
  __typename?: 'WebQualityAndPerformanceScoreEntityResponse';
  data?: Maybe<WebQualityAndPerformanceScoreEntity>;
};

export type WebQualityAndPerformanceScoreEntityResponseCollection = {
  __typename?: 'WebQualityAndPerformanceScoreEntityResponseCollection';
  data: Array<WebQualityAndPerformanceScoreEntity>;
  meta: ResponseCollectionMeta;
};

export type WebQualityAndPerformanceScoreFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WebQualityAndPerformanceScoreFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  cta_tech?: InputMaybe<StringFilterInput>;
  cta_text?: InputMaybe<StringFilterInput>;
  cta_url?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<WebQualityAndPerformanceScoreFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WebQualityAndPerformanceScoreFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  web_improvements?: InputMaybe<IntFilterInput>;
  web_issues?: InputMaybe<IntFilterInput>;
  web_score?: InputMaybe<FloatFilterInput>;
  web_success?: InputMaybe<IntFilterInput>;
  web_title?: InputMaybe<StringFilterInput>;
  web_url?: InputMaybe<StringFilterInput>;
};

export type WebQualityAndPerformanceScoreInput = {
  cta_tech?: InputMaybe<Enum_Webqualityandperformancescore_Cta_Tech>;
  cta_text?: InputMaybe<Scalars['String']['input']>;
  cta_url?: InputMaybe<Scalars['String']['input']>;
  frame_0_percent?: InputMaybe<Scalars['ID']['input']>;
  frame_20_percent?: InputMaybe<Scalars['ID']['input']>;
  frame_40_percent?: InputMaybe<Scalars['ID']['input']>;
  frame_60_percent?: InputMaybe<Scalars['ID']['input']>;
  frame_80_percent?: InputMaybe<Scalars['ID']['input']>;
  frame_100_percent?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  web_improvements?: InputMaybe<Scalars['Int']['input']>;
  web_issues?: InputMaybe<Scalars['Int']['input']>;
  web_score?: InputMaybe<Scalars['Float']['input']>;
  web_success?: InputMaybe<Scalars['Int']['input']>;
  web_title?: InputMaybe<Scalars['String']['input']>;
  web_url?: InputMaybe<Scalars['String']['input']>;
};

export type WebQualityAndPerformanceScoreRelationResponseCollection = {
  __typename?: 'WebQualityAndPerformanceScoreRelationResponseCollection';
  data: Array<WebQualityAndPerformanceScoreEntity>;
};

export type WebsiteOrder = {
  __typename?: 'WebsiteOrder';
  address?: Maybe<Scalars['String']['output']>;
  brandTheme?: Maybe<Scalars['String']['output']>;
  budget?: Maybe<Scalars['String']['output']>;
  colorCodes?: Maybe<Scalars['String']['output']>;
  companiesPeople?: Maybe<Scalars['String']['output']>;
  competitors?: Maybe<Scalars['String']['output']>;
  contents?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customers?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  existingWebsite?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Scalars['JSON']['output']>;
  font?: Maybe<Scalars['String']['output']>;
  fontDefault?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Scalars['String']['output']>;
  keys?: Maybe<Scalars['JSON']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  mission?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  otherFeature?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  problems?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Scalars['String']['output']>;
  timeline?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type WebsiteOrderEntity = {
  __typename?: 'WebsiteOrderEntity';
  attributes?: Maybe<WebsiteOrder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WebsiteOrderEntityResponse = {
  __typename?: 'WebsiteOrderEntityResponse';
  data?: Maybe<WebsiteOrderEntity>;
};

export type WebsiteOrderEntityResponseCollection = {
  __typename?: 'WebsiteOrderEntityResponseCollection';
  data: Array<WebsiteOrderEntity>;
  meta: ResponseCollectionMeta;
};

export type WebsiteOrderFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<WebsiteOrderFiltersInput>>>;
  brandTheme?: InputMaybe<StringFilterInput>;
  budget?: InputMaybe<StringFilterInput>;
  colorCodes?: InputMaybe<StringFilterInput>;
  companiesPeople?: InputMaybe<StringFilterInput>;
  competitors?: InputMaybe<StringFilterInput>;
  contents?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customers?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  existingWebsite?: InputMaybe<StringFilterInput>;
  features?: InputMaybe<JsonFilterInput>;
  font?: InputMaybe<StringFilterInput>;
  fontDefault?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  images?: InputMaybe<StringFilterInput>;
  keys?: InputMaybe<JsonFilterInput>;
  logo?: InputMaybe<StringFilterInput>;
  mission?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WebsiteOrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WebsiteOrderFiltersInput>>>;
  otherFeature?: InputMaybe<StringFilterInput>;
  phoneNumber?: InputMaybe<StringFilterInput>;
  problems?: InputMaybe<StringFilterInput>;
  products?: InputMaybe<StringFilterInput>;
  timeline?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  website?: InputMaybe<StringFilterInput>;
};

export type WebsiteOrderInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  brandTheme?: InputMaybe<Scalars['String']['input']>;
  budget?: InputMaybe<Scalars['String']['input']>;
  colorCodes?: InputMaybe<Scalars['String']['input']>;
  companiesPeople?: InputMaybe<Scalars['String']['input']>;
  competitors?: InputMaybe<Scalars['String']['input']>;
  contents?: InputMaybe<Scalars['JSON']['input']>;
  customers?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  existingWebsite?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Scalars['JSON']['input']>;
  font?: InputMaybe<Scalars['String']['input']>;
  fontDefault?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['String']['input']>;
  keys?: InputMaybe<Scalars['JSON']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  mission?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  otherFeature?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  problems?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Scalars['String']['input']>;
  timeline?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};
