import { App } from 'vue';
import LText from './components/LText/index';
import LImage from './components/LImage/index';

const components = [
    LText,
    LImage,
];


export default {
    install: (app: App) => {
        components.forEach(component => component.install(app))
    }
}

export {
    LText,
    LImage,
}