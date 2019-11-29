import Vue from "vue";

Vue.directive('meu-transform', {
    bind(el, binding, vnode) {
        let current = 0;
        el.addEventListener('dblclick', function () {
            let increment = 90;
            let animate   = false;

            /* if (binding.value) {
                increment = binding.value.increment
                    ? binding.value.increment
                    : increment;

                animate = binding.value.animate
                    ? binding.value.animate
                    : animate;
            } */

            if (binding.modifiers) {
                animate = binding.modifiers.animate
                    ? binding.modifiers.animate
                    : animate;
            }

            current+=increment;

            if (animate) {
                el.style.transition = 'transform 0.5s';
            }

            el.style.transform  = `rotate(${current}deg)`;
        })
    }
});