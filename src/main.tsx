import { render } from 'preact';
import { App } from './app';
import './index.pcss';

render(<App />, document.getElementById('app') as HTMLElement);
