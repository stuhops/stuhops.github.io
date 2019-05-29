var welcome = new Vue({
    el: '#theVue',
    data: {
        jumboStu: '',
    },
    methods: {
        fadein: function(el) {
            let element = document.getElementById(el);
            let op_inv = 1;
            let op = 0;
            var timer = setInterval(function () {
               if(op > .9) {
                   clearInterval(timer);
                   op = 1;
               }
               element.opacity = op;
               element.style.filter = 'alpha(opacity=' + op * 100 + ')';
               op_inv -= op_inv * 0.1;
               op = 1 - op_inv;
            }, 50);

        }
    },
    created(){
        // fadein(this.jumboStu);
        this.jumboStu.setAttribute('opacity', '0');
        this.jumboStu = 'Stuart Hopkins';
    },

});