import * as components from './components';

const VuePlugin = {
    install: function (Vue) {
        if (VuePlugin.installed) return;
        VuePlugin.installed = true;
        for (var key in components) {
            Vue.component(key, components[key])
        }
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin);
}

export default VuePlugin;