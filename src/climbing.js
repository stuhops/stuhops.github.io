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
                this.climber['name'] = user.name;
                this.climber['picture'] = user.avatar;
                this.climber['began'] = user.memberSince;
                this.climber['home'] = user.location;
                this.climber['sport'] = user.styles.Sport.lead;
                this.climber['trad'] = user.styles.Trad.lead;
                this.climber['profile'] = user.url;
            });
        fetch('https://www.mountainproject.com/data/get-ticks?email=stwhop@gmail.com&key=200196715-97b9b2bc4fd25b11ebc4a5cf9d9fba13')
            .then(ticks => ticks.json())
            .then(ticks => {
                console.log(ticks);
                for(let i = 0; this.tickList.length <= 6; i++) {
                    let tmp = {};
                    tmp['data'] = ticks.ticks[i].date;
                    tmp['notes'] = ticks.ticks[i].notes;
                    tmp['pitches'] = ticks.ticks[i].pitches;
                    tmp['id'] = ticks.ticks[i].routeId;
                    tmp['leadStyle'] = ticks.ticks[i].leadStyle;

                    if (tmp.leadStyle == 'Redpoint' || tmp.leadStyle == 'Flash' || tmp.leadStyle == 'Onsite') {
                        this.tickList.push(tmp)
                    }
                }
                console.log('ticks')
            })
            .then(ticks => {
                console.log('routes');
                for(let i = 1; i < this.tickList.length; i++) {  // the 'empty array' actually has an initial element so to get 6 entries offset
                    fetch('https://www.mountainproject.com/data/get-routes?routeIds=' + this.tickList[i].id +
                        '&key=200196715-97b9b2bc4fd25b11ebc4a5cf9d9fba13')
                        .then(route => route.json())
                        .then(route => {
                            console.log(route);
                            // this.tickList['name'] = routes[0].name;
                            // this.tickList['type'] = routes[0].type;
                            // this.tickList['stars'] = routes[0].stars;
                            // this.tickList['location'] = routes[0].location;
                        })
                }

            });
    },

});