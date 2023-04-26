import { defineComponent, getCurrentInstance, h, inject, ref } from 'vue';
const UPDATE_VALUE_EVENT = 'update:modelValue';
const MODEL_VALUE = 'modelValue';
const ROUTER_LINK_VALUE = 'routerLink';
const NAV_MANAGER = 'navManager';
const ROUTER_PROP_PREFIX = 'router';
const ARIA_PROP_PREFIX = 'aria';
const EMPTY_PROP = Symbol();
const DEFAULT_EMPTY_PROP = { default: EMPTY_PROP };
const getComponentClasses = (classes) => {
    return (classes === null || classes === void 0 ? void 0 : classes.split(' ')) || [];
};
const getElementClasses = (ref, componentClasses, defaultClasses = []) => {
    var _a;
    return [...Array.from(((_a = ref.value) === null || _a === void 0 ? void 0 : _a.classList) || []), ...defaultClasses].filter((c, i, self) => !componentClasses.has(c) && self.indexOf(c) === i);
};
export const defineContainer = (name, defineCustomElement, componentProps = [], modelProp, modelUpdateEvent, externalModelUpdateEvent) => {
    if (defineCustomElement !== undefined) {
        defineCustomElement();
    }
    const Container = defineComponent((props, { attrs, slots, emit }) => {
        var _a;
        let modelPropValue = props[modelProp];
        const containerRef = ref();
        const classes = new Set(getComponentClasses(attrs.class));
        const onVnodeBeforeMount = (vnode) => {
            if (vnode.el) {
                const eventsNames = Array.isArray(modelUpdateEvent) ? modelUpdateEvent : [modelUpdateEvent];
                eventsNames.forEach((eventName) => {
                    vnode.el.addEventListener(eventName.toLowerCase(), (e) => {
                        modelPropValue = (e === null || e === void 0 ? void 0 : e.target)[modelProp];
                        emit(UPDATE_VALUE_EVENT, modelPropValue);
                        if (externalModelUpdateEvent) {
                            emit(externalModelUpdateEvent, e);
                        }
                    });
                });
            }
        };
        const currentInstance = getCurrentInstance();
        const hasRouter = (_a = currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.appContext) === null || _a === void 0 ? void 0 : _a.provides[NAV_MANAGER];
        const navManager = hasRouter ? inject(NAV_MANAGER) : undefined;
        const handleRouterLink = (ev) => {
            const { routerLink } = props;
            if (routerLink === EMPTY_PROP)
                return;
            if (navManager !== undefined) {
                let navigationPayload = { event: ev };
                for (const key in props) {
                    const value = props[key];
                    if (props.hasOwnProperty(key) && key.startsWith(ROUTER_PROP_PREFIX) && value !== EMPTY_PROP) {
                        navigationPayload[key] = value;
                    }
                }
                navManager.navigate(navigationPayload);
            }
            else {
                console.warn('Tried to navigate, but no router was found. Make sure you have mounted Vue Router.');
            }
        };
        return () => {
            modelPropValue = props[modelProp];
            getComponentClasses(attrs.class).forEach((value) => {
                classes.add(value);
            });
            const oldClick = props.onClick;
            const handleClick = (ev) => {
                if (oldClick !== undefined) {
                    oldClick(ev);
                }
                if (!ev.defaultPrevented) {
                    handleRouterLink(ev);
                }
            };
            let propsToAdd = {
                ref: containerRef,
                class: getElementClasses(containerRef, classes),
                onClick: handleClick,
                onVnodeBeforeMount: modelUpdateEvent ? onVnodeBeforeMount : undefined,
            };
            for (const key in props) {
                const value = props[key];
                if ((props.hasOwnProperty(key) && value !== EMPTY_PROP) || key.startsWith(ARIA_PROP_PREFIX)) {
                    propsToAdd[key] = value;
                }
            }
            if (modelProp) {
                if (props[MODEL_VALUE] !== EMPTY_PROP) {
                    propsToAdd = Object.assign(Object.assign({}, propsToAdd), { [modelProp]: props[MODEL_VALUE] });
                }
                else if (modelPropValue !== EMPTY_PROP) {
                    propsToAdd = Object.assign(Object.assign({}, propsToAdd), { [modelProp]: modelPropValue });
                }
            }
            return h(name, propsToAdd, slots.default && slots.default());
        };
    });
    Container.displayName = name;
    Container.props = {
        [ROUTER_LINK_VALUE]: DEFAULT_EMPTY_PROP,
    };
    componentProps.forEach((componentProp) => {
        Container.props[componentProp] = DEFAULT_EMPTY_PROP;
    });
    if (modelProp) {
        Container.props[MODEL_VALUE] = DEFAULT_EMPTY_PROP;
        Container.emits = [UPDATE_VALUE_EVENT, externalModelUpdateEvent];
    }
    return Container;
};
//# sourceMappingURL=utils.js.map