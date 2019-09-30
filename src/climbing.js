var app = new Vue({
    el: '#app',
    data:{
        climber: {name: 'Loading...'},
        tickList: [{'name': 'Loading....'}],
    },
    methods:{ },

    created(){
        let bigTmp = [{}];
        fetch('https://www.mountainproject.com/data/get-user?email=stwhop@gmail.com&key=200196715-97b9b2bc4fd25b11ebc4a5cf9d9fba13')
            .then(user => user.json())
            .then(user=> {
                this.climber['name'] = user.name;
                this.climber['picture'] = user.avatar;
                this.climber['home'] = user.location;
                this.climber['sport'] = user.styles.Sport.lead;
                this.climber['trad'] = user.styles.Trad.lead;
                this.climber['profile'] = user.url;
            });
        fetch('https://www.mountainproject.com/data/get-ticks?email=stwhop@gmail.com&key=200196715-97b9b2bc4fd25b11ebc4a5cf9d9fba13')
            .then(ticks => ticks.json())
            .then(ticks => {
                for(let i = 0; bigTmp.length < 6; i++) {
                    let tmp = {};
                    tmp['data'] = ticks.ticks[i].date;
                    tmp['notes'] = ticks.ticks[i].notes;
                    tmp['pitches'] = ticks.ticks[i].pitches;
                    tmp['id'] = ticks.ticks[i].routeId;
                    tmp['leadStyle'] = ticks.ticks[i].leadStyle;

                    if (tmp.leadStyle == 'Redpoint' || tmp.leadStyle == 'Flash' || tmp.leadStyle == 'Onsite') {
                        bigTmp.push(tmp)
                    }
                }
                bigTmp.shift();
            })
            .then(ticks => {
                for(let i = 0; i < bigTmp.length; i++) {  // the 'empty array' actually has an initial element so to get 6 entries offset
                    fetch('https://www.mountainproject.com/data/get-routes?routeIds=' + bigTmp[i].id +
                        '&key=200196715-97b9b2bc4fd25b11ebc4a5cf9d9fba13')
                        .then(route => route.json())
                        .then(route => {
                            bigTmp[i]['name'] = route.routes[0].name;
                            bigTmp[i]['img'] = route.routes[0].imgSmall;
                            bigTmp[i]['grade'] = route.routes[0].rating;
                            bigTmp[i]['type'] = route.routes[0].type;
                            bigTmp[i]['stars'] = route.routes[0].stars;
                            bigTmp[i]['location'] = route.routes[0].location;
                        })
                }
                let newTmp = [{}];
                for(let i = 0; i < bigTmp.length; i++) {
                    newTmp.push(bigTmp[i]);
                }
                newTmp.shift();
                this.tickList = newTmp;
                console.log(this.tickList);
            });
    },

});


