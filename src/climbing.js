var climbing = new Vue({
    el: 'app',
    data:{
        climber: {},
        tickList: [{}],
    },
    methods:{ },

    created(){
        fetch('https://www.mountainproject.com/data/get-user?email=stwhop@gmail.com&key=200196715-97b9b2bc4fd25b11ebc4a5cf9d9fba13')
            .then(user => user.json())
            .then(user=> {
                console.log(user);
                this.climber['name'] = user.name;
                this.climber['picture'] = user.avatar;
                this.climber['began'] = user.memberSince;
                this.climber['home'] = user.location;
                this.climber['sport'] = user.styles.Sport.lead;
                this.climber['trad'] = user.styles.Trad.lead;
                this.climber['profile'] = user.url;
                console.log(this.climber);
            });
        fetch('https://www.mountainproject.com/data/get-ticks?email=stwhop@gmail.com&key=200196715-97b9b2bc4fd25b11ebc4a5cf9d9fba13')
            .then(ticks => ticks.json())
            .then(ticks => {
                console.log(ticks);
            });
    }

});