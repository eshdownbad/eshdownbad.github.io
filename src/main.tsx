import { render } from 'preact';
import { App } from './app';
import './index.pcss';
import 'animate.css';

render(<App />, document.getElementById('app') as HTMLElement);
