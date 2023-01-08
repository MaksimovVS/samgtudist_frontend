import { ComponentType } from 'react';

export interface LocationStates {
  '/'?: object;
  '/#'?: object;
  '/author'?: object;
  '/search'?: object;
  '/about'?: object;
  '/contact'?: object;
  '/login'?: object;
  '/signup'?: object;
  '/page404'?: object;
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  component: ComponentType<Object>;
}
